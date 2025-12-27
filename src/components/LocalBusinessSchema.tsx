import { Helmet } from "react-helmet-async";

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tractari.ro/#business",
    name: "VXX Tractări Auto",
    alternateName: "VXX Tractări",
    description:
      "Servicii profesionale de tractări auto și asistență rutieră disponibile 24/7 în București și împrejurimi. Platforme moderne, șoferi profesioniști, intervenție rapidă.",
    url: "https://tractari.ro",
    telephone: "+40774579178",
    email: "vxxtractari@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 1",
      addressLocality: "București",
      addressRegion: "București",
      postalCode: "010001",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.4268,
      longitude: 26.1025,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    image: "https://tractari.ro/og-image.jpg",
    sameAs: [],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 44.4268,
        longitude: 26.1025,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii Tractări Auto",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tractări Auto Non-Stop",
            description: "Servicii de tractare auto disponibile 24/7",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Asistență Rutieră",
            description: "Asistență rutieră la fața locului",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transport Utilaje",
            description: "Transport utilaje și vehicule speciale",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
