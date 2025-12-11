/**
 * @fileoverview Script de Optimización de Imágenes para NTC Travels
 * Convierte imágenes JPG/PNG a WebP y AVIF con múltiples tamaños responsivos
 *
 * @author NTC Development Team
 * @version 1.0.0
 *
 * Uso: node scripts/optimize-images.js [--clean] [--sizes] [--quality]
 */

import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';

// ============================================
// CONFIGURACIÓN
// ============================================

const CONFIG = {
  // Directorio de imágenes
  inputDir: './images',
  outputDir: './images/optimized',

  // Tamaños responsivos (anchos en píxeles)
  sizes: [400, 800, 1200, 1920],

  // Calidad de compresión
  quality: {
    webp: 80,
    avif: 65,
    jpg: 85,
  },

  // Extensiones a procesar
  extensions: ['jpg', 'jpeg', 'png'],

  // Carpetas a excluir
  excludeFolders: ['optimized', 'icons', 'favicon'],

  // Generar placeholder blur (LQIP)
  generateBlur: true,
  blurSize: 20,
};

// ============================================
// UTILIDADES
// ============================================

/**
 * Formatea bytes a formato legible
 * @param {number} bytes - Bytes a formatear
 * @returns {string}
 */
const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Obtiene el nombre base sin extensión
 * @param {string} filePath - Ruta del archivo
 * @returns {string}
 */
const getBaseName = (filePath) => {
  return path.basename(filePath, path.extname(filePath));
};

/**
 * Crea directorio si no existe
 * @param {string} dir - Ruta del directorio
 */
const ensureDir = (dir) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
};

/**
 * Obtiene la subcarpeta relativa
 * @param {string} filePath - Ruta del archivo
 * @returns {string}
 */
const getSubFolder = (filePath) => {
  const relative = path.relative(CONFIG.inputDir, path.dirname(filePath));
  return relative || '.';
};

// ============================================
// PROCESAMIENTO DE IMÁGENES
// ============================================

/**
 * Procesa una imagen individual
 * @param {string} inputPath - Ruta de la imagen original
 * @returns {Promise<Object>} Estadísticas de procesamiento
 */
async function processImage(inputPath) {
  const baseName = getBaseName(inputPath);
  const subFolder = getSubFolder(inputPath);
  const outputFolder = path.join(CONFIG.outputDir, subFolder);
  ensureDir(outputFolder);

  const stats = {
    original: inputPath,
    originalSize: (await fs.stat(inputPath)).size,
    outputs: [],
  };

  // Obtener metadata de la imagen original
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const originalWidth = metadata.width;
  const originalHeight = metadata.height;
  const aspectRatio = originalWidth / originalHeight;

  console.log(`\n📷 Procesando: ${inputPath}`);
  console.log(`   Dimensiones: ${originalWidth}x${originalHeight}`);
  console.log(`   Tamaño original: ${formatBytes(stats.originalSize)}`);

  // Generar cada tamaño
  for (const width of CONFIG.sizes) {
    // Solo generar si es menor o igual al original
    if (width > originalWidth) continue;

    const height = Math.round(width / aspectRatio);
    const resizedImage = sharp(inputPath).resize(width, height, {
      fit: 'cover',
      withoutEnlargement: true,
    });

    // WebP
    const webpPath = path.join(outputFolder, `${baseName}-${width}w.webp`);
    await resizedImage.clone().webp({ quality: CONFIG.quality.webp }).toFile(webpPath);

    const webpStats = await fs.stat(webpPath);
    stats.outputs.push({
      format: 'webp',
      width,
      path: webpPath,
      size: webpStats.size,
    });

    // AVIF
    const avifPath = path.join(outputFolder, `${baseName}-${width}w.avif`);
    await resizedImage.clone().avif({ quality: CONFIG.quality.avif }).toFile(avifPath);

    const avifStats = await fs.stat(avifPath);
    stats.outputs.push({
      format: 'avif',
      width,
      path: avifPath,
      size: avifStats.size,
    });

    // JPG optimizado (fallback)
    const jpgPath = path.join(outputFolder, `${baseName}-${width}w.jpg`);
    await resizedImage
      .clone()
      .jpeg({ quality: CONFIG.quality.jpg, progressive: true })
      .toFile(jpgPath);

    const jpgStats = await fs.stat(jpgPath);
    stats.outputs.push({
      format: 'jpg',
      width,
      path: jpgPath,
      size: jpgStats.size,
    });

    console.log(
      `   ✓ ${width}w: WebP ${formatBytes(webpStats.size)}, AVIF ${formatBytes(avifStats.size)}, JPG ${formatBytes(jpgStats.size)}`
    );
  }

  // Generar placeholder blur (LQIP)
  if (CONFIG.generateBlur) {
    const blurPath = path.join(outputFolder, `${baseName}-blur.webp`);
    await sharp(inputPath)
      .resize(CONFIG.blurSize, Math.round(CONFIG.blurSize / aspectRatio))
      .blur()
      .webp({ quality: 20 })
      .toFile(blurPath);

    const blurStats = await fs.stat(blurPath);
    stats.outputs.push({
      format: 'blur',
      width: CONFIG.blurSize,
      path: blurPath,
      size: blurStats.size,
    });
    console.log(`   ✓ Blur placeholder: ${formatBytes(blurStats.size)}`);
  }

  // Calcular ahorro total
  const totalOutputSize = stats.outputs
    .filter((o) => o.format === 'webp')
    .reduce((sum, o) => sum + o.size, 0);

  stats.savings =
    stats.originalSize - totalOutputSize / CONFIG.sizes.filter((s) => s <= originalWidth).length;
  stats.savingsPercent = ((stats.savings / stats.originalSize) * 100).toFixed(1);

  return stats;
}

/**
 * Busca todas las imágenes a procesar
 * @returns {Promise<string[]>} Lista de rutas de imágenes
 */
async function findImages() {
  const patterns = CONFIG.extensions.map((ext) => `${CONFIG.inputDir}/**/*.${ext}`);

  let allImages = [];
  for (const pattern of patterns) {
    const images = await glob(pattern, { nocase: true });
    allImages = allImages.concat(images);
  }

  // Filtrar carpetas excluidas
  return allImages.filter((img) => {
    const normalized = img.replace(/\\/g, '/');
    return !CONFIG.excludeFolders.some((folder) => normalized.includes(`/${folder}/`));
  });
}

/**
 * Genera archivo de manifiesto con información de imágenes
 * @param {Object[]} allStats - Estadísticas de todas las imágenes
 */
async function generateManifest(allStats) {
  const manifest = {
    generated: new Date().toISOString(),
    config: {
      sizes: CONFIG.sizes,
      quality: CONFIG.quality,
    },
    images: {},
  };

  for (const stat of allStats) {
    const relativePath = path.relative('.', stat.original).replace(/\\/g, '/');
    const baseName = getBaseName(stat.original);
    const subFolder = getSubFolder(stat.original);

    manifest.images[relativePath] = {
      baseName,
      folder: subFolder === '.' ? '' : subFolder,
      originalSize: stat.originalSize,
      formats: {
        webp: stat.outputs
          .filter((o) => o.format === 'webp')
          .map((o) => ({
            width: o.width,
            path: path.relative('.', o.path).replace(/\\/g, '/'),
            size: o.size,
          })),
        avif: stat.outputs
          .filter((o) => o.format === 'avif')
          .map((o) => ({
            width: o.width,
            path: path.relative('.', o.path).replace(/\\/g, '/'),
            size: o.size,
          })),
        jpg: stat.outputs
          .filter((o) => o.format === 'jpg')
          .map((o) => ({
            width: o.width,
            path: path.relative('.', o.path).replace(/\\/g, '/'),
            size: o.size,
          })),
      },
      blur: stat.outputs.find((o) => o.format === 'blur')
        ? path.relative('.', stat.outputs.find((o) => o.format === 'blur').path).replace(/\\/g, '/')
        : null,
    };
  }

  const manifestPath = path.join(CONFIG.outputDir, 'manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n📄 Manifiesto guardado en: ${manifestPath}`);
}

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

async function main() {
  console.log('🚀 NTC Image Optimizer');
  console.log('='.repeat(50));
  console.log(`📁 Directorio: ${CONFIG.inputDir}`);
  console.log(`📐 Tamaños: ${CONFIG.sizes.join(', ')}px`);
  console.log(
    `🎨 Formatos: WebP (${CONFIG.quality.webp}%), AVIF (${CONFIG.quality.avif}%), JPG (${CONFIG.quality.jpg}%)`
  );

  // Limpiar directorio de salida si se solicita
  if (process.argv.includes('--clean')) {
    console.log('\n🗑️  Limpiando directorio de salida...');
    try {
      await fs.rm(CONFIG.outputDir, { recursive: true, force: true });
    } catch (e) {
      // Ignorar si no existe
    }
  }

  ensureDir(CONFIG.outputDir);

  // Buscar imágenes
  const images = await findImages();
  console.log(`\n📸 Encontradas ${images.length} imágenes para procesar`);

  if (images.length === 0) {
    console.log('⚠️  No se encontraron imágenes para procesar');
    return;
  }

  // Procesar imágenes
  const allStats = [];
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const imagePath of images) {
    try {
      const stats = await processImage(imagePath);
      allStats.push(stats);
      totalOriginalSize += stats.originalSize;

      // Sumar tamaño WebP promedio
      const webpSizes = stats.outputs.filter((o) => o.format === 'webp').map((o) => o.size);
      if (webpSizes.length > 0) {
        totalOptimizedSize += webpSizes.reduce((a, b) => a + b, 0) / webpSizes.length;
      }
    } catch (error) {
      console.error(`❌ Error procesando ${imagePath}:`, error.message);
    }
  }

  // Generar manifiesto
  await generateManifest(allStats);

  // Resumen final
  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMEN DE OPTIMIZACIÓN');
  console.log('='.repeat(50));
  console.log(`✅ Imágenes procesadas: ${allStats.length}`);
  console.log(`📦 Tamaño original total: ${formatBytes(totalOriginalSize)}`);
  console.log(`📦 Tamaño optimizado (WebP promedio): ${formatBytes(totalOptimizedSize)}`);
  console.log(
    `💾 Ahorro estimado: ${formatBytes(totalOriginalSize - totalOptimizedSize)} (${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%)`
  );
  console.log('\n🎉 ¡Optimización completada!');
}

main().catch(console.error);
