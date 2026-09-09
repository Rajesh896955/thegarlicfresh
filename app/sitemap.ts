import { MetadataRoute } from "next";
import { products } from "@/app/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thegarlicfresh.in";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/contact",
    "/privacy-policy",
    "/terms-condition",
    "/security",
    "/shipping-policy",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
