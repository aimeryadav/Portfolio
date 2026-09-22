import sharp from 'sharp';

async function createStudioLightOn() {
  const baseImg = sharp('public/studio-light-off.png');
  const metadata = await baseImg.metadata();
  const width = metadata.width;
  const height = metadata.height;

  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Softbox interior bright incandescent daylight glow -->
        <radialGradient id="softboxGlow" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
          <stop offset="35%" stop-color="#FFF3D4" stop-opacity="0.85"/>
          <stop offset="70%" stop-color="#FFE0A0" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#FFC870" stop-opacity="0.2"/>
        </radialGradient>

        <!-- Forward volumetric beam casting light toward Amit on the right -->
        <linearGradient id="beamSpill" x1="10%" y1="20%" x2="95%" y2="50%">
          <stop offset="0%" stop-color="#FFF9EA" stop-opacity="0.65"/>
          <stop offset="30%" stop-color="#FFEFC4" stop-opacity="0.35"/>
          <stop offset="65%" stop-color="#FFE090" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#FFD070" stop-opacity="0"/>
        </linearGradient>

        <filter id="blurFace" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8"/>
        </filter>
        <filter id="blurHalo" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="22"/>
        </filter>
      </defs>

      <!-- Softbox Face illumination: fits softbox front grid -->
      <polygon points="12,58 245,18 290,32 360,360 275,378 38,370"
               fill="url(#softboxGlow)"
               filter="url(#blurFace)" />

      <!-- High intensity bright white diffuser core -->
      <polygon points="40,80 220,40 260,52 325,340 250,358 60,350"
               fill="#FFFFFF"
               opacity="0.75"
               filter="url(#blurFace)" />

      <!-- Forward Volumetric Light Cone -->
      <polygon points="260,20 715,90 715,620 300,380"
               fill="url(#beamSpill)"
               filter="url(#blurHalo)" />
    </svg>
  `);

  await baseImg
    .composite([{ input: svgOverlay, blend: 'over' }])
    .png()
    .toFile('public/studio-light-on.png');

  console.log('Successfully created public/studio-light-on.png');
}

createStudioLightOn().catch(console.error);
