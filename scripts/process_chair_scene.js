import sharp from 'sharp';

const unlitPath = 'C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\chair_lamp_scene_1790058822797.jpg';

async function processChairScene() {
  const cropBox = { left: 49, top: 24, width: 715, height: 1000 };
  const { data, info } = await sharp(unlitPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // Candidate for background: pure white / off-white connected to boundary
  const isBgCandidate = (x, y) => {
    const idx = (y * w + x) * 3;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    return r > 235 && g > 235 && b > 230;
  };

  const visited = new Uint8Array(w * h);
  const queue = [];

  for (let x = 0; x < w; x++) {
    if (isBgCandidate(x, 0)) { queue.push((0 * w) + x); visited[(0 * w) + x] = 1; }
    if (isBgCandidate(x, h - 1)) { queue.push(((h - 1) * w) + x); visited[((h - 1) * w) + x] = 1; }
  }
  for (let y = 0; y < h; y++) {
    if (isBgCandidate(0, y)) { queue.push((y * w) + 0); visited[(y * w) + 0] = 1; }
    if (isBgCandidate(w - 1, y)) { queue.push((y * w) + (w - 1)); visited[(y * w) + (w - 1)] = 1; }
  }

  // Additional seed points for floor pockets between legs and under chair
  // Samples at bottom floor areas that should be transparent
  for (let y = 850; y < h; y += 10) {
    for (let x = 0; x < w; x += 10) {
      const idx = (y * w + x) * 3;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // If it's bright white/cream floor background (not dark chair leg, not green blanket, not lamp base)
      if (r > 225 && g > 225 && b > 220) {
        const nidx = y * w + x;
        if (!visited[nidx]) {
          visited[nidx] = 1;
          queue.push(nidx);
        }
      }
    }
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % w;
    const cy = Math.floor(curr / w);

    const neighbors = [
      [cx - 1, cy],
      [cx + 1, cy],
      [cx, cy - 1],
      [cx, cy + 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nidx = ny * w + nx;
        if (!visited[nidx] && isBgCandidate(nx, ny)) {
          visited[nidx] = 1;
          queue.push(nidx);
        }
      }
    }
  }

  const rgba = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx3 = (y * w + x) * 3;
      const idx4 = (y * w + x) * 4;
      const nidx = y * w + x;

      const r = data[idx3];
      const g = data[idx3 + 1];
      const b = data[idx3 + 2];

      rgba[idx4] = r;
      rgba[idx4 + 1] = g;
      rgba[idx4 + 2] = b;

      if (visited[nidx]) {
        rgba[idx4 + 3] = 0;
      } else {
        const brightness = (r + g + b) / 3;
        if (brightness > 240) {
          rgba[idx4 + 3] = Math.max(0, Math.min(255, Math.round((255 - brightness) * 16)));
        } else {
          rgba[idx4 + 3] = 255;
        }

        // Object vs Neutral Floor detection:
        // The background floor is completely neutral gray/white (max - min <= 5).
        // The sage blanket, chair fabric, and legs have clear color saturation or specific tone.
        const saturation = Math.max(r, g, b) - Math.min(r, g, b);
        const isObject = saturation > 5 || (x > 530 && y > 910); // blanket, chair, or lamp base

        // Neutralize floor shadows at bottom to dark gray/black with gentle alpha
        if (y > 870 && !isObject) {
          if (brightness > 180) {
            rgba[idx4 + 3] = 0; // empty floor
          } else if (brightness > 90) {
            // Soft ground contact shadow
            const shadowStrength = Math.max(0, (230 - brightness) / 140);
            rgba[idx4] = 15;
            rgba[idx4 + 1] = 20;
            rgba[idx4 + 2] = 20;
            rgba[idx4 + 3] = Math.round(shadowStrength * 120);
          }
        }
      }
    }
  }

  const fullPng = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
  await sharp(fullPng)
    .extract(cropBox)
    .png()
    .toFile('public/chair-lamp-scene.png');

  console.log('Saved public/chair-lamp-scene.png');

  // Now create the lit version
  const wOut = cropBox.width;
  const hOut = cropBox.height;

  const svgOverlay = Buffer.from(`
    <svg width="${wOut}" height="${hOut}" viewBox="0 0 ${wOut} ${hOut}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lampHalo" cx="598" cy="130" r="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFD680" stop-opacity="0.85"/>
          <stop offset="25%" stop-color="#FFA845" stop-opacity="0.45"/>
          <stop offset="55%" stop-color="#FF8020" stop-opacity="0.15"/>
          <stop offset="85%" stop-color="#FF6010" stop-opacity="0.02"/>
          <stop offset="100%" stop-color="#FF5000" stop-opacity="0"/>
        </radialGradient>

        <radialGradient id="shadeFabricGlow" cx="598" cy="115" r="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFF5D6" stop-opacity="0.95"/>
          <stop offset="20%" stop-color="#FFC565" stop-opacity="0.85"/>
          <stop offset="55%" stop-color="#E87515" stop-opacity="0.6"/>
          <stop offset="85%" stop-color="#9E3505" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#601500" stop-opacity="0"/>
        </radialGradient>

        <radialGradient id="bulbCore" cx="598" cy="110" r="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"/>
          <stop offset="40%" stop-color="#FFF6D0" stop-opacity="0.95"/>
          <stop offset="80%" stop-color="#FFB535" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#FFA010" stop-opacity="0"/>
        </radialGradient>

        <radialGradient id="downwardSpill" cx="598" cy="200" r="620" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFC870" stop-opacity="0.45"/>
          <stop offset="35%" stop-color="#FFAA40" stop-opacity="0.25"/>
          <stop offset="70%" stop-color="#FF8020" stop-opacity="0.06"/>
          <stop offset="100%" stop-color="#FF6010" stop-opacity="0"/>
        </radialGradient>

        <filter id="blurShade" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8"/>
        </filter>
        <filter id="blurHalo" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="28"/>
        </filter>
        <filter id="blurSpill" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="36"/>
        </filter>
      </defs>

      <!-- Volumetric Ambient Halo -->
      <circle cx="598" cy="130" r="320" fill="url(#lampHalo)" filter="url(#blurHalo)"/>

      <!-- Downward warmth over armchair -->
      <path d="M 520,220 L 100,850 L 680,950 L 660,220 Z" fill="url(#downwardSpill)" filter="url(#blurSpill)"/>

      <!-- Warm shade glow -->
      <rect x="496" y="24" width="204" height="206" rx="10" fill="url(#shadeFabricGlow)" filter="url(#blurShade)"/>

      <!-- Central bulb filament -->
      <ellipse cx="598" cy="110" rx="28" ry="42" fill="url(#bulbCore)" filter="url(#blurShade)"/>
    </svg>
  `);

  await sharp('public/chair-lamp-scene.png')
    .composite([{ input: svgOverlay, blend: 'over' }])
    .png()
    .toFile('public/chair-lamp-scene-lit.png');

  console.log('Saved public/chair-lamp-scene-lit.png');

  // Update previews
  const lightBg = { r: 232, g: 239, b: 245, alpha: 1 };
  const darkBg = { r: 7, g: 24, b: 24, alpha: 1 };

  await sharp({
    create: { width: wOut, height: hOut, channels: 4, background: lightBg }
  })
    .composite([{ input: 'public/chair-lamp-scene.png' }])
    .jpeg({ quality: 90 })
    .toFile('C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\preview_light.jpg');

  await sharp({
    create: { width: wOut, height: hOut, channels: 4, background: darkBg }
  })
    .composite([{ input: 'public/chair-lamp-scene-lit.png' }])
    .jpeg({ quality: 90 })
    .toFile('C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\preview_dark.jpg');

  console.log('Previews updated successfully!');
}

processChairScene().catch(console.error);
