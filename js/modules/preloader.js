/**
 * @fileoverview Módulo de Preloader para NTC Travels & Dreams
 * @module modules/preloader
 * @author NTC Development Team
 * @version 1.0.0
 */

/**
 * @typedef {Object} PreloaderOptions
 * @property {number} [fadeOutDuration=350] - Duración del fadeOut en ms
 * @property {number} [delay=350] - Delay antes de ocultar en ms
 * @property {string} [preloaderSelector='#preloader'] - Selector del preloader
 * @property {string} [contentSelector='.preloader-content'] - Selector del contenido
 */

/**
 * Oculta el contenido del preloader con efecto fadeOut
 * @param {HTMLElement} element - Elemento a ocultar
 * @param {number} duration - Duración de la animación en ms
 * @returns {Promise<void>}
 */
const fadeOut = (element, duration = 350) => {
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
 * Inicializa y oculta el preloader de la página
 * @param {PreloaderOptions} [options={}] - Opciones de configuración
 * @returns {Promise<void>}
 * @example
 * // Uso básico
 * import { inicializarPreloader } from './modules/preloader.js';
 * inicializarPreloader();
 *
 * @example
 * // Con opciones personalizadas
 * inicializarPreloader({
 *   fadeOutDuration: 500,
 *   delay: 400
 * });
 */
export const inicializarPreloader = async (options = {}) => {
  const {
    fadeOutDuration = 350,
    delay = 350,
    preloaderSelector = '#preloader',
    contentSelector = '.preloader-content',
  } = options;

  const preloader = document.querySelector(preloaderSelector);
  const preloaderContent = document.querySelector(contentSelector);

  if (!preloader) {
    console.warn('[Preloader] No se encontró el elemento preloader');
    return;
  }

  // Fade out del contenido interno primero
  await fadeOut(preloaderContent, fadeOutDuration);

  // Esperar el delay
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Fade out del preloader principal
  await fadeOut(preloader, fadeOutDuration);

  // Restaurar overflow del body
  document.body.style.overflow = 'visible';

  console.log('[Preloader] Preloader ocultado correctamente');
};

/**
 * Muestra el preloader (útil para transiciones entre páginas)
 * @param {string} [selector='#preloader'] - Selector del preloader
 */
export const mostrarPreloader = (selector = '#preloader') => {
  const preloader = document.querySelector(selector);
  const content = document.querySelector('.preloader-content');

  if (preloader) {
    preloader.style.display = 'flex';
    preloader.style.opacity = '1';
    document.body.style.overflow = 'hidden';
  }

  if (content) {
    content.style.display = 'block';
    content.style.opacity = '1';
  }
};

export default {
  inicializarPreloader,
  mostrarPreloader,
};
