<?php
/**
 * NTC Travels - Schema JSON-LD para Organization
 */
$site_url = 'https://www.ntcluxurytravels.com';
?>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NTC Travels & Dreams",
  "url": "<?php echo $site_url; ?>/",
  "logo": "<?php echo $site_url; ?>/images/logo-NTC-bg.png",
  "description": "Travel agency specializing in tailored tours and personalized travel packages to Mexico, Guatemala, India and worldwide destinations",
  "email": "info@ntcluxurytravels.com",
  "telephone": "+1-408-609-0027",
  "foundingDate": "2015",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-408-609-0027",
    "contactType": "customer service",
    "email": "info@ntcluxurytravels.com",
    "availableLanguage": ["English", "Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/ntctravels",
    "https://www.instagram.com/ntctravels",
    "https://www.twitter.com/ntctravels"
  ]
}
</script>
