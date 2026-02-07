/**
 * Image Optimization Script
 * Converts vehicle images to WebP and compresses the logo PNG
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const vehiclesDir = join(__dirname, '..', 'src', 'assets', 'images', 'vehicles');
const logosDir = join(__dirname, '..', 'src', 'assets', 'images', 'logos');

async function getFileSize(filePath) {
  const s = await stat(filePath);
  return s.size;
}

async function optimizeVehicleImages() {
  console.log('\n🚗 Optimizing vehicle images...\n');
  
  const files = await readdir(vehiclesDir);
  
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    const name = basename(file, ext);
    const inputPath = join(vehiclesDir, file);
    
    // Skip already optimized WebP/AVIF files
    if (ext === '.webp' || ext === '.avif') {
      console.log(`  ⏭️  ${file} - already optimized format`);
      continue;
    }
    
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
    
    const originalSize = await getFileSize(inputPath);
    const outputPath = join(vehiclesDir, `${name}.webp`);
    
    // Determine dimensions based on usage
    let maxWidth = 600; // Vehicle card images
    if (name.startsWith('hero-bg')) {
      maxWidth = 1920; // Hero backgrounds need full width
    } else if (name === 'luxury-car') {
      maxWidth = 800;
    }
    
    try {
      await sharp(inputPath)
        .resize(maxWidth, undefined, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const newSize = await getFileSize(outputPath);
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
      console.log(`  ✅ ${file} → ${name}.webp | ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${savings}% smaller)`);
    } catch (err) {
      console.error(`  ❌ ${file}: ${err.message}`);
    }
  }
}

async function optimizeLogo() {
  console.log('\n🎨 Optimizing logo...\n');
  
  const logoPath = join(logosDir, 'ranchicabserviceslogo.png');
  const originalSize = await getFileSize(logoPath);
  
  // Create optimized WebP version for header (64x64 display)
  const webpPath = join(logosDir, 'ranchicabserviceslogo.webp');
  await sharp(logoPath)
    .resize(128, 128, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .webp({ quality: 85 })
    .toFile(webpPath);
  
  const webpSize = await getFileSize(webpPath);
  console.log(`  ✅ Logo WebP (128x128): ${(originalSize/1024).toFixed(0)}KB → ${(webpSize/1024).toFixed(0)}KB (${((1 - webpSize/originalSize)*100).toFixed(1)}% smaller)`);
  
  // Also create a compressed PNG version as fallback
  const compressedPath = join(logosDir, 'ranchicabserviceslogo-compressed.png');
  await sharp(logoPath)
    .resize(128, 128, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(compressedPath);
  
  const compressedSize = await getFileSize(compressedPath);
  console.log(`  ✅ Logo PNG (128x128): ${(originalSize/1024).toFixed(0)}KB → ${(compressedSize/1024).toFixed(0)}KB`);
}

async function main() {
  console.log('🔧 Image Optimization Starting...');
  await optimizeLogo();
  await optimizeVehicleImages();
  console.log('\n✨ Done! Update imports in source files to use .webp versions.\n');
}

main().catch(console.error);
