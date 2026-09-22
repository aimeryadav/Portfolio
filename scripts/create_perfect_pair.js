import sharp from 'sharp';

const darkImgPath = 'C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\chair_lamp_dark_mode_1790060901688.jpg';
const unlitPath = 'C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\chair_lamp_scene_1790058822797.jpg';

const cropBox = { left: 49, top: 24, width: 715, height: 1000 };

async function buildDarkScene() {
  const cropped = await sharp(darkImgPath)
    .extract(cropBox)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = cropped.info.width;
  const h = cropped.info.height;
  const data = cropped.data;

  const bgR = 5, bgG = 28, bgB = 26;
  const rgba = Buffer.alloc(w * h * 4);

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

      // Color distance from solid dark background
      const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

      // Distance from borders
      const distLeft = x;
      const distRight = (w - 1) - x;
      const distTop = y;
      const distBottom = (h - 1) - y;

      // Feathering factor at the 4 borders (0 at edge, 1 at >= 40px inwards)
      // For bottom, only feather the very bottom 10px
      const featherX = Math.min(1, Math.min(distLeft, distRight) / 45);
      const featherTop = Math.min(1, distTop / 35);
      const featherBottom = Math.min(1, distBottom / 12);
      const edgeFeather = featherX * featherTop * featherBottom;

      if (dist < 12) {
        // pure background
        rgba[idx4 + 3] = 0;
      } else if (dist < 32) {
        // soft falloff
        const a = (dist - 12) / 20;
        rgba[idx4 + 3] = Math.round(a * 255 * edgeFeather);
      } else {
        // object or warm lamp glow
        // If near edge, feather out so no box line can ever exist
        rgba[idx4 + 3] = Math.round(255 * edgeFeather);
      }
    }
  }

  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/chair-lamp-scene-dark.png');

  console.log('Saved perfect public/chair-lamp-scene-dark.png');

  // Preview on wide dark canvas
  const canvasW = 1200;
  const canvasH = 1100;
  const darkBg = { r: 7, g: 24, b: 24, alpha: 1 };

  await sharp({
    create: { width: canvasW, height: canvasH, channels: 4, background: darkBg }
  })
    .composite([{ input: 'public/chair-lamp-scene-dark.png', left: 100, top: 50 }])
    .jpeg({ quality: 95 })
    .toFile('C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\preview_dark_final.jpg');

  console.log('Saved preview_dark_final.jpg');
}

async function buildLightScene() {
  const cropped = await sharp(unlitPath)
    .extract(cropBox)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = cropped.info.width;
  const h = cropped.info.height;
  const data = cropped.data;

  // Flood fill from borders to remove background
  const isBgCandidate = (x, y) => {
    const idx = (y * w + x) * 3;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    return r > 235 && g > 235 && b > 230;
  };

  const visited = new Uint8Array(w * h);
  const queue = [];

  for (let x = 0; x < w; x++) {
    if (isBgCandidate(x, 0)) { queue.push(x); visited[x] = 1; }
    if (isBgCandidate(x, h - 1)) { queue.push((h - 1) * w + x); visited[(h - 1) * w + x] = 1; }
  }
  for (let y = 0; y < h; y++) {
    if (isBgCandidate(0, y)) { queue.push(y * w); visited[y * w] = 1; }
    if (isBgCandidate(w - 1, y)) { queue.push(y * w + (w - 1)); visited[y * w + (w - 1)] = 1; }
  }

  // Also seed floor pockets
  for (let y = 850; y < h; y += 10) {
    for (let x = 0; x < w; x += 10) {
      const idx = (y * w + x) * 3;
      if (data[idx] > 235 && data[idx+1] > 235 && data[idx+2] > 230) {
        const nidx = y * w + x;
        if (!visited[nidx]) { visited[nidx] = 1; queue.push(nidx); }
      }
    }
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % w;
    const cy = Math.floor(curr / w);

    const neighbors = [[cx - 1, cy], [cx + 1, cy], [cx, cy - 1], [cx, cy + 1]];
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
        const saturation = Math.max(r, g, b) - Math.min(r, g, b);
        const isObject = saturation > 5 || (x > 530 && y > 910);

        if (brightness > 240) {
          rgba[idx4 + 3] = Math.max(0, Math.min(255, Math.round((255 - brightness) * 16)));
        } else {
          rgba[idx4 + 3] = 255;
        }

        if (y > 880 && !isObject) {
          if (brightness > 180) {
            rgba[idx4 + 3] = 0;
          } else if (brightness > 90) {
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

  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/chair-lamp-scene.png');

  console.log('Saved public/chair-lamp-scene.png');
}

async function main() {
  await buildDarkScene();
  await buildLightScene();
  console.log('Finished building both scenes!');
}

main().catch(console.error);
