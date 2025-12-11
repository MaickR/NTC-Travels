/**
 * @fileoverview Módulo de Gestión de Precios para NTC Travels & Dreams
 * @module modules/precios
 * @author NTC Development Team
 * @version 1.0.0
 */

import { NTC_CONFIG } from '../config.js';

/**
 * @typedef {Object} PrecioTour
 * @property {number} precioBase - Precio base del tour
 * @property {number} [descuento] - Monto del descuento
 * @property {number} [precioConDescuento] - Precio final con descuento
 * @property {string} moneda - Código de moneda (USD, EUR, etc.)
 */

/**
 * Formatea un precio con separador de miles
 * @param {number} precio - Precio a formatear
 * @param {string} [locale='en-US'] - Locale para formateo
 * @returns {string} Precio formateado
 * @example
 * formatearPrecio(3499); // "3,499"
 * formatearPrecio(3499.99, 'es-ES'); // "3.499,99"
 */
export const formatearPrecio = (precio, locale = 'en-US') => {
  if (typeof precio !== 'number' || isNaN(precio)) {
    console.warn('[Precios] Valor inválido:', precio);
    return '0';
  }

  return precio.toLocaleString(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

/**
 * Formatea un precio con símbolo de moneda
 * @param {number} precio - Precio a formatear
 * @param {string} [moneda='USD'] - Código de moneda ISO
 * @param {string} [locale='en-US'] - Locale para formateo
 * @returns {string} Precio con símbolo de moneda
 * @example
 * formatearConMoneda(3499); // "$3,499"
 * formatearConMoneda(3499, 'EUR', 'es-ES'); // "3.499 €"
 */
export const formatearConMoneda = (precio, moneda = 'USD', locale = 'en-US') => {
  if (typeof precio !== 'number' || isNaN(precio)) {
    return '$0';
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: moneda,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(precio);
};

/**
 * Calcula el precio con descuento
 * @param {number} precioBase - Precio original
 * @param {number} descuento - Monto del descuento
 * @returns {number} Precio final
 */
export const calcularPrecioConDescuento = (precioBase, descuento) => {
  const resultado = precioBase - descuento;
  return Math.max(0, resultado); // No permitir precios negativos
};

/**
 * Calcula el porcentaje de descuento
 * @param {number} precioOriginal - Precio original
 * @param {number} precioFinal - Precio con descuento
 * @returns {number} Porcentaje de descuento
 */
export const calcularPorcentajeDescuento = (precioOriginal, precioFinal) => {
  if (precioOriginal <= 0) return 0;
  const porcentaje = ((precioOriginal - precioFinal) / precioOriginal) * 100;
  return Math.round(porcentaje * 10) / 10; // Redondear a 1 decimal
};

/**
 * Calcula el total para múltiples viajeros
 * @param {number} precioPorPersona - Precio por persona
 * @param {number} numViajeros - Número de viajeros
 * @param {number} [descuentoGrupo=0] - Descuento por grupo (porcentaje)
 * @returns {Object} Objeto con desglose de precios
 */
export const calcularTotalGrupo = (precioPorPersona, numViajeros, descuentoGrupo = 0) => {
  const subtotal = precioPorPersona * numViajeros;
  const descuento = subtotal * (descuentoGrupo / 100);
  const total = subtotal - descuento;

  return {
    precioPorPersona,
    numViajeros,
    subtotal,
    descuento,
    total,
    descuentoGrupo,
  };
};

/**
 * Verifica si el descuento Early Bird está activo para un tour
 * @param {string} tour - Identificador del tour ('india', 'egipto')
 * @returns {boolean} true si el descuento está activo
 */
export const esDescuentoActivo = (tour) => {
  if (typeof NTC_CONFIG !== 'undefined' && NTC_CONFIG.esPromocionActiva) {
    return NTC_CONFIG.esPromocionActiva(tour);
  }
  return false;
};

/**
 * Obtiene información de precios de un tour
 * @param {string} tour - Identificador del tour
 * @returns {PrecioTour|null} Información de precios o null
 */
export const obtenerPreciosTour = (tour) => {
  if (typeof NTC_CONFIG === 'undefined') {
    console.warn('[Precios] NTC_CONFIG no disponible');
    return null;
  }

  const tours = {
    india: NTC_CONFIG.tourIndia,
    egipto: NTC_CONFIG.tourEgipto,
    egypt: NTC_CONFIG.tourEgipto,
    mxgt: NTC_CONFIG.tourMxGt,
  };

  const info = tours[tour.toLowerCase()];
  if (!info) return null;

  return {
    precioBase: info.precioBase,
    descuento: info.descuento || 0,
    precioConDescuento: info.precioConDescuento || info.precioBase,
    moneda: 'USD',
  };
};

/**
 * Actualiza la visualización de precios con descuento en el DOM
 * @param {string} tour - Identificador del tour ('india', 'egipto')
 * @returns {void}
 */
export const actualizarVisualizacionDescuento = (tour) => {
  const hasDiscount = esDescuentoActivo(tour);

  // Selectores comunes para elementos de descuento
  const selectores = {
    india: {
      card: '#india-discount-card',
      header: '#india-header-discount',
      main: '#india-main-discount',
    },
    egipto: {
      card: '#egypt-discount-card',
      header: '#egypt-header-discount',
      main: '#egypt-main-discount',
    },
    egypt: {
      card: '#egypt-discount-card',
      header: '#egypt-header-discount',
      main: '#egypt-main-discount',
    },
  };

  const elementos = selectores[tour.toLowerCase()];
  if (!elementos) return;

  Object.values(elementos).forEach((selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.style.display = hasDiscount ? 'block' : 'none';
    }
  });

  console.log(`[Precios] Descuento ${tour}: ${hasDiscount ? 'activo' : 'inactivo'}`);
};

/**
 * Actualiza todos los precios mostrados en el DOM
 * Útil cuando cambian las promociones o configuración
 * @returns {void}
 */
export const actualizarTodosLosPrecios = () => {
  ['india', 'egipto'].forEach((tour) => {
    actualizarVisualizacionDescuento(tour);
  });
};

/**
 * Genera HTML para mostrar precio con descuento
 * @param {number} precioOriginal - Precio original
 * @param {number} precioFinal - Precio con descuento
 * @param {string} [moneda='USD'] - Código de moneda
 * @returns {string} HTML con formato de precio
 */
export const generarHTMLPrecio = (precioOriginal, precioFinal, moneda = 'USD') => {
  const tieneDescuento = precioFinal < precioOriginal;
  const simbolo = moneda === 'USD' ? '$' : moneda;

  if (tieneDescuento) {
    const porcentaje = calcularPorcentajeDescuento(precioOriginal, precioFinal);
    return `
      <span class="precio-original tachado">${simbolo}${formatearPrecio(precioOriginal)}</span>
      <span class="precio-final">${simbolo}${formatearPrecio(precioFinal)}</span>
      <span class="descuento-badge">-${porcentaje}%</span>
    `;
  }

  return `<span class="precio-final">${simbolo}${formatearPrecio(precioOriginal)}</span>`;
};

export default {
  formatearPrecio,
  formatearConMoneda,
  calcularPrecioConDescuento,
  calcularPorcentajeDescuento,
  calcularTotalGrupo,
  esDescuentoActivo,
  obtenerPreciosTour,
  actualizarVisualizacionDescuento,
  actualizarTodosLosPrecios,
  generarHTMLPrecio,
};
