<?php
/**
 * NTC Travels - Schema JSON-LD para Travel Agency
 */
$site_url = 'https://www.ntcluxurytravels.com';
?>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "NTC Travels & Dreams",
  "url": "<?php echo $site_url; ?>/",
  "logo": "<?php echo $site_url; ?>/images/logo-NTC-bg.png",
  "image": "<?php echo $site_url; ?>/images/logo-NTC-bg.png",
  "description": "Your trusted travel agency. Discover immersive itineraries, personalized packages, and unforgettable experiences across Mexico, Guatemala, India, and worldwide destinations.",
  "sameAs": [
    "https://www.facebook.com/ntctravels",
    "https://www.instagram.com/ntctravels",
    "https://www.twitter.com/ntctravels"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+1-408-609-0027",
    "email": "info@ntcluxurytravels.com",
    "areaServed": ["US", "MX", "GT", "IN", "Worldwide"],
    "availableLanguage": ["English", "Spanish"]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "350"
  },
  "priceRange": "$$$",
  "foundingDate": "2015",
  "slogan": "Travels & Dreams",
  "knowsAbout": ["Travel Planning", "Custom Tours", "Luxury Travel", "Adventure Tours", "Cultural Tours"]
}
</script>
