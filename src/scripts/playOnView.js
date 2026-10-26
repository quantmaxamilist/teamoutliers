import { gsap } from 'gsap';

// Shared driver for the strand signature animations: plays once when ≥50% on screen, pauses off
// screen, shows Replay at the end, redraws the final state on resize, and skips motion when reduced.
export function playOnView(root, { duration, draw, resize, onEnd, onStart }) {
  const replay = root.querySelector('[data-replay]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const state = { t: 0 };
  let tween = null;
  const render = () => draw(state.t);
  const finish = () => { root.dataset.state = 'done'; onEnd?.(); if (replay) replay.hidden = false; };
  const play = () => {
    tween?.kill();
    if (replay) replay.hidden = true;
    root.dataset.state = 'run';
    onStart?.();
    state.t = 0;
    tween = gsap.to(state, { t: duration, duration, ease: 'none', onUpdate: render, onComplete: finish });
  };
  resize(); render();
  let raf = 0;
  addEventListener('resize', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { resize(); render(); onEnd && root.dataset.state === 'done' && onEnd(); }); });
  if (reduced) { state.t = duration; render(); finish(); return; }
  let started = false;
  new IntersectionObserver(([e]) => {
    if (e.intersectionRatio >= 0.5 && !started) { started = true; play(); }
    if (tween) e.isIntersecting ? tween.isActive() || (tween.progress() < 1 && tween.resume()) : tween.pause();
  }, { threshold: [0, 0.5] }).observe(root);
  replay?.addEventListener('click', play);
}
