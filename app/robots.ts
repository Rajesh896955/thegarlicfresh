import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://thegarlicfresh.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/cart/checkout"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
