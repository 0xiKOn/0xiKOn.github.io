/**
 * Generates the homepage backdrop image(s) in public/.
 *
 * Line-art plates drawn on a transparent ground, so the page background shows
 * through and the same file reads in both themes. The fade, sizing and opacity
 * all live in `.page-backdrop` in src/styles/global.css — this only draws art.
 *
 *   node scripts/make-backdrop.mjs            # writes every variant
 *   node scripts/make-backdrop.mjs geometry   # writes just one
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const W = 2400;
const H = 1350;

// Mid-slate reads as a faint wash on white and as visible line work on the dark
// theme, so one file serves both.
const INK = "#8e9bb3";
const ACCENT = "#6f8f86";

const wrap = (body, extra = "") => `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>
      .l  { fill: none; stroke: ${INK}; stroke-width: 2.1; }
      .lt { fill: none; stroke: ${INK}; stroke-width: 1.2; opacity: 0.66; }
      .a  { fill: none; stroke: ${ACCENT}; stroke-width: 2.4; }
      .d  { fill: ${INK}; }
      .da { fill: ${ACCENT}; }
      .dash  { stroke-dasharray: 13 11; }
      .dashf { stroke-dasharray: 5 9; }
    </style>
    ${extra}
  </defs>
  ${body}
</svg>`;

/* ---------- 1. compass-and-straightedge plate ---------- */
function geometry() {
  const cx = 1200;
  const cy = 660;
  const R = 430;
  const p = [];

  // vesica piscis + the classic six-circle rosette
  p.push(`<circle class="l" cx="${cx}" cy="${cy}" r="${R}"/>`);
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i;
    p.push(
      `<circle class="lt" cx="${cx + R * Math.cos(a)}" cy="${cy + R * Math.sin(a)}" r="${R}"/>`
    );
  }

  // inscribed pentagon and its diagonals (golden-ratio construction)
  const pent = [];
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / 5;
    pent.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]);
  }
  p.push(
    `<polygon class="a" points="${pent.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")}"/>`
  );
  for (let i = 0; i < 5; i++) {
    for (let j = i + 2; j < 5; j++) {
      if (i === 0 && j === 4) continue;
      p.push(
        `<line class="lt" x1="${pent[i][0].toFixed(1)}" y1="${pent[i][1].toFixed(1)}" x2="${pent[j][0].toFixed(1)}" y2="${pent[j][1].toFixed(1)}"/>`
      );
    }
  }
  pent.forEach(([x, y]) => p.push(`<circle class="da" cx="${x}" cy="${y}" r="7"/>`));

  // construction arcs struck off to the sides, as on a printed plate
  p.push(`<path class="lt dash" d="M ${cx - 980} ${cy + 300} A 560 560 0 0 1 ${cx - 300} ${cy - 360}"/>`);
  p.push(`<path class="lt dash" d="M ${cx + 980} ${cy - 300} A 560 560 0 0 1 ${cx + 300} ${cy + 360}"/>`);

  // baseline with tick marks, like a ruled scale
  p.push(`<line class="l" x1="180" y1="1180" x2="2220" y2="1180"/>`);
  for (let x = 180; x <= 2220; x += 68) {
    const tall = ((x - 180) / 68) % 5 === 0;
    p.push(`<line class="lt" x1="${x}" y1="1180" x2="${x}" y2="${1180 - (tall ? 30 : 16)}"/>`);
  }

  // right-angle marker and a radius callout
  p.push(`<path class="l" d="M ${cx} ${cy} L ${cx + R} ${cy}"/>`);
  p.push(`<path class="lt" d="M ${cx + 46} ${cy} L ${cx + 46} ${cy - 46} L ${cx} ${cy - 46}"/>`);
  p.push(`<circle class="d" cx="${cx}" cy="${cy}" r="9"/>`);
  return wrap(p.join("\n  "));
}

/* ---------- 2. celestial chart ---------- */
function celestial() {
  const cx = 1200;
  const cy = 640;
  const p = [];
  let seed = 20260928;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);

  // graduated outer rings, as on an astrolabe
  [520, 500, 360, 210].forEach((r, i) =>
    p.push(`<circle class="${i === 1 ? "lt" : "l"}" cx="${cx}" cy="${cy}" r="${r}"/>`)
  );
  for (let i = 0; i < 72; i++) {
    const a = (Math.PI / 36) * i;
    const long = i % 6 === 0;
    p.push(
      `<line class="lt" x1="${cx + 500 * Math.cos(a)}" y1="${cy + 500 * Math.sin(a)}" x2="${cx + (long ? 460 : 478) * Math.cos(a)}" y2="${cy + (long ? 460 : 478) * Math.sin(a)}"/>`
    );
  }
  // ecliptic, drawn off-axis
  p.push(`<ellipse class="a" cx="${cx}" cy="${cy}" rx="500" ry="185" transform="rotate(-23.4 ${cx} ${cy})"/>`);

  // star field, brighter inside the chart
  const stars = [];
  for (let i = 0; i < 190; i++) {
    const x = rnd() * W;
    const y = rnd() * H;
    const inside = Math.hypot(x - cx, y - cy) < 520;
    const r = (inside ? 2.2 : 1.5) + rnd() * (inside ? 3.4 : 1.9);
    stars.push([x, y, r]);
    p.push(`<circle class="d" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" opacity="${(inside ? 0.55 : 0.32) + rnd() * 0.4}"/>`);
  }
  // constellation lines joining a few of them
  for (let k = 0; k < 5; k++) {
    const pick = [];
    for (let i = 0; i < 4 + Math.floor(rnd() * 3); i++) {
      pick.push(stars[Math.floor(rnd() * stars.length)]);
    }
    p.push(
      `<polyline class="lt" points="${pick.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")}"/>`
    );
  }
  return wrap(p.join("\n  "));
}

/* ---------- 3. orbital mechanics / armillary ---------- */
function orbits() {
  const cx = 1200;
  const cy = 660;
  const p = [];

  // armillary rings
  [[520, 520], [520, 150], [520, 300], [330, 330], [330, 95]].forEach(([rx, ry], i) =>
    p.push(
      `<ellipse class="${i === 0 ? "l" : "lt"}" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${i * 24 - 24} ${cx} ${cy})"/>`
    )
  );

  // elliptical orbits with a shared focus, plus swept-area wedges (Kepler)
  for (let i = 0; i < 3; i++) {
    const rx = 700 + i * 250;
    const ry = 250 + i * 95;
    const rot = -14 + i * 9;
    p.push(
      `<ellipse class="${i === 1 ? "a" : "l"} ${i === 2 ? "dashf" : ""}" cx="${cx - i * 60}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${rot} ${cx} ${cy})"/>`
    );
  }

  // radius vectors sweeping from the focus
  for (let i = 0; i < 9; i++) {
    const a = -0.9 + i * 0.22;
    p.push(
      `<line class="lt" x1="${cx}" y1="${cy}" x2="${(cx + 950 * Math.cos(a)).toFixed(1)}" y2="${(cy + 320 * Math.sin(a)).toFixed(1)}"/>`
    );
  }

  p.push(`<circle class="da" cx="${cx}" cy="${cy}" r="16"/>`);
  p.push(`<circle class="l" cx="${cx}" cy="${cy}" r="34"/>`);

  // a ruled margin, like a plate in a printed treatise
  p.push(`<rect class="lt" x="110" y="90" width="${W - 220}" height="${H - 180}"/>`);
  p.push(`<rect class="lt" x="128" y="108" width="${W - 256}" height="${H - 216}"/>`);
  return wrap(p.join("\n  "));
}

const variants = { geometry, celestial, orbits };
const want = process.argv[2] ? [process.argv[2]] : Object.keys(variants);

for (const name of want) {
  const make = variants[name];
  if (!make) throw new Error(`unknown variant: ${name}`);
  const out = fileURLToPath(new URL(`../public/backdrop-${name}.png`, import.meta.url));
  await sharp(Buffer.from(make())).png({ compressionLevel: 9 }).toFile(out);
  // eslint-disable-next-line no-console -- one-off CLI helper, output is the point
  console.log(`wrote ${out}`);
}
