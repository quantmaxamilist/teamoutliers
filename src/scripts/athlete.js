// Team Outliers signature: a chronophotography-style motion study. One athlete moves through
// the three principles of The Outliers Method (squat → overhead press → sprint), leaving a ghost
// at each, with coral motion-capture trails. Everything is a pure function of time t, so resize,
// skip and replay simply redraw.

const L = { torso: 0.52, neck: 0.1, head: 0.11, ua: 0.3, fa: 0.27, thigh: 0.45, shin: 0.43, foot: 0.16, ankle: 0.07 };

// Angles in degrees. Limbs: 0 = straight down, + = forward. Torso: 0 = upright, + = lean forward.
const STAND = { torso: 0, tN: 0, sN: 0, fN: 90, tF: 0, sF: 0, fF: 90, uN: 4, aN: 8, uF: -4, aF: 2, plate: 0 };
const SQUAT = { torso: 38, tN: 82, sN: -22, fN: 90, tF: 78, sF: -24, fF: 90, uN: 80, aN: 95, uF: 75, aF: 95, plate: 0 };
const PRESS = { torso: -3, tN: 0, sN: 0, fN: 90, tF: 4, sF: 0, fF: 90, uN: 178, aN: 180, uF: 176, aF: 180, plate: 1 };
const SPRINT = { torso: 18, tN: 72, sN: -15, fN: 70, tF: -28, sF: -38, fF: 40, uN: -50, aN: 40, uF: 55, aF: 150, plate: 0 };

// Keyframes: time (s), pose, hip x (m). Hip y is solved so the lowest foot point sits on the ground.
const KEYS = [
  { t: 0.0, p: STAND, x: -2.6 },
  { t: 0.45, p: STAND, x: -2.6 },
  { t: 1.2, p: SQUAT, x: -1.75 },
  { t: 1.45, p: SQUAT, x: -1.75 },
  { t: 2.3, p: PRESS, x: 0 },
  { t: 2.55, p: PRESS, x: 0 },
  { t: 3.35, p: SPRINT, x: 1.6 },
];
export const GHOSTS = [1.45, 2.55]; // key poses left behind (the last pose is the live figure)
export const LABEL_TIMES = [1.45, 2.55, 3.35];
export const T_END = 3.35;

const rad = (d) => (d * Math.PI) / 180;
const down = (a, len) => [Math.sin(rad(a)) * len, -Math.cos(rad(a)) * len];
const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

function poseAt(t) {
  let i = 0;
  while (i < KEYS.length - 1 && KEYS[i + 1].t <= t) i++;
  const a = KEYS[i], b = KEYS[Math.min(i + 1, KEYS.length - 1)];
  const k = b.t > a.t ? ease(Math.min(1, Math.max(0, (t - a.t) / (b.t - a.t)))) : 1;
  const p = {};
  for (const key in a.p) p[key] = a.p[key] + (b.p[key] - a.p[key]) * k;
  return { p, x: a.x + (b.x - a.x) * k };
}

function skeleton({ p, x }) {
  const leg = (t, s, f) => {
    const knee = down(t, L.thigh), ank = down(s, L.shin), toe = down(f, L.foot);
    const k = knee, a = [k[0] + ank[0], k[1] + ank[1]], o = [a[0] + toe[0], a[1] + toe[1]];
    return { knee: k, ankle: a, toe: o };
  };
  const n = leg(p.tN, p.sN, p.fN), f = leg(p.tF, p.sF, p.fF);
  const lowest = Math.min(n.ankle[1], n.toe[1], f.ankle[1], f.toe[1]);
  const hip = [x, -lowest + 0.045]; // lowest foot point rests on the ground (line width covers the gap)
  const add = (o, v) => [o[0] + v[0], o[1] + v[1]];
  const sh = add(hip, [Math.sin(rad(p.torso)) * L.torso, Math.cos(rad(p.torso)) * L.torso]);
  const neck = add(sh, [Math.sin(rad(p.torso)) * L.neck, Math.cos(rad(p.torso)) * L.neck]);
  const head = add(neck, [Math.sin(rad(p.torso)) * L.head, Math.cos(rad(p.torso)) * L.head]);
  const arm = (u, a) => { const e = add(sh, down(u, L.ua)); return { elbow: e, wrist: add(e, down(a, L.fa)) }; };
  return {
    hip, sh, neck, head, plate: p.plate,
    near: { ...arm(p.uN, p.aN), knee: add(hip, n.knee), ankle: add(hip, n.ankle), toe: add(hip, n.toe) },
    far: { ...arm(p.uF, p.aF), knee: add(hip, f.knee), ankle: add(hip, f.ankle), toe: add(hip, f.toe) },
  };
}

export function createAthlete(canvas) {
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, S = 1, OX = 0, OY = 0;
  const world = { x0: -3.05, x1: 2.35, y0: -0.1, y1: 2.32 };

  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    S = Math.min(W / (world.x1 - world.x0), H / (world.y1 - world.y0));
    OX = (W - (world.x1 - world.x0) * S) / 2 - world.x0 * S;
    OY = H - (H - (world.y1 - world.y0) * S) / 2 + world.y0 * S;
  };
  const P = (v) => [OX + v[0] * S, OY - v[1] * S];
  const screenX = (wx) => OX + wx * S;

  const line = (a, b, w, c) => { ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(...P(a)); ctx.lineTo(...P(b)); ctx.stroke(); };
  const figure = (sk, alpha, markers) => {
    const w = 0.07 * S;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const far = `rgba(255,255,255,${0.32 * alpha})`, near = `rgba(255,255,255,${alpha})`;
    // far limbs
    line(sk.hip, sk.far.knee, w, far); line(sk.far.knee, sk.far.ankle, w, far); line(sk.far.ankle, sk.far.toe, w * 0.8, far);
    line(sk.sh, sk.far.elbow, w * 0.85, far); line(sk.far.elbow, sk.far.wrist, w * 0.85, far);
    // torso + head
    line(sk.hip, sk.sh, w * 1.25, near); line(sk.sh, sk.neck, w, near);
    ctx.fillStyle = near; ctx.beginPath(); ctx.arc(...P(sk.head), L.head * S, 0, Math.PI * 2); ctx.fill();
    // near limbs
    line(sk.hip, sk.near.knee, w, near); line(sk.near.knee, sk.near.ankle, w, near); line(sk.near.ankle, sk.near.toe, w * 0.8, near);
    line(sk.sh, sk.near.elbow, w * 0.85, near); line(sk.near.elbow, sk.near.wrist, w * 0.85, near);
    // plate (barbell seen end-on)
    if (sk.plate > 0.01) {
      ctx.strokeStyle = `rgba(255,97,87,${sk.plate * alpha})`; ctx.lineWidth = 0.05 * S;
      ctx.beginPath(); ctx.arc(...P(sk.near.wrist), 0.2 * S * (0.6 + 0.4 * sk.plate), 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = `rgba(255,97,87,${sk.plate * alpha})`; ctx.beginPath(); ctx.arc(...P(sk.near.wrist), 0.045 * S, 0, Math.PI * 2); ctx.fill();
    }
    if (markers) {
      ctx.fillStyle = `rgba(255,97,87,${alpha})`;
      [sk.hip, sk.near.knee, sk.near.elbow, sk.sh, sk.near.ankle, sk.near.wrist].forEach((j) => { ctx.beginPath(); ctx.arc(...P(j), 0.03 * S, 0, Math.PI * 2); ctx.fill(); });
    }
  };

  const draw = (t) => {
    ctx.clearRect(0, 0, W, H);
    // ground with metre ticks
    ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, OY + 0.5); ctx.lineTo(W, OY + 0.5); ctx.stroke();
    for (let m = Math.ceil(world.x0 * 2) / 2; m <= world.x1; m += 0.5) {
      const x = screenX(m), h = Number.isInteger(m) ? 10 : 5;
      ctx.beginPath(); ctx.moveTo(x, OY); ctx.lineTo(x, OY + h); ctx.stroke();
    }
    // faint in-between frames (the "long exposure")
    for (let s = 0.55; s < t - 0.08; s += 0.15) {
      const inKey = GHOSTS.some((g) => Math.abs(s - g) < 0.2) || s < 0.5;
      if (!inKey) figure(skeleton(poseAt(s)), 0.045, false);
    }
    // motion-capture trails: near wrist and near ankle
    const trail = (pick, alpha) => {
      ctx.strokeStyle = `rgba(255,97,87,${alpha})`; ctx.lineWidth = 1.5; ctx.beginPath();
      for (let s = 0.4, first = true; s <= t; s += 1 / 60) { const pt = P(pick(skeleton(poseAt(s)))); first ? ctx.moveTo(...pt) : ctx.lineTo(...pt); first = false; }
      ctx.stroke();
    };
    trail((sk) => sk.near.wrist, 0.85);
    trail((sk) => sk.near.ankle, 0.55);
    trail((sk) => sk.head, 0.3);
    // key ghosts
    GHOSTS.forEach((g, i) => { if (t >= g) figure(skeleton(poseAt(g)), [0.38, 0.6][i], true); });
    figure(skeleton(poseAt(t)), 1, true);
  };

  const labelX = () => LABEL_TIMES.map((lt) => {
    const sk = skeleton(poseAt(lt));
    const xs = [sk.hip, sk.sh, sk.head, sk.near.knee, sk.near.toe, sk.near.wrist, sk.far.toe, sk.far.wrist].map((j) => j[0]);
    return screenX((Math.min(...xs) + Math.max(...xs)) / 2) / W;
  });
  return { resize, draw, labelX };
}
