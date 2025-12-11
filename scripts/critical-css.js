/**
 * Critical CSS Generator
 * Generates inline critical CSS for above-the-fold content
 */

import Critters from 'critters';
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

const DIST_DIR = './dist';
const CRITICAL_OPTIONS = {
  // Inline critical CSS directly into HTML
  inlineFonts: true,

  // Preload non-critical CSS
  preload: 'swap',

  // Remove non-critical CSS from HTML
  pruneSource: false,

  // Add async loading for external stylesheets
  noscriptFallback: true,

  // Inline fonts as base64
  fonts: true,

  // CSS keyframes handling
  keyframes: 'critical',

  // Merge inline styles
  mergeStylesheets: true,

  // Additional critical selectors
  additionalStylesheets: [],

  // Logging
  logLevel: 'info',
};

async function generateCriticalCSS() {
  console.log('🎨 Generating Critical CSS...\n');

  const critters = new Critters({
    path: DIST_DIR,
    publicPath: './',
    ...CRITICAL_OPTIONS,
  });

  try {
    // Find all HTML files in dist
    const htmlFiles = await glob(`${DIST_DIR}/**/*.html`);

    if (htmlFiles.length === 0) {
      console.log('⚠️  No HTML files found in dist/. Run "npm run build" first.');
      return;
    }

    console.log(`📄 Found ${htmlFiles.length} HTML file(s)\n`);

    for (const htmlFile of htmlFiles) {
      const fileName = path.basename(htmlFile);
      console.log(`  Processing: ${fileName}`);

      // Read HTML
      const html = await fs.readFile(htmlFile, 'utf8');

      // Process with Critters
      const inlined = await critters.process(html);

      // Write back
      await fs.writeFile(htmlFile, inlined, 'utf8');

      // Calculate savings
      const originalSize = Buffer.byteLength(html, 'utf8');
      const newSize = Buffer.byteLength(inlined, 'utf8');
      const diff = newSize - originalSize;
      const sign = diff > 0 ? '+' : '';

      console.log(`    ✅ Critical CSS inlined (${sign}${(diff / 1024).toFixed(2)} KB)\n`);
    }

    console.log('✨ Critical CSS generation complete!\n');
  } catch (error) {
    console.error('❌ Error generating critical CSS:', error);
    process.exit(1);
  }
}

// Run if called directly
generateCriticalCSS();
