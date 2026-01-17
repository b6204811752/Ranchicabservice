# Assets Directory

This folder contains all static assets for the Ranchi Cab Service website.

## 📁 Folder Structure

```
assets/
├── images/
│   ├── logos/          # Company logos (header, footer)
│   ├── banners/        # Hero banners and promotional images
│   ├── vehicles/       # Vehicle/fleet images
│   ├── icons/          # Custom icon images
│   └── gallery/        # General images and photos
```

## 📸 Image Guidelines

### Logos
- **Format**: PNG with transparent background
- **Size**: 200x60px (header), 300x90px (footer)
- **Files**: `logo.png`, `logo-white.png`, `logo-dark.png`

### Banners
- **Format**: JPG or WebP
- **Size**: 1920x800px (desktop), 800x600px (mobile)
- **Quality**: 80-85% compression
- **Files**: `hero-banner.jpg`, `about-banner.jpg`, etc.

### Vehicles
- **Format**: PNG or JPG
- **Size**: 800x600px or 1200x900px
- **Quality**: High quality, well-lit photos
- **Files**: 
  - `sedan.jpg`
  - `suv.jpg`
  - `innova-crysta.jpg`
  - `tempo-traveller.jpg`
  - `luxury-sedan.jpg`
  - `mini-bus.jpg`

### Icons
- **Format**: PNG or SVG
- **Size**: 64x64px or 128x128px
- **Files**: Custom icons not available in Lucide React

### Gallery
- **Format**: JPG or WebP
- **Size**: Various (optimize for web)
- **Files**: Customer photos, service images, etc.

## 🎯 Usage Example

```tsx
import logo from '@/assets/images/logos/logo.png'
import sedanImage from '@/assets/images/vehicles/sedan.jpg'
import heroBanner from '@/assets/images/banners/hero-banner.jpg'

function Header() {
  return <img src={logo} alt="Ranchi Cab Service" />
}
```

## ⚡ Optimization Tips

1. **Compress Images**: Use TinyPNG or ImageOptim
2. **Use WebP**: Modern format for better compression
3. **Responsive Images**: Provide multiple sizes
4. **Lazy Loading**: Load images on demand
5. **CDN**: Consider using a CDN for faster delivery

## 📝 Naming Convention

- Use lowercase with hyphens: `vehicle-sedan.jpg`
- Be descriptive: `hero-banner-homepage.jpg`
- Include version if needed: `logo-v2.png`
- Avoid spaces and special characters
