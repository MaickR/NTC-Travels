# Dependencias del Proyecto NTC Travels

## Última Actualización

Fecha: Diciembre 2024 (Fase 1 Completa)

## Librerías JavaScript

### En Uso (via CDN)

| Librería        | Versión     | CDN                                                                                 | Propósito                 |
| --------------- | ----------- | ----------------------------------------------------------------------------------- | ------------------------- |
| jQuery          | 3.5.1       | `https://code.jquery.com/jquery-3.5.1.min.js`                                       | DOM manipulation, plugins |
| Bootstrap       | 5.0.0-beta3 | `https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js`       | UI Framework              |
| Slick Carousel  | 1.8.1       | `https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js`              | Sliders/Carousels         |
| Swiper          | 8.x         | `https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js`                        | Touch sliders             |
| Particles.js    | 2.0.0       | `https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js`                  | Background particles      |
| jQuery Validate | 1.19.5      | `https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js` | Form validation           |
| SlickNav        | 1.0.10      | `https://cdn.jsdelivr.net/npm/slicknav@1.0.10/dist/jquery.slicknav.min.js`          | Mobile navigation         |

### En Uso (local - ntc-plugins.js)

| Librería      | Versión | Propósito                    |
| ------------- | ------- | ---------------------------- |
| SmoothScroll  | -       | Smooth scrolling             |
| jQuery Easing | 1.3     | Animation easing             |
| Modal Video   | 2.4.1   | Video modals (YouTube/Vimeo) |
| Loop Counter  | -       | Countdown timers             |

### Removidas (No usadas)

| Librería         | Razón                           |
| ---------------- | ------------------------------- |
| WOW.js           | No hay clases .wow en HTML      |
| Masonry          | No hay grid masonry en HTML     |
| Moment.js        | No se usa date formatting       |
| Wickedpicker     | No hay time pickers en HTML     |
| jPanelMenu       | No se usa en el sitio           |
| imagesLoaded     | Solo era dependencia de Masonry |
| Bootstrap-select | No se usa en el sitio           |
| Nice Select      | No se usa (dropdowns nativos)   |
| Rangeslider      | No hay price range sliders      |
| Lightbox2        | No hay galerías lightbox        |
| jQuery Validate  | Movido a CDN ✅                 |
| SlickNav         | Movido a CDN ✅                 |

## Librerías CSS

### En Uso (via CDN)

| Librería          | Versión     | CDN                                                                                            | Propósito     |
| ----------------- | ----------- | ---------------------------------------------------------------------------------------------- | ------------- |
| Bootstrap         | 5.0.0-beta3 | `https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css`                | UI Framework  |
| Slick Carousel    | 1.8.1       | `https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css`                            | Slider styles |
| Slick Theme       | 1.8.1       | `https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css`                      | Slider theme  |
| Swiper            | 8.x         | `https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css`                                  | Swiper styles |
| Simple Line Icons | 2.5.5       | `https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css` | Icons         |
| Flaticon          | -           | Local                                                                                          | Custom icons  |

### En Uso (local - ntc-plugins-clean.css) ✅

| Librería        | Propósito                   |
| --------------- | --------------------------- |
| Pretty Checkbox | Custom checkboxes/radios    |
| Range Slider    | Price slider styles         |
| Nice Select     | Custom select styles        |
| Lightbox2       | Lightbox modal styles       |
| Modal Video     | Video modal styles          |
| Slick (custom)  | Custom slider modifications |

### Removidas de ntc-plugins.css ❌

| Librería                | Razón                    | Líneas Eliminadas |
| ----------------------- | ------------------------ | ----------------- |
| Swiper (bundled v5.2.1) | Se carga v8 via CDN      | ~465              |
| Animate.css 3.6.0       | WOW.js no está en uso    | ~3,000            |
| ColorSwitcher           | Feature de demo no usada | ~200              |
| Wickedpicker            | No hay time pickers      | ~50               |
| Image Grid              | No hay grids de imágenes | ~300              |
| CD Dropdown             | No se usan mega menús    | ~600              |
| Date Picker             | No hay date pickers      | ~400              |
| **Total eliminado**     |                          | **~5,015 líneas** |

## Iconos

| Set               | Fuente                                        |
| ----------------- | --------------------------------------------- |
| Simple Line Icons | CDN                                           |
| Flaticon          | Local (`/css/flaticon.css`)                   |
| Font Awesome      | Considerar agregar si se necesitan más iconos |

## Notas de Migración

### Fase 1 - Completada ✅

- ✅ Slick migrado a CDN v1.8.1
- ✅ Swiper usando CDN v8 (original era v5.2.1)
- ✅ WOW.js y Masonry removidos de main.js
- ✅ config.js creado con datos centralizados
- ✅ ntc-plugins-clean.css creado (solo estilos necesarios)
- ✅ HTML actualizado para usar nuevo CSS limpio
- ✅ ntc-plugins.js limpiado (header actualizado)
- ✅ ntc-plugins.min.js eliminado (no necesario)
- ✅ jQuery Validate agregado via CDN
- ✅ SlickNav agregado via CDN

### Archivos Eliminados

- `js/ntc-plugins.min.js` - Reemplazado por CDNs + ntc-plugins.js limpio

### Pendiente Fase 2

- [ ] Optimizar imágenes (WebP, lazy loading)
- [ ] Minificar CSS/JS custom para producción
- [ ] Considerar eliminar ntc-plugins.css original

## Compatibilidad de Navegadores

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Tamaño de Bundles

### Antes de limpieza

- `ntc-plugins.css`: ~150KB (6,938 líneas)
- `ntc-plugins.js`: ~130KB (3,831 líneas)

### Después de limpieza ✅

- `ntc-plugins-clean.css`: ~18KB (~913 líneas) - **Reducción: 88%**
- `ntc-plugins.js`: ~15KB (~400 líneas) - **Reducción: 88%**

### CDNs Externos (cacheados por navegador)

| Recurso         | Tamaño (gzip) |
| --------------- | ------------- |
| jQuery 3.5.1    | ~30KB         |
| Bootstrap JS    | ~22KB         |
| Slick Carousel  | ~13KB         |
| Swiper 8        | ~45KB         |
| jQuery Validate | ~8KB          |
| SlickNav        | ~4KB          |
