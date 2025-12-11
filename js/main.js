/*------------------------------------------------------------------
* Project:        NTC Travels & Dreams
* Description:    Main JavaScript file
* Updated:        December 2025
-------------------------------------------------------------------*/

(function ($) {
  'use strict';

  // ========================================
  // Egypt Early Bird Discount Logic
  // ========================================
  // Configuración centralizada en NTC_CONFIG (js/config.js)

  function isEgyptDiscountActive() {
    if (typeof NTC_CONFIG === 'undefined') return false;
    return NTC_CONFIG.esPromocionActiva('egipto');
  }

  function updateEgyptPriceDisplay() {
    const hasDiscount = isEgyptDiscountActive();

    // Update index.html card elements
    const discountCardEl = document.getElementById('egypt-discount-card');
    if (discountCardEl) {
      discountCardEl.style.display = hasDiscount ? 'block' : 'none';
    }

    // Update tour-egypt.html header elements
    const headerDiscountEl = document.getElementById('egypt-header-discount');
    if (headerDiscountEl) {
      headerDiscountEl.style.display = hasDiscount ? 'inline' : 'none';
    }

    // Update tour-egypt.html main discount section
    const mainDiscountEl = document.getElementById('egypt-main-discount');
    if (mainDiscountEl) {
      mainDiscountEl.style.display = hasDiscount ? 'block' : 'none';
    }
  }

  // ========================================
  // Document Ready Function
  // ========================================
  $(document).ready(function () {
    // Cache jQuery objects
    const $preloaderContent = $('.preloader-content');
    const $preloader = $('#preloader');
    const $body = $('body');

    // Preloader
    $preloaderContent.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    $body.delay(350).css({ overflow: 'visible' });

    // Nota: WOW.js removido - no hay clases 'wow' en el HTML
    // Si se necesitan animaciones al scroll, considerar usar
    // Intersection Observer API nativo

    // Update Egypt discount display
    updateEgyptPriceDisplay();
  });

  // ========================================
  // Search Functionality
  // ========================================
  $('a[href="#search1"]').on('click', function (event) {
    event.preventDefault();
    $('#search1').addClass('open');
    $('#search1 > form > input[type="search"]').focus();
  });

  $('#search1, #search1 button.close').on('click keyup', function (event) {
    if (event.target === this || event.target.className === 'close' || event.keyCode === 27) {
      $(this).removeClass('open');
    }
  });

  // ========================================
  // Modal Video
  // ========================================
  $(document).ready(function () {
    if (typeof $.fn.modalVideo !== 'undefined') {
      $('.js-video-button').modalVideo({
        channel: 'vimeo',
      });
    }
  });

  // Range sliders activation - REMOVED (Cleanup Phase 1)
  /*
  $('.range-slider-ui').each(function () {
    var minRangeValue = $(this).attr('data-min');
    var maxRangeValue = $(this).attr('data-max');
    var minName = $(this).attr('data-min-name');
    var maxName = $(this).attr('data-max-name');
    var unit = $(this).attr('data-unit');
    $(this).slider({
      range: true,
      min: minRangeValue,
      max: maxRangeValue,
      values: [minRangeValue, maxRangeValue],
      slide: function (event, ui) {
        event = event;
        var currentMin = parseInt(ui.values[0]);
        var currentMax = parseInt(ui.values[1]);
        $(this)
          .children('.min-value')
          .text(currentMin + ' ' + unit);
        $(this)
          .children('.max-value')
          .text(currentMax + ' ' + unit);
        $(this).children('.current-min').val(currentMin);
        $(this).children('.current-max').val(currentMax);
      },
    });
  });
  */

  // ========================================
  // Back to Top Button
  // ========================================
  $(document).on('click', '#back-to-top, .back-to-top', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  $(window).on('scroll', function () {
    const $backToTop = $('#back-to-top');
    if ($(window).scrollTop() > 500) {
      $backToTop.fadeIn(200);
    } else {
      $backToTop.fadeOut(200);
    }
  });

  // Slick SLider
  $('.slider-store').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    direction: 'vertical',
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    asNavFor: '.slider-thumbs',
  });

  $('.slider-thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-store',
    dots: false,
    arrows: false,
    autoplay: true,
    direction: 'vertical',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $('.review-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    rows: 0,
    autoplay: true,
    speed: 2000,
    loop: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $('.review-slider1').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    rows: 0,
    autoplay: true,
    speed: 5000,
    loop: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.about-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    rows: 0,
    speed: 4000,
    loop: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $('.side-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    rows: 0,
    dots: false,
    autoplay: true,
    speed: 4000,
    loop: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 811,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.attract-slider').slick({
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
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1000,
    rows: 0,
    loop: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.item-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 2000,
    rows: 0,
    loop: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $('.item-slider1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 2000,
    rows: 0,
    loop: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $('.item-slider2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 2000,
    rows: 0,
    loop: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $('.banner-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 2000,
    rows: 0,
    cursor: false,
    loop: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.shop-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 2000,
    rows: 0,
    cursor: false,
    loop: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Slick Testimonial Slider
  $('.sl-testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    Speed: 8000,
    rows: 0,
    infinite: true,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
  });

  $('.partner-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 2000,
    rows: 0,
    loop: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('#contactform2').validate({
    submitHandler: function () {
      $.ajax({
        url: 'mail/contact.php',
        type: 'POST',
        data: {
          fname: $('input[name="first_name"]').val(),
          lname: $('input[name="last_name"]').val(),
          email: $('input[name="email"]').val(),
          phone: $('input[name="phone"]').val(),
          comments: $('textarea[name="comments"]').val(),
        },
        success: function (result) {
          $('#contactform-error-msg').html(result);
          $('#contactform2')[0].reset();
        },
      });
    },
  });

  $('.blog-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 2000,
    rows: 0,
    loop: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $('.promo-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 2000,
    rows: 0,
    loop: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  /*-----------------------------------------------------------------------------------*/
  /*  COUNTDOWN
    /*-----------------------------------------------------------------------------------*/

  $(document).ready(() => {
    loopcounter('coming-counter');
  });

  /*-----------------------------------------------------------------------------------*/
  /*  COUNTER UP
    /*-----------------------------------------------------------------------------------*/
  $('.value').counterUp({
    delay: 50,
    time: 1000,
  });

  /*-----------------------------------------------------------------------------------*/
  /*  MASONRY - DESACTIVADO
    /*  Nota: No hay elementos .blog-main ni .trend-box1 en el HTML actual
    /*-----------------------------------------------------------------------------------*/
  // Si se necesita Masonry en el futuro, descomentar y agregar CDN:
  // https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js
  /*
     if (typeof Masonry !== 'undefined') {
         $('.blog-main').masonry({
             itemSelector: '.mansonry-item',
         });
         $('.trend-box1').masonry({
             itemSelector: '.mansonry-item1',
         });
     }
    */

  // Nice Select JS - REMOVED (Cleanup Phase 1)
  /*
  $('.niceSelect').niceSelect();
  */

  $('a[href="#search1"]').on('click', function (event) {
    event.preventDefault();
    $('#search1').addClass('open');
    $('#search1 > form > input[type="search"]').focus();
  });
  $('#search1, #search1 button.close').on('click keyup', function (event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  });
  //Do not include! This prevents the form from submitting for DEMO purposes only!
  $('form').submit(function (event) {
    event.preventDefault();
    return false;
  });

  // ========================================
  // Funcionalidades Migradas (Index & Tours)
  // ========================================

  // ----------------------------------------
  // Manejador de Campos Dinámicos del Formulario de Contacto
  // ----------------------------------------
  window.updateFormFields = function () {
    const inquiryType = document.getElementById('ntc_inquiry_type');
    if (!inquiryType) return; // Salir si no existe el elemento

    const travelersGroup = document.getElementById('travelers_group');
    const datesGroup = document.getElementById('dates_group');
    const paymentGroup = document.getElementById('payment_group');
    const travelStyleGroup = document.getElementById('travel_style_group');
    const priorityGroup = document.getElementById('priority_group');
    const tourDatesInfo = document.getElementById('tour_dates_info');

    // Ocultar todos los grupos condicionales primero
    if (travelersGroup) travelersGroup.style.display = 'none';
    if (datesGroup) datesGroup.style.display = 'none';
    if (paymentGroup) paymentGroup.style.display = 'none';
    if (travelStyleGroup) travelStyleGroup.style.display = 'none';
    if (priorityGroup) priorityGroup.style.display = 'none';
    if (tourDatesInfo) tourDatesInfo.textContent = '';

    // Mostrar campos basados en el tipo de consulta
    const type = inquiryType.value;

    // Lógica para Reservas (Bookings)
    if (type === 'booking_india') {
      if (travelersGroup) travelersGroup.style.display = 'block';
      if (datesGroup) datesGroup.style.display = 'block';
      if (paymentGroup) paymentGroup.style.display = 'block';
      if (travelStyleGroup) travelStyleGroup.style.display = 'block';
      if (priorityGroup) priorityGroup.style.display = 'block';
      if (tourDatesInfo) tourDatesInfo.textContent = 'Confirmed Dates: April 22 - May 3, 2026';
    } else if (type === 'booking_egypt') {
      if (travelersGroup) travelersGroup.style.display = 'block';
      if (datesGroup) datesGroup.style.display = 'block';
      if (paymentGroup) paymentGroup.style.display = 'block';
      if (travelStyleGroup) travelStyleGroup.style.display = 'block';
      if (priorityGroup) priorityGroup.style.display = 'block';
      if (tourDatesInfo) tourDatesInfo.textContent = 'Confirmed Dates: Sept 16 - 26, 2026';
    }
    // Lógica para Preguntas (Questions)
    else if (type === 'question_india') {
      if (travelersGroup) travelersGroup.style.display = 'block';
      if (datesGroup) datesGroup.style.display = 'block';
      if (tourDatesInfo) tourDatesInfo.textContent = 'Dates: April 22 - May 3, 2026';
    } else if (type === 'question_egypt') {
      if (travelersGroup) travelersGroup.style.display = 'block';
      if (datesGroup) datesGroup.style.display = 'block';
      if (tourDatesInfo) tourDatesInfo.textContent = 'Dates: Sept 16 - 26, 2026';
    } else if (type === 'question_general') {
      if (travelersGroup) travelersGroup.style.display = 'block';
      if (datesGroup) datesGroup.style.display = 'block';
      if (travelStyleGroup) travelStyleGroup.style.display = 'block';
      if (priorityGroup) priorityGroup.style.display = 'block';
      if (tourDatesInfo) tourDatesInfo.textContent = 'Share your preferred dates or month.';
    }
  };

  // ----------------------------------------
  // Manejador de Envío del Formulario de Contacto (WhatsApp)
  // ----------------------------------------
  window.handleContactFormNTC = function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const fullName = document.getElementById('ntc_fullname').value.trim();
    const email = document.getElementById('ntc_email').value.trim();
    const phone = document.getElementById('ntc_phone').value.trim();
    const departureCity = document.getElementById('ntc_departure_city').value.trim();
    const inquiryType = document.getElementById('ntc_inquiry_type').value;
    const travelersCount = document.getElementById('ntc_travelers_count').value;
    const travelDates = document.getElementById('ntc_travel_dates').value.trim();
    const paymentOption = document.getElementById('ntc_payment_option')
      ? document.getElementById('ntc_payment_option').value
      : '';
    const travelStyle = document.getElementById('ntc_travel_style').value;
    const tripPriority = document.getElementById('ntc_primary_interest').value;
    const comments = document.getElementById('ntc_comments').value.trim();

    const travelStyleMap = {
      couple: 'Couple getaway',
      family: 'Family trip (kids included)',
      friends: 'Friends or small group',
      solo: 'Solo traveler',
      corporate: 'Corporate / incentive group',
    };

    const tripPriorityMap = {
      culture: 'Culture & local immersion',
      nature: 'Nature & outdoor adventure',
      photography: 'Photography & scenic viewpoints',
      luxury: 'Luxury & comfort upgrades',
      custom: 'Need help customizing the experience',
    };

    // Validar campos requeridos
    if (!fullName || !email || !phone || !inquiryType) {
      alert('Please complete all required fields (marked with *).');
      return;
    }

    // Validar selecciones de reserva
    if (inquiryType.startsWith('booking_')) {
      if (!travelersCount) {
        alert('Please select the number of travelers for your booking.');
        return;
      }
      if (!departureCity) {
        alert('Please share your home city or departure airport so we can coordinate logistics.');
        return;
      }
    }

    // Construir mensaje profesional para WhatsApp
    let messageContent = `----------------------------------------
NTC TRAVELS & DREAMS
New Website Inquiry
----------------------------------------

`;

    // DETALLES DEL CLIENTE
    messageContent += `CLIENT DETAILS
----------------------------------------
Name: *${fullName}*
Email: ${email}
WhatsApp: ${phone}
Departure: ${departureCity || 'Not provided'}

`;

    // TIPO DE CONSULTA
    if (inquiryType === 'booking_india') {
      const numericTravelers = /^\d+$/.test(travelersCount) ? parseInt(travelersCount, 10) : null;
      const indiaPrice = NTC_CONFIG.tourIndia.precioBase;
      const hasDiscount = NTC_CONFIG.esPromocionActiva('india');
      const finalPrice = hasDiscount ? NTC_CONFIG.tourIndia.precioConDescuento : indiaPrice;

      messageContent += `BOOKING REQUEST: Incredible India (${NTC_CONFIG.tourIndia.duracion})
----------------------------------------
Price: $${NTC_CONFIG.formatearPrecio(indiaPrice)} USD per person (All Inclusive)
Route: Delhi - Jaipur - Agra - Varanasi - Rishikesh

Travelers: *${travelersCount || 'Not specified'}*`;

      if (numericTravelers) {
        const baseTotal = finalPrice * numericTravelers;
        messageContent += `
Est. Total: *$${NTC_CONFIG.formatearPrecio(baseTotal)} USD*`;
      }

      if (hasDiscount) {
        messageContent += `
🎉 EARLY BIRD DISCOUNT APPLIED: $${NTC_CONFIG.tourIndia.descuento} USD OFF per person`;
      } else {
        messageContent += `
Note: Checking availability for Early Bird Discount`;
      }
    } else if (inquiryType === 'booking_egypt') {
      const numericTravelers = /^\d+$/.test(travelersCount) ? parseInt(travelersCount, 10) : null;
      const egyptPrice = NTC_CONFIG.tourEgipto.precioBase;
      const hasDiscount = NTC_CONFIG.esPromocionActiva('egipto');
      const finalPrice = hasDiscount ? NTC_CONFIG.tourEgipto.precioConDescuento : egyptPrice;

      messageContent += `BOOKING REQUEST: Egypt on Dahabiya (${NTC_CONFIG.tourEgipto.duracion})
----------------------------------------
Price: $${NTC_CONFIG.formatearPrecio(egyptPrice)} USD per person (All Inclusive)
Route: Cairo - Nile Cruise - Luxor

Travelers: *${travelersCount || 'Not specified'}*`;

      if (numericTravelers) {
        const baseTotal = finalPrice * numericTravelers;
        messageContent += `
Est. Total: *$${NTC_CONFIG.formatearPrecio(baseTotal)} USD*`;
      }

      if (hasDiscount) {
        messageContent += `
🎉 EARLY BIRD DISCOUNT APPLIED: $${NTC_CONFIG.tourEgipto.descuento} USD OFF per person`;
        messageContent += `
Final Price: *$${NTC_CONFIG.formatearPrecio(finalPrice)} USD* per person`;
      } else {
        messageContent += `
Note: Checking availability for Private Dahabiya`;
      }
    } else if (inquiryType === 'question_india') {
      messageContent += `QUESTION: Incredible India Tour
----------------------------------------
Client has specific questions about the India itinerary.`;
    } else if (inquiryType === 'question_egypt') {
      messageContent += `QUESTION: Egypt on Dahabiya Tour
----------------------------------------
Client has specific questions about the Egypt itinerary.`;
    } else if (inquiryType === 'question_general') {
      messageContent += `GENERAL INQUIRY / CUSTOM TRIP
----------------------------------------
Client is interested in a custom trip or general information.`;
    }

    // CAMPOS COMUNES (Travelers, Dates, Style, Priority)
    // Mostrar si tienen valor, independientemente del tipo
    if (travelersCount && !inquiryType.startsWith('booking_')) {
      messageContent += `
Travelers: ${travelersCount}`;
    }

    if (travelStyle) {
      const travelProfile = travelStyleMap[travelStyle] || travelStyle;
      messageContent += `
Profile: ${travelProfile}`;
    }

    if (tripPriority) {
      const priorityFocus = tripPriorityMap[tripPriority] || tripPriority;
      messageContent += `
Priority: ${priorityFocus}`;
    }

    if (travelDates) {
      messageContent += `
Dates: *${travelDates}*`;
    }

    if (paymentOption && inquiryType.startsWith('booking_')) {
      const paymentMap = {
        full_payment: 'Full Payment (5% Discount)',
        '2_installments': '2 Installments (0% Interest)',
        '3_installments': '3 Installments (0% Interest)',
        '4_installments': '4 Monthly Installments (0% Interest)',
        ask_options: 'Tell me available payment options',
      };
      messageContent += `
Payment: ${paymentMap[paymentOption] || paymentOption}`;
    }

    // DETALLES ADICIONALES
    if (comments) {
      messageContent += `

NOTES / QUESTIONS
----------------------------------------
${comments}`;
    }

    // PIE DE PÁGINA
    messageContent += `

----------------------------------------
Sent from: www.ntcluxurytravels.com
----------------------------------------`;

    // Número de WhatsApp de NTC
    const whatsappNumber = '14086090027';

    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageContent)}`;

    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');

    // Mensaje de éxito
    alert('Success! Your inquiry has been sent to NTC Travels & Dreams via WhatsApp.');

    // Reiniciar formulario
    document.getElementById('contactform_ntc').reset();
    updateFormFields(); // Reiniciar visibilidad
  };

  // ----------------------------------------
  // Manejador de CTA WhatsApp para Tours (Unificado)
  // ----------------------------------------
  window.handleCTAWhatsApp = function (event, tour) {
    event.preventDefault();
    let whatsappText = '';

    if (tour === 'india') {
      const indiaPrice = NTC_CONFIG.tourIndia.precioBase;
      const hasDiscount = NTC_CONFIG.esPromocionActiva('india');

      whatsappText = `Hello NTC! I am interested in the Incredible India ${NTC_CONFIG.tourIndia.duracion} Journey`;
      whatsappText += `\nPrice: $${NTC_CONFIG.formatearPrecio(indiaPrice)} USD (All Inclusive)`;
      whatsappText += `\nDates: ${NTC_CONFIG.tourIndia.fechaSalida}`;

      if (hasDiscount) {
        whatsappText += `\n\nI would like to know if the $${NTC_CONFIG.tourIndia.descuento} USD Early Bird discount is still available.`;
      }
    } else if (tour === 'mxgt') {
      const helicopterCheckbox = document.getElementById('mxgt_cta_helicopter');
      const helicopterAdded = helicopterCheckbox ? helicopterCheckbox.checked : false;

      whatsappText =
        'Hello NTC! I am interested in the Mexico (Chiapas) + Guatemala 12-Day Journey';
      whatsappText += `\nBase Price: $${NTC_CONFIG.formatearPrecio(NTC_CONFIG.tourMxGt.precioBase)} USD per traveler`;
      whatsappText += '\nDates: Flexible (12-day itinerary)';

      if (helicopterAdded) {
        whatsappText += `\nAdd-on: HELICOPTER TOUR (+$${NTC_CONFIG.formatearPrecio(NTC_CONFIG.tourMxGt.precioHelicoptero)} USD per traveler)`;
        whatsappText += '\nDestination: El Mirador (from Flores; subject to availability)';
      } else {
        whatsappText += '\nAdd-on: No helicopter selected';
      }
      whatsappText += '\nPlease share availability, payment plans, and next steps.';
    } else if (tour === 'egypt') {
      const egyptPrice = NTC_CONFIG.tourEgipto.precioBase;
      const hasDiscount = NTC_CONFIG.esPromocionActiva('egipto');

      whatsappText =
        'Hello NTC Travels! 🇪🇬\n\nI would like to reserve my spot for the Egypt on Dahabiya tour:\n• Dates: ' +
        NTC_CONFIG.tourEgipto.fechaSalida +
        '\n• Duration: ' +
        NTC_CONFIG.tourEgipto.duracion +
        '\n• Route: Cairo → Nile Cruise → Luxor\n• Price: $' +
        NTC_CONFIG.formatearPrecio(egyptPrice) +
        ' USD per person';

      if (hasDiscount) {
        whatsappText +=
          '\n\n🎉 I would like to apply the $' +
          NTC_CONFIG.tourEgipto.descuento +
          ' USD Early Bird Discount!';
        whatsappText +=
          '\n• Discounted Price: $' +
          NTC_CONFIG.formatearPrecio(NTC_CONFIG.tourEgipto.precioConDescuento) +
          ' USD per person';
      }
      whatsappText += '\n\nPlease send me availability and reservation details. Thank you!';
    }

    if (tour !== 'egypt' && tour !== 'mxgt') {
      whatsappText += '\nPlease share availability, payment plans, and next steps.';
    }

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${NTC_CONFIG.empresa.whatsapp}?text=` + encodedText;
    window.open(whatsappUrl, '_blank');
    return false;
  };

  // ----------------------------------------
  // Manejador de WhatsApp para Tarjetas de Tours
  // ----------------------------------------
  window.handleCardWhatsApp = function (event, tour) {
    event.preventDefault();

    let whatsappText = '';
    let tourName = '';
    let basePrice = '';
    let dates = '';

    if (tour === 'india') {
      tourName = `Incredible India Journey - ${NTC_CONFIG.tourIndia.duracion}`;
      basePrice = `$${NTC_CONFIG.formatearPrecio(NTC_CONFIG.tourIndia.precioBase)} USD per person (All Inclusive)`;
      dates = NTC_CONFIG.tourIndia.fechaSalida;
      const hasDiscount = NTC_CONFIG.esPromocionActiva('india');

      whatsappText = `Hello NTC! I am interested in the ${tourName}\nPrice: ${basePrice}\nDates: ${dates}\nRoute: Delhi - Jaipur - Agra - Varanasi - Rishikesh - Delhi`;

      if (hasDiscount) {
        whatsappText += `\n\nI would like to know if the $${NTC_CONFIG.tourIndia.descuento} USD Early Bird discount is still available.`;
      }
    } else if (tour === 'egypt') {
      const egyptPrice = NTC_CONFIG.tourEgipto.precioBase;
      const hasDiscount = NTC_CONFIG.esPromocionActiva('egipto');

      tourName = `Egypt on Dahabiya - ${NTC_CONFIG.tourEgipto.duracion}`;
      basePrice = '$' + NTC_CONFIG.formatearPrecio(egyptPrice) + ' USD per person (All Inclusive)';
      dates = NTC_CONFIG.tourEgipto.fechaSalida;

      whatsappText = `Hello NTC! I am interested in the ${tourName}\nPrice: ${basePrice}\nDates: ${dates}\nRoute: Cairo - Nile Cruise - Luxor`;

      if (hasDiscount) {
        whatsappText += `\n\n🎉 I would like to apply the $${NTC_CONFIG.tourEgipto.descuento} USD Early Bird Discount!`;
        whatsappText += `\nDiscounted Price: $${NTC_CONFIG.formatearPrecio(NTC_CONFIG.tourEgipto.precioConDescuento)} USD per person`;
      } else {
        whatsappText += `\n\nI would like to know more about the private Dahabiya charter options.`;
      }
    }

    whatsappText += `\n\nPlease help me confirm availability and send detailed itinerary.`;

    // Codificar para URL de WhatsApp
    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${NTC_CONFIG.empresa.whatsapp}?text=${encodedText}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    return false;
  };

  // ----------------------------------------
  // Gestión de Navegación Activa y Scroll
  // ----------------------------------------
  function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav.navbar-nav a[href^="#"]');

    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Añadir compensación para el encabezado
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = '#' + section.getAttribute('id');
      }
    });

    // Actualizar estado activo de enlaces de navegación
    navLinks.forEach((link) => {
      if (link.parentElement) {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
          link.parentElement.classList.add('active');
        }
      }
    });
  }

  // ----------------------------------------
  // Gestión de Diseño de Tarjetas Responsivas
  // ----------------------------------------
  function updateTrendBoxLayout() {
    const trendBox = document.querySelector('.trend-box');
    if (!trendBox) return;

    const cardCount = document.querySelectorAll('.trend-box .col-lg-4').length;

    // Añadir clase si hay más de 3 tarjetas
    if (cardCount > 3) {
      trendBox.classList.add('has-more-cards');
    } else {
      trendBox.classList.remove('has-more-cards');
    }
  }

  // ----------------------------------------
  // Inicialización de Eventos DOM
  // ----------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    // Inicializar navegación activa y diseño
    updateActiveNavItem();
    updateTrendBoxLayout();

    // Manejar clics en enlaces de navegación
    document.querySelectorAll('.nav.navbar-nav a[href^="#"]').forEach((link) => {
      link.addEventListener('click', function (e) {
        // Remover clase activa de todos los items
        document.querySelectorAll('.nav.navbar-nav li').forEach((li) => {
          li.classList.remove('active');
        });

        // Añadir clase activa al padre del item clickeado
        if (this.parentElement.tagName === 'LI') {
          this.parentElement.classList.add('active');
        }
      });
    });

    // --- Lógica de Pestañas (Tabs) para Tours ---
    const tabs = document.querySelectorAll('#tabs li');
    if (tabs.length > 0) {
      const sections = document.querySelectorAll('.single-content > div[id]');
      const headerOffset = 100; // Compensación para encabezado sticky

      // 1. Manejador de Clic con Scroll Suave
      document.querySelectorAll('#tabs li a').forEach((link) => {
        link.addEventListener('click', function (e) {
          e.preventDefault();

          // Actualizar estado activo inmediatamente
          tabs.forEach((li) => li.classList.remove('active'));
          if (this.parentElement) this.parentElement.classList.add('active');

          // Scroll Suave
          const targetId = this.getAttribute('href');
          try {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
              const elementPosition = targetSection.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
              });
            }
          } catch (err) {
            console.error('Error scrolling to section:', err);
          }
        });
      });

      // 2. Scroll Spy (Espía de Scroll) para Pestañas
      window.addEventListener('scroll', function () {
        let current = '';
        const scrollPosition = window.scrollY + headerOffset + 50; // Mirar un poco hacia adelante

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });

        // Si está al final de la página, activar la última pestaña
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
          if (sections.length > 0) {
            current = sections[sections.length - 1].getAttribute('id');
          }
        }

        if (current) {
          tabs.forEach((li) => {
            li.classList.remove('active');
            const link = li.querySelector('a');
            if (link && link.getAttribute('href') === '#' + current) {
              li.classList.add('active');
            }
          });
        }
      });
    }
  });

  // Actualizar item de navegación activo al hacer scroll
  window.addEventListener('scroll', function () {
    updateActiveNavItem();
  });

  // Actualizar diseño al redimensionar ventana
  window.addEventListener('resize', updateTrendBoxLayout);
})(jQuery);

jQuery(window)
  .on('resize load', () => {
    resize_eb_slider();
  })
  .resize();
/**
 * Resize slider
 */
function resize_eb_slider() {
  let bodyheight = jQuery(this).height();
  if (jQuery(window).width() > 1400) {
    bodyheight *= 0.9;
    jQuery('.slider').css('height', `${bodyheight}px`);
  }
}
