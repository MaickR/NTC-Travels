/**
 * @fileoverview Módulo de Integración WhatsApp para NTC Travels & Dreams
 * @module modules/whatsapp
 * @author NTC Development Team
 * @version 1.0.0
 */

/**
 * @typedef {Object} TourInfo
 * @property {string} nombre - Nombre del tour
 * @property {string} duracion - Duración del tour
 * @property {number} precioBase - Precio base en USD
 * @property {string} fechaSalida - Fecha de salida
 * @property {string} ruta - Ruta del tour
 */

/**
 * @typedef {Object} ClienteInfo
 * @property {string} nombre - Nombre completo
 * @property {string} email - Correo electrónico
 * @property {string} telefono - Teléfono/WhatsApp
 * @property {string} [ciudadSalida] - Ciudad de salida
 */

/**
 * Número de WhatsApp de NTC (obtenido de config o fallback)
 * @type {string}
 */
const obtenerNumeroWhatsApp = () => {
  if (typeof NTC_CONFIG !== 'undefined' && NTC_CONFIG.empresa?.whatsapp) {
    return NTC_CONFIG.empresa.whatsapp;
  }
  return '14086090027'; // Fallback
};

/**
 * Formatea precio con separador de miles
 * @param {number} precio - Precio a formatear
 * @returns {string} Precio formateado
 */
const formatearPrecio = (precio) => {
  if (typeof NTC_CONFIG !== 'undefined' && NTC_CONFIG.formatearPrecio) {
    return NTC_CONFIG.formatearPrecio(precio);
  }
  return precio.toLocaleString('en-US');
};

/**
 * Verifica si una promoción está activa
 * @param {string} tour - Nombre del tour ('india', 'egipto')
 * @returns {boolean}
 */
const esPromocionActiva = (tour) => {
  if (typeof NTC_CONFIG !== 'undefined' && NTC_CONFIG.esPromocionActiva) {
    return NTC_CONFIG.esPromocionActiva(tour);
  }
  return false;
};

/**
 * Obtiene información del tour desde NTC_CONFIG
 * @param {string} tour - Identificador del tour
 * @returns {TourInfo|null}
 */
const obtenerInfoTour = (tour) => {
  if (typeof NTC_CONFIG === 'undefined') return null;

  const tours = {
    india: NTC_CONFIG.tourIndia,
    egipto: NTC_CONFIG.tourEgipto,
    egypt: NTC_CONFIG.tourEgipto,
    mxgt: NTC_CONFIG.tourMxGt,
  };

  return tours[tour.toLowerCase()] || null;
};

/**
 * Construye mensaje de WhatsApp para reserva de tour
 * @param {string} tour - Identificador del tour ('india', 'egypt', 'mxgt')
 * @param {Object} [opciones={}] - Opciones adicionales
 * @returns {string} Mensaje formateado
 */
export const construirMensajeTour = (tour, opciones = {}) => {
  const info = obtenerInfoTour(tour);
  if (!info) {
    return `Hello NTC! I'm interested in learning more about your tours.`;
  }

  let mensaje = '';
  const hasDiscount = esPromocionActiva(tour);

  switch (tour.toLowerCase()) {
    case 'india':
      mensaje = `Hello NTC! I am interested in the Incredible India ${info.duracion} Journey`;
      mensaje += `\nPrice: $${formatearPrecio(info.precioBase)} USD (All Inclusive)`;
      mensaje += `\nDates: ${info.fechaSalida}`;
      if (hasDiscount) {
        mensaje += `\n\nI would like to know if the $${info.descuento} USD Early Bird discount is still available.`;
      }
      break;

    case 'egypt':
    case 'egipto':
      mensaje = `Hello NTC Travels! 🇪🇬\n\nI would like to reserve my spot for the Egypt on Dahabiya tour:`;
      mensaje += `\n• Dates: ${info.fechaSalida}`;
      mensaje += `\n• Duration: ${info.duracion}`;
      mensaje += `\n• Route: Cairo → Nile Cruise → Luxor`;
      mensaje += `\n• Price: $${formatearPrecio(info.precioBase)} USD per person`;
      if (hasDiscount) {
        mensaje += `\n\n🎉 I would like to apply the $${info.descuento} USD Early Bird Discount!`;
        mensaje += `\n• Discounted Price: $${formatearPrecio(info.precioConDescuento)} USD per person`;
      }
      break;

    case 'mxgt':
      mensaje = `Hello NTC! I am interested in the Mexico (Chiapas) + Guatemala 12-Day Journey`;
      mensaje += `\nBase Price: $${formatearPrecio(info.precioBase)} USD per traveler`;
      mensaje += `\nDates: Flexible (12-day itinerary)`;
      if (opciones.helicoptero) {
        mensaje += `\nAdd-on: HELICOPTER TOUR (+$${formatearPrecio(info.precioHelicoptero)} USD per traveler)`;
        mensaje += `\nDestination: El Mirador (from Flores; subject to availability)`;
      }
      break;

    default:
      mensaje = `Hello NTC! I'm interested in learning more about your ${tour} tour.`;
  }

  mensaje += `\n\nPlease share availability, payment plans, and next steps.`;
  return mensaje;
};

/**
 * Abre WhatsApp con un mensaje predefinido
 * @param {string} mensaje - Mensaje a enviar
 * @param {string} [numero] - Número de WhatsApp (opcional, usa default)
 * @returns {void}
 */
export const abrirWhatsApp = (mensaje, numero) => {
  const numeroDestino = numero || obtenerNumeroWhatsApp();
  const mensajeCodificado = encodeURIComponent(mensaje);
  const url = `https://wa.me/${numeroDestino}?text=${mensajeCodificado}`;

  window.open(url, '_blank');
};

/**
 * Manejador para CTA de WhatsApp en tours
 * @param {Event} event - Evento del click
 * @param {string} tour - Identificador del tour
 * @returns {boolean} false para prevenir navegación
 * @example
 * // En HTML
 * <button onclick="handleCTAWhatsApp(event, 'india')">Reserve Now</button>
 *
 * // O con addEventListener
 * btn.addEventListener('click', (e) => manejarCTAWhatsApp(e, 'india'));
 */
export const manejarCTAWhatsApp = (event, tour) => {
  event.preventDefault();

  let opciones = {};

  // Verificar opciones específicas de cada tour
  if (tour === 'mxgt') {
    const helicopterCheckbox = document.getElementById('mxgt_cta_helicopter');
    opciones.helicoptero = helicopterCheckbox?.checked || false;
  }

  const mensaje = construirMensajeTour(tour, opciones);
  abrirWhatsApp(mensaje);

  return false;
};

/**
 * Manejador para WhatsApp desde tarjetas de tours
 * @param {Event} event - Evento del click
 * @param {string} tour - Identificador del tour
 * @returns {boolean} false para prevenir navegación
 */
export const manejarCardWhatsApp = (event, tour) => {
  event.preventDefault();

  const info = obtenerInfoTour(tour);
  if (!info) {
    abrirWhatsApp(`Hello NTC! I'm interested in learning more about your tours.`);
    return false;
  }

  let mensaje = '';
  const hasDiscount = esPromocionActiva(tour);

  const tourNombres = {
    india: `Incredible India Journey - ${info.duracion}`,
    egypt: `Egypt on Dahabiya - ${info.duracion}`,
    egipto: `Egypt on Dahabiya - ${info.duracion}`,
  };

  const rutas = {
    india: 'Delhi - Jaipur - Agra - Varanasi - Rishikesh - Delhi',
    egypt: 'Cairo - Nile Cruise - Luxor',
    egipto: 'Cairo - Nile Cruise - Luxor',
  };

  const tourName = tourNombres[tour.toLowerCase()] || tour;
  const ruta = rutas[tour.toLowerCase()] || '';

  mensaje = `Hello NTC! I am interested in the ${tourName}`;
  mensaje += `\nPrice: $${formatearPrecio(info.precioBase)} USD per person (All Inclusive)`;
  mensaje += `\nDates: ${info.fechaSalida}`;
  if (ruta) mensaje += `\nRoute: ${ruta}`;

  if (hasDiscount) {
    mensaje += `\n\n🎉 I would like to apply the $${info.descuento} USD Early Bird Discount!`;
    mensaje += `\nDiscounted Price: $${formatearPrecio(info.precioConDescuento)} USD per person`;
  }

  mensaje += `\n\nPlease help me confirm availability and send detailed itinerary.`;

  abrirWhatsApp(mensaje);
  return false;
};

/**
 * Construye mensaje completo del formulario de contacto
 * @param {Object} datosFormulario - Datos del formulario
 * @returns {string} Mensaje formateado para WhatsApp
 */
export const construirMensajeFormulario = (datosFormulario) => {
  const {
    nombre,
    email,
    telefono,
    ciudadSalida,
    tipoConsulta,
    numViajeros,
    fechasViaje,
    opcionPago,
    estiloViaje,
    prioridad,
    comentarios,
  } = datosFormulario;

  const estilosViaje = {
    couple: 'Couple getaway',
    family: 'Family trip (kids included)',
    friends: 'Friends or small group',
    solo: 'Solo traveler',
    corporate: 'Corporate / incentive group',
  };

  const prioridades = {
    culture: 'Culture & local immersion',
    nature: 'Nature & outdoor adventure',
    photography: 'Photography & scenic viewpoints',
    luxury: 'Luxury & comfort upgrades',
    custom: 'Need help customizing the experience',
  };

  const opcionesPago = {
    full_payment: 'Full Payment (5% Discount)',
    '2_installments': '2 Installments (0% Interest)',
    '3_installments': '3 Installments (0% Interest)',
    '4_installments': '4 Monthly Installments (0% Interest)',
    ask_options: 'Tell me available payment options',
  };

  let mensaje = `----------------------------------------
NTC TRAVELS & DREAMS
New Website Inquiry
----------------------------------------

CLIENT DETAILS
----------------------------------------
Name: *${nombre}*
Email: ${email}
WhatsApp: ${telefono}
Departure: ${ciudadSalida || 'Not provided'}

`;

  // Tipo de consulta
  if (tipoConsulta?.startsWith('booking_')) {
    const tour = tipoConsulta.replace('booking_', '');
    const info = obtenerInfoTour(tour);
    const hasDiscount = esPromocionActiva(tour);

    if (tour === 'india' && info) {
      mensaje += `BOOKING REQUEST: Incredible India (${info.duracion})
----------------------------------------
Price: $${formatearPrecio(info.precioBase)} USD per person (All Inclusive)
Route: Delhi - Jaipur - Agra - Varanasi - Rishikesh

Travelers: *${numViajeros || 'Not specified'}*`;

      if (numViajeros && !isNaN(parseInt(numViajeros))) {
        const total =
          (hasDiscount ? info.precioConDescuento : info.precioBase) * parseInt(numViajeros);
        mensaje += `\nEst. Total: *$${formatearPrecio(total)} USD*`;
      }

      if (hasDiscount) {
        mensaje += `\n🎉 EARLY BIRD DISCOUNT APPLIED: $${info.descuento} USD OFF per person`;
      }
    } else if ((tour === 'egypt' || tour === 'egipto') && info) {
      mensaje += `BOOKING REQUEST: Egypt on Dahabiya (${info.duracion})
----------------------------------------
Price: $${formatearPrecio(info.precioBase)} USD per person (All Inclusive)
Route: Cairo - Nile Cruise - Luxor

Travelers: *${numViajeros || 'Not specified'}*`;

      if (numViajeros && !isNaN(parseInt(numViajeros))) {
        const total =
          (hasDiscount ? info.precioConDescuento : info.precioBase) * parseInt(numViajeros);
        mensaje += `\nEst. Total: *$${formatearPrecio(total)} USD*`;
      }

      if (hasDiscount) {
        mensaje += `\n🎉 EARLY BIRD DISCOUNT APPLIED: $${info.descuento} USD OFF per person`;
        mensaje += `\nFinal Price: *$${formatearPrecio(info.precioConDescuento)} USD* per person`;
      }
    }
  } else if (tipoConsulta?.startsWith('question_')) {
    const tour = tipoConsulta.replace('question_', '');
    if (tour === 'india') {
      mensaje += `QUESTION: Incredible India Tour
----------------------------------------
Client has specific questions about the India itinerary.`;
    } else if (tour === 'egypt') {
      mensaje += `QUESTION: Egypt on Dahabiya Tour
----------------------------------------
Client has specific questions about the Egypt itinerary.`;
    } else {
      mensaje += `GENERAL INQUIRY / CUSTOM TRIP
----------------------------------------
Client is interested in a custom trip or general information.`;
    }
  }

  // Campos adicionales
  if (numViajeros && !tipoConsulta?.startsWith('booking_')) {
    mensaje += `\nTravelers: ${numViajeros}`;
  }

  if (estiloViaje) {
    mensaje += `\nProfile: ${estilosViaje[estiloViaje] || estiloViaje}`;
  }

  if (prioridad) {
    mensaje += `\nPriority: ${prioridades[prioridad] || prioridad}`;
  }

  if (fechasViaje) {
    mensaje += `\nDates: *${fechasViaje}*`;
  }

  if (opcionPago && tipoConsulta?.startsWith('booking_')) {
    mensaje += `\nPayment: ${opcionesPago[opcionPago] || opcionPago}`;
  }

  if (comentarios) {
    mensaje += `

NOTES / QUESTIONS
----------------------------------------
${comentarios}`;
  }

  mensaje += `

----------------------------------------
Sent from: www.ntcluxurytravels.com
----------------------------------------`;

  return mensaje;
};

/**
 * Manejador del formulario de contacto NTC
 * @param {Event} event - Evento submit del formulario
 * @returns {void}
 */
export const manejarFormularioContacto = (event) => {
  event.preventDefault();

  // Obtener valores del formulario
  const obtenerValor = (id) => document.getElementById(id)?.value?.trim() || '';

  const datosFormulario = {
    nombre: obtenerValor('ntc_fullname'),
    email: obtenerValor('ntc_email'),
    telefono: obtenerValor('ntc_phone'),
    ciudadSalida: obtenerValor('ntc_departure_city'),
    tipoConsulta: obtenerValor('ntc_inquiry_type'),
    numViajeros: obtenerValor('ntc_travelers_count'),
    fechasViaje: obtenerValor('ntc_travel_dates'),
    opcionPago: obtenerValor('ntc_payment_option'),
    estiloViaje: obtenerValor('ntc_travel_style'),
    prioridad: obtenerValor('ntc_primary_interest'),
    comentarios: obtenerValor('ntc_comments'),
  };

  // Validaciones
  if (
    !datosFormulario.nombre ||
    !datosFormulario.email ||
    !datosFormulario.telefono ||
    !datosFormulario.tipoConsulta
  ) {
    alert('Please complete all required fields (marked with *).');
    return;
  }

  if (datosFormulario.tipoConsulta.startsWith('booking_')) {
    if (!datosFormulario.numViajeros) {
      alert('Please select the number of travelers for your booking.');
      return;
    }
    if (!datosFormulario.ciudadSalida) {
      alert('Please share your home city or departure airport so we can coordinate logistics.');
      return;
    }
  }

  // Construir y enviar mensaje
  const mensaje = construirMensajeFormulario(datosFormulario);
  abrirWhatsApp(mensaje);

  // Mensaje de éxito
  alert('Success! Your inquiry has been sent to NTC Travels & Dreams via WhatsApp.');

  // Reiniciar formulario
  const formulario = document.getElementById('contactform_ntc');
  if (formulario) {
    formulario.reset();
    // Actualizar campos dinámicos si existe la función
    if (typeof window.updateFormFields === 'function') {
      window.updateFormFields();
    }
  }
};

// Exportar funciones para uso global (compatibilidad con onclick en HTML)
if (typeof window !== 'undefined') {
  window.handleCTAWhatsApp = manejarCTAWhatsApp;
  window.handleCardWhatsApp = manejarCardWhatsApp;
  window.handleContactFormNTC = manejarFormularioContacto;
}

export default {
  abrirWhatsApp,
  construirMensajeTour,
  construirMensajeFormulario,
  manejarCTAWhatsApp,
  manejarCardWhatsApp,
  manejarFormularioContacto,
};
