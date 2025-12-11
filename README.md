# NTC Travels & Dreams

Sitio web de NTC Travels & Dreams (tours de lujo), con una base moderna para desarrollo y optimización, manteniendo compatibilidad para despliegue en Apache/cPanel.

Links
- Web: https://www.ntcluxurytravels.com
- WhatsApp: https://wa.me/14086090027

## Objetivos del proyecto

- Mantener el look & feel del sitio legado.
- Mejorar mantenibilidad (SCSS modular, JS organizado).
- Mejorar SEO y consistencia de URLs (rutas canónicas sin extensión).

## Stack

- Build/Dev: Vite
- Estilos: SCSS (compila a `css/estilos.css`)
- JS: Vanilla + plugins (jQuery/Swiper/Particles)
- Deploy: Apache/cPanel (PHP + `.htaccess`)

## Estructura

```
.
├── css/                 # CSS (incluye `estilos.css` compilado)
├── scss/                # Fuente SCSS (módulos)
├── js/                  # Scripts (custom + legacy)
├── images/              # Imágenes
├── images/optimized/    # Imágenes optimizadas (generado por scripts)
├── includes/            # Partials PHP (head/header/footer)
├── public/              # Assets para Vite
├── index.php
├── tour-egypt.php
├── tour-india.php
└── .htaccess            # URLs canónicas sin extensión
```

## Desarrollo local (Vite)

```bash
npm install
npm run dev
```

Vite levanta el sitio en:

- `http://localhost:3000/`

## Build

```bash
npm run scss:build
npm run build
```

## Lint

Lint “principal” (enfocado en lo mantenido):

```bash
npm run lint
npm run lint:css
```

Lint “completo” (incluye legacy/vendors, puede tener muchos reportes):

```bash
npm run lint:all
npm run lint:css:all
```

## Producción (Apache/cPanel con PHP)

- Subir: `index.php`, `tour-*.php`, `includes/`, `css/`, `js/`, `images/`, `favicon/`, `robots.txt`, `sitemap.xml` y `.htaccess`.
- URLs canónicas (sin extensión):
	- `/tour-egypt`
	- `/tour-india`

## Nota sobre SEO / rutas

El `.htaccess` redirige variantes antiguas (`.html`/`.php`) a las URLs canónicas sin extensión (301) y hace rewrite a `*.php` internamente.
