/**
 * @fileoverview Módulo de Navegación para NTC Travels & Dreams
 * Maneja menú móvil (SlickNav), header sticky y navegación principal
 * @module modules/navegacion
 * @author NTC Development Team
 * @version 1.0.0
 */

/**
 * @typedef {Object} NavegacionOptions
 * @property {number} [scrollThreshold=70] - Umbral de scroll para activar sticky
 * @property {number} [hideThreshold=200] - Umbral para ocultar header al scroll
 * @property {string} [menuSelector='#responsive-menu'] - Selector del menú
 * @property {string} [mobileContainer='#slicknav-mobile'] - Contenedor móvil
 */

// Estado del módulo
let isInitialized = false;
let lastScrollY = 0;
let scrollDirection = 0;

/**
 * Inicializa el menú móvil usando SlickNav
 * Requiere jQuery y SlickNav plugin
 * @param {Object} [options={}] - Opciones de configuración
 * @returns {void}
 * @example
 * inicializarMenuMovil();
 * // o con opciones
 * inicializarMenuMovil({
 *   menuSelector: '#main-menu',
 *   mobileContainer: '#mobile-menu'
 * });
 */
export const inicializarMenuMovil = (options = {}) => {
  const {
    menuSelector = '#responsive-menu',
    mobileContainer = '#slicknav-mobile',
    duration = 500,
  } = options;

  // Verificar dependencias
  if (typeof jQuery === 'undefined') {
    console.warn('[Navegacion] jQuery no disponible');
    return;
  }

  if (typeof jQuery.fn.slicknav === 'undefined') {
    console.warn('[Navegacion] SlickNav plugin no disponible');
    return;
  }

  const $menu = jQuery(menuSelector);
  if ($menu.length === 0) {
    console.warn(`[Navegacion] Menú ${menuSelector} no encontrado`);
    return;
  }

  // Inicializar SlickNav
  $menu.slicknav({
    duration: duration,
    easingOpen: 'easeInExpo',
    easingClose: 'easeOutExpo',
    closedSymbol: '<i class="fa fa-plus"></i>',
    openedSymbol: '<i class="fa fa-minus"></i>',
    prependTo: mobileContainer,
    allowParentLinks: true,
    label: '',
  });

  console.log('[Navegacion] Menú móvil inicializado');
};

/**
 * Maneja el comportamiento sticky del header
 * Añade/remueve clases CSS basado en posición de scroll
 * @param {Object} [options={}] - Opciones de configuración
 * @returns {void}
 */
export const manejarMenuSticky = (options = {}) => {
  const {
    scrollThreshold = 70,
    navbarSelector = '.navbar',
    headerSelector = '.header_menu',
    stickyClass = 'navbar-sticky-in',
    fixedClass = 'fixed-top animated slideInDown',
  } = options;

  const navbar = document.querySelector(navbarSelector);
  const headerMenu = document.querySelector(headerSelector);

  if (!navbar && !headerMenu) {
    return;
  }

  /**
   * Handler de scroll para sticky nav
   */
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Navbar sticky
    if (navbar) {
      if (scrollY > 10) {
        navbar.classList.add(stickyClass);
      } else {
        navbar.classList.remove(stickyClass);
      }
    }

    // Header menu fixed
    if (headerMenu) {
      if (scrollY > scrollThreshold) {
        headerMenu.classList.add(...fixedClass.split(' '));
      } else {
        headerMenu.classList.remove(...fixedClass.split(' '));
      }
    }
  };

  // Añadir listener con throttle para mejor rendimiento
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  // Ejecutar una vez al inicio
  handleScroll();

  console.log('[Navegacion] Menu sticky inicializado');
};

/**
 * Maneja la ocultación del header al hacer scroll hacia abajo
 * y lo muestra al hacer scroll hacia arriba
 * @param {Object} [options={}] - Opciones de configuración
 * @returns {void}
 */
export const manejarHeaderAutoHide = (options = {}) => {
  const {
    headerSelector = '#header_menu',
    hideClass = 'hide',
    threshold = 200,
    tabStickySelector = '.sticky1',
  } = options;

  const header = document.querySelector(headerSelector) || document.getElementById('header_menu');

  if (!header) {
    return;
  }

  let prevScroll = window.scrollY || document.documentElement.scrollTop;
  let prevDirection = 0;

  const checkScroll = () => {
    const curScroll = window.scrollY || document.documentElement.scrollTop;
    let curDirection = 0;

    if (curScroll > prevScroll) {
      curDirection = 2; // Scroll down
    } else if (curScroll < prevScroll) {
      curDirection = 1; // Scroll up
    }

    if (curDirection !== prevDirection) {
      if (curDirection === 2 && curScroll > threshold) {
        // Scrolling down past threshold
        header.classList.add(hideClass);

        // Tab sticky
        const tabSticky = document.querySelector(tabStickySelector);
        if (tabSticky) {
          tabSticky.classList.add('tab-sticky');
        }
      } else if (curDirection === 1) {
        // Scrolling up
        header.classList.remove(hideClass);

        const tabSticky = document.querySelector(tabStickySelector);
        if (tabSticky) {
          tabSticky.classList.remove('tab-sticky');
        }
      }
      prevDirection = curDirection;
    }

    prevScroll = curScroll;
  };

  window.addEventListener('scroll', checkScroll, { passive: true });
  console.log('[Navegacion] Header auto-hide inicializado');
};

/**
 * Inicializa efecto dropdown para menú de escritorio
 * Slidedown/slideup en hover
 * @returns {void}
 */
export const inicializarDropdowns = () => {
  // Solo para pantallas grandes
  if (window.innerWidth <= 992) {
    return;
  }

  const menuItems = document.querySelectorAll('#navbar li');

  menuItems.forEach((item) => {
    const submenu = item.querySelector('ul');
    if (!submenu) return;

    // Mouse enter
    item.addEventListener('mouseenter', () => {
      submenu.style.display = 'block';
      submenu.style.opacity = '0';
      submenu.style.transform = 'translateY(-10px)';

      requestAnimationFrame(() => {
        submenu.style.transition = 'opacity 350ms ease, transform 350ms ease';
        submenu.style.opacity = '1';
        submenu.style.transform = 'translateY(0)';
      });
    });

    // Mouse leave
    item.addEventListener('mouseleave', () => {
      submenu.style.transition = 'opacity 150ms ease, transform 150ms ease';
      submenu.style.opacity = '0';
      submenu.style.transform = 'translateY(-10px)';

      setTimeout(() => {
        submenu.style.display = 'none';
      }, 150);
    });
  });

  // Añadir flechas a submenús
  if (window.innerWidth > 992) {
    document.querySelectorAll('.navbar-arrow ul ul > li').forEach((item) => {
      if (item.querySelector('ul')) {
        const link = item.querySelector('a');
        if (link && !link.querySelector('.arrow-indicator')) {
          const arrow = document.createElement('i');
          arrow.className = 'arrow-indicator fa fa-angle-right';
          link.appendChild(arrow);
        }
      }
    });
  }

  console.log('[Navegacion] Dropdowns inicializados');
};

/**
 * Actualiza el estado activo de los enlaces de navegación
 * basado en la sección visible actualmente
 * @param {Object} [options={}] - Opciones de configuración
 * @returns {void}
 */
export const actualizarNavActivo = (options = {}) => {
  const {
    sectionSelector = 'section[id]',
    navLinkSelector = '.nav.navbar-nav a[href^="#"]',
    activeClass = 'active',
    offset = 100,
  } = options;

  const sections = document.querySelectorAll(sectionSelector);
  const navLinks = document.querySelectorAll(navLinkSelector);

  if (sections.length === 0 || navLinks.length === 0) {
    return;
  }

  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - offset;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = '#' + section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    const parent = link.parentElement;
    if (parent) {
      parent.classList.remove(activeClass);
      if (link.getAttribute('href') === currentSection) {
        parent.classList.add(activeClass);
      }
    }
  });
};

/**
 * Inicializa scroll spy para tabs de navegación (páginas de tour)
 * @param {Object} [options={}] - Opciones de configuración
 * @returns {void}
 */
export const inicializarScrollSpy = (options = {}) => {
  const {
    tabsSelector = '#tabs li',
    sectionsSelector = '.single-content > div[id]',
    headerOffset = 100,
  } = options;

  const tabs = document.querySelectorAll(tabsSelector);
  const sections = document.querySelectorAll(sectionsSelector);

  if (tabs.length === 0 || sections.length === 0) {
    return;
  }

  // Click handler con smooth scroll
  tabs.forEach((tab) => {
    const link = tab.querySelector('a');
    if (!link) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Actualizar estado activo
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // Smooth scroll
      const targetId = link.getAttribute('href');
      try {
        const target = document.querySelector(targetId);
        if (target) {
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } catch (err) {
        console.error('[Navegacion] Error al hacer scroll:', err);
      }
    });
  });

  // Scroll spy
  const handleScrollSpy = () => {
    const scrollPosition = window.scrollY + headerOffset + 50;
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    // Al final de la página, activar última pestaña
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      if (sections.length > 0) {
        current = sections[sections.length - 1].getAttribute('id');
      }
    }

    if (current) {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
        const link = tab.querySelector('a');
        if (link && link.getAttribute('href') === '#' + current) {
          tab.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScrollSpy, { passive: true });
  console.log('[Navegacion] Scroll spy inicializado');
};

/**
 * Inicializa todos los componentes de navegación
 * @param {NavegacionOptions} [options={}] - Opciones globales
 * @returns {void}
 */
export const inicializarNavegacion = (options = {}) => {
  if (isInitialized) {
    console.warn('[Navegacion] Ya inicializado');
    return;
  }

  // Menú móvil (requiere jQuery)
  inicializarMenuMovil(options);

  // Sticky header
  manejarMenuSticky(options);

  // Auto-hide header
  manejarHeaderAutoHide(options);

  // Dropdowns en desktop
  inicializarDropdowns();

  // Scroll spy para tabs
  inicializarScrollSpy(options);

  // Actualizar nav activo al scroll
  window.addEventListener('scroll', () => actualizarNavActivo(options), { passive: true });

  isInitialized = true;
  console.log('[Navegacion] Todos los componentes inicializados');
};

export default {
  inicializarNavegacion,
  inicializarMenuMovil,
  manejarMenuSticky,
  manejarHeaderAutoHide,
  inicializarDropdowns,
  inicializarScrollSpy,
  actualizarNavActivo,
};
