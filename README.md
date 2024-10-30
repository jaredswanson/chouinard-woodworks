# Chouinard Woodworks
This repository contains the static website for Chouinard Woodworks, a woodworking company based in Winthrop, MA.
## Features
- Responsive design optimized for mobile and desktop
- Minimalist, masculine, and earthy aesthetic
- Built with pure HTML and Tailwind CSS
- No framework used
## Local Development
To run this project locally:
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Tailwind CSS compiler in watch mode:
   ```bash
   npx tailwindcss -i styles.css -o output.css --watch
   ```
4. In a separate terminal, start a local server (either method works):
   ```bash
   # Using Python (recommended)
   python -m http.server
   # Site will be available at http://localhost:8000

   # Or using live-server (if installed)
   npx live-server
   # Site will be available at http://localhost:8080
   ```
## Deployment
This site is set up for easy deployment to Netlify. The `index.html` file and the `output.css` file should be included in the deployment.
## Design Notes
- Typography: Montserrat font
- Color Palette:
  - Night (#161616) - Background (alternating sections)
  - Eerie black (#1A1A1A) - Background (alternating sections)
  - Anti-flash white (#EEEEEE) - Text color
  - Dim gray (#736961) - Accent color
  - Lion (#C7A57A) - Accent color

## Image Processing
Product images should be optimized before deployment to improve site performance.

### Requirements
```bash
sudo dnf install ImageMagick
```

### Image Specifications
- Dimensions: 800x1067 pixels (3:4 aspect ratio)
- Format: PNG
- Max file size: <2MB (Ideally much smaller)

### Processing Images
Check current image size:
```bash
identify image.png
```

Batch resize all PNG files:
```bash
for i in *.png; do magick "$i" -resize 800x1067\> "resized-$i"; done
```

### Optimize
Optimize even further with Lossy compression a [Shortpixel](https://shortpixel.com/)

### Why These Specs?
- 800x1067 provides sufficient detail for product images while keeping file sizes manageable
- Maintaining 3:4 aspect ratio ensures consistent product presentation
- Smaller file sizes improve page load times and overall site performance

## Made in Winthrop, MA
All woodwork featured on this site is proudly made in Winthrop, MA.
