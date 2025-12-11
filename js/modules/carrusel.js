/**
 * @fileoverview Módulo de Carrusel/Slider para NTC Travels & Dreams
 * Maneja Swiper.js para el banner principal
 * @module modules/carrusel
 * @author NTC Development Team
 * @version 1.0.0
 */

/**
 * @typedef {Object} SwiperConfig
 * @property {boolean} [loop=true] - Habilitar loop infinito
 * @property {number} [speed=1000] - Velocidad de transición en ms
 * @property {number} [autoplayDelay=5000] - Delay entre slides en ms
 * @property {string} [effect='fade'] - Efecto de transición
 */

// Referencia global al swiper
let bannerSwiper = null;

/**
 * Configuración por defecto del carrusel
 * @type {Object}
 */
const CONFIG_DEFAULT = {
  loop: true,
  speed: 1000,
  autoplayDelay: 5000,
  effect: 'fade',
  containerSelector: '.swiper-container',
  nextSelector: '.swiper-button-next',
  prevSelector: '.swiper-button-prev',
  paginationSelector: '.swiper-pagination',
};

/**
 * Carga Swiper desde CDN si no está disponible
 * @returns {Promise<void>}
 */
const cargarSwiperCDN = () => {
  return new Promise((resolve, reject) => {
    // Verificar si ya está cargado
    if (typeof Swiper !== 'undefined') {
      resolve();
      return;
    }

    console.log('[Carrusel] Cargando Swiper desde CDN...');

    // Cargar CSS si no existe
    if (!document.querySelector('link[href*="swiper"]')) {
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
      document.head.appendChild(cssLink);
    }

    // Cargar JS si no existe
    if (!document.querySelector('script[src*="swiper"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
      script.onload = () => {
        console.log('[Carrusel] Swiper cargado exitosamente');
        resolve();
      };
      script.onerror = () => {
        reject(new Error('Error cargando Swiper desde CDN'));
      };
      document.body.appendChild(script);
    } else {
      resolve();
    }
  });
};

/**
 * Crea la instancia del carrusel Swiper
 * @param {SwiperConfig} [config={}] - Configuración personalizada
 * @returns {Object|null} Instancia de Swiper o null si falla
 */
const crearSwiper = (config = {}) => {
  const opciones = { ...CONFIG_DEFAULT, ...config };

  const container = document.querySelector(opciones.containerSelector);
  if (!container) {
    console.warn('[Carrusel] Contenedor no encontrado:', opciones.containerSelector);
    return null;
  }

  // Verificar si ya está inicializado
  if (container.swiper) {
    console.log('[Carrusel] Ya inicializado, retornando instancia existente');
    return container.swiper;
  }

  try {
    const swiper = new Swiper(opciones.containerSelector, {
      // Configuración básica
      loop: opciones.loop,
      speed: opciones.speed,

      // Autoplay
      autoplay: {
        delay: opciones.autoplayDelay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      // Efectos
      effect: opciones.effect,
      fadeEffect: {
        crossFade: true,
      },

      // Navegación
      navigation: {
        nextEl: opciones.nextSelector,
        prevEl: opciones.prevSelector,
      },

      // Paginación
      pagination: {
        el: opciones.paginationSelector,
        clickable: true,
      },

      // Teclado
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      // Accesibilidad
      a11y: {
        prevSlideMessage: 'Slide anterior',
        nextSlideMessage: 'Slide siguiente',
        paginationBulletMessage: 'Ir al slide {{index}}',
      },

      // Eventos
      on: {
        init: function () {
          console.log('[Carrusel] Banner Swiper inicializado');
        },
        slideChange: function () {
          // Callback opcional para cambio de slide
        },
      },
    });

    return swiper;
  } catch (error) {
    console.error('[Carrusel] Error inicializando Swiper:', error);
    return null;
  }
};

/**
 * Inicializa el carrusel del banner principal
 * Carga Swiper desde CDN si no está disponible
 * @param {SwiperConfig} [config={}] - Configuración personalizada
 * @returns {Promise<Object|null>} Instancia de Swiper
 * @example
 * // Uso básico
 * import { inicializarCarrusel } from './modules/carrusel.js';
 * await inicializarCarrusel();
 *
 * @example
 * // Con opciones personalizadas
 * await inicializarCarrusel({
 *   autoplayDelay: 3000,
 *   effect: 'slide'
 * });
 */
export const inicializarCarrusel = async (config = {}) => {
  // Verificar si Swiper está disponible
  if (typeof Swiper === 'undefined') {
    try {
      await cargarSwiperCDN();
    } catch (error) {
      console.error('[Carrusel]', error.message);
      return null;
    }
  }

  // Crear el swiper
  bannerSwiper = crearSwiper(config);

  // Almacenar referencia global para debugging
  if (bannerSwiper) {
    window.ntcBannerSwiper = bannerSwiper;
  }

  return bannerSwiper;
};

/**
 * Obtiene la instancia actual del carrusel
 * @returns {Object|null} Instancia de Swiper
 */
export const obtenerCarrusel = () => {
  return bannerSwiper;
};

/**
 * Navega al slide siguiente
 * @returns {void}
 */
export const siguienteSlide = () => {
  if (bannerSwiper) {
    bannerSwiper.slideNext();
  }
};

/**
 * Navega al slide anterior
 * @returns {void}
 */
export const anteriorSlide = () => {
  if (bannerSwiper) {
    bannerSwiper.slidePrev();
  }
};

/**
 * Navega a un slide específico
 * @param {number} index - Índice del slide (0-based)
 * @param {number} [speed] - Velocidad de transición en ms
 * @returns {void}
 */
export const irASlide = (index, speed) => {
  if (bannerSwiper) {
    bannerSwiper.slideTo(index, speed);
  }
};

/**
 * Pausa el autoplay del carrusel
 * @returns {void}
 */
export const pausarCarrusel = () => {
  if (bannerSwiper && bannerSwiper.autoplay) {
    bannerSwiper.autoplay.stop();
    console.log('[Carrusel] Autoplay pausado');
  }
};

/**
 * Reanuda el autoplay del carrusel
 * @returns {void}
 */
export const reanudarCarrusel = () => {
  if (bannerSwiper && bannerSwiper.autoplay) {
    bannerSwiper.autoplay.start();
    console.log('[Carrusel] Autoplay reanudado');
  }
};

/**
 * Destruye la instancia del carrusel
 * Útil para limpiar antes de reinicializar
 * @returns {void}
 */
export const destruirCarrusel = () => {
  if (bannerSwiper) {
    bannerSwiper.destroy(true, true);
    bannerSwiper = null;
    window.ntcBannerSwiper = null;
    console.log('[Carrusel] Instancia destruida');
  }
};

/**
 * Actualiza el carrusel después de cambios en el DOM
 * @returns {void}
 */
export const actualizarCarrusel = () => {
  if (bannerSwiper) {
    bannerSwiper.update();
    console.log('[Carrusel] Actualizado');
  }
};

/**
 * Ajusta la altura del slider basado en viewport
 * @returns {void}
 */
export const ajustarAlturaSlider = () => {
  const slider = document.querySelector('.slider');
  if (!slider) return;

  const windowHeight = window.innerHeight;

  if (window.innerWidth > 1400) {
    const alturaCalculada = windowHeight * 0.9;
    slider.style.height = `${alturaCalculada}px`;
  } else {
    slider.style.height = ''; // Reset a valor CSS
  }
};

/**
 * Inicializa el listener de resize para ajustar altura
 * @returns {void}
 */
export const inicializarResizeHandler = () => {
  let resizeTimeout;

  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      ajustarAlturaSlider();
    }, 100);
  };

  window.addEventListener('resize', handleResize, { passive: true });
  window.addEventListener('load', ajustarAlturaSlider);

  // Ejecutar al inicio
  ajustarAlturaSlider();

  console.log('[Carrusel] Resize handler inicializado');
};

export default {
  inicializarCarrusel,
  obtenerCarrusel,
  siguienteSlide,
  anteriorSlide,
  irASlide,
  pausarCarrusel,
  reanudarCarrusel,
  destruirCarrusel,
  actualizarCarrusel,
  ajustarAlturaSlider,
  inicializarResizeHandler,
};
