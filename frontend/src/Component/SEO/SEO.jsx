import Head from "next/head";

export default function SEO({
  title = "GTM Labs - From Idea to Influence",
  description = "Helping startups scale with strategy, marketing, and funding support.",
  image = "https://gtmlabs.xyz/meta/og-logo.png",
  url = "https://gtmlabs.xyz/",
  author = "GTM Labs",
  type = "website",
  publishedTime, 
  keywords = "GTM Labs, Startup Blog, Growth, Marketing, Innovation, Product Launch",
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "BlogPosting" : "WebPage",
    headline: title,
    image: [image],
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "GTM Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://gtmlabs.xyz/meta/og-logo.png",
      },
    },
    description,
    url,
    ...(publishedTime && { datePublished: publishedTime }),
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="GTM Labs" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}
