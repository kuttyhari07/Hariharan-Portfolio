import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const SOURCE = 'hariharan-source.png';
const hi = sharp(SOURCE);
const { width, height } = await hi.metadata();
console.log(`Processing source image ${width}x${height}`);

// Soft bottom fade so the cutout dissolves gracefully at the waistline
const fadeSvg = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff" stop-opacity="1" />
      <stop offset="85%" stop-color="#fff" stop-opacity="1" />
      <stop offset="98%" stop-color="#fff" stop-opacity="0" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#fadeBottom)" />
</svg>`);

const fadeBuffer = await sharp(fadeSvg).extractChannel('alpha').raw().toBuffer();
const { data: rawImg } = await hi.raw().toBuffer({ resolveWithObject: true });

// Multiply existing alpha with bottom fade
for (let i = 0; i < width * height; i++) {
  const origAlpha = rawImg[i * 4 + 3];
  const fadeVal = fadeBuffer[i] / 255;
  rawImg[i * 4 + 3] = Math.round(origAlpha * fadeVal);
}

const processed = await sharp(rawImg, {
  raw: { width, height, channels: 4 }
}).png().toBuffer();

// Export webp variants
for (const w of [1100, 720, 420]) {
  await sharp(processed)
    .resize({ width: w })
    .webp({ quality: 92, alphaQuality: 95 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Also export public/assets/hariharan.jpg on dark theme background for compatibility
await sharp(processed)
  .flatten({ background: '#050811' })
  .jpeg({ quality: 92 })
  .toFile(`${OUT}/hariharan.jpg`);

// Social share OG image (1200x630)
const portraitForOg = await sharp(processed).resize({ height: 580 }).png().toBuffer();

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

console.log('Hariharan portrait and OG images generated successfully with new cutout photo!');
