import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Leaf,
  Truck,
  Star,
  Users,
  Award,
} from "lucide-react";
import { products } from "./data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* =====================================================
          1. HERO SECTION (FULL SCREEN IMAGE DISPLAY AT TOP)
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-50 pb-16 pt-0">

        {/* FULL SCREEN EDGE-TO-EDGE IMAGE BANNER */}
        <div className="relative w-full overflow-hidden shadow-2xl">
          <Image
            src="/images/homepage.png"
            alt="TheGarlicFresh Homepage Banner - Fresh Peeled Garlic"
            width={1920}
            height={1080}
            priority
            className="h-auto w-full max-h-[85vh] object-cover object-center"
          />
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-lime-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">

          {/* Centered Hero Header Below Image */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-xs font-semibold text-green-800 shadow-sm backdrop-blur sm:text-sm">
              <Sparkles className="h-4 w-4 text-green-600" />
              <span>100% Natural • Hygienic • Ready-to-Cook</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Fresh Peeled Garlic{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Delivered Right to You
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Say goodbye to sticky hands and tedious garlic peeling. Get farm-fresh,
              cleanly peeled garlic cloves delivered straight to your home or restaurant kitchen.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-600/30 transition duration-200 hover:bg-green-700 hover:shadow-xl active:scale-[0.98] sm:w-auto"
              >
                <ShoppingBag className="h-5 w-5" />
                Order Fresh Garlic
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition duration-200 hover:bg-gray-50 hover:text-green-700 sm:w-auto"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-gray-200/80 pt-6 text-center">
              <div>
                <p className="text-2xl font-black text-green-700 sm:text-3xl">100%</p>
                <p className="text-xs font-medium text-gray-500">Pure & Fresh</p>
              </div>
              <div>
                <p className="text-2xl font-black text-green-700 sm:text-3xl">50+</p>
                <p className="text-xs font-medium text-gray-500">Preservatives</p>
              </div>
              <div>
                <p className="text-2xl font-black text-green-700 sm:text-3xl">80%</p>
                <p className="text-xs font-medium text-gray-500">Prep Time Saved</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          2. KEY FEATURES / BENEFITS
      ====================================================== */}
      <section className="bg-white py-16 lg:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="text-base font-bold uppercase tracking-widest text-green-600">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Fresh Garlic Made Simple & Effortless
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We eliminate the tedious work in your kitchen so you can focus on cooking delicious meals.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Feature 1 */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Leaf className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">100% Farm Fresh</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Directly sourced from top garlic farms. Carefully sorted for uniform size, firmness, and flavor.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Save Cooking Time</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                No more wasting 20-30 minutes peeling garlic before every meal. Open the pack and drop straight in!
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Hygienically Cleaned</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Peeled and washed using clean-room standards with zero chemicals, bleach, or artificial preservatives.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Truck className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Fresh Express Delivery</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Fast doorstep shipping to ensure the garlic reaches your kitchen at peak freshness and flavor.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          3. PRODUCT SHOWCASE PREVIEW
      ====================================================== */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-4 pb-8 lg:pt-6 lg:pb-8" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                Our Products
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Popular Pack Sizes
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-green-700 hover:underline"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              >
                {/* Product Image */}
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="relative h-64 w-full overflow-hidden bg-gray-50 p-3 sm:h-72 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-2 object-center transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Product Details */}
                <div className="p-5 flex flex-1 flex-col justify-between">
                  <div>
                    {/* Product Name */}
                    <Link href={`/products/${product.slug}`} className="block">
                      <h3 className="text-lg font-bold leading-snug text-gray-800 transition group-hover:text-green-600">
                        {product.name}
                      </h3>
                    </Link>

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
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            className="fill-orange-500 text-orange-500"
                          />
                        ))}
                      </div>

                      <span className="text-xs font-medium text-gray-700">
                        {product.rating}
                      </span>

                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-green-600 text-sm font-bold text-white transition hover:bg-green-700 shadow-sm"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. COMPARISON CARD (Raw Garlic vs TheGarlicFresh)
      ====================================================== */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl bg-gradient-to-br from-green-900 via-gray-900 to-green-950 p-8 text-white shadow-2xl lg:p-14">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                  Smart Kitchen Choice
                </span>
                <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                  Why Modern Kitchens Choose TheGarlicFresh
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  Compare traditional unpeeled garlic with our premium ready-to-cook peeled garlic.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Zero Preparation Waste</h4>
                      <p className="text-xs text-gray-300">Pay only for 100% usable garlic cloves with no peel weight.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Clean & Odor-Free Hands</h4>
                      <p className="text-xs text-gray-300">No lingering garlic smell on your fingers during prep.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Consistent High Quality</h4>
                      <p className="text-xs text-gray-300">Every single clove is inspected to ensure zero bad or spoiled pieces.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Table Box */}
              <div className="rounded-2xl border border-gray-700/60 bg-gray-800/80 p-6 backdrop-blur">
                <h3 className="border-b border-gray-700 pb-4 text-lg font-bold text-white">
                  Quick Comparison
                </h3>

                <div className="mt-4 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-gray-700/40">
                    <span className="text-gray-400">Prep Time</span>
                    <span className="font-bold text-green-400">Instant (0 mins)</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-gray-700/40">
                    <span className="text-gray-400">Smelly Hands</span>
                    <span className="font-bold text-green-400">No</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-gray-700/40">
                    <span className="text-gray-400">Wastage / Peels</span>
                    <span className="font-bold text-green-400">0% Waste</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-400">Storage Convenience</span>
                    <span className="font-bold text-green-400">Vacuum Sealed Pack</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          5. CALL TO ACTION BANNER
      ====================================================== */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-5xl">🧄</div>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Upgrade Your Kitchen Preparation Today
          </h2>
          <p className="mt-4 text-base text-green-100">
            Order fresh peeled garlic for home or commercial kitchen needs. Express delivery straight to your doorstep.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-green-800 shadow-xl transition hover:bg-green-50"
            >
              Get in Touch with Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for Homepage & FAQ Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TheGarlicFresh",
              url: "https://thegarlicfresh.in",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://thegarlicfresh.in/products?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is your peeled garlic 100% natural without preservatives?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! All garlic cloves provided by TheGarlicFresh are 100% natural, hygienically peeled, and free from artificial chemicals or added preservatives.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you deliver peeled garlic all across India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we ship farm-fresh peeled garlic to home kitchens, restaurants, and cloud kitchens in all major cities and towns across India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What pack sizes are available for peeled garlic?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer various pack sizes including 250g, 500g, 1kg, and custom bulk wholesale packaging for hotels and food processing businesses.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}

