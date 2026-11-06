import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const hi = sharp('hariharan-source.jpg');
const { width, height } = await hi.metadata();
console.log(`Processing image ${width}x${height}`);

// Soft edge vignette mask
const maskSvg = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="vignette" cx="50%" cy="40%" r="56%">
      <stop offset="60%" stop-color="#fff" stop-opacity="1" />
      <stop offset="85%" stop-color="#fff" stop-opacity="0.8" />
      <stop offset="95%" stop-color="#fff" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#fff" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
      <stop offset="70%" stop-color="#fff" stop-opacity="1" />
      <stop offset="98%" stop-color="#fff" stop-opacity="0" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#vignette)" />
</svg>`);

const maskBuffer = await sharp(maskSvg).png().toBuffer();

// Composite mask as alpha channel
const alphaChannel = await sharp(maskBuffer)
  .extractChannel('alpha')
  .raw()
  .toBuffer();

const rgb = await sharp('hariharan-source.jpg').removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alphaChannel[i];
}

const framed = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(framed)
    .resize({ width: w })
    .webp({ quality: 90, alphaQuality: 92 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark navy/black electric blue backdrop
const portraitForOg = await sharp(framed).resize({ height: 580 }).png().toBuffer();

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#050811' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="80%" cy="40%" r="50%">
            <stop offset="0" stop-color="#00d2ff" stop-opacity="0.35"/>
            <stop offset="70%" stop-color="#0055ff" stop-opacity="0.1"/>
            <stop offset="1" stop-color="#050811" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portraitForOg, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="270" font-family="Impact, 'Arial Narrow', sans-serif" font-size="110" fill="#f4f1ec" letter-spacing="4">HARIHARAN G</text>
        <text x="78" y="325" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#00d2ff" letter-spacing="14">THE SERIES</text>
        <text x="78" y="380" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="4">FULL STACK DEVELOPER • IT STUDENT • SOFTWARE ENGINEER</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-size="16" fill="#6d6c75">Erode Sengunthar Engineering College (2024–2028)</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Hariharan portrait and OG images generated successfully!');
