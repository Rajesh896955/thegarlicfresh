import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { products } from "../data/products";

export const metadata: Metadata = {
  title: "Fresh Peeled Garlic Products | All India Delivery - TheGarlicFresh",
  description: "Browse 100% natural, clean, peeled garlic cloves in 250g, 500g, 1kg & bulk packs. Farm fresh garlic with express All India delivery.",
  keywords: [
    "Peeled Garlic Products",
    "Buy Garlic Online India",
    "250g Peeled Garlic",
    "500g Peeled Garlic",
    "1kg Peeled Garlic",
    "Bulk Garlic Supply India",
    "Fresh Garlic Online",
  ],
  alternates: {
    canonical: "https://thegarlicfresh.com/products",
  },
  openGraph: {
    title: "Fresh Peeled Garlic Products | TheGarlicFresh",
    description: "Browse 100% natural, clean, peeled garlic cloves in various pack sizes. Order online for doorstep delivery across India.",
    url: "https://thegarlicfresh.com/products",
    siteName: "TheGarlicFresh",
    images: [
      {
        url: "/images/homepage.png",
        width: 1200,
        height: 630,
        alt: "TheGarlicFresh Products",
      },
    ],
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <section className="bg-white px-4 pt-6 pb-5 text-center sm:pt-8 sm:pb-6">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
            TheGarlicFresh
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Fresh & Premium Garlic
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Discover our range of fresh, clean and premium peeled garlic.
            Ready to cook and perfect for your everyday meals.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 pt-4 pb-12 sm:px-6 lg:px-8">

        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Our Products
          </h2>

          <p className="text-sm font-semibold text-gray-500">
            {products.length} products available
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >

              <div>
                {/* Product Image */}
                <div className="relative h-72 w-full aspect-[4/3] overflow-hidden bg-gray-50 sm:h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-2 object-center transition duration-500 group-hover:scale-105"
                  />
                  {/* Delivery Area Tag */}
                  <div className="absolute top-3 left-3 rounded-full bg-green-600/90 px-3 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur">
                    {product.deliveryArea || "All India Delivery"}
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  {/* Product Name */}
                  <h3 className="text-lg font-bold leading-snug text-gray-800 group-hover:text-green-600 transition">
                    {product.name}
                  </h3>

                  {/* Pack Size & Coming Soon */}
                  <div className="mt-2 flex items-center gap-2">
                    {product.packSize && (
                      <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                        {product.packSize}
                      </span>
                    )}
                  </div>

                  {/* Coming Soon */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-lg bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 border border-emerald-200">
                      Coming Soon
                    </span>
                  </div>

                  {/* Offer */}
                  <p className="mt-2 text-sm font-semibold text-gray-700">
                    {product.offer}
                  </p>

                  {/* Rating */}
                  <div className="mt-4 flex items-center gap-2">

                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={18}
                          className="fill-orange-500 text-orange-500"
                        />
                      ))}
                    </div>

                    <span className="text-sm font-medium text-gray-700">
                      {product.rating}
                    </span>

                    <span className="text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-2">
                <div className="w-full rounded-xl bg-green-600 py-3 text-center text-sm font-bold text-white shadow-md transition group-hover:bg-green-500">
                  View product
                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* JSON-LD Schema for Google Search Catalog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Peeled Garlic Products - TheGarlicFresh",
            url: "https://thegarlicfresh.com/products",
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: product.name,
              url: `https://thegarlicfresh.com/products/${product.slug}`,
              image: `https://thegarlicfresh.com${product.image}`,
            })),
          }),
        }}
      />
    </main>
  );
}