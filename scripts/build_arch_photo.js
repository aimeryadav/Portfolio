import sharp from 'sharp';

async function buildArch() {
  const rawPath = 'C:/Users/aimer/.gemini/antigravity-ide/brain/876b56f1-c9bd-4d28-9466-69e74a8808e2/.user_uploaded/media_1789991963878.png';
  const outPath = 'public/amit-arch-photo.png';

  const W = 912;
  const H = 1260;

  // Exact mathematical scale to fill arch height from hair top to bottom of raw photo:
  // Raw dimensions: 681 x 1024
  // Hair top at y = 244. Distance from hair to bottom = 1024 - 244 = 780px.
  // Desired headroom: desiredHairY = 124px (9.8% headroom, matching reference ~9.5%).
  // (1260 - 124) / 780 = 1.4564
  const desiredHairY = 124;
  const scale = (H - desiredHairY) / (1024 - 244);
  const scaledW = Math.round(681 * scale); // ~992
  const scaledH = Math.round(1024 * scale); // ~1491

  console.log('Scale factor:', scale.toFixed(4));
  console.log('Scaled dimensions:', scaledW, 'x', scaledH);

  // Resize raw photo with Lanczos3 for maximum crispness
  const resizedBuffer = await sharp(rawPath)
    .resize(scaledW, scaledH, { kernel: 'lanczos3' })
    .toBuffer();

  const hairInScaled = Math.round(244 * scale);
  const cropTop = hairInScaled - desiredHairY;
  
  // Center Amit: in raw photo, buttons midpoint is at x = 288.5 (~42.36% of 681).
  // In scaled, buttons midpoint is at 288.5 * scale.
  // In arch (912w), we want buttons around x = 385 (~42.2% of 912).
  const buttonMidX = 288.5 * scale;
  const cropLeft = Math.round(buttonMidX - 385);

  console.log('Crop coordinates:', { cropLeft, cropTop, W, H });

  // Extract the exact W x H slice directly from the scaled photo
  const photoSlice = await sharp(resizedBuffer)
    .extract({
      left: Math.max(0, cropLeft),
      top: Math.max(0, cropTop),
      width: W,
      height: H
    })
    .png()
    .toBuffer();

  // Arch Geometry
  const bw = 5.5; // yellow border stroke
  const rTop = (W - bw) / 2;
  const cx = W / 2;
  const rBottom = 72;

  const archPathD = `
    M ${bw/2} ${cx}
    A ${rTop} ${rTop} 0 0 1 ${W - bw/2} ${cx}
    L ${W - bw/2} ${H - bw/2 - rBottom}
    A ${rBottom} ${rBottom} 0 0 1 ${W - bw/2 - rBottom} ${H - bw/2}
    L ${bw/2 + rBottom} ${H - bw/2}
    A ${rBottom} ${rBottom} 0 0 1 ${bw/2} ${H - bw/2 - rBottom}
    Z
  `;

  // Transparent outside the arch, crisp and solid inside
  const maskSvg = `
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <path d="${archPathD}" fill="#FFFFFF" />
    </svg>
  `;

  const borderSvg = `
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <path d="${archPathD}" fill="none" stroke="#FFDF20" stroke-width="${bw}" stroke-linejoin="round" />
    </svg>
  `;

  const maskBuffer = await sharp(Buffer.from(maskSvg)).png().toBuffer();
  const borderBuffer = await sharp(Buffer.from(borderSvg)).png().toBuffer();

  // 1. Clip photo with arch mask (outside arch becomes 100% transparent)
  const clipped = await sharp(photoSlice)
    .composite([
      {
        input: maskBuffer,
        blend: 'dest-in'
      }
    ])
    .png()
    .toBuffer();

  // 2. Overlay yellow border
  await sharp(clipped)
    .composite([
      {
        input: borderBuffer,
        blend: 'over'
      }
    ])
    .png()
    .toFile(outPath);

  console.log('Successfully generated public/amit-arch-photo.png');
}

buildArch().catch(console.error);
