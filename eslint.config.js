// ==========================================================================
// * ESLINT CONFIG - NTC Travels & Dreams
// * Descripción: Configuración de ESLint para JavaScript moderno
// * Autor: NTC Development Team
// ==========================================================================

import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  // ? Configuración base recomendada
  js.configs.recommended,

  // ? Desactivar reglas que conflictan con Prettier
  prettierConfig,

  {
    // ? Archivos a analizar
    files: ['**/*.js'],

    // ? Archivos a ignorar
    ignores: ['node_modules/**', 'dist/**', 'NTC-BACKUP/**', '**/*.min.js'],

    // ? Variables globales disponibles
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2024,
        // Librerías externas usadas en el proyecto
        jQuery: 'readonly',
        $: 'readonly',
        Swiper: 'readonly',
        WOW: 'readonly',
        particlesJS: 'readonly',
        bootstrap: 'readonly',
        // Configuración global del proyecto
        NTC_CONFIG: 'readonly',
        // Legacy globals (deben migrarse a módulos más adelante)
        loopcounter: 'readonly',
        updateFormFields: 'readonly',
      },
    },

    // ? Reglas de linting
    rules: {
      // ---------------------------------------------------------------
      // ! ERRORES - Problemas críticos
      // ---------------------------------------------------------------
      'no-console': 'warn', // Advertir sobre console.log
      'no-debugger': 'error', // No permitir debugger
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-undef': 'error', // Variables no definidas

      // ---------------------------------------------------------------
      // ! ESTILO - Consistencia de código
      // ---------------------------------------------------------------
      indent: ['warn', 2, { SwitchCase: 1 }],
      quotes: ['warn', 'single', { avoidEscape: true }],
      semi: ['warn', 'always'],
      'comma-dangle': ['warn', 'always-multiline'],
      'no-trailing-spaces': 'warn',
      'eol-last': ['warn', 'always'],
      'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1 }],

      // ---------------------------------------------------------------
      // ! BUENAS PRÁCTICAS
      // ---------------------------------------------------------------
      eqeqeq: ['warn', 'always'], // Usar === en vez de ==
      curly: ['warn', 'all'], // Siempre usar llaves
      'no-var': 'warn', // Preferir let/const
      'prefer-const': 'warn', // Preferir const cuando no se reasigna
      'prefer-arrow-callback': 'warn', // Preferir arrow functions
      'prefer-template': 'warn', // Preferir template strings
      'no-eval': 'error', // No usar eval
      'no-implied-eval': 'error',

      // ---------------------------------------------------------------
      // ! FORMATO DE FUNCIONES
      // ---------------------------------------------------------------
      'arrow-spacing': 'warn',
      'space-before-function-paren': [
        'warn',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'space-infix-ops': 'warn',
      'keyword-spacing': 'warn',
      'object-curly-spacing': ['warn', 'always'],
      'array-bracket-spacing': ['warn', 'never'],

      // ---------------------------------------------------------------
      // ! COMPLEJIDAD
      // ---------------------------------------------------------------
      'max-depth': ['warn', 4], // Máximo 4 niveles de anidación
      'max-lines-per-function': [
        'warn',
        {
          max: 100,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },
];
