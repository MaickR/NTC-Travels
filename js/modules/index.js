/**
 * @fileoverview Índice de módulos ES6 para NTC Travels & Dreams
 * Exporta todos los módulos disponibles para uso centralizado
 * @module modules/index
 * @author NTC Development Team
 * @version 1.0.0
 */

// Preloader
export { inicializarPreloader, mostrarPreloader } from './preloader.js';

// Contador
export { inicializarContadores, inicializarCountdown } from './contador.js';

// WhatsApp
export {
  abrirWhatsApp,
  construirMensajeTour,
  construirMensajeFormulario,
  manejarCTAWhatsApp,
  manejarCardWhatsApp,
  manejarFormularioContacto,
} from './whatsapp.js';

// Precios
export {
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
} from './precios.js';

// Navegación
export {
  inicializarNavegacion,
  inicializarMenuMovil,
  manejarMenuSticky,
  manejarHeaderAutoHide,
  inicializarDropdowns,
  inicializarScrollSpy,
  actualizarNavActivo,
} from './navegacion.js';

// Carrusel
export {
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
} from './carrusel.js';

// Imágenes (Lazy Loading, Optimización)
export {
  inicializarLazyLoading,
  precargarImagenes,
  obtenerMejorImagen,
  detectarSoporteFormatos,
  marcarSoporteFormatos,
  soportaLazyLoadingNativo,
  soportaIntersectionObserver,
} from './imagenes.js';
