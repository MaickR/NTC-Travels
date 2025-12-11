/**
 * @fileoverview Archivo principal de JavaScript para NTC Travels & Dreams
 * Punto de entrada que importa y orquesta todos los módulos ES6
 * @module main
 * @author NTC Development Team
 * @version 2.0.0
 * @since December 2025
 */

// ============================================
// IMPORTACIÓN DE MÓDULOS ES6
// ============================================
import './ntc-plugins.js'; // Legacy plugins
import './particlerun.js'; // Particle effects
import { inicializarPreloader } from './modules/preloader.js';
import { inicializarContadores, inicializarCountdown } from './modules/contador.js';
import { actualizarTodosLosPrecios, esDescuentoActivo } from './modules/precios.js';
import {
  manejarCTAWhatsApp,
  manejarCardWhatsApp,
  manejarFormularioContacto,
} from './modules/whatsapp.js';
import { inicializarNavegacion, actualizarNavActivo } from './modules/navegacion.js';
import {
  inicializarCarrusel,
  inicializarResizeHandler,
  ajustarAlturaSlider,
} from './modules/carrusel.js';
import { marcarSoporteFormatos, inicializarLazyLoading } from './modules/imagenes.js';

// ============================================
// UTILIDADES VANILLA JS (Reemplazo de jQuery)
// ============================================

/**
 * Selector shorthand similar a jQuery
 * @param {string} selector - Selector CSS
 * @param {Element} [context=document] - Contexto de búsqueda
 * @returns {Element|null}
 */
const $ = (selector, context = document) => context.querySelector(selector);

/**
 * Selector múltiple shorthand
 * @param {string} selector - Selector CSS
 * @param {Element} [context=document] - Contexto de búsqueda
 * @returns {NodeList}
 */
const $$ = (selector, context = document) => context.querySelectorAll(selector);

/**
 * Añade evento a elemento(s)
 * @param {Element|NodeList|string} target - Elemento o selector
 * @param {string} event - Nombre del evento
 * @param {Function} handler - Manejador del evento
 * @param {Object} [options] - Opciones del evento
 */
const on = (target, event, handler, options = {}) => {
  const elements =
    typeof target === 'string' ? $$(target) : target instanceof NodeList ? target : [target];

  elements.forEach((el) => {
    if (el && el.addEventListener) {
      el.addEventListener(event, handler, options);
    }
  });
};

/**
 * Efecto fadeOut vanilla JS
 * @param {Element} element - Elemento a ocultar
 * @param {number} [duration=300] - Duración en ms
 * @returns {Promise<void>}
 */
const fadeOut = (element, duration = 300) => {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }
    element.style.transition = `opacity ${duration}ms ease-out`;
    element.style.opacity = '0';
    setTimeout(() => {
      element.style.display = 'none';
      resolve();
    }, duration);
  });
};

/**
 * Efecto fadeIn vanilla JS
 * @param {Element} element - Elemento a mostrar
 * @param {number} [duration=300] - Duración en ms
 * @returns {Promise<void>}
 */
const fadeIn = (element, duration = 300) => {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }
    element.style.opacity = '0';
    element.style.display = 'block';
    requestAnimationFrame(() => {
      element.style.transition = `opacity ${duration}ms ease-in`;
      element.style.opacity = '1';
      setTimeout(resolve, duration);
    });
  });
};

// ============================================
// CONFIGURACIÓN DE DESCUENTOS (Egypt/India)
// ============================================

/**
 * Verifica si el descuento de Egipto está activo
 * @returns {boolean}
 */
const isEgyptDiscountActive = () => esDescuentoActivo('egipto');

/**
 * Actualiza la visualización de precios con descuento
 */
const updateEgyptPriceDisplay = () => {
  const hasDiscount = isEgyptDiscountActive();

  // Elementos en index.html
  const discountCard = $('#egypt-discount-card');
  if (discountCard) {
    discountCard.style.display = hasDiscount ? 'block' : 'none';
  }

  // Elementos en tour-egypt.html
  const headerDiscount = $('#egypt-header-discount');
  if (headerDiscount) {
    headerDiscount.style.display = hasDiscount ? 'inline' : 'none';
  }

  const mainDiscount = $('#egypt-main-discount');
  if (mainDiscount) {
    mainDiscount.style.display = hasDiscount ? 'block' : 'none';
  }
};

// ============================================
// FUNCIONALIDAD DE BÚSQUEDA
// ============================================

/**
 * Inicializa la funcionalidad de búsqueda
 */
const initSearch = () => {
  // Abrir búsqueda
  on('a[href="#search1"]', 'click', (e) => {
    e.preventDefault();
    const searchModal = $('#search1');
    if (searchModal) {
      searchModal.classList.add('open');
      const searchInput = $('input[type="search"]', searchModal);
      if (searchInput) searchInput.focus();
    }
  });

  // Cerrar búsqueda
  const searchModal = $('#search1');
  if (searchModal) {
    on(searchModal, 'click', (e) => {
      if (e.target === searchModal || e.target.classList.contains('close')) {
        searchModal.classList.remove('open');
      }
    });

    on(searchModal, 'keyup', (e) => {
      if (e.keyCode === 27) {
        // ESC
        searchModal.classList.remove('open');
      }
    });
  }
};

// ============================================
// BOTÓN BACK TO TOP
// ============================================

/**
 * Inicializa el botón "Back to Top"
 */
const initBackToTop = () => {
  const backToTop = $('#back-to-top');
  if (!backToTop) return;

  // Click handler
  on(backToTop, 'click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // También para .back-to-top
  on('.back-to-top', 'click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Mostrar/ocultar basado en scroll
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 500) {
            fadeIn(backToTop, 200);
          } else {
            fadeOut(backToTop, 200);
          }
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
};

// ============================================
// SLICK SLIDERS (Requiere jQuery + Slick)
// ============================================

/**
 * Inicializa todos los sliders Slick
 * Nota: Slick requiere jQuery, se mantiene por dependencia
 */
const initSlickSliders = () => {
  if (typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') {
    console.warn('[Main] Slick slider no disponible');
    return;
  }

  const sliders = [
    {
      selector: '.slider-store',
      config: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        asNavFor: '.slider-thumbs',
      },
    },
    {
      selector: '.slider-thumbs',
      config: {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-store',
        dots: false,
        arrows: false,
        autoplay: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{ breakpoint: 800, settings: { arrows: false } }],
      },
    },
    {
      selector: '.review-slider',
      config: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        rows: 0,
        autoplay: true,
        speed: 2000,
        responsive: [{ breakpoint: 991, settings: { slidesToShow: 1, arrows: false } }],
      },
    },
    {
      selector: '.review-slider1',
      config: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        rows: 0,
        autoplay: true,
        speed: 5000,
        responsive: [{ breakpoint: 1100, settings: { slidesToShow: 1 } }],
      },
    },
    {
      selector: '.about-slider',
      config: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        rows: 0,
        speed: 4000,
        responsive: [{ breakpoint: 700, settings: { arrows: false } }],
      },
    },
    {
      selector: '.side-slider',
      config: {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        rows: 0,
        dots: false,
        autoplay: true,
        speed: 4000,
        responsive: [
          { breakpoint: 1000, settings: { slidesToShow: 3 } },
          { breakpoint: 811, settings: { slidesToShow: 2 } },
          { breakpoint: 500, settings: { slidesToShow: 1 } },
        ],
      },
    },
    {
      selector: '.attract-slider',
      config: {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 2000,
        rows: 0,
        autoplay: true,
        draggable: false,
        responsive: [
          { breakpoint: 1000, settings: { slidesToShow: 4 } },
          { breakpoint: 600, settings: { slidesToShow: 3 } },
          { breakpoint: 500, settings: { slidesToShow: 2 } },
        ],
      },
    },
    {
      selector: '.team-slider',
      config: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 1000,
        rows: 0,
        responsive: [
          { breakpoint: 1000, settings: { slidesToShow: 2 } },
          { breakpoint: 750, settings: { slidesToShow: 1 } },
        ],
      },
    },
    {
      selector: '.item-slider',
      config: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        responsive: [
          { breakpoint: 1000, settings: { slidesToShow: 2, arrows: false } },
          { breakpoint: 750, settings: { slidesToShow: 1, arrows: false } },
        ],
      },
    },
    {
      selector: '.item-slider1',
      config: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        responsive: [
          { breakpoint: 1000, settings: { slidesToShow: 1, arrows: false } },
          { breakpoint: 750, settings: { slidesToShow: 1, arrows: false } },
        ],
      },
    },
    {
      selector: '.item-slider2',
      config: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        responsive: [
          { breakpoint: 1199, settings: { slidesToShow: 3, arrows: true } },
          { breakpoint: 1000, settings: { slidesToShow: 2, arrows: false } },
          { breakpoint: 750, settings: { slidesToShow: 1, arrows: false } },
        ],
      },
    },
    {
      selector: '.banner-slider',
      config: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        responsive: [
          { breakpoint: 1000, settings: { slidesToShow: 2 } },
          { breakpoint: 800, settings: { slidesToShow: 1 } },
        ],
      },
    },
    {
      selector: '.shop-slider',
      config: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        responsive: [
          { breakpoint: 1000, settings: { slidesToShow: 2 } },
          { breakpoint: 800, settings: { slidesToShow: 1 } },
        ],
      },
    },
    {
      selector: '.sl-testimonial-slider',
      config: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 8000,
        rows: 0,
        infinite: true,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
      },
    },
    {
      selector: '.partner-slider',
      config: {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        responsive: [
          { breakpoint: 1000, settings: { slidesToShow: 3 } },
          { breakpoint: 800, settings: { slidesToShow: 2 } },
          { breakpoint: 500, settings: { slidesToShow: 1 } },
        ],
      },
    },
    {
      selector: '.blog-slider',
      config: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        responsive: [
          { breakpoint: 1199, settings: { slidesToShow: 3, arrows: true } },
          { breakpoint: 1000, settings: { slidesToShow: 3, arrows: false } },
          { breakpoint: 750, settings: { slidesToShow: 1, arrows: false } },
        ],
      },
    },
    {
      selector: '.promo-slider',
      config: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows: 0,
        responsive: [
          { breakpoint: 1000, settings: { slidesToShow: 3, arrows: false } },
          { breakpoint: 750, settings: { slidesToShow: 1, arrows: false } },
        ],
      },
    },
  ];

  // Inicializar cada slider
  sliders.forEach(({ selector, config }) => {
    const $el = jQuery(selector);
    if ($el.length > 0) {
      $el.slick(config);
    }
  });

  console.log('[Main] Slick sliders inicializados');
};

// ============================================
// MODAL VIDEO (Requiere jQuery + modalVideo)
// ============================================

/**
 * Inicializa modal video si está disponible
 */
const initModalVideo = () => {
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.modalVideo !== 'undefined') {
    jQuery('.js-video-button').modalVideo({
      channel: 'vimeo',
    });
    console.log('[Main] Modal video inicializado');
  }
};

// ============================================
// COUNTER UP (Requiere jQuery + counterUp)
// ============================================

/**
 * Inicializa counterUp plugin si está disponible
 * Fallback a nuestro módulo nativo
 */
const initCounterUp = () => {
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.counterUp !== 'undefined') {
    jQuery('.value').counterUp({
      delay: 50,
      time: 1000,
    });
    console.log('[Main] CounterUp (jQuery) inicializado');
  } else {
    // Usar nuestro módulo nativo
    inicializarContadores('.value', {
      duracion: 1000,
      delay: 50,
    });
  }
};

// ============================================
// VALIDACIÓN DE FORMULARIOS
// ============================================

/**
 * Inicializa validación de formularios
 */
const initFormValidation = () => {
  // Prevenir envío por defecto de formularios (demo)
  $$('form').forEach((form) => {
    // Excepto el formulario de contacto NTC
    if (form.id === 'contactform_ntc') return;

    on(form, 'submit', (e) => {
      e.preventDefault();
      return false;
    });
  });

  // jQuery validate para contactform2 si existe
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.validate !== 'undefined') {
    const contactForm2 = jQuery('#contactform2');
    if (contactForm2.length > 0) {
      contactForm2.validate({
        submitHandler: function () {
          jQuery.ajax({
            url: 'mail/contact.php',
            type: 'POST',
            data: {
              fname: jQuery('input[name="first_name"]').val(),
              lname: jQuery('input[name="last_name"]').val(),
              email: jQuery('input[name="email"]').val(),
              phone: jQuery('input[name="phone"]').val(),
              comments: jQuery('textarea[name="comments"]').val(),
            },
            success: function (result) {
              jQuery('#contactform-error-msg').html(result);
              jQuery('#contactform2')[0].reset();
            },
          });
        },
      });
    }
  }
};

// ============================================
// FORMULARIO DE CONTACTO NTC
// ============================================

/**
 * Actualiza campos dinámicos del formulario de contacto
 */
window.updateFormFields = function () {
  const inquiryType = $('#ntc_inquiry_type');
  if (!inquiryType) return;

  const groups = {
    travelers: $('#travelers_group'),
    dates: $('#dates_group'),
    payment: $('#payment_group'),
    travelStyle: $('#travel_style_group'),
    priority: $('#priority_group'),
  };

  const tourDatesInfo = $('#tour_dates_info');

  // Ocultar todos primero
  Object.values(groups).forEach((el) => {
    if (el) el.style.display = 'none';
  });
  if (tourDatesInfo) tourDatesInfo.textContent = '';

  const type = inquiryType.value;

  // Configurar visibilidad según tipo
  const configs = {
    booking_india: {
      show: ['travelers', 'dates', 'payment', 'travelStyle', 'priority'],
      info: 'Confirmed Dates: April 22 - May 3, 2026',
    },
    booking_egypt: {
      show: ['travelers', 'dates', 'payment', 'travelStyle', 'priority'],
      info: 'Confirmed Dates: Sept 16 - 26, 2026',
    },
    question_india: {
      show: ['travelers', 'dates'],
      info: 'Dates: April 22 - May 3, 2026',
    },
    question_egypt: {
      show: ['travelers', 'dates'],
      info: 'Dates: Sept 16 - 26, 2026',
    },
    question_general: {
      show: ['travelers', 'dates', 'travelStyle', 'priority'],
      info: 'Share your preferred dates or month.',
    },
  };

  const config = configs[type];
  if (config) {
    config.show.forEach((key) => {
      if (groups[key]) groups[key].style.display = 'block';
    });
    if (tourDatesInfo && config.info) {
      tourDatesInfo.textContent = config.info;
    }
  }
};

/**
 * Manejador del formulario de contacto NTC
 * Exportado globalmente para uso en onclick
 */
window.handleContactFormNTC = manejarFormularioContacto;

// ============================================
// MANEJADORES WHATSAPP GLOBALES
// ============================================

// Exportar para uso en atributos onclick del HTML
window.handleCTAWhatsApp = manejarCTAWhatsApp;
window.handleCardWhatsApp = manejarCardWhatsApp;

// ============================================
// GESTIÓN DE LAYOUT RESPONSIVO
// ============================================

/**
 * Actualiza el layout de trend-box según número de tarjetas
 */
const updateTrendBoxLayout = () => {
  const trendBox = $('.trend-box');
  if (!trendBox) return;

  const cardCount = $$('.trend-box .col-lg-4').length;

  if (cardCount > 3) {
    trendBox.classList.add('has-more-cards');
  } else {
    trendBox.classList.remove('has-more-cards');
  }
};

// ============================================
// INICIALIZACIÓN PRINCIPAL
// ============================================

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
const initApp = async () => {
  console.log('[NTC] Inicializando aplicación...');

  // 0. Detectar soporte de formatos de imagen modernos
  marcarSoporteFormatos();

  // 1. Preloader (usando nuestro módulo)
  await inicializarPreloader();

  // 2. Actualizar precios y descuentos
  updateEgyptPriceDisplay();
  actualizarTodosLosPrecios();

  // 3. Inicializar navegación (módulo)
  inicializarNavegacion();

  // 4. Inicializar carrusel del banner (módulo)
  await inicializarCarrusel();
  inicializarResizeHandler();

  // 5. Funcionalidades vanilla JS
  initSearch();
  initBackToTop();
  updateTrendBoxLayout();

  // 6. Plugins que requieren jQuery
  initSlickSliders();
  initModalVideo();
  initCounterUp();
  initFormValidation();

  // 7. Countdown
  inicializarCountdown('coming-counter');

  // 8. Lazy loading para imágenes con data-src
  inicializarLazyLoading('img[data-src]', {
    useBlur: true,
    useFade: true,
  });

  // 9. Event listeners adicionales
  window.addEventListener('resize', updateTrendBoxLayout, { passive: true });

  console.log('[NTC] Aplicación inicializada correctamente');
};

// ============================================
// EVENT LISTENERS PRINCIPALES
// ============================================

// Cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // DOM ya está listo
  initApp();
}

// Resize handler para slider
window.addEventListener('resize', ajustarAlturaSlider, { passive: true });
window.addEventListener('load', ajustarAlturaSlider);

// ============================================
// EXPORTACIONES PARA USO EXTERNO
// ============================================

export { initApp, updateEgyptPriceDisplay, updateTrendBoxLayout, fadeIn, fadeOut };
