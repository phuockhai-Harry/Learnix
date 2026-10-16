const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. Standard Logo SVG (with rounded corners for favicon / standalone preview)
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14b8a6" />
      <stop offset="60%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#0f766e" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#042f2e" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Rounded Background -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)" />

  <!-- Logo Content Group -->
  <g filter="url(#dropShadow)" transform="translate(0, 0)">
    <!-- Graduation Cap Diamond (Mortarboard Top) -->
    <path d="M 256 128 L 406 200 L 256 272 L 106 200 Z" fill="#ffffff" />

    <!-- Cap Skull Base / Underside -->
    <path d="M 166 230 L 166 286 C 166 332  206 364 256 364 C 306 364 346 332 346 286 L 346 230 L 256 274 Z" fill="#f0fdfa" opacity="0.95" />

    <!-- Open Book Pages at bottom -->
    <path d="M 126 350 C 180 340, 230 354, 256 370 C 282 354, 332 340, 386 350 L 386 388 C 332 378, 282 392, 256 408 C 230 392, 180 378, 126 388 Z" fill="#ffffff" />
    <path d="M 256 370 L 256 408" stroke="#0d9488" stroke-width="4" stroke-linecap="round" />

    <!-- Golden Tassel & Button -->
    <!-- Center Button on Mortarboard -->
    <circle cx="256" cy="200" r="10" fill="url(#goldGrad)" />
    <!-- Tassel Ribbon flowing right and down -->
    <path d="M 256 200 Q 350 206 392 248 L 402 322" fill="none" stroke="url(#goldGrad)" stroke-width="7" stroke-linecap="round" />
    <!-- Tassel Fringe Ornament -->
    <circle cx="403" cy="326" r="8" fill="url(#goldGrad)" />
    <path d="M 397 332 L 409 332 L 406 348 L 400 348 Z" fill="url(#goldGrad)" />
  </g>
</svg>`;

// 2. Maskable Icon SVG (Edge-to-edge square background without rounded corners,
// content safely scaled to 76% so within Android's 80% safe zone circle)
const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGradMask" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14b8a6" />
      <stop offset="60%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#0f766e" />
    </linearGradient>
    <linearGradient id="goldGradMask" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <filter id="dropShadowMask" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#042f2e" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Full-bleed Background (NO rounded corners, fills Android adaptive container completely) -->
  <rect width="512" height="512" fill="url(#bgGradMask)" />

  <!-- Logo Content Group scaled and centered in the safe zone (80% circle) -->
  <g filter="url(#dropShadowMask)" transform="translate(64, 64) scale(0.75)">
    <!-- Graduation Cap Diamond -->
    <path d="M 256 128 L 406 200 L 256 272 L 106 200 Z" fill="#ffffff" />

    <!-- Cap Skull Base -->
    <path d="M 166 230 L 166 286 C 166 332  206 364 256 364 C 306 364 346 332 346 286 L 346 230 L 256 274 Z" fill="#f0fdfa" opacity="0.95" />

    <!-- Open Book Pages -->
    <path d="M 126 350 C 180 340, 230 354, 256 370 C 282 354, 332 340, 386 350 L 386 388 C 332 378, 282 392, 256 408 C 230 392, 180 378, 126 388 Z" fill="#ffffff" />
    <path d="M 256 370 L 256 408" stroke="#0d9488" stroke-width="4" stroke-linecap="round" />

    <!-- Golden Tassel & Button -->
    <circle cx="256" cy="200" r="10" fill="url(#goldGradMask)" />
    <path d="M 256 200 Q 350 206 392 248 L 402 322" fill="none" stroke="url(#goldGradMask)" stroke-width="7" stroke-linecap="round" />
    <circle cx="403" cy="326" r="8" fill="url(#goldGradMask)" />
    <path d="M 397 332 L 409 332 L 406 348 L 400 348 Z" fill="url(#goldGradMask)" />
  </g>
</svg>`;

async function main() {
  const publicDir = path.resolve(__dirname, '../public');

  // Write icon.svg
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), logoSvg, 'utf-8');
  console.log('Written public/icon.svg');

  // Render pwa-512x512.png
  await sharp(Buffer.from(logoSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('Generated public/pwa-512x512.png');

  // Render pwa-192x192.png
  await sharp(Buffer.from(logoSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('Generated public/pwa-192x192.png');

  // Render pwa-maskable-512x512.png
  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('Generated public/pwa-maskable-512x512.png');

  // Render pwa-maskable-192x192.png
  await sharp(Buffer.from(maskableSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-192x192.png'));
  console.log('Generated public/pwa-maskable-192x192.png');

  // Render apple-touch-icon.png (180x180)
  await sharp(Buffer.from(logoSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated public/apple-touch-icon.png');

  // Render favicon.ico (using 32x32 png / ico)
  await sharp(Buffer.from(logoSvg))
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Generated public/favicon.ico');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
