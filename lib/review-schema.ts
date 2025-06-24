export const generateReviewSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "StayCool Airco Kerkrade",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kerkrade",
    "addressRegion": "Limburg",
    "addressCountry": "NL"
  },
  "telephone": "+31462021430",
  "url": "https://aircoinstallatiekerkrade.nl",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria van den Berg"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Uitstekende service! Airco vakkundig geïnstalleerd en na 2 jaar nog steeds zeer tevreden. Aanrader!",
      "datePublished": "2024-05-15"
    },
    {
      "@type": "Review", 
      "author": {
        "@type": "Person",
        "name": "Jan Janssen"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Snelle en professionele installatie. Duidelijke uitleg en goede prijs-kwaliteitsverhouding.",
      "datePublished": "2024-06-10"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person", 
        "name": "Sandra Willems"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      },
      "reviewBody": "Goede service en klantvriendelijke monteurs. Alleen de planning liep iets uit, maar het resultaat is prima.",
      "datePublished": "2024-06-20"
    }
  ]
});

export const generateServiceSchema = (serviceName: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "description": serviceDescription,
  "provider": {
    "@type": "LocalBusiness",
    "name": "StayCool Airco Kerkrade",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerkrade",
      "addressRegion": "Limburg", 
      "addressCountry": "NL"
    },
    "telephone": "+31462021430"
  },
  "areaServed": {
    "@type": "State",
    "name": "Limburg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Airconditioning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gratis Offerte",
          "description": "Vrijblijvende offerte binnen 24 uur"
        }
      }
    ]
  }
});