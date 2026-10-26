// Northern Outliers signature: a backline move on a tactics board. The ball goes 9 → 10 → 12 → 13
// (every pass backwards), 13 cuts the gap, offloads to the wing, and the wing scores. Pure function
// of time t, so resize, skip and replay just redraw.

const INTRO = 0.45; // players pop in first
export const T_END = INTRO + 3.95;

// [time, forward metres (x), lateral metres (y)] in play time (t - INTRO)
const ATT = {
  9: [[0, 51, 16], [0.6, 51.5, 16], [4, 52, 16]],
  10: [[0, 45, 24], [1.0, 50, 24], [2.5, 55, 24], [4, 56, 24]],
  12: [[0, 43, 32], [1.4, 49, 32], [2.5, 54, 32], [4, 55, 32]],
  13: [[0, 41, 41], [1.7, 49, 40], [2.05, 56, 35.5], [2.4, 68, 36], [2.7, 72, 36.5], [4, 76, 37]],
  14: [[0, 39, 52], [1.7, 47, 52], [2.4, 62, 53], [2.7, 66.5, 52], [3.5, 95, 52], [4, 95.5, 52]],
};
const DEF = [
  [[0, 60, 13], [1.7, 55, 14], [4, 55, 14]],
  [[0, 60, 22], [1.7, 55, 23], [4, 55, 23]],
  [[0, 60, 31], [1.7, 55, 32], [2.4, 57.5, 34], [4, 57.5, 34]],
  [[0, 60, 40], [1.7, 55, 39], [2.4, 57.5, 37.5], [4, 59, 38]],
  [[0, 60, 50], [1.7, 55, 50], [2.7, 60, 51], [3.5, 72, 53], [4, 73, 53]],
  [[0, 60, 60], [1.7, 55, 59], [2.7, 58, 57], [3.5, 70, 56], [4, 71, 56]],
  [[0, 82, 40], [2.4, 75, 38], [2.7, 73, 41], [3.5, 85, 50], [4, 86, 51]],
];
// Ball: hold [from, to, player] or pass [from, to, passer, receiver]
const BALL = [[0, 0.6, 9], [0.6, 0.9, 9, 10], [0.9, 1.0, 10], [1.0, 1.3, 10, 12], [1.3, 1.4, 12], [1.4, 1.7, 12, 13], [1.7, 2.4, 13], [2.4, 2.7, 13, 14], [2.7, 99, 14]];
const TRY_AT = 3.5;

const at = (keys, p) => {
  if (p <= keys[0][0]) return [keys[0][1], keys[0][2]];
  for (let i = 0; i < keys.length - 1; i++) {
    const [t0, x0, y0] = keys[i], [t1, x1, y1] = keys[i + 1];
    if (p <= t1) { const k = (p - t0) / (t1 - t0); return [x0 + (x1 - x0) * k, y0 + (y1 - y0) * k]; }
  }
  const l = keys[keys.length - 1]; return [l[1], l[2]];
};
const ballAt = (p) => {
  for (const seg of BALL) {
    if (p > seg[1]) continue;
    if (seg.length === 3) return at(ATT[seg[2]], Math.min(p, TRY_AT));
    const k = Math.max(0, (p - seg[0]) / (seg[1] - seg[0]));
    const a = at(ATT[seg[2]], seg[0]), b = at(ATT[seg[3]], seg[1]);
    const c = [(a[0] + b[0]) / 2 - 2.5, (a[1] + b[1]) / 2]; // passes float backwards
    const u = 1 - k;
    return [u * u * a[0] + 2 * u * k * c[0] + k * k * b[0], u * u * a[1] + 2 * u * k * c[1] + k * k * b[1]];
  }
  return at(ATT[14], TRY_AT);
};

export function createRugby(canvas) {
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0;
  const X0 = 36, X1 = 100, Y1 = 70;
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const P = ([x, y]) => [(y / Y1) * W, ((X1 - x) / (X1 - X0)) * H];
  const m = (v) => (v / Y1) * W; // metres → px

  const pitch = (flash) => {
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = 'rgba(11,16,13,0.74)'; ctx.fillRect(0, 0, W, H); // translucent board: the hero photo shows through
    // mown stripes
    for (let x = X0; x < X1; x += 10) { if (Math.round(x / 10) % 2) { const [, y0] = P([x + 10, 0]); const [, y1] = P([x, 0]); ctx.fillStyle = 'rgba(255,255,255,0.018)'; ctx.fillRect(0, y0, W, y1 - y0); } }
    // in-goal
    const [, tg] = P([92, 0]);
    ctx.fillStyle = `rgba(255,97,87,${0.07 + 0.3 * flash})`; ctx.fillRect(0, 0, W, tg);
    ctx.strokeStyle = 'rgba(255,255,255,0.26)'; ctx.lineWidth = 1.5;
    const hline = (x, dash) => { const [, y] = P([x, 0]); ctx.setLineDash(dash || []); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); };
    hline(92); hline(70); hline(42); hline(52, [m(1.5), m(3)]); hline(87, [m(1.5), m(3)]);
    ctx.setLineDash([m(0.8), m(4)]);
    [5, 15, 55, 65].forEach((y) => { const [sx] = P([0, y]); ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, H); ctx.stroke(); });
    ctx.setLineDash([]);
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 2; ctx.strokeRect(1, 1, W - 2, H - 2);
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.font = `500 ${Math.max(9, m(1.6))}px "Geist Mono", monospace`; ctx.textAlign = 'left';
    [[70, '22'], [42, 'HALFWAY']].forEach(([x, s]) => { const [, y] = P([x, 0]); ctx.fillText(s, m(1), y - m(0.8)); });
  };

  const path = (fn, from, to, style, w, dash) => {
    if (to <= from) return;
    ctx.strokeStyle = style; ctx.lineWidth = w; ctx.setLineDash(dash || []); ctx.beginPath();
    for (let p = from, first = true; p <= to + 1e-6; p += 1 / 60) { const pt = P(fn(p)); first ? ctx.moveTo(...pt) : ctx.lineTo(...pt); first = false; }
    ctx.stroke(); ctx.setLineDash([]);
  };

  const draw = (t) => {
    const p = Math.max(0, t - INTRO);
    const pop = (i) => Math.min(1, Math.max(0, (t - i * 0.035) / 0.25));
    const sinceTry = p - TRY_AT;
    const flash = sinceTry < 0 ? 0 : Math.max(0.35, 1 - sinceTry * 1.6);
    pitch(flash);
    // run lines + ball path
    path((q) => at(ATT[13], q), 1.55, Math.min(p, 2.7), 'rgba(255,255,255,0.55)', 1.5, [m(0.9), m(0.9)]);
    path((q) => at(ATT[14], q), 2.25, Math.min(p, TRY_AT), 'rgba(255,255,255,0.55)', 1.5, [m(0.9), m(0.9)]);
    path(ballAt, 0, Math.min(p, TRY_AT), 'rgba(255,97,87,0.95)', 2.5);
    // ruck
    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    [[53.5, 12.5], [54.5, 14], [53, 14.8]].forEach((r, i) => { const s = pop(i); if (!s) return; ctx.beginPath(); ctx.arc(...P(r), m(1.2) * s, 0, Math.PI * 2); ctx.fill(); });
    // defenders
    DEF.forEach((keys, i) => {
      const s = pop(i + 3); if (!s) return;
      ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = Math.max(1.5, m(0.35));
      ctx.beginPath(); ctx.arc(...P(at(keys, p)), m(1.35) * s, 0, Math.PI * 2); ctx.stroke();
    });
    // attackers
    Object.entries(ATT).forEach(([n, keys], i) => {
      const s = pop(i + 1); if (!s) return;
      const c = P(at(keys, Math.min(p, n === '14' ? TRY_AT : 99)));
      ctx.fillStyle = '#ff6157'; ctx.beginPath(); ctx.arc(...c, m(1.55) * s, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#010101'; ctx.font = `600 ${Math.max(8, m(1.45)) * s}px "Geist Mono", monospace`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(n, c[0], c[1] + 0.5);
    });
    // ball
    if (t > INTRO * 0.6) {
      const b = P(ballAt(Math.min(p, TRY_AT)));
      ctx.save(); ctx.translate(b[0], b[1] - m(1.9)); ctx.rotate(-0.5);
      ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.ellipse(0, 0, m(1.05), m(0.65), 0, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
    // try
    if (sinceTry >= 0) {
      const c = P(at(ATT[14], TRY_AT));
      const k = Math.min(1, sinceTry / 0.5);
      ctx.strokeStyle = `rgba(255,97,87,${1 - k})`; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(...c, m(2 + 9 * k), 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#ffffff'; ctx.font = `900 italic ${m(3.2)}px "Archivo Variable", sans-serif`; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.globalAlpha = Math.min(1, sinceTry / 0.25); ctx.fillText('TRY', c[0] - m(3.2), c[1]); ctx.globalAlpha = 1;
    }
  };
  return { resize, draw };
}
