<?php
/**
 * NTC Travels - Schema JSON-LD para Breadcrumbs
 *
 * Variables disponibles:
 * @var array $breadcrumbs - Array de breadcrumbs [['name' => '', 'url' => ''], ...]
 */

$site_url = 'https://www.ntcluxurytravels.com';

// Breadcrumbs por defecto (solo Home)
$breadcrumbs = $breadcrumbs ?? [
  ['name' => 'Home', 'url' => $site_url . '/']
];

$breadcrumb_items = [];
foreach ($breadcrumbs as $position => $crumb) {
  $breadcrumb_items[] = [
    '@type' => 'ListItem',
    'position' => $position + 1,
    'name' => $crumb['name'],
    'item' => $crumb['url']
  ];
}
?>
<script type="application/ld+json">
<?php echo json_encode([
  '@context' => 'https://schema.org',
  '@type' => 'BreadcrumbList',
  'itemListElement' => $breadcrumb_items
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>
