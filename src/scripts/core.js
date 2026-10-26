import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* Smooth scroll */
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
if (import.meta.env.DEV) window.__to = { lenis, ScrollTrigger };
window.__lenis = lenis;

/* Headlines: words rise out of a mask when they enter */
const splits = reduced ? [] : [...document.querySelectorAll('main .h-1, main .h-2, main [data-split]')].filter((el) => !el.closest('[data-stage]'));
splits.forEach((el) => {
  el.removeAttribute('data-reveal');
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(' '); return; }
          const w = document.createElement('span'); w.className = 'sw';
          const i = document.createElement('span'); i.className = 'sw__i'; i.textContent = part;
          w.append(i); frag.append(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(el);
  gsap.set(el.querySelectorAll('.sw__i'), { yPercent: 105 });
  el.classList.add('is-split');
});

/* Photos: a coral slash wipes off as they enter, then they drift slightly with scroll */
const photos = reduced ? [] : [...document.querySelectorAll('main figure.photo, main .photo[data-wipe]')].filter((el) => !el.closest('[data-stage]'));
photos.forEach((el) => {
  el.removeAttribute('data-reveal');
  const wipe = document.createElement('span'); wipe.className = 'wipe'; el.append(wipe);
  el.classList.add('is-wiped');
});

/* Reveals: transform + opacity only, with a sweep so fast scrolls never leave content hidden */
const reveals = [...document.querySelectorAll('[data-reveal]')];
if (reduced) reveals.forEach((el) => el.classList.add('is-in'));
else {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
  const sweep = () => {
    const vh = innerHeight;
    reveals.forEach((el) => { if (!el.classList.contains('is-in') && el.getBoundingClientRect().top < vh * 0.92 - 1 && el.getBoundingClientRect().bottom < vh * 0.2) el.classList.add('is-in'); });
  };
  addEventListener('scroll', sweep, { passive: true });
}

const pending = new Map();
const enter = (els, fn) => {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting && pending.has(e.target)) { pending.delete(e.target); fn(e.target); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -10% 0px' });
  els.forEach((el) => { pending.set(el, fn); io.observe(el); });
};
// Anything skipped past (fast scroll, anchor jump) finishes straight away
addEventListener('scroll', () => {
  pending.forEach((fn, el) => {
    if (el.getBoundingClientRect().bottom < 0) {
      pending.delete(el);
      el.querySelectorAll('.sw__i').forEach((w) => gsap.set(w, { yPercent: 0 }));
      const wipe = el.querySelector('.wipe'); if (wipe) gsap.set(wipe, { xPercent: 105 });
    }
  });
}, { passive: true });
enter(splits, (el) => gsap.to(el.querySelectorAll('.sw__i'), { yPercent: 0, duration: 0.8, ease: 'expo.out', stagger: 0.045 }));
enter(photos, (el) => {
  const img = el.querySelector('img');
  gsap.timeline()
    .to(el.querySelector('.wipe'), { xPercent: 105, duration: 0.85, ease: 'expo.inOut' }, 0)
    .fromTo(img, { scale: 1.25 }, { scale: 1.1, duration: 1.4, ease: 'expo.out' }, 0.2);
});
photos.forEach((el) => {
  const img = el.querySelector('img');
  if (img) gsap.fromTo(img, { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
});

/* Scroll-velocity marquees */
document.querySelectorAll('[data-marquee]').forEach((mq) => {
  const track = mq.querySelector('[data-marquee-track]');
  if (!track || reduced) return;
  let x = 0, skew = 0, vis = false;
  new IntersectionObserver(([e]) => (vis = e.isIntersecting)).observe(mq);
  const dir = Number(mq.dataset.marquee) || -1;
  gsap.ticker.add((t, dt) => {
    if (!vis) return;
    const v = lenis ? lenis.velocity : 0;
    const half = track.scrollWidth / 2;
    x += dir * (0.06 + Math.min(Math.abs(v) * 0.04, 1.6)) * dt;
    if (x <= -half) x += half;
    if (x > 0) x -= half;
    skew += (Math.max(-10, Math.min(10, v * 0.6)) - skew) * 0.12;
    track.style.transform = `translate3d(${x}px,0,0) skewX(${-skew}deg)`;
  });
});

/* Magnetic buttons */
if (fine && !reduced) {
  document.querySelectorAll('.btn, [data-magnetic]').forEach((b) => {
    const qx = gsap.quickTo(b, 'x', { duration: 0.5, ease: 'power3' });
    const qy = gsap.quickTo(b, 'y', { duration: 0.5, ease: 'power3' });
    b.addEventListener('pointermove', (e) => { const r = b.getBoundingClientRect(); qx((e.clientX - r.left - r.width / 2) * 0.25); qy((e.clientY - r.top - r.height / 2) * 0.35); });
    b.addEventListener('pointerleave', () => { qx(0); qy(0); });
  });
}

/* Scroll progress */
const prog = document.querySelector('.prog span');
if (prog) {
  const upd = () => { const h = document.documentElement.scrollHeight - innerHeight; prog.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; };
  addEventListener('scroll', upd, { passive: true }); upd();
}

/* Header hides on scroll down, shows on scroll up */
const header = document.querySelector('[data-header]');
let lastY = scrollY;
addEventListener('scroll', () => {
  const y = scrollY;
  if (header) header.classList.toggle('is-hidden', y > lastY && y > 240 && !document.body.classList.contains('menu-open'));
  lastY = y;
}, { passive: true });

/* Mobile menu */
const menu = document.querySelector('[data-menu]');
const burger = document.querySelector('[data-menu-open]');
if (menu && burger) {
  const set = (open) => {
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
    if (lenis) open ? lenis.stop() : lenis.start();
  };
  burger.addEventListener('click', () => set(menu.hidden));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) set(false); });
}

/* Page transitions: coral slash wipes across (≤0.35s out, 0.4s in) */
const panel = document.querySelector('.pt');
if (panel && !reduced) {
  const fromNav = sessionStorage.getItem('to-pt') === '1';
  sessionStorage.removeItem('to-pt');
  gsap.set(panel, { skewX: -14, xPercent: fromNav ? 0 : -101, visibility: 'visible' });
  if (fromNav) gsap.to(panel, { xPercent: 101, duration: 0.4, ease: 'power3.inOut', delay: 0.02 });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const url = new URL(a.href, location.href);
    if (a.target === '_blank' || url.origin !== location.origin || a.hasAttribute('download')) return;
    if (url.pathname === location.pathname && url.hash) return;
    if (url.pathname === location.pathname && url.search === location.search) return;
    e.preventDefault();
    sessionStorage.setItem('to-pt', '1');
    gsap.fromTo(panel, { xPercent: -101 }, { xPercent: 0, duration: 0.32, ease: 'power3.in', onComplete: () => (location.href = url.href) });
  });
  addEventListener('pageshow', (e) => { if (e.persisted) gsap.set(panel, { xPercent: -101 }); });
}

/* Cursor: subtle ring + dot, desktop only */
const cur = document.querySelector('.cur');
if (cur && fine && !reduced) {
  document.documentElement.classList.add('has-cursor');
  const ring = cur.querySelector('.cur__ring');
  const dot = cur.querySelector('.cur__dot');
  const rx = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' });
  const ry = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' });
  addEventListener('pointermove', (e) => {
    rx(e.clientX); ry(e.clientY);
    gsap.set(dot, { x: e.clientX, y: e.clientY });
    cur.classList.toggle('is-link', !!e.target.closest('a, button, label, summary, [data-cursor]'));
  }, { passive: true });
}

/* Refresh only if fonts changed the page height */
const h0 = document.body.scrollHeight;
document.fonts?.ready.then(() => { if (Math.abs(document.body.scrollHeight - h0) > 2) ScrollTrigger.refresh(); });
