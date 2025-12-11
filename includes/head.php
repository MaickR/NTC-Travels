<?php
/**
 * NTC Travels - Componente <head>
 *
 * Variables disponibles (definir antes de incluir):
 * @var string $page_title      - Título de la página
 * @var string $page_description - Meta description
 * @var string $page_keywords    - Meta keywords (opcional)
 * @var string $canonical_url    - URL canónica
 * @var string $og_image        - Imagen para Open Graph (opcional)
 * @var string $body_class      - Clase para el body (opcional)
 */

// Valores por defecto
$site_name = 'NTC Travels & Dreams';
$site_url = 'https://www.ntcluxurytravels.com';
$default_image = $site_url . '/images/logo-NTC-bg.png';

$page_title = $page_title ?? $site_name . ' - Your Trusted Travel Agency';
$page_description = $page_description ?? 'NTC Travels & Dreams delivers tailored travel planning for unforgettable journeys across Egypt, India, and beyond.';
$page_keywords = $page_keywords ?? 'travel agency, tailor made tours, NTC Travels, Egypt tour, India tour';
$canonical_url = $canonical_url ?? $site_url . '/';
$og_image = $og_image ?? $default_image;
?>
<!doctype html>
<html lang="en">
<head>
  <!-- Charset & Viewport -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Primary Meta Tags -->
  <title><?php echo htmlspecialchars($page_title); ?></title>
  <meta name="description" content="<?php echo htmlspecialchars($page_description); ?>">
  <meta name="keywords" content="<?php echo htmlspecialchars($page_keywords); ?>">
  <meta name="author" content="<?php echo $site_name; ?>">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

  <!-- Theme & Locale -->
  <meta name="theme-color" content="#141d40">
  <meta name="language" content="English">
  <meta name="geo.region" content="US">
  <meta name="geo.placename" content="United States">
  <meta name="rating" content="General">
  <meta name="revisit-after" content="7 days">

  <!-- Canonical URL -->
  <link rel="canonical" href="<?php echo htmlspecialchars($canonical_url); ?>">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?php echo htmlspecialchars($canonical_url); ?>">
  <meta property="og:title" content="<?php echo htmlspecialchars($page_title); ?>">
  <meta property="og:description" content="<?php echo htmlspecialchars($page_description); ?>">
  <meta property="og:image" content="<?php echo htmlspecialchars($og_image); ?>">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="<?php echo $site_name; ?> Logo">
  <meta property="og:site_name" content="<?php echo $site_name; ?>">
  <meta property="og:locale" content="en_US">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="<?php echo htmlspecialchars($canonical_url); ?>">
  <meta name="twitter:title" content="<?php echo htmlspecialchars($page_title); ?>">
  <meta name="twitter:description" content="<?php echo htmlspecialchars($page_description); ?>">
  <meta name="twitter:image" content="<?php echo htmlspecialchars($og_image); ?>">
  <meta name="twitter:image:alt" content="<?php echo $site_name; ?> Logo">
  <meta name="twitter:creator" content="@ntctravels">

  <!-- Preconnect to Critical Resources -->
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>

  <!-- DNS Prefetch -->
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="favicon/favicon.ico?v=2">
  <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png?v=2">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png?v=2">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png?v=2">
  <link rel="manifest" href="favicon/site.webmanifest?v=2">

  <!-- CSS: Frameworks -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">

  <!-- CSS: Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

  <!-- CSS: Fonts (Preload + Load) -->
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&family=Inter:wght@300;400;500;600&display=swap" as="style">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&family=Inter:wght@300;400;500;600&display=swap">

  <!-- CSS: Custom -->
  <link rel="stylesheet" href="css/ntc-plugins-clean.css?v=2">
  <link rel="stylesheet" href="css/components.css?v=1">
  <link rel="stylesheet" href="css/estilos.css?v=2">

  <!-- Preload Critical Images (Logo + LCP candidates) -->
  <link rel="preload" as="image" href="images/logo-NTC-bg.png" type="image/png">
  <?php if (isset($preload_images) && is_array($preload_images)): ?>
    <?php foreach ($preload_images as $img): ?>
      <link rel="preload" as="image" href="<?= htmlspecialchars($img['src']) ?>" type="<?= htmlspecialchars($img['type'] ?? 'image/webp') ?>"<?= isset($img['media']) ? ' media="' . htmlspecialchars($img['media']) . '"' : '' ?>>
    <?php endforeach; ?>
  <?php endif; ?>

  <!-- Preload Hero Images for LCP optimization -->
  <link rel="preload" as="image" href="images/optimized/india/india-1-1200w.webp" type="image/webp" media="(min-width: 801px)">
  <link rel="preload" as="image" href="images/optimized/india/india-1-800w.webp" type="image/webp" media="(max-width: 800px)">
</head>
