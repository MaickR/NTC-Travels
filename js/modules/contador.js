/**
 * @fileoverview Módulo de Contador Animado para NTC Travels & Dreams
 * @module modules/contador
 * @author NTC Development Team
 * @version 1.0.0
 */

/**
 * @typedef {Object} ContadorOptions
 * @property {number} [duracion=2000] - Duración de la animación en ms
 * @property {number} [delay=50] - Delay entre actualizaciones en ms
 * @property {string} [separadorMiles=','] - Separador de miles
 * @property {boolean} [usarObserver=true] - Usar Intersection Observer
 * @property {number} [threshold=0.5] - Umbral de visibilidad para activar
 */

/**
 * Formatea un número con separador de miles
 * @param {number} numero - Número a formatear
 * @param {string} [separador=','] - Separador de miles
 * @returns {string} Número formateado
 */
const formatearNumero = (numero, separador = ',') => {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separador);
};

/**
 * Anima un contador desde 0 hasta el valor objetivo
 * @param {HTMLElement} elemento - Elemento que contiene el valor
 * @param {number} valorFinal - Valor objetivo
 * @param {ContadorOptions} options - Opciones de animación
 * @returns {void}
 */
const animarContador = (elemento, valorFinal, options = {}) => {
  const { duracion = 2000, delay = 50, separadorMiles = ',' } = options;

  const pasos = Math.ceil(duracion / delay);
  const incremento = valorFinal / pasos;
  let valorActual = 0;
  let paso = 0;

  const actualizar = () => {
    paso++;
    valorActual = Math.min(valorActual + incremento, valorFinal);

    // Usar el valor final exacto en el último paso
    const valorMostrar = paso >= pasos ? valorFinal : Math.floor(valorActual);
    elemento.textContent = formatearNumero(valorMostrar, separadorMiles);

    if (paso < pasos) {
      requestAnimationFrame(() => {
        setTimeout(actualizar, delay);
      });
    }
  };

  actualizar();
};

/**
 * Inicializa contadores animados usando Intersection Observer
 * Los contadores se activan cuando entran en el viewport
 * @param {string} [selector='.value'] - Selector de elementos contador
 * @param {ContadorOptions} [options={}] - Opciones de configuración
 * @returns {void}
 * @example
 * // Uso básico
 * import { inicializarContadores } from './modules/contador.js';
 * inicializarContadores();
 *
 * @example
 * // Con opciones personalizadas
 * inicializarContadores('.counter-value', {
 *   duracion: 3000,
 *   separadorMiles: '.'
 * });
 */
export const inicializarContadores = (selector = '.value', options = {}) => {
  const { usarObserver = true, threshold = 0.5, ...animacionOptions } = options;

  const elementos = document.querySelectorAll(selector);

  if (elementos.length === 0) {
    return;
  }

  // Marcar elementos como no animados
  elementos.forEach((el) => {
    el.dataset.animado = 'false';
    // Guardar valor original
    el.dataset.valorFinal = el.textContent.replace(/[^0-9]/g, '');
  });

  if (usarObserver && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.animado === 'false') {
            entry.target.dataset.animado = 'true';
            const valorFinal = parseInt(entry.target.dataset.valorFinal, 10) || 0;
            animarContador(entry.target, valorFinal, animacionOptions);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    elementos.forEach((el) => observer.observe(el));
    console.log(`[Contador] ${elementos.length} contadores inicializados con Observer`);
  } else {
    // Fallback: animar inmediatamente
    elementos.forEach((el) => {
      const valorFinal = parseInt(el.dataset.valorFinal, 10) || 0;
      animarContador(el, valorFinal, animacionOptions);
    });
    console.log(`[Contador] ${elementos.length} contadores animados (fallback)`);
  }
};

/**
 * Inicializa countdown para fechas específicas (ej: coming-counter)
 * @param {string} [counterId='coming-counter'] - ID del elemento contador
 * @returns {void}
 */
export const inicializarCountdown = (counterId = 'coming-counter') => {
  const counterElement = document.getElementById(counterId);

  if (!counterElement) {
    return;
  }

  // Si existe la función global loopcounter (de plugins), usarla
  if (typeof window.loopcounter === 'function') {
    window.loopcounter(counterId);
    console.log(`[Contador] Countdown "${counterId}" inicializado`);
  } else {
    console.warn(`[Contador] Función loopcounter no disponible para "${counterId}"`);
  }
};

export default {
  inicializarContadores,
  inicializarCountdown,
  formatearNumero,
};
