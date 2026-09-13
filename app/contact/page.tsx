import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Clock3,
    Send,
    MessageCircle,
    Headphones,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | All India Garlic Supply - TheGarlicFresh",
    description: "Get in touch with TheGarlicFresh for fresh peeled garlic orders, bulk supply, hotel inquiries, and customer support. Express delivery across India.",
    keywords: [
        "Contact TheGarlicFresh",
        "Garlic Bulk Inquiry",
        "Peeled Garlic Wholesale India",
        "Garlic Delivery Support",
        "Satyam Kumar Garlic Contact",
    ],
    alternates: {
        canonical: "https://thegarlicfresh.in/contact",
    },
    openGraph: {
        title: "Contact Us | TheGarlicFresh - All India Supply",
        description: "Get in touch with TheGarlicFresh for retail and wholesale peeled garlic inquiries with All India doorstep delivery.",
        url: "https://thegarlicfresh.in/contact",
        siteName: "TheGarlicFresh",
        images: [{ url: "/images/homepart.png", width: 1200, height: 630, alt: "TheGarlicFresh Contact" }],
        type: "website",
    },
};

export default function ContactPage() {

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            {/* =====================================================
          HERO
      ====================================================== */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-50">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-200/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-14 text-center lg:px-8 lg:pt-10 lg:pb-16">

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Get in Touch
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        Have a question about our fresh peeled garlic, your order, or
                        delivery? We’re here to help.
                    </p>
                </div>
            </section>

            {/* =====================================================
          CONTACT CARDS
      ====================================================== */}
            <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-6 lg:px-8">
                <div className="grid gap-5 md:grid-cols-3">
                    {/* Email */}
                    <a
                        href="mailto:support@thegarlicfresh.in"
                        className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 transition group-hover:bg-green-600">
                            <Mail className="h-6 w-6 text-green-600 group-hover:text-white" />
                        </div>

                        <h2 className="mt-5 font-bold">Email Us</h2>

                        <p className="mt-2 text-sm text-gray-500">
                            thegarlicfresh@gmail.com
                        </p>

                        <p className="mt-3 text-xs font-semibold text-green-600">
                            Send us an email →
                        </p>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+910000000000"
                        className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 transition group-hover:bg-green-600">
                            <Phone className="h-6 w-6 text-green-600 group-hover:text-white" />
                        </div>

                        <h2 className="mt-5 font-bold">Call Us</h2>

                        <p className="mt-2 text-sm text-gray-500">
                            +91 9354309538
                        </p>

                        <p className="mt-3 text-xs font-semibold text-green-600">
                            Talk to our team →
                        </p>
                    </a>

                    {/* Hours */}
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                            <Clock3 className="h-6 w-6 text-green-600" />
                        </div>

                        <h2 className="mt-5 font-bold">Business Hours</h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Monday – Sunday
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-700">
                            9:00 AM – 9:00 PM
                        </p>
                    </div>
                </div>
            </section>

            {/* =====================================================
          MAIN CONTACT SECTION
      ====================================================== */}
            <section className="mx-auto max-w-7xl px-6 pt-12 pb-10 sm:pt-8 sm:pb-8 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* =================================================
              LEFT CONTENT
          ================================================== */}
                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                            Contact TheGarlicFresh
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            We’d Love to Hear From You
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            Whether you have a question about our peeled garlic, need help
                            with an order, or want to know more about TheGarlicFresh, feel
                            free to reach out.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-8 space-y-5">

                            {/* Address */}
                            <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
                                    <MapPin className="h-5 w-5 text-green-600" />
                                </div>

                                <div>
                                    <h3 className="font-bold">Our Location</h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-500">
                                        Pcmc Pune
                                        <br />
                                        MIDC Bhosri 411026
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
                                    <Mail className="h-5 w-5 text-green-600" />
                                </div>

                                <div>
                                    <h3 className="font-bold">Email</h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        thegarlicfresh@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
                                    <Phone className="h-5 w-5 text-green-600" />
                                </div>

                                <div>
                                    <h3 className="font-bold">Phone</h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        +91 9354309538
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Support Box */}
                        <div className="mt-8 rounded-3xl bg-gradient-to-br from-green-600 to-green-700 p-7 text-white shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-white/10 p-3">
                                    <Headphones className="h-6 w-6" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold">
                                        Need help with an order?
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-green-50">
                                        Please keep your order number ready when contacting our
                                        support team so we can help you faster.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
              CONTACT FORM
          ================================================== */}
                    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold">
                                Send Us a Message
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Fill out the form below and our team will get back to you.
                            </p>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* =====================================================
          WHY CONTACT US
      ====================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 pt-8 pb-6 sm:pt-10 lg:px-6 lg:pb-8">
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                            Customer Support
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            How We Can Help
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Our team is here to make your TheGarlicFresh experience as
                            simple and convenient as possible.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">

                        {/* Card 1 */}
                        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                                <ShoppingBagIcon />
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                Order Assistance
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Need help with an order? Our team can assist with order
                                information and general support.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                                <TruckIcon />
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                Delivery Support
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Questions about delivery or your shipment? Contact us and
                                we’ll help you with the available information.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                Product Questions
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Want to know more about our fresh peeled garlic or products?
                                We’re happy to answer your questions.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================
          CTA
      ====================================================== */}
            <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-lime-300/10 blur-2xl" />

                <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
                    <div className="text-6xl">🧄</div>

                    <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                        Fresh Garlic. Simple Cooking.
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-green-50">
                        Explore our fresh peeled garlic products and make your kitchen
                        preparation easier.
                    </p>

                    <Link
                        href="/products"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-green-700 shadow-lg transition hover:bg-green-50"
                    >
                        Shop Fresh Garlic
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>

            {/* JSON-LD Schema for Contact Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            name: "Contact Us | TheGarlicFresh",
                            url: "https://thegarlicfresh.in/contact",
                            description: "Contact TheGarlicFresh for retail, wholesale, and bulk peeled garlic supply across India.",
                            mainEntity: {
                                "@type": "Organization",
                                name: "TheGarlicFresh",
                                url: "https://thegarlicfresh.in",
                                contactPoint: {
                                    "@type": "ContactPoint",
                                    contactType: "customer service",
                                    availableLanguage: ["English", "Hindi"],
                                    areaServed: "IN",
                                },
                            },
                        },
                    ]),
                }}
            />
        </main>
    );
}

/* =========================================================
   SMALL ICON COMPONENTS
========================================================= */

function ShoppingBagIcon() {
    return (
        <ShoppingCartIconSvg />
    );
}

function ShoppingCartIconSvg() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 text-green-600"
        >
            <circle cx="9" cy="20" r="1" />
            <circle cx="19" cy="20" r="1" />
            <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" />
        </svg>
    );
}

function TruckIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 text-green-600"
        >
            <path d="M3 6h11v11H3z" />
            <path d="M14 10h4l3 3v4h-7z" />
            <circle cx="7.5" cy="19" r="2" />
            <circle cx="17.5" cy="19" r="2" />
        </svg>
    );
}