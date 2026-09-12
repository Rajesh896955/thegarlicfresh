import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ShieldCheck, Truck, Sparkles, ArrowLeft, CheckCircle2, ShoppingCart, Heart } from "lucide-react";
import { products } from "@/app/data/products";
import ShareButtons from "./ShareButtons";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug || p.id.toString() === slug);

  if (!product) {
    return {
      title: "Product Not Found | TheGarlicFresh",
      description: "The requested peeled garlic product could not be found.",
    };
  }

  return {
    title: product.seoTitle || `${product.name} |  - TheGarlicFresh`,
    description: product.seoDescription || `Order ${product.name} online with All India doorstep delivery. Clean, fresh, ready to cook peeled garlic.`,
    keywords: product.keywords || [product.name, "peeled garlic online", "all india garlic delivery"],
    openGraph: {
      title: product.seoTitle || `${product.name} - TheGarlicFresh`,
      description: product.seoDescription,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.seoDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug || p.id.toString() === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <Link
          href="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-green-600 transition"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>

        {/* Product Container */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-100 grid grid-cols-1 lg:grid-cols-12">

          {/* Left Column: Image */}
          <div className="lg:col-span-6 bg-gray-50 p-6 sm:p-10 flex flex-col justify-between relative">
            <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center p-2">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain p-2 object-center"
              />
              <div className="absolute top-4 left-4 rounded-full bg-orange-500 px-3.5 py-1 text-xs font-extrabold text-white shadow-md">
                {product.discount}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-green-100 bg-white p-3 shadow-xs">
                <Truck className="mx-auto h-5 w-5 text-green-600 mb-1" />
                <p className="text-[11px] font-bold text-gray-700">Pune</p>
              </div>
              <div className="rounded-xl border border-green-100 bg-white p-3 shadow-xs">
                <ShieldCheck className="mx-auto h-5 w-5 text-green-600 mb-1" />
                <p className="text-[11px] font-bold text-gray-700">100% Hygienic</p>
              </div>
              <div className="rounded-xl border border-green-100 bg-white p-3 shadow-xs">
                <Sparkles className="mx-auto h-5 w-5 text-green-600 mb-1" />
                <p className="text-[11px] font-bold text-gray-700">Ready to Cook</p>
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-md bg-green-50 px-3 py-1 text-xs font-bold text-green-700 border border-green-200">
                {product.category || "Fresh Produce"} • {product.packSize}
              </span>

              <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {product.name}
              </h1>

              {/* Offer & Rating */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-orange-500 text-orange-500"
                    />
                  ))}
                  <span className="ml-1 text-sm font-bold text-gray-800">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews} customer reviews)</span>
                </div>
              </div>

              {/* Coming Soon status */}
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex items-center rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-2xl font-bold text-emerald-700">
                  Coming Soon
                </span>
                <span className="text-sm font-medium text-gray-500">
                  (Online orders opening soon)
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                Freshly peeled, cleaned, and sorted ready-to-cook garlic cloves. Packed under strict hygienic conditions to preserve natural aroma, pungency, and taste. Delivered across all cities and towns in India.
              </p>

              {/* Highlights */}
              <div className="mt-6 space-y-2.5">
                {[
                  "100% natural without added preservatives",
                  "Hygienically peeled & vacuum fresh sealed",
                  "Saves 30+ minutes of daily kitchen preparation",
                  "Dispatched with express All India delivery",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                disabled
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-100 border border-gray-200 px-6 py-4 font-bold text-gray-500 cursor-not-allowed"
              >
                <ShoppingCart className="h-5 w-5" /> Coming Soon
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
              >
                Bulk Inquiry
              </Link>
            </div>

            {/* Social Share Section */}
            <ShareButtons productName={product.name} slug={product.slug} />

          </div>

        </div>

      </div>

      {/* JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              image: [`https://thegarlicfresh.in${product.image}`],
              description: product.seoDescription,
              sku: `TGF-${product.id}`,
              brand: {
                "@type": "Brand",
                name: "TheGarlicFresh",
              },
              offers: {
                "@type": "Offer",
                url: `https://thegarlicfresh.in/products/${product.slug}`,
                priceCurrency: "INR",
                price: product.price,
                priceValidUntil: "2028-12-31",
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "TheGarlicFresh",
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://thegarlicfresh.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: "https://thegarlicfresh.in/products",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: product.name,
                  item: `https://thegarlicfresh.in/products/${product.slug}`,
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
