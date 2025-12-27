import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const SEO = ({
  title,
  description,
  canonical = "",
  type = "website",
  image = "/og-image.jpg",
}: SEOProps) => {
  const siteUrl = "https://tractari.ro";
  const fullUrl = `${siteUrl}${canonical}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:locale" content="ro_RO" />
      <meta property="og:site_name" content="VXX Tractări Auto" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Romanian" />
      <meta name="geo.region" content="RO-B" />
      <meta name="geo.placename" content="București" />
    </Helmet>
  );
};

export default SEO;
