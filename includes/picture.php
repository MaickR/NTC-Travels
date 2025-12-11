<?php
/**
 * NTC Travels - Componente de Imagen Responsiva
 *
 * Helper PHP para generar elementos <picture> optimizados con:
 * - Formatos modernos (AVIF, WebP) con fallback JPG/PNG
 * - Srcset para tamaños responsivos
 * - Lazy loading nativo
 * - Placeholders blur (LQIP)
 *
 * @author NTC Development Team
 * @version 1.0.0
 */

// Cargar el manifiesto de imágenes optimizadas
function ntc_get_image_manifest() {
    static $manifest = null;

    if ($manifest === null) {
        $manifestPath = __DIR__ . '/../images/optimized/manifest.json';
        if (file_exists($manifestPath)) {
            $manifest = json_decode(file_get_contents($manifestPath), true);
        } else {
            $manifest = ['images' => []];
        }
    }

    return $manifest;
}

/**
 * Genera un elemento <picture> optimizado
 *
 * @param string $src Ruta de la imagen original (ej: 'images/india/india-1.jpg')
 * @param string $alt Texto alternativo
 * @param array $options Opciones adicionales:
 *   - 'class' => Clases CSS para el <img>
 *   - 'width' => Ancho en píxeles
 *   - 'height' => Alto en píxeles
 *   - 'loading' => 'lazy' (default) | 'eager'
 *   - 'fetchpriority' => 'high' | 'low' | 'auto'
 *   - 'sizes' => Atributo sizes (default: '100vw')
 *   - 'decoding' => 'async' (default) | 'sync' | 'auto'
 *   - 'blur' => true (default) | false - Mostrar placeholder blur
 *   - 'fallback' => true (default) | false - Usar imagen original como fallback
 *   - 'style' => Estilos inline adicionales
 *   - 'id' => ID del elemento
 *   - 'data' => array de atributos data-*
 * @return string HTML del elemento <picture>
 */
function ntc_picture($src, $alt, $options = []) {
    // Valores por defecto
    $defaults = [
        'class' => '',
        'width' => null,
        'height' => null,
        'loading' => 'lazy',
        'fetchpriority' => null,
        'sizes' => '(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px',
        'decoding' => 'async',
        'blur' => true,
        'fallback' => true,
        'style' => '',
        'id' => '',
        'data' => [],
    ];

    $opts = array_merge($defaults, $options);

    // Obtener información del manifiesto
    $manifest = ntc_get_image_manifest();
    $imageInfo = $manifest['images'][$src] ?? null;

    // Si no hay imagen optimizada, usar la original
    if (!$imageInfo) {
        return ntc_img_fallback($src, $alt, $opts);
    }

    $html = '<picture>';

    // AVIF sources
    if (!empty($imageInfo['formats']['avif'])) {
        $srcset = ntc_build_srcset($imageInfo['formats']['avif']);
        $html .= sprintf(
            '<source type="image/avif" srcset="%s" sizes="%s">',
            $srcset,
            htmlspecialchars($opts['sizes'])
        );
    }

    // WebP sources
    if (!empty($imageInfo['formats']['webp'])) {
        $srcset = ntc_build_srcset($imageInfo['formats']['webp']);
        $html .= sprintf(
            '<source type="image/webp" srcset="%s" sizes="%s">',
            $srcset,
            htmlspecialchars($opts['sizes'])
        );
    }

    // Fallback JPG/PNG sources
    if (!empty($imageInfo['formats']['jpg'])) {
        $srcset = ntc_build_srcset($imageInfo['formats']['jpg']);
        // Usar el tamaño más grande como src principal
        $fallbackSrc = end($imageInfo['formats']['jpg'])['path'];

        // Construir atributos del img
        $imgAttrs = [];
        $imgAttrs[] = sprintf('src="%s"', htmlspecialchars($fallbackSrc));
        $imgAttrs[] = sprintf('srcset="%s"', $srcset);
        $imgAttrs[] = sprintf('sizes="%s"', htmlspecialchars($opts['sizes']));
        $imgAttrs[] = sprintf('alt="%s"', htmlspecialchars($alt));

        if ($opts['class']) {
            $imgAttrs[] = sprintf('class="%s"', htmlspecialchars($opts['class']));
        }

        if ($opts['width']) {
            $imgAttrs[] = sprintf('width="%d"', (int)$opts['width']);
        }

        if ($opts['height']) {
            $imgAttrs[] = sprintf('height="%d"', (int)$opts['height']);
        }

        if ($opts['loading']) {
            $imgAttrs[] = sprintf('loading="%s"', htmlspecialchars($opts['loading']));
        }

        if ($opts['fetchpriority']) {
            $imgAttrs[] = sprintf('fetchpriority="%s"', htmlspecialchars($opts['fetchpriority']));
        }

        if ($opts['decoding']) {
            $imgAttrs[] = sprintf('decoding="%s"', htmlspecialchars($opts['decoding']));
        }

        if ($opts['style']) {
            $imgAttrs[] = sprintf('style="%s"', htmlspecialchars($opts['style']));
        }

        if ($opts['id']) {
            $imgAttrs[] = sprintf('id="%s"', htmlspecialchars($opts['id']));
        }

        // Data attributes
        foreach ($opts['data'] as $key => $value) {
            $imgAttrs[] = sprintf('data-%s="%s"', htmlspecialchars($key), htmlspecialchars($value));
        }

        // Placeholder blur como data attribute
        if ($opts['blur'] && !empty($imageInfo['blur'])) {
            $imgAttrs[] = sprintf('data-blur="%s"', htmlspecialchars($imageInfo['blur']));
        }

        $html .= '<img ' . implode(' ', $imgAttrs) . '>';
    }

    $html .= '</picture>';

    return $html;
}

/**
 * Construye el atributo srcset a partir de un array de formatos
 *
 * @param array $formats Array con información de formatos
 * @return string Valor del srcset
 */
function ntc_build_srcset($formats) {
    $srcset = [];
    foreach ($formats as $format) {
        $srcset[] = sprintf('%s %dw', $format['path'], $format['width']);
    }
    return implode(', ', $srcset);
}

/**
 * Genera un img simple como fallback cuando no hay optimización
 *
 * @param string $src Ruta de la imagen
 * @param string $alt Texto alternativo
 * @param array $opts Opciones
 * @return string HTML del elemento <img>
 */
function ntc_img_fallback($src, $alt, $opts) {
    $attrs = [];
    $attrs[] = sprintf('src="%s"', htmlspecialchars($src));
    $attrs[] = sprintf('alt="%s"', htmlspecialchars($alt));

    if ($opts['class']) {
        $attrs[] = sprintf('class="%s"', htmlspecialchars($opts['class']));
    }

    if ($opts['width']) {
        $attrs[] = sprintf('width="%d"', (int)$opts['width']);
    }

    if ($opts['height']) {
        $attrs[] = sprintf('height="%d"', (int)$opts['height']);
    }

    if ($opts['loading']) {
        $attrs[] = sprintf('loading="%s"', htmlspecialchars($opts['loading']));
    }

    if ($opts['decoding']) {
        $attrs[] = sprintf('decoding="%s"', htmlspecialchars($opts['decoding']));
    }

    if ($opts['style']) {
        $attrs[] = sprintf('style="%s"', htmlspecialchars($opts['style']));
    }

    if ($opts['id']) {
        $attrs[] = sprintf('id="%s"', htmlspecialchars($opts['id']));
    }

    return '<img ' . implode(' ', $attrs) . '>';
}

/**
 * Genera una imagen de fondo CSS optimizada con fallbacks
 *
 * @param string $src Ruta de la imagen original
 * @param int $preferredWidth Ancho preferido (400, 800, 1200, 1920)
 * @return array Array con rutas para cada formato ['avif' => ..., 'webp' => ..., 'jpg' => ...]
 */
function ntc_background_image($src, $preferredWidth = 1200) {
    $manifest = ntc_get_image_manifest();
    $imageInfo = $manifest['images'][$src] ?? null;

    if (!$imageInfo) {
        return [
            'original' => $src,
            'avif' => null,
            'webp' => null,
            'jpg' => null,
        ];
    }

    $result = [
        'original' => $src,
        'avif' => null,
        'webp' => null,
        'jpg' => null,
    ];

    // Encontrar el tamaño más cercano al preferido
    foreach (['avif', 'webp', 'jpg'] as $format) {
        if (!empty($imageInfo['formats'][$format])) {
            $closest = null;
            $closestDiff = PHP_INT_MAX;

            foreach ($imageInfo['formats'][$format] as $variant) {
                $diff = abs($variant['width'] - $preferredWidth);
                if ($diff < $closestDiff) {
                    $closestDiff = $diff;
                    $closest = $variant['path'];
                }
            }

            $result[$format] = $closest;
        }
    }

    return $result;
}

/**
 * Genera CSS con image-set() para fondos optimizados
 *
 * @param string $src Ruta de la imagen original
 * @param int $preferredWidth Ancho preferido
 * @return string CSS con image-set()
 */
function ntc_css_background($src, $preferredWidth = 1200) {
    $images = ntc_background_image($src, $preferredWidth);

    if (!$images['webp'] && !$images['avif']) {
        return sprintf("background-image: url('%s');", $images['original']);
    }

    $css = '';

    // Fallback para navegadores antiguos
    $css .= sprintf("background-image: url('%s');", $images['jpg'] ?? $images['original']);

    // image-set para navegadores modernos
    $imageSet = [];

    if ($images['avif']) {
        $imageSet[] = sprintf("url('%s') type('image/avif')", $images['avif']);
    }

    if ($images['webp']) {
        $imageSet[] = sprintf("url('%s') type('image/webp')", $images['webp']);
    }

    if ($images['jpg']) {
        $imageSet[] = sprintf("url('%s') type('image/jpeg')", $images['jpg']);
    }

    if (!empty($imageSet)) {
        $css .= sprintf(" background-image: image-set(%s);", implode(', ', $imageSet));
    }

    return $css;
}

/**
 * Genera el link de preload para imágenes críticas
 *
 * @param string $src Ruta de la imagen original
 * @param string $type 'image' | 'background'
 * @param int $preferredWidth Ancho preferido para preload
 * @return string HTML del elemento <link>
 */
function ntc_preload_image($src, $type = 'image', $preferredWidth = 1200) {
    $manifest = ntc_get_image_manifest();
    $imageInfo = $manifest['images'][$src] ?? null;

    if (!$imageInfo) {
        return sprintf(
            '<link rel="preload" as="image" href="%s">',
            htmlspecialchars($src)
        );
    }

    $html = '';

    // Preload AVIF para navegadores que lo soportan
    $avif = ntc_get_closest_size($imageInfo['formats']['avif'] ?? [], $preferredWidth);
    if ($avif) {
        $html .= sprintf(
            '<link rel="preload" as="image" href="%s" type="image/avif">',
            htmlspecialchars($avif)
        );
    }

    // Preload WebP como alternativa
    $webp = ntc_get_closest_size($imageInfo['formats']['webp'] ?? [], $preferredWidth);
    if ($webp) {
        $html .= sprintf(
            '<link rel="preload" as="image" href="%s" type="image/webp">',
            htmlspecialchars($webp)
        );
    }

    return $html;
}

/**
 * Obtiene la ruta del tamaño más cercano al solicitado
 *
 * @param array $formats Array de formatos
 * @param int $preferredWidth Ancho preferido
 * @return string|null Ruta del archivo
 */
function ntc_get_closest_size($formats, $preferredWidth) {
    if (empty($formats)) return null;

    $closest = null;
    $closestDiff = PHP_INT_MAX;

    foreach ($formats as $format) {
        $diff = abs($format['width'] - $preferredWidth);
        if ($diff < $closestDiff) {
            $closestDiff = $diff;
            $closest = $format['path'];
        }
    }

    return $closest;
}

/**
 * Obtiene la URL del placeholder blur
 *
 * @param string $src Ruta de la imagen original
 * @return string|null URL del blur placeholder
 */
function ntc_blur_placeholder($src) {
    $manifest = ntc_get_image_manifest();
    $imageInfo = $manifest['images'][$src] ?? null;

    return $imageInfo['blur'] ?? null;
}
