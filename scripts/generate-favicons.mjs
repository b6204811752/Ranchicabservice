import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');
const logoPath = path.join(__dirname, '../src/assets/images/logos/ranchicabserviceslogo.png');

// Helper to create ICO file with multiple sizes (Google requires 48x48 minimum)
async function createIcoFile(pngBuffers, outputPath) {
  const images = pngBuffers;
  const numImages = images.length;
  
  // ICO Header (6 bytes)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);     // Reserved
  header.writeUInt16LE(1, 2);     // Type (1 = ICO)
  header.writeUInt16LE(numImages, 4); // Number of images
  
  // Calculate offsets
  const directorySize = numImages * 16;
  let offset = 6 + directorySize;
  
  const directories = [];
  for (const img of images) {
    const meta = await sharp(img).metadata();
    const dir = Buffer.alloc(16);
    dir.writeUInt8(meta.width >= 256 ? 0 : meta.width, 0);  // Width
    dir.writeUInt8(meta.height >= 256 ? 0 : meta.height, 1); // Height
    dir.writeUInt8(0, 2);          // Color palette
    dir.writeUInt8(0, 3);          // Reserved
    dir.writeUInt16LE(1, 4);       // Color planes
    dir.writeUInt16LE(32, 6);      // Bits per pixel
    dir.writeUInt32LE(img.length, 8);  // Image size
    dir.writeUInt32LE(offset, 12);     // Image offset
    directories.push(dir);
    offset += img.length;
  }
  
  const ico = Buffer.concat([header, ...directories, ...images]);
  fs.writeFileSync(outputPath, ico);
}

async function generateFavicons() {
  console.log('🎨 Generating favicons from company logo...\n');
  
  if (!fs.existsSync(logoPath)) {
    console.error('❌ Logo not found at:', logoPath);
    return;
  }

  const logo = sharp(logoPath);
  const metadata = await logo.metadata();
  console.log('📷 Source logo: ' + metadata.width + 'x' + metadata.height);

  // Generate PNG favicon sizes
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'favicon-144x144.png', size: 144 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
    { name: 'logo-512x512.png', size: 512 },
    { name: 'mstile-144x144.png', size: 144 },
    { name: 'web-app-manifest-192x192.png', size: 192 },
  ];

  for (const { name, size } of sizes) {
    await sharp(logoPath)
      .resize(size, size, { 
        fit: 'contain', 
        background: { r: 255, g: 255, b: 255, alpha: 1 } 
      })
      .png()
      .toFile(path.join(publicDir, name));
    console.log('  ✅ ' + name + ' (' + size + 'x' + size + ')');
  }

  // Generate multi-resolution ICO file (Google requires 48x48 minimum)
  const icoSizes = [16, 32, 48];
  const icoBuffers = [];
  for (const size of icoSizes) {
    const buffer = await sharp(logoPath)
      .resize(size, size, { 
        fit: 'contain', 
        background: { r: 255, g: 255, b: 255, alpha: 1 } 
      })
      .png()
      .toBuffer();
    icoBuffers.push(buffer);
  }
  await createIcoFile(icoBuffers, path.join(publicDir, 'favicon.ico'));
  console.log('  ✅ favicon.ico (16x16, 32x32, 48x48 multi-resolution)');

  // Generate OG image (1200x630) with logo centered on branded background
  const ogWidth = 1200;
  const ogHeight = 630;
  const logoSize = 350;
  
  const resizedLogo = await sharp(logoPath)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
    
  await sharp({
    create: {
      width: ogWidth,
      height: ogHeight,
      channels: 4,
      background: { r: 37, g: 99, b: 235, alpha: 1 }
    }
  })
  .composite([
    {
      input: resizedLogo,
      left: Math.floor((ogWidth - logoSize) / 2),
      top: Math.floor((ogHeight - logoSize) / 2) - 40
    }
  ])
  .png()
  .toFile(path.join(publicDir, 'og-image.png'));
  
  console.log('  ✅ og-image.png (1200x630)');

  // Generate SVG favicon with company branding
  const svgFavicon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
    '<rect width="100" height="100" rx="15" fill="#2563eb"/>' +
    '<text x="50" y="40" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="white" text-anchor="middle">RANCHI</text>' +
    '<text x="50" y="65" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#fbbf24" text-anchor="middle">CAB</text>' +
    '<text x="50" y="85" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">SERVICE</text>' +
    '</svg>';
  
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgFavicon);
  console.log('  ✅ favicon.svg (vector)');

  console.log('\n🎉 All favicons generated successfully!');
  console.log('📌 Google typically takes 1-2 weeks to update favicon in search results.');
  console.log('💡 TIP: Request re-indexing via Google Search Console for faster updates.');
}

generateFavicons().catch(console.error);
