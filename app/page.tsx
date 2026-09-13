import type { Metadata } from "next";
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
  HelpCircle,
  MapPin,
  HeartPulse,
  ChefHat,
  PackageCheck,
  ChevronDown,
  ShieldAlert,
} from "lucide-react";
import { products } from "./data/products";

export const metadata: Metadata = {
  title: "Buy Fresh Peeled Garlic Online in India | 100% Natural Ready-to-Cook Cloves",
  description:
    "Order 100% natural, farm-fresh, hygienically peeled garlic online in India. Zero preservatives, vacuum sealed, ready to cook. Available in 250g, 500g, 1kg & bulk for homes and restaurants with fast all-India delivery.",
  keywords: [
    "peeled garlic online india",
    "buy fresh peeled garlic",
    "ready to cook garlic cloves",
    "peeled garlic 1kg price",
    "peeled garlic 500g pack",
    "bulk peeled garlic for restaurants",
    "chemical free peeled garlic",
    "thegarlicfresh",
  ],
  alternates: {
    canonical: "https://thegarlicfresh.in",
  },
  openGraph: {
    title: "Buy Fresh Peeled Garlic Online in India | TheGarlicFresh",
    description:
      "Save 30+ minutes daily prep time. 100% natural, farm-fresh, peeled garlic cloves delivered to your doorstep across India.",
    url: "https://thegarlicfresh.in",
    siteName: "TheGarlicFresh",
    images: [
      {
        url: "/images/homepart.png",
        width: 1200,
        height: 630,
        alt: "TheGarlicFresh - Farm Fresh Ready to Cook Peeled Garlic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    q: "What makes TheGarlicFresh peeled garlic 100% natural and safe?",
    a: "Our garlic cloves are peeled using automated hygienic peeling machines without any harmful chemicals, bleach, or artificial preservatives. Each pack is vacuum-sealed to lock in natural freshness, pungent aroma, and high Allicin content.",
  },
  {
    q: "How long does TheGarlicFresh peeled garlic stay fresh?",
    a: "When kept refrigerated between 2°C to 5°C in its original packaging or an airtight container, our peeled garlic stays crisp, aromatic, and fresh for up to 14 to 21 days without losing flavor or nutritional value.",
  },
  {
    q: "Do you deliver fresh peeled garlic all across India?",
    a: "Yes! We ship across India including Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Lucknow, and 50+ other cities and towns with express temperature-controlled packaging.",
  },
  {
    q: "Can I order bulk peeled garlic for restaurants, hotels, or cloud kitchens?",
    a: "Yes, we specialize in B2B bulk orders (5kg, 10kg, 25kg+) for cloud kitchens, restaurants, caterers, and food processing companies with consistent supply and wholesale prices.",
  },
  {
    q: "How much kitchen preparation time can I save using pre-peeled garlic?",
    a: "An average home cook saves 15–20 minutes daily, while commercial kitchens save hours of tedious manual peeling, reduce labor costs, and eliminate 25–30% unpeeled garlic skin weight wastage.",
  },
  {
    q: "What pack sizes are available for purchase?",
    a: "We offer convenient consumer packs in 250g, 500g, and 1kg sizes, as well as customizable commercial bulk packs for food businesses.",
  },
];

const customerReviews = [
  {
    name: "Pooja Sharma",
    role: "Home Chef, Pune",
    rating: 5,
    comment:
      "Game changer for everyday cooking! No more garlic smelling fingers or wasted morning prep time. The cloves are big, white, and super flavorful.",
  },
  {
    name: "Chef Rajesh Verma",
    role: "Cloud Kitchen Owner, Pune",
    rating: 5,
    comment:
      "We use 10kg weekly for our curry gravies and marinades. TheGarlicFresh has saved us massive prep labor while maintaining top-notch aroma.",
  },
  {
    name: "Ananya Iyer",
    role: "Working Professional, Pune",
    rating: 5,
    comment:
      "Vacuum packaging is incredible! Stays fresh in my fridge for weeks. Highly recommended for busy professionals who love fresh home-cooked food.",
  },
];



export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TheGarlicFresh",
    url: "https://thegarlicfresh.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thegarlicfresh.in/products?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thegarlicfresh.in",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Fresh Peeled Garlic Packs",
    itemListElement: products.slice(0, 4).map((product, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: `https://thegarlicfresh.in${product.image}`,
        description: product.seoDescription || `Fresh peeled garlic cloves - ${product.name}`,
        url: `https://thegarlicfresh.in/products/${product.slug}`,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.reviews,
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* =====================================================
          1. HERO SECTION (SEO OPTIMIZED H1 + VALUE PROPOSITION)
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-50 pb-16 pt-0">
        {/* FULL SCREEN EDGE-TO-EDGE HERO BANNER */}
        <div className="relative w-full overflow-hidden shadow-2xl">
          <Image
            src="/images/homepart.png"
            alt="TheGarlicFresh Farm Fresh Peeled Garlic Cloves - Ready to Cook Pack"
            width={1920}
            height={1080}
            priority
            className="h-auto w-full max-h-[85vh] object-cover object-center"
          />
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-green-200/40 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-lime-200/40 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          {/* Centered Hero Header */}
          <header className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-xs font-semibold text-green-800 shadow-sm backdrop-blur sm:text-sm">
              <Sparkles className="h-4 w-4 text-green-600" />
              <span>100% Natural • Zero Preservatives • Hygienically Machine Peeled</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Fresh Peeled Garlic Cloves{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Delivered Right to Your Kitchen
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Say goodbye to sticky fingers, foul odor, and tedious peeling work. Get 100% farm-fresh,
              hygienically peeled ready-to-cook garlic cloves delivered across India. Perfect for home cooking,
              cloud kitchens, and restaurants.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-600/30 transition duration-200 hover:bg-green-700 hover:shadow-xl active:scale-[0.98] sm:w-auto"
              >
                <ShoppingBag className="h-5 w-5" />
                Explore Garlic Packs
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition duration-200 hover:bg-gray-50 hover:text-green-700 sm:w-auto"
              >
                Contact & Bulk Inquiries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-gray-200/80 pt-6 text-center">
              <div>
                <p className="text-2xl font-black text-green-700 sm:text-3xl">100%</p>
                <p className="text-xs font-medium text-gray-600">Pure & Farm Fresh</p>
              </div>
              <div>
                <p className="text-2xl font-black text-green-700 sm:text-3xl">0%</p>
                <p className="text-xs font-medium text-gray-600">Added Chemicals</p>
              </div>
              <div>
                <p className="text-2xl font-black text-green-700 sm:text-3xl">30+ Mins</p>
                <p className="text-xs font-medium text-gray-600">Daily Kitchen Time Saved</p>
              </div>
            </div>
          </header>
        </div>
      </section>

      {/* =====================================================
          2. KEY FEATURES / BENEFITS (HIGH INTENT SEARCH TERMS)
      ====================================================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">
              Why Choose TheGarlicFresh
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Chefs & Home Cooks Choose Our Peeled Garlic
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-sm sm:text-base">
              We eliminate peeling hassles and vegetable skin wastage so you can cook faster, tastier, and healthier meals.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Leaf className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">100% Farm Fresh Cloves</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Directly procured from selected Indian garlic farms. Hand-sorted for uniform size, firm texture, and strong pungent aroma.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Save 30+ Mins Cooking Time</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                No more standing and peeling tiny garlic skins before cooking. Just open our sealed pack and toss directly into your pan.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Hygienic Clean-Room Peeling</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Processed in certified hygienic facilities with automated peeling machines. Zero chlorine, bleaching agents, or added preservatives.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Truck className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Express All-India Delivery</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Temperature-protective packaging ensures that fresh, crisp peeled garlic arrives at your doorstep in top culinary condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. PRODUCT SHOWCASE PREVIEW
      ====================================================== */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                Our Products
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Popular Fresh Peeled Garlic Packs
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Choose from handy 250g packs for home cooking or 1kg+ bulk packs for restaurants.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-green-700 hover:text-green-800 transition"
            >
              View All Garlic Packs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Product Image */}
                <Link href={`/products/${product.slug}`} className="block" title={`Buy ${product.name} Online`}>
                  <div className="relative h-64 w-full overflow-hidden bg-gray-50 p-3 sm:h-72 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={`${product.name} - Fresh Peeled Garlic Cloves India`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-2 object-center transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Product Details */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    {/* Product Name */}
                    <Link href={`/products/${product.slug}`} className="block">
                      <h3 className="text-lg font-bold leading-snug text-gray-800 transition group-hover:text-green-600">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Coming Soon Badge */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        Coming Soon
                      </span>
                    </div>

                    {/* Offer Tagline */}
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      {product.offer}
                    </p>

                    {/* Rating and Reviews */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex items-center gap-1" aria-label={`Rating: ${product.rating} out of 5 stars`}>
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
                        ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Product CTA */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-green-600 text-sm font-bold text-white shadow-sm transition hover:bg-green-700"
                  >
                    View Product Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. HOW IT WORKS (FARM TO KITCHEN PROCESS) - SEO CONTENT
      ====================================================== */}
      <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">
              Our Freshness Process
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              From Garlic Farms Straight to Your Kitchen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-sm sm:text-base">
              Learn how we guarantee spotless, pungent, and long-lasting peeled garlic without compromising natural nutrition.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative rounded-2xl border border-gray-100 bg-gray-50/60 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-lg font-black text-white shadow-md">
                1
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">Farm Sourcing & Sorting</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Premium quality mature garlic bulbs harvested from trusted regional farms and graded for size.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl border border-gray-100 bg-gray-50/60 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-lg font-black text-white shadow-md">
                2
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">Mechanical Skin Removal</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Clean pneumatic airflow peeling technology gently removes outer skins without crushing delicate clove tissues.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl border border-gray-100 bg-gray-50/60 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-lg font-black text-white shadow-md">
                3
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">Double Quality Inspection</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Every batch is manually inspected by trained food technicians to discard blemishes, ensuring 100% spotless cloves.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative rounded-2xl border border-gray-100 bg-gray-50/60 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-lg font-black text-white shadow-md">
                4
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">Vacuum Seal & Express Dispatch</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Packaged in food-grade vacuum pouches to preserve moisture and aroma, then dispatched straight to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          5. COMPARISON SECTION (Raw Garlic vs TheGarlicFresh)
      ====================================================== */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-green-950 via-gray-900 to-emerald-950 p-8 text-white shadow-2xl lg:p-14">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                  Smart Kitchen Choice
                </span>
                <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                  Why Modern Kitchens Switch to TheGarlicFresh
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  Compare traditional unpeeled raw garlic against our ready-to-cook fresh peeled garlic packs.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Zero Preparation Waste</h4>
                      <p className="text-xs text-gray-300">
                        Traditional raw garlic has 25% to 30% useless skin and root wastage. With us, you pay only for 100% usable garlic.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Clean, Odor-Free Hands</h4>
                      <p className="text-xs text-gray-300">
                        No stinging eyes, sticky garlic juice, or stubborn lingering odors on your fingers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Consistent High Quality</h4>
                      <p className="text-xs text-gray-300">
                        Every single clove is sorted and inspected to eliminate dried, hollow, or rotten pieces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="rounded-2xl border border-gray-700/60 bg-gray-800/90 p-6 backdrop-blur shadow-xl">
                <h3 className="border-b border-gray-700 pb-4 text-lg font-bold text-white">
                  Head-to-Head Comparison
                </h3>

                <div className="mt-4 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between border-b border-gray-700/40 py-2.5">
                    <span className="text-gray-300">Daily Kitchen Prep Time</span>
                    <span className="font-bold text-green-400">Instant (0 Minutes)</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-700/40 py-2.5">
                    <span className="text-gray-300">Skin Wastage & Debris</span>
                    <span className="font-bold text-green-400">0% Waste (100% Usable)</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-700/40 py-2.5">
                    <span className="text-gray-300">Sticky & Smelly Fingers</span>
                    <span className="font-bold text-green-400">Zero Odor</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-700/40 py-2.5">
                    <span className="text-gray-300">Packaging Type</span>
                    <span className="font-bold text-green-400">Fresh Vacuum Sealed</span>
                  </div>

                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-gray-300">Preservatives & Chemicals</span>
                    <span className="font-bold text-green-400">100% Chemical-Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6. HEALTH BENEFITS & NUTRITION SECTION
      ====================================================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">
              Natural Goodness
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Health Benefits of Pure Indian Garlic
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-sm sm:text-base">
              Packed with powerful bio-active compounds like Allicin, garlic is a superfood used for centuries in Ayurveda and Indian culinary traditions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-green-50/40 p-6">
              <HeartPulse className="h-8 w-8 text-green-600" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">Cardiovascular & Heart Health</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Rich in Allicin, which helps regulate blood pressure levels, supports healthy cholesterol balance, and improves circulation.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-green-50/40 p-6">
              <ShieldCheck className="h-8 w-8 text-green-600" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">Immunity & Antioxidants</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Natural antimicrobial and antiviral properties that protect the body against common seasonal infections, coughs, and colds.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-green-50/40 p-6">
              <ChefHat className="h-8 w-8 text-green-600" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">Authentic Taste & Rich Aroma</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Elevates curries, dals, pasta sauces, marinades, and garlic breads with unmistakable Indian aroma and bold garlic flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          7. CUSTOMER TESTIMONIALS & REVIEWS (SOCIAL PROOF)
      ====================================================== */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">
              Customer Reviews
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Loved by Home Cooks & Professional Chefs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-sm sm:text-base">
              See what our customers across India say about the freshness and convenience of TheGarlicFresh.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {customerReviews.map((rev, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700 italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-bold text-gray-900">{rev.name}</p>
                  <p className="text-xs text-gray-500">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          8. VISIBLE FAQ ACCORDION (CRITICAL FOR FAQ RICH SNIPPETS)
      ====================================================== */}
      <section className="bg-white py-16 lg:py-20 border-t border-gray-100" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-green-600">
              Got Questions?
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-sm sm:text-base">
              Everything you need to know about our fresh peeled garlic, shelf life, delivery, and quality guarantee.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-gray-200 bg-gray-50/60 p-6 transition duration-200 open:bg-white open:shadow-md open:border-green-200"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-gray-900 text-base sm:text-lg select-none list-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-green-600 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200 group-open:rotate-180 group-open:text-green-600 shrink-0 ml-2" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 pl-8 border-l-2 border-green-500">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            websiteSchema,
            breadcrumbSchema,
            faqSchema,
            itemListSchema,
          ]),
        }}
      />
    </div>
  );
}


