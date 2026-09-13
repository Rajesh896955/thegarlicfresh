import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/Header";
import Footer from "./fotter/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://thegarlicfresh.in"),
  title: {
    default: "Buy Peeled Garlic Online in India | Fresh Ready-to-Cook Garlic Cloves - TheGarlicFresh",
    template: "%s | TheGarlicFresh - Fresh Peeled Garlic India",
  },
  description:
    "Order 100% natural, farm-fresh, hygienically peeled garlic online with fast All India doorstep delivery. Save 30+ mins daily kitchen prep with ready-to-cook garlic for homes, cloud kitchens & restaurants. Buy 250g, 500g & 1kg packs!",
  keywords: [
    // 1-20: Core Product Keywords
    "peeled garlic online India",
    "buy fresh peeled garlic all india",
    "ready to cook garlic cloves",
    "peeled garlic pack online",
    "fresh peeled garlic cloves",
    "clean hygienic peeled garlic",
    "vacuum sealed peeled garlic",
    "preservative free peeled garlic",
    "100 natural peeled garlic",
    "farm fresh garlic cloves",
    "pre peeled garlic for cooking",
    "hand selected garlic cloves",
    "ready to use garlic online",
    "garlic without peeling hassle",
    "organic peeled garlic cloves",
    "fresh garlic cloves 250g",
    "fresh garlic cloves 500g",
    "peeled garlic 1kg bulk",
    "best peeled garlic India",
    "TheGarlicFresh peeled garlic",

    // 21-40: City & Location Delivery Keywords
    "peeled garlic delivery All India",
    "peeled garlic online Delhi NCR",
    "peeled garlic delivery Mumbai",
    "peeled garlic delivery Bangalore",
    "peeled garlic online Kolkata",
    "peeled garlic delivery Hyderabad",
    "peeled garlic delivery Chennai",
    "peeled garlic online Pune",
    "peeled garlic delivery Ahmedabad",
    "peeled garlic online Jaipur",
    "peeled garlic delivery Lucknow",
    "peeled garlic online Chandigarh",
    "peeled garlic delivery Surat",
    "peeled garlic online Indore",
    "peeled garlic delivery Patna",
    "peeled garlic online Bhopal",
    "peeled garlic delivery Kochi",
    "peeled garlic online Noida",
    "peeled garlic delivery Gurgaon",
    "doorstep garlic delivery India",

    // 41-60: Pack Sizes & Pricing Keywords
    "peeled garlic 250g price",
    "peeled garlic 500g pack online",
    "peeled garlic 1kg price India",
    "peeled garlic 1kg wholesale rate",
    "fresh garlic 1kg bulk pack",
    "cheap peeled garlic online India",
    "discount peeled garlic offer",
    "garlic pack 250g online buy",
    "garlic pack 500g order online",
    "family pack peeled garlic 1kg",
    "value pack peeled garlic",
    "peeled garlic rate today India",
    "peeled garlic price per kg",
    "peeled garlic packet buy online",
    "best deal peeled garlic",
    "garlic combo pack online",
    "fresh garlic online offer",
    "peeled garlic price list",
    "buy garlic online low price",
    "cheapest peeled garlic online",

    // 61-80: Commercial & B2B Wholesale Keywords
    "bulk peeled garlic for restaurants",
    "peeled garlic supplier for hotels",
    "wholesale garlic supplier India",
    "commercial garlic processing company",
    "peeled garlic B2B supplier India",
    "restaurant garlic supply online",
    "bulk garlic delivery All India",
    "peeled garlic vendor India",
    "peeled garlic manufacturer India",
    "peeled garlic caterers bulk pack",
    "cloud kitchen peeled garlic supply",
    "fresh garlic wholesale market India",
    "peeled garlic distributor India",
    "commercial kitchen garlic supply",
    "peeled garlic order in bulk",
    "garlic peeling company India",
    "fresh garlic business supplier",
    "daily garlic supply for food business",
    "peeled garlic bulk quantity",
    "hotel garlic supplier India",

    // 81-100: Kitchen Convenience, Brand & Founder Keywords
    "save kitchen prep time garlic",
    "quick garlic peeling alternative",
    "fresh garlic paste alternative",
    "aromatic Indian garlic cloves",
    "unadulterated fresh peeled garlic",
    "kitchen time saver peeled garlic",
    "ready garlic for Indian cooking",
    "quick Indian curry garlic",
    "Satyam Kumar peeled garlic",
    "Satyam Kumar TheGarlicFresh",
    "Satyam Kumar garlic founder",
    "TheGarlicFresh online store",
    "TheGarlicFresh website buy garlic",
    "top rated peeled garlic brand India",
    "fresh garlic online shopping India",
    "garlic delivery home service",
    "clean peeled garlic cloves online",
    "fresh peeled garlic guaranteed quality",
    "TheGarlicFresh official store",
    "TheGarlicFresh fresh peeled garlic",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.png", type: "image/png", sizes: "192x192" },
      { url: "/images/logo.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  authors: [{ name: "Satyam Kumar - TheGarlicFresh Founder" }],
  creator: "TheGarlicFresh",
  publisher: "TheGarlicFresh",
  category: "Food & Grocery Delivery",
  alternates: {
    canonical: "https://thegarlicfresh.in",
  },
  openGraph: {
    title: "Buy Peeled Garlic Online in India | All India Fast Delivery - TheGarlicFresh",
    description:
      "Save cooking time with 100% natural, farm-fresh, hygienically peeled garlic. Delivered across all cities in India.",
    url: "https://thegarlicfresh.in",
    siteName: "TheGarlicFresh",
    images: [
      {
        url: "https://thegarlicfresh.in/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "TheGarlicFresh - Premium Peeled Garlic Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Fresh Peeled Garlic Online India | TheGarlicFresh",
    description: "Farm fresh, hygienically peeled ready-to-cook garlic delivered fast across India.",
    images: ["https://thegarlicfresh.in/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TheGarlicFresh",
    alternateName: ["The Garlic Fresh", "TheGarlicFresh.in"],
    url: "https://thegarlicfresh.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thegarlicfresh.in/products?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TheGarlicFresh",
    alternateName: ["The Garlic Fresh", "TheGarlicFresh.in"],
    url: "https://thegarlicfresh.in",
    logo: {
      "@type": "ImageObject",
      url: "https://thegarlicfresh.in/images/logo.png",
      width: "512",
      height: "512",
    },
    image: "https://thegarlicfresh.in/images/logo.png",
    founder: {
      "@type": "Person",
      name: "Satyam Kumar",
      jobTitle: "Founder & Managing Director",
    },
    description:
      "Leading supplier of fresh, hygienically peeled ready-to-cook garlic in India.",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9354309538",
      email: "thegarlicfresh@gmail.com",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="bg-white text-gray-900 flex min-h-screen flex-col justify-between">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}