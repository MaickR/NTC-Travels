import { defineConfig } from 'vite';
import path from 'path';
import terser from '@rollup/plugin-terser';
import purgecss from 'vite-plugin-purgecss';
import compression from 'vite-plugin-compression';

export default defineConfig({
  root: '.',
  base: './',

  // Development server
  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,

    // Sourcemaps for production debugging
    sourcemap: true,

    // Minification with terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: true,
      format: {
        comments: false,
      },
    },

    // CSS optimization
    cssMinify: true,
    cssCodeSplit: true,

    // Chunk splitting for better caching
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        tourEgypt: path.resolve(__dirname, 'tour-egypt.html'),
        tourIndia: path.resolve(__dirname, 'tour-india.html'),
      },
      output: {
        // Asset naming
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/css/i.test(ext)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
      plugins: [
        terser({
          compress: {
            passes: 2,
          },
        }),
      ],
    },

    // Target modern browsers
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },

  // SCSS configuration
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
        silenceDeprecations: ['color-functions', 'global-builtin', 'import', 'legacy-js-api'],
        quietDeps: true,
      },
    },
    devSourcemap: true,
  },

  // Path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@js': path.resolve(__dirname, './js'),
      '@css': path.resolve(__dirname, './css'),
      '@scss': path.resolve(__dirname, './scss'),
      '@images': path.resolve(__dirname, './images'),
    },
  },

  // Plugins
  plugins: [
    // PurgeCSS - Remove unused CSS
    purgecss({
      content: ['./*.html', './*.php', './includes/**/*.php', './js/**/*.js'],
      safelist: {
        // Keep classes used dynamically
        standard: [
          'active',
          'show',
          'hidden',
          'visible',
          'swiper-slide-active',
          'swiper-slide-next',
          'swiper-slide-prev',
          'is-scrolled',
          'menu-open',
          'nav-active',
        ],
        // Keep classes matching patterns
        deep: [/^swiper/, /^aos/, /^particle/, /^ntc-/, /^modal/, /^nav-/, /^btn-/, /^form-/],
        greedy: [/swiper/, /aos/],
      },
      // Extractors for PHP files
      extractors: [
        {
          extractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
          extensions: ['php', 'html', 'js'],
        },
      ],
    }),

    // Gzip compression
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      filter: /\.(js|css|html|json|svg)$/i,
    }),

    // Brotli compression
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      filter: /\.(js|css|html|json|svg)$/i,
    }),
  ],

  // Optimization
  optimizeDeps: {
    include: [],
  },

  // Define global constants
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    __VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
  },
});
