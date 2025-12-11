<?php
/**
 * NTC Travels - Schema JSON-LD para Servicios
 */
$site_url = 'https://www.ntcluxurytravels.com';
?>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Travel Planning and Tour Services",
  "provider": {
    "@type": "TravelAgency",
    "name": "NTC Travels & Dreams",
    "url": "<?php echo $site_url; ?>/"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Travel Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Tour Packages",
          "description": "Personalized travel itineraries tailored to your preferences"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Egypt Tours",
          "description": "Guided tours through Egypt including Pyramids and Nile Cruise"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "India Tours",
          "description": "Cultural and adventure tours across India including Rajasthan"
        }
      }
    ]
  }
}
</script>
