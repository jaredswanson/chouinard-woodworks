# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Chouinard Woodworks, a woodworking company in Winthrop, MA. The site is built with pure HTML and Tailwind CSS without any JavaScript framework, featuring a minimalist, masculine, and earthy design aesthetic.

## Development Commands

### Build & Development
- `npm run build` - Build CSS for production
- `npm run dev` - Start Tailwind CSS compiler in watch mode
- `python -m http.server` or `npx live-server` - Start local development server

### Image Processing
Product images should follow strict specifications:
- Dimensions: 800x1067 pixels (3:4 aspect ratio)  
- Format: PNG
- Max file size: <2MB
- Batch resize: `for i in *.png; do magick "$i" -resize 800x1067\> "resized-$i"; done`
- Further optimize with [Shortpixel](https://shortpixel.com/)

## Architecture

### Styling System
- **Framework**: Tailwind CSS (loaded via CDN in production)
- **Configuration**: Dual config system - `tailwind.config.js` for development and inline config in HTML for CDN
- **Color Palette**: Custom colors defined for brand consistency:
  - `night` (#161616) - Primary background
  - `eerie-black` (#1A1A1A) - Alternate background  
  - `anti-flash-white` (#EEEEEE) - Primary text
  - `dim-gray` (#736961) - Accent color
  - `lion` (#C7A57A) - Brand accent color
- **Typography**: Montserrat font family from Google Fonts

### Content Structure
- **Single Page Application**: All content in `index.html`
- **Section-based Layout**: Alternating background colors between sections
- **Product Grid**: Uses responsive CSS Grid for product displays
- **Hero Section**: Full-width header with background image overlay
- **Contact Integration**: Direct links to email, phone, and Instagram

### Image Management
All product images stored in `/images/` directory with consistent naming convention. Images are referenced with relative paths and optimized for web performance.

### Deployment
Configured for Netlify deployment with static file serving. The built `output.css` file must be included in deployments.