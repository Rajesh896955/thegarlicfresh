import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://thegarlicfresh.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/cart/checkout"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
