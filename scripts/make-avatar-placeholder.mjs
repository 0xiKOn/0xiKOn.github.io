/**
 * Generates public/avatar.jpg — a neutral placeholder portrait.
 *
 * Kept in the repo so the placeholder can be regenerated, but it is meant to be
 * overwritten: drop your own square photo at public/avatar.jpg and the homepage
 * picks it up with no code change.
 *
 *   node scripts/make-avatar-placeholder.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const SIZE = 640;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e9ebee"/>
      <stop offset="100%" stop-color="#d3d7dc"/>
    </linearGradient>
  </defs>
  <rect width="${SIZE}" height="${SIZE}" fill="url(#g)"/>
  <circle cx="${SIZE / 2}" cy="${SIZE * 0.4}" r="${SIZE * 0.14}" fill="#b9bfc7"/>
  <path d="M${SIZE * 0.22} ${SIZE * 0.88}
           a${SIZE * 0.28} ${SIZE * 0.26} 0 0 1 ${SIZE * 0.56} 0 Z"
        fill="#b9bfc7"/>
</svg>`;

const out = fileURLToPath(new URL("../public/avatar.jpg", import.meta.url));

await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(out);
// eslint-disable-next-line no-console -- one-off CLI helper, output is the point
console.log(`wrote ${out} (${SIZE}x${SIZE})`);
