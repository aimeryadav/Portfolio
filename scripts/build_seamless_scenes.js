import sharp from 'sharp';

const darkImgPath = 'C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\chair_lamp_dark_mode_1790060901688.jpg';
const unlitPath = 'C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\chair_lamp_scene_1790058822797.jpg';

async function processDarkForm() {
  const { data, info } = await sharp(darkImgPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // We want to isolate the dark scene and feather the dark background into transparent
  // So that it seamlessly merges with whatever background the site has (#071818).
  // Target background color is around R=5, G=28, B=26.
  // We compute difference from background color.
  // In addition, an edge vignette mask smoothly feathers the outer 50px to alpha=0.

  const rgba = Buffer.alloc(w * h * 4);

  // Background color reference:
  const bgR = 5, bgG = 28, bgB = 26;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx3 = (y * w + x) * 3;
      const idx4 = (y * w + x) * 4;

      const r = data[idx3];
      const g = data[idx3 + 1];
      const b = data[idx3 + 2];

      rgba[idx4] = r;
      rgba[idx4 + 1] = g;
      rgba[idx4 + 2] = b;

      // Calculate distance to background color
      const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

      // Distance from borders (feather edges so there's never a box edge)
      const distLeft = x;
      const distRight = (w - 1) - x;
      const distTop = y;
      const distBottom = (h - 1) - y;
      const borderDist = Math.min(distLeft, distRight, distTop, distBottom);

      // Border feather factor: 0 at border, 1 at >= 60px inside
      const borderFactor = Math.min(1, Math.max(0, borderDist / 60));

      // If very close to background color, fade alpha
      // But if it's the chair, blanket, or light, preserve it
      if (dist < 12) {
        // pure background
        rgba[idx4 + 3] = 0;
      } else if (dist < 28) {
        // smooth falloff into background
        const alphaFraction = (dist - 12) / 16;
        rgba[idx4 + 3] = Math.round(alphaFraction * 255 * borderFactor);
      } else {
        // Object or warm light glow
        // Apply edge feathering only if close to borders
        rgba[idx4 + 3] = Math.round(255 * borderFactor);
      }
    }
  }

  // Crop to content bounds with breathing room
  // Let's find bounding box where alpha > 15
  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const a = rgba[(y * w + x) * 4 + 3];
      if (a > 15) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log('Dark content bounds:', { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });

  // Save the full 1024x1024 feathered dark image
  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/chair-lamp-scene-dark.png');

  // Test preview on a large canvas simulating website
  const canvasW = 1400;
  const canvasH = 1200;
  const darkBg = { r: 7, g: 24, b: 24, alpha: 1 }; // #071818

  await sharp({
    create: { width: canvasW, height: canvasH, channels: 4, background: darkBg }
  })
    .composite([
      { input: 'public/chair-lamp-scene-dark.png', left: 100, top: 0 }
    ])
    .jpeg({ quality: 90 })
    .toFile('C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\test_dark_scene.jpg');

  console.log('Saved test_dark_scene.jpg');
}

processDarkForm().catch(console.error);
