// ==========================================================================
// * STYLELINT CONFIG - NTC Travels & Dreams
// * Descripción: Configuración de Stylelint para SCSS con BEM
// * Autor: NTC Development Team
// ==========================================================================

/** @type {import('stylelint').Config} */
export default {
  // ? Extender configuración estándar para SCSS y compatibilidad con Prettier
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],

  // ? Plugins adicionales
  plugins: ['stylelint-order'],

  // ? Archivos a analizar
  ignoreFiles: [
    'node_modules/**',
    'dist/**',
    'NTC-BACKUP/**',
    'css/ntc-plugins.css', // Archivo de vendors (se eliminará en fases posteriores)
  ],

  // ? Reglas personalizadas
  rules: {
    // ---------------------------------------------------------------
    // ! CONVENCIONES DE NOMBRES (BEM)
    // ---------------------------------------------------------------
    // Patrón BEM: bloque__elemento--modificador
    'selector-class-pattern': [
      // Permite BEM y clases de utilidad
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$|^(sr-only|visualmente-oculto|no-select|scroll-snap-x|scroll-snap-y)$',
      {
        message:
          'Las clases deben seguir convención BEM: bloque__elemento--modificador (selector-class-pattern)',
        resolveNestedSelectors: true,
      },
    ],

    // ---------------------------------------------------------------
    // ! SCSS ESPECÍFICO
    // ---------------------------------------------------------------
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'scss/percent-placeholder-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'scss/at-mixin-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'scss/at-function-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',

    // ---------------------------------------------------------------
    // ! SELECTORES
    // ---------------------------------------------------------------
    'selector-max-id': 0, // No usar IDs en selectores CSS
    'selector-max-compound-selectors': 4, // Máximo 4 niveles
    'selector-max-specificity': '0,4,0', // Limitar especificidad
    'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class'] }],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],

    // ---------------------------------------------------------------
    // ! PROPIEDADES
    // ---------------------------------------------------------------
    'declaration-no-important': true, // Evitar !important
    'property-no-vendor-prefix': true, // Evitar prefijos vendor (usar autoprefixer)
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,

    // ---------------------------------------------------------------
    // ! FORMATO
    // ---------------------------------------------------------------
    'max-nesting-depth': 4, // Máximo 4 niveles de anidación
    'no-empty-source': true,
    'no-duplicate-selectors': true,
    'color-named': 'never', // Usar hex/rgb en vez de nombres
    'color-hex-length': 'short', // #fff en vez de #ffffff
    'color-no-invalid-hex': true,
    'scss/comment-no-empty': null, // Permitir comentarios vacíos para estructura

    // ---------------------------------------------------------------
    // ! ORDEN DE PROPIEDADES (Agrupación lógica)
    // ---------------------------------------------------------------
    'order/properties-order': [
      // Posicionamiento
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      // Modelo de caja
      'display',
      'flex',
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-items',
      'align-content',
      'gap',
      'order',
      'grid',
      'grid-template-columns',
      'grid-template-rows',
      'grid-gap',
      'float',
      'clear',
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      // Bordes
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-radius',
      'outline',
      // Fondo
      'background',
      'background-color',
      'background-image',
      'background-position',
      'background-size',
      'background-repeat',
      // Tipografía
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'line-height',
      'letter-spacing',
      'text-align',
      'text-decoration',
      'text-transform',
      'color',
      // Visual
      'opacity',
      'visibility',
      'overflow',
      'box-shadow',
      // Transiciones y animaciones
      'transition',
      'transform',
      'animation',
      // Otros
      'cursor',
      'pointer-events',
      'user-select',
      'content',
    ],

    // ---------------------------------------------------------------
    // ! DESHABILITADAS (Para fase inicial de migración)
    // ---------------------------------------------------------------
    'no-descending-specificity': null, // Permitir temporalmente
    'font-family-no-missing-generic-family-keyword': null, // Permitir en variables
  },
};
