# Setup Guide

## Prerequisites
1. Install Node.js (version 18 or higher) from [nodejs.org](https://nodejs.org/)
2. Make sure npm is available in your terminal

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development mode:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## What was fixed

1. **CSS Import Issue**: Changed from `<link>` tag to proper Astro import in `BaseLayout.astro`
2. **Tailwind CSS**: Downgraded from v4 (beta) to v3 (stable) and configured proper Astro integration
3. **Configuration**: Added proper `tailwind.config.mjs` and updated `astro.config.mjs`

## CSS Loading in Production

The CSS will now be properly bundled and optimized when you build the site. The styles are imported at the component level, which is the recommended approach in Astro.

## Troubleshooting

If you still have issues after installing dependencies:

1. Clear the `dist` folder: `rm -rf dist`
2. Clear npm cache: `npm cache clean --force`
3. Reinstall dependencies: `rm -rf node_modules && npm install`
4. Try building again: `npm run build` 