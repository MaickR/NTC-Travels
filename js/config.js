/**
 * NTC Travels & Dreams - Configuración Central
 * ============================================
 * Este archivo centraliza todos los datos de negocio que pueden cambiar:
 * - Precios de tours
 * - Fechas de promociones
 * - Datos de contacto
 * - URLs de redes sociales
 *
 * Modificar estos valores sin tocar el código JavaScript principal.
 */

export const NTC_CONFIG = {
  // ========================================
  // INFORMACIÓN DE LA EMPRESA
  // ========================================
  empresa: {
    nombre: 'NTC Travels & Dreams',
    slogan: 'Travels & Dreams',
    email: 'info@ntcluxurytravels.com',
    telefono: '+1-408-609-0027',
    whatsapp: '14086090027',
    urlBase: 'https://www.ntcluxurytravels.com',
    fundacion: 2015,
  },

  // ========================================
  // REDES SOCIALES
  // ========================================
  redesSociales: {
    facebook: 'https://www.facebook.com/ntctravels',
    instagram: 'https://www.instagram.com/ntctravels',
    twitter: 'https://www.twitter.com/ntctravels',
    tiktok: '',
    youtube: '',
  },

  // ========================================
  // TOUR A EGIPTO
  // ========================================
  tourEgipto: {
    // Precios (en USD)
    precioBase: 4190,
    descuento: 200,
    precioConDescuento: 3990,

    // Promoción Early Bird
    promocion: {
      activa: true,
      nombre: 'Early Bird',
      fechaLimite: new Date('2025-12-31T23:59:59'),
      textoPromo: '¡Reserva antes del 31 de diciembre y ahorra $200!',
    },

    // Detalles del tour
    duracion: '11 días / 10 noches',
    fechaSalida: 'Sept 16 - 26, 2026',
    grupoMinimo: 10,
    grupoMaximo: 20,
  },

  // ========================================
  // TOUR A INDIA
  // ========================================
  tourIndia: {
    // Precios (en USD)
    precioBase: 4390,
    descuento: 200,
    precioConDescuento: 4190,

    // Promoción
    promocion: {
      activa: true,
      nombre: 'Early Bird',
      fechaLimite: new Date('2025-12-15T23:59:59'),
      textoPromo: '¡Reserva antes del 15 de diciembre y ahorra $200!',
    },

    // Detalles del tour
    duracion: '12 días',
    fechaSalida: 'April 22 - May 3, 2026',
    grupoMinimo: 10,
    grupoMaximo: 30,
  },

  // ========================================
  // TOUR MEXICO + GUATEMALA
  // ========================================
  tourMxGt: {
    precioBase: 1980,
    precioHelicoptero: 600,
    fechaSalida: 'March 3–13, 2026',
    duracion: '12 days',
  },

  // ========================================
  // FUNCIONES AUXILIARES
  // ========================================

  /**
   * Verifica si una promoción está activa
   * @param {string} tour - 'egipto' o 'india'
   * @returns {boolean}
   */
  esPromocionActiva: function (tour) {
    let config;
    if (tour === 'egipto') config = this.tourEgipto;
    else if (tour === 'india') config = this.tourIndia;
    else return false;

    if (!config.promocion.activa) return false;
    if (!config.promocion.fechaLimite) return false;
    return new Date() <= config.promocion.fechaLimite;
  },

  /**
   * Obtiene el precio actual de un tour (con o sin descuento)
   * @param {string} tour - 'egipto' o 'india'
   * @returns {number}
   */
  obtenerPrecioActual: function (tour) {
    let config;
    if (tour === 'egipto') config = this.tourEgipto;
    else if (tour === 'india') config = this.tourIndia;
    else return 0;

    return this.esPromocionActiva(tour) ? config.precioConDescuento : config.precioBase;
  },

  /**
   * Formatea un precio en USD
   * @param {number} precio
   * @returns {string}
   */
  formatearPrecio: function (precio) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(precio);
  },
};

// Backwards compatibility
if (typeof window !== 'undefined') {
  window.NTC_CONFIG = NTC_CONFIG;
}
