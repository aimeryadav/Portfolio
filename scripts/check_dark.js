import sharp from 'sharp';

const darkImgPath = 'C:\\Users\\aimer\\.gemini\\antigravity-ide\\brain\\68e61fe0-0288-4e79-bf16-868ae73c3a9f\\chair_lamp_dark_mode_1790060901688.jpg';

async function checkDark() {
  const { data, info } = await sharp(darkImgPath).raw().toBuffer({ resolveWithObject: true });
  console.log('Dims:', info.width, info.height);

  const corners = [
    [0, 0], [512, 0], [1023, 0],
    [0, 500], [1023, 500],
    [0, 1023], [1023, 1023]
  ];

  for (const [x, y] of corners) {
    const idx = (y * info.width + x) * 3;
    console.log(`(${x}, ${y}): R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}`);
  }
}

checkDark().catch(console.error);
