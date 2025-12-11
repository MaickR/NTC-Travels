<?php
/**
 * NTC Travels - Schema JSON-LD para WebSite
 */
$site_url = 'https://www.ntcluxurytravels.com';
?>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NTC Travels & Dreams",
  "url": "<?php echo $site_url; ?>/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "<?php echo $site_url; ?>/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
