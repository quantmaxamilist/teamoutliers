import { gsap } from 'gsap';

const VERT = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

// Two photos, a slash-shaped wipe between them (14°, like the stroke through the O),
// chromatic split + push along the seam, a coral seam line, film grain, and the O-mark window.
const FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uT0, uT1, uMark, uHole;
uniform vec2 uR0, uR1, uRes, uMouse;
uniform float uF0, uF1;
uniform float uP, uTime, uScale, uZoom, uMarkA, uReveal;
varying vec2 vUv;

vec2 cover(vec2 uv, vec2 img, float fx) {
  float sa = uRes.x / uRes.y, ia = img.x / img.y;
  vec2 s = sa > ia ? vec2(1.0, ia / sa) : vec2(sa / ia, 1.0);
  return (uv - 0.5) * s + vec2(clamp(fx, s.x * 0.5, 1.0 - s.x * 0.5), 0.5);
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
vec3 rgb(sampler2D t, vec2 uv, vec2 r, float fx, float ca) {
  return vec3(texture2D(t, cover(uv + vec2(ca, 0.0), r, fx)).r, texture2D(t, cover(uv, r, fx)).g, texture2D(t, cover(uv - vec2(ca, 0.0), r, fx)).b);
}

void main() {
  vec2 uv = vUv;
  vec2 base = (uv - 0.5) * 0.95 / uZoom + 0.5 + (uMouse - 0.5) * vec2(-0.014, 0.01);

  float t = 0.2493;
  float s = (uv.x * uRes.x + (1.0 - uv.y) * uRes.y * t) / (uRes.x + uRes.y * t);
  float w = 0.07;
  float f = uP * (1.0 + 2.0 * w) - w;
  float edge = s - f;
  float m = 1.0 - smoothstep(-w, 0.0, edge);
  float moving = step(0.001, uP) * step(uP, 0.999);
  float near = exp(-abs(edge + w * 0.5) * 18.0) * moving;

  vec2 uv0 = base + vec2(uP * 0.06 + near * 0.025, 0.0);
  vec2 uv1 = base - vec2((1.0 - uP) * 0.06 + near * 0.025, 0.0);
  float ca = near * 0.012;
  vec3 col = mix(rgb(uT0, uv0, uR0, uF0, ca), rgb(uT1, uv1, uR1, uF1, ca), m);

  float seam = (1.0 - smoothstep(0.0, 0.0045, abs(edge + w * 0.5))) * moving;
  col = mix(col, vec3(1.0, 0.38, 0.341), seam);

  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(l), col, 0.86);
  col = (col - 0.5) * 1.06 + 0.5;
  col += (hash(uv * uRes + fract(uTime) * 91.0) - 0.5) * 0.045;

  // Intro: the photo shows through the hole of the O, which flies past the camera
  float a = uRes.x / uRes.y;
  vec2 muv = (uv - 0.5) * vec2(a, 1.0) / uScale + 0.5;
  float inside = step(0.0, muv.x) * step(muv.x, 1.0) * step(0.0, muv.y) * step(muv.y, 1.0);
  float hole = texture2D(uHole, muv).a * inside;
  float ring = texture2D(uMark, muv).a * inside * uMarkA * (1.0 - smoothstep(1.4, 4.0, uScale));
  col *= max(hole, uReveal);
  col = mix(col, vec3(1.0), ring * (1.0 - uReveal));

  gl_FragColor = vec4(col, 1.0);
}
`;

const CYCLE = 5;

export async function initStage(root) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const phone = matchMedia('(max-width: 760px)').matches;
  const rows = [...root.querySelectorAll('[data-stage-row]')];
  const posters = [...root.querySelectorAll('[data-stage-poster]')];
  const late = [...root.querySelectorAll('[data-stage-late]')];
  const replay = root.querySelector('[data-stage-replay]');
  const canvas = root.querySelector('[data-stage-gl]');
  const srcs = posters.map((p) => p.querySelector('img')?.currentSrc || p.querySelector('img')?.src);
  const fxs = posters.map((p) => parseFloat(p.dataset.fx) || 0.5);

  let active = 0;
  let gl = null; // { swap(i) } once WebGL is ready
  let cycleTween = null;
  let hovering = false;
  let visible = true;

  const setActive = (i) => {
    if (i === active) return;
    rows.forEach((r, k) => r.classList.toggle('is-on', k === i));
    posters.forEach((p, k) => p.classList.toggle('is-on', k === i));
    gl?.swap(active, i);
    active = i;
  };

  // Auto-advance: a coral bar fills under the active strand, then the next one cuts in
  const startCycle = () => {
    cycleTween?.kill();
    rows.forEach((r) => gsap.set(r.querySelector('.st__bar span'), { scaleX: 0 }));
    if (reduced || hovering) return;
    const bar = rows[active].querySelector('.st__bar span');
    cycleTween = gsap.to(bar, { scaleX: 1, duration: CYCLE, ease: 'none', onComplete: () => { setActive((active + 1) % rows.length); startCycle(); } });
    if (!visible) cycleTween.pause();
  };

  rows.forEach((r, i) => {
    r.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'mouse') return; hovering = true; setActive(i); startCycle(); });
    r.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'mouse') return; hovering = false; startCycle(); });
    r.querySelector('a')?.addEventListener('focus', () => { setActive(i); });
  });

  const reveal = () => {
    root.dataset.state = 'done';
    gsap.fromTo(late, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.09 });
  };

  if (reduced) { root.dataset.state = 'done'; return; }

  // WebGL stage
  try {
    if (!canvas || !window.WebGLRenderingContext) throw new Error('no webgl');
    const THREE = await import('three');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.setPixelRatio(Math.min(devicePixelRatio, phone ? 1.25 : 1.5));
    const loader = new THREE.TextureLoader();
    const load = (url) => new Promise((res, rej) => loader.load(url, (t) => { t.colorSpace = THREE.NoColorSpace; t.minFilter = THREE.LinearFilter; t.generateMipmaps = false; res(t); }, undefined, rej));
    const [texs, mark, hole] = await Promise.all([Promise.all(srcs.map(load)), load('/img/outliers-mark-white.png'), load('/img/outliers-mark-hole.png')]);
    [mark, hole].forEach((t) => { t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; });
    const size = (t) => new THREE.Vector2(t.image.width, t.image.height);

    const u = {
      uT0: { value: texs[0] }, uT1: { value: texs[0] }, uMark: { value: mark }, uHole: { value: hole },
      uR0: { value: size(texs[0]) }, uR1: { value: size(texs[0]) }, uF0: { value: fxs[0] }, uF1: { value: fxs[0] },
      uRes: { value: new THREE.Vector2(1, 1) }, uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uP: { value: 0 }, uTime: { value: 0 }, uScale: { value: 0.42 }, uZoom: { value: 1 }, uMarkA: { value: 0 }, uReveal: { value: 0 },
    };
    const scene = new THREE.Scene();
    const cam = new THREE.Camera();
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: u }));
    scene.add(mesh);

    const resize = () => {
      const w = root.clientWidth, h = root.clientHeight;
      renderer.setSize(w, h, false);
      u.uRes.value.set(w, h);
    };
    resize();
    addEventListener('resize', resize);
    let shaderFailed = false;
    renderer.debug.onShaderError = () => { shaderFailed = true; };
    renderer.compile(scene, cam);
    renderer.render(scene, cam);
    if (shaderFailed) { renderer.dispose(); throw new Error('shader'); }

    const mouse = { x: 0.5, y: 0.5 };
    root.addEventListener('pointermove', (e) => { const r = root.getBoundingClientRect(); mouse.x = (e.clientX - r.left) / r.width; mouse.y = (e.clientY - r.top) / r.height; }, { passive: true });
    const tick = (time) => {
      u.uTime.value = time;
      u.uMouse.value.x += (mouse.x - u.uMouse.value.x) * 0.06;
      u.uMouse.value.y += (mouse.y - u.uMouse.value.y) * 0.06;
      renderer.render(scene, cam);
    };

    let swapTween = null;
    gl = {
      swap(from, to) {
        swapTween?.progress(1);
        u.uT0.value = texs[from]; u.uR0.value = size(texs[from]); u.uF0.value = fxs[from];
        u.uT1.value = texs[to]; u.uR1.value = size(texs[to]); u.uF1.value = fxs[to];
        u.uP.value = 0;
        swapTween = gsap.to(u.uP, { value: 1, duration: 1.15, ease: 'power2.inOut', onComplete: () => { u.uT0.value = texs[to]; u.uR0.value = size(texs[to]); u.uF0.value = fxs[to]; u.uP.value = 0; } });
      },
    };

    root.classList.add('has-gl');
    let running = false;
    const run = (on) => { if (on === running) return; running = on; on ? gsap.ticker.add(tick) : gsap.ticker.remove(tick); };

    // Intro: the O fades in as a window, then flies past the camera into the full stage
    let intro = null;
    const playIntro = () => {
      intro?.kill();
      if (replay) replay.hidden = true;
      cycleTween?.kill();
      if (active !== 0) { rows.forEach((r, k) => r.classList.toggle('is-on', k === 0)); posters.forEach((p, k) => p.classList.toggle('is-on', k === 0)); active = 0; }
      u.uT0.value = texs[0]; u.uR0.value = size(texs[0]); u.uF0.value = fxs[0]; u.uP.value = 0;
      root.dataset.state = 'pre';
      intro = gsap.timeline({ onComplete: () => { reveal(); startCycle(); if (replay) setTimeout(() => (replay.hidden = false), 700); } })
        .set(u.uReveal, { value: 0 })
        .fromTo(u.uMarkA, { value: 0 }, { value: 1, duration: 0.45, ease: 'power2.out' }, 0)
        .fromTo(u.uScale, { value: 0.44 }, { value: 0.52, duration: 0.75, ease: 'power2.out' }, 0)
        .fromTo(u.uZoom, { value: 1.4 }, { value: 1, duration: 1.5, ease: 'power3.inOut' }, 0.3)
        .to(u.uScale, { value: 9, duration: 1.05, ease: 'expo.in' }, 0.7)
        .set(u.uReveal, { value: 1 }, 1.75);
    };
    const skip = () => { if (intro?.isActive()) intro.progress(1); };
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((ev) => addEventListener(ev, skip, { passive: true }));
    replay?.addEventListener('click', (e) => { e.stopPropagation(); setTimeout(playIntro, 0); });

    let started = false;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      run(visible);
      if (visible) cycleTween?.resume(); else cycleTween?.pause();
      if (e.intersectionRatio >= 0.5 && !started) {
        started = true;
        if (root.dataset.state === 'pre') playIntro();
        else { u.uMarkA.value = 1; u.uReveal.value = 1; u.uScale.value = 9; startCycle(); }
      }
    }, { threshold: [0, 0.5] });
    io.observe(root);

    addEventListener('pagehide', () => { run(false); io.disconnect(); texs.forEach((t) => t.dispose()); mark.dispose(); hole.dispose(); mesh.geometry.dispose(); mesh.material.dispose(); renderer.dispose(); }, { once: true });
  } catch (err) {
    // No WebGL: poster images crossfade instead
    gl = null;
    root.classList.remove('has-gl');
    reveal();
    startCycle();
  }
}
