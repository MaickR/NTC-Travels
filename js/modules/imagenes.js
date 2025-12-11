/**
 * @fileoverview Módulo de Lazy Loading de Imágenes para NTC Travels
 * Implementa lazy loading nativo con fallback a Intersection Observer,
 * placeholders blur (LQIP), y optimizaciones de rendimiento.
 *
 * @module modules/imagenes
 * @author NTC Development Team
 * @version 1.0.0
 */

/**
 * @typedef {Object} LazyImageOptions
 * @property {string} [rootMargin='50px'] - Margen para cargar antes de llegar al viewport
 * @property {number} [threshold=0.01] - Umbral de visibilidad
 * @property {boolean} [useBlur=true] - Usar efecto blur placeholder
 * @property {boolean} [useFade=true] - Usar fade in al cargar
 * @property {string} [loadedClass='loaded'] - Clase a añadir cuando carga
 */

/** @type {LazyImageOptions} */
const DEFAULTS = {
  rootMargin: '50px',
  threshold: 0.01,
  useBlur: true,
  useFade: true,
  loadedClass: 'loaded',
};

/**
 * Verifica si el navegador soporta lazy loading nativo
 * @returns {boolean}
 */
export const soportaLazyLoadingNativo = () => {
  return 'loading' in HTMLImageElement.prototype;
};

/**
 * Verifica si el navegador soporta Intersection Observer
 * @returns {boolean}
 */
export const soportaIntersectionObserver = () => {
  return 'IntersectionObserver' in window;
};

/**
 * Aplica efecto blur a una imagen con placeholder
 * @param {HTMLImageElement} img - Elemento imagen
 */
const aplicarBlurPlaceholder = (img) => {
  const blurSrc = img.dataset.blur;
  if (!blurSrc) return;

  // Crear imagen de blur como fondo
  img.style.backgroundImage = `url(${blurSrc})`;
  img.style.backgroundSize = 'cover';
  img.style.backgroundPosition = 'center';
  img.classList.add('img-blur-placeholder');
};

/**
 * Maneja la carga exitosa de una imagen
 * @param {HTMLImageElement} img - Elemento imagen
 * @param {LazyImageOptions} options - Opciones
 */
const onImageLoaded = (img, options) => {
  img.classList.add(options.loadedClass);

  // Limpiar blur placeholder
  if (options.useBlur) {
    img.style.backgroundImage = '';
    img.classList.remove('img-blur-placeholder');
  }

  // Disparar evento personalizado
  img.dispatchEvent(
    new CustomEvent('lazyloaded', {
      bubbles: true,
      detail: { src: img.src },
    })
  );
};

/**
 * Maneja el error de carga de una imagen
 * @param {HTMLImageElement} img - Elemento imagen
 */
const onImageError = (img) => {
  console.warn('[LazyImages] Error cargando imagen:', img.dataset.src || img.src);

  // Intentar cargar fallback si existe
  const fallback = img.dataset.fallback;
  if (fallback && img.src !== fallback) {
    img.src = fallback;
  }
};

/**
 * Carga una imagen de forma lazy
 * @param {HTMLImageElement} img - Elemento imagen
 * @param {LazyImageOptions} options - Opciones
 */
const cargarImagen = (img, options) => {
  const src = img.dataset.src;
  const srcset = img.dataset.srcset;

  if (!src && !srcset) return;

  // Configurar eventos
  img.addEventListener('load', () => onImageLoaded(img, options), { once: true });

  img.addEventListener('error', () => onImageError(img), { once: true });

  // Aplicar src y srcset
  if (srcset) {
    img.srcset = srcset;
  }
  if (src) {
    img.src = src;
  }

  // Limpiar data attributes
  delete img.dataset.src;
  delete img.dataset.srcset;
};

/**
 * Crea un Intersection Observer para lazy loading
 * @param {LazyImageOptions} options - Opciones
 * @returns {IntersectionObserver}
 */
const crearObserver = (options) => {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          cargarImagen(img, options);
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: options.rootMargin,
      threshold: options.threshold,
    }
  );
};

/**
 * Inicializa lazy loading para imágenes con data-src
 * @param {string} [selector='img[data-src]'] - Selector de imágenes
 * @param {Partial<LazyImageOptions>} [customOptions={}] - Opciones personalizadas
 */
export const inicializarLazyLoading = (selector = 'img[data-src]', customOptions = {}) => {
  const options = { ...DEFAULTS, ...customOptions };
  const imagenes = document.querySelectorAll(selector);

  if (imagenes.length === 0) {
    console.log('[LazyImages] No se encontraron imágenes para lazy loading');
    return;
  }

  console.log(`[LazyImages] Inicializando ${imagenes.length} imágenes`);

  // Aplicar blur placeholders si está habilitado
  if (options.useBlur) {
    imagenes.forEach((img) => aplicarBlurPlaceholder(img));
  }

  // Usar Intersection Observer si está disponible
  if (soportaIntersectionObserver()) {
    const observer = crearObserver(options);
    imagenes.forEach((img) => observer.observe(img));
  } else {
    // Fallback: cargar todas inmediatamente
    console.warn('[LazyImages] Intersection Observer no soportado, cargando todas las imágenes');
    imagenes.forEach((img) => cargarImagen(img, options));
  }
};

/**
 * Precarga imágenes críticas
 * @param {string[]} srcs - Array de URLs de imágenes a precargar
 * @returns {Promise<void[]>}
 */
export const precargarImagenes = (srcs) => {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        })
    )
  );
};

/**
 * Obtiene la mejor imagen según el viewport
 * @param {Object} manifest - Manifiesto de imágenes optimizadas
 * @param {string} imagePath - Ruta de la imagen original
 * @param {number} [viewportWidth=window.innerWidth] - Ancho del viewport
 * @returns {string|null} Ruta de la mejor imagen
 */
export const obtenerMejorImagen = (manifest, imagePath, viewportWidth = window.innerWidth) => {
  const imageInfo = manifest.images?.[imagePath];
  if (!imageInfo) return null;

  // Determinar el ancho objetivo
  const targetWidth = viewportWidth * (window.devicePixelRatio || 1);

  // Buscar el formato más eficiente soportado
  const formatos = ['avif', 'webp', 'jpg'];
  for (const formato of formatos) {
    const variantes = imageInfo.formats?.[formato];
    if (!variantes || variantes.length === 0) continue;

    // Encontrar la variante más cercana al ancho objetivo
    const mejor = variantes.reduce((prev, curr) => {
      const prevDiff = Math.abs(prev.width - targetWidth);
      const currDiff = Math.abs(curr.width - targetWidth);
      return currDiff < prevDiff ? curr : prev;
    });

    if (mejor) return mejor.path;
  }

  return null;
};

/**
 * Detecta soporte de formatos de imagen modernos
 * @returns {Promise<{avif: boolean, webp: boolean}>}
 */
export const detectarSoporteFormatos = async () => {
  const soporta = {
    avif: false,
    webp: false,
  };

  // Test WebP
  const webpData =
    'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  soporta.webp = await new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.width === 1);
    img.onerror = () => resolve(false);
    img.src = webpData;
  });

  // Test AVIF
  const avifData =
    'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKBzgABpAQ0AIAyCD0JgAA';
  soporta.avif = await new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.width === 2);
    img.onerror = () => resolve(false);
    img.src = avifData;
  });

  return soporta;
};

/**
 * Añade clase al body indicando soporte de formatos
 */
export const marcarSoporteFormatos = async () => {
  const soporte = await detectarSoporteFormatos();
  const body = document.body;

  if (soporte.avif) body.classList.add('avif-support');
  if (soporte.webp) body.classList.add('webp-support');

  console.log('[LazyImages] Soporte de formatos:', soporte);
};

// Exportar por defecto
export default {
  inicializarLazyLoading,
  precargarImagenes,
  obtenerMejorImagen,
  detectarSoporteFormatos,
  marcarSoporteFormatos,
  soportaLazyLoadingNativo,
  soportaIntersectionObserver,
};
