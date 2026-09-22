import sharp from 'sharp';

const darkImgPath = 'C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\chair_lamp_dark_mode_1790060901688.jpg';

const unlitPath = 'C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\chair_lamp_scene_1790058822797.jpg';

async function compare() {
  const dark = await sharp(darkImgPath).raw().toBuffer({ resolveWithObject: true });
  const unlit = await sharp(unlitPath).raw().toBuffer({ resolveWithObject: true });

  // Find lampshade top in unlit (y: 30 to 200, brightness < 100)
  let unlitShade = { minX: 1024, maxX: 0, minY: 1024, maxY: 0 };
  for (let y = 30; y < 220; y++) {
    for (let x = 400; x < 850; x++) {
      const idx = (y * 1024 + x) * 3;
      const b = (unlit.data[idx] + unlit.data[idx+1] + unlit.data[idx+2]) / 3;
      if (b < 80) {
        if (x < unlitShade.minX) unlitShade.minX = x;
        if (x > unlitShade.maxX) unlitShade.maxX = x;
        if (y < unlitShade.minY) unlitShade.minY = y;
        if (y > unlitShade.maxY) unlitShade.maxY = y;
      }
    }
  }

  // Find lampshade in dark
  let darkShade = { minX: 1024, maxX: 0, minY: 1024, maxY: 0 };
  for (let y = 30; y < 220; y++) {
    for (let x = 400; x < 850; x++) {
      const idx = (y * 1024 + x) * 3;
      // In dark, shade is bright glowing or dark fabric: x > 500
      const r = dark.data[idx], g = dark.data[idx+1], b = dark.data[idx+2];
      if (r > 60 || (r > 30 && g < 30)) {
        if (x < darkShade.minX) darkShade.minX = x;
        if (x > darkShade.maxX) darkShade.maxX = x;
        if (y < darkShade.minY) darkShade.minY = y;
        if (y > darkShade.maxY) darkShade.maxY = y;
      }
    }
  }

  console.log('Unlit shade:', unlitShade, 'Center:', (unlitShade.minX + unlitShade.maxX)/2);
  console.log('Dark shade:', darkShade, 'Center:', (darkShade.minX + darkShade.maxX)/2);
}

compare().catch(console.error);
