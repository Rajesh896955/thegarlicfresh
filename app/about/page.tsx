import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ShieldCheck,
    Sparkles,
    Heart,
    Leaf,
    PackageCheck,
    Truck,
    CheckCircle2,
    ArrowRight,
    Clock3,
    HandHeart,
    Briefcase,
    Award,
    UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | TheGarlicFresh - Led by Satyam",
    description: "Learn about TheGarlicFresh, led by founder Satyam with 5+ years of experience. We provide 100% natural, hygienically peeled garlic with doorstep delivery across India.",
    keywords: [
        "About TheGarlicFresh",
        "Satyam Garlic",
        "Peeled Garlic Supplier India",
        "Fresh Garlic Manufacturer",
        "Garlic Business Owner Satyam",
        "Peeled Garlic Delivery India",
    ],
    alternates: {
        canonical: "https://thegarlicfresh.com/about",
    },
    openGraph: {
        title: "About Us | TheGarlicFresh - Led by Satyam",
        description: "Learn about TheGarlicFresh, led by Satyam with 5+ years of experience in fresh garlic supply across India.",
        url: "https://thegarlicfresh.com/about",
        siteName: "TheGarlicFresh",
        images: [
            {
                url: "/images/satyam.png",
                width: 800,
                height: 1000,
                alt: "Satyam - Founder of TheGarlicFresh",
            },
        ],
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* ================= HERO SECTION ================= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-50">
                <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-lime-200/30 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-8 pb-16 md:grid-cols-2 md:py-16 lg:px-8 lg:pt-10 lg:pb-20">
                    {/* Left */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
                            <Sparkles className="h-4 w-4" />
                            Fresh • Clean • Ready to Cook
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Fresh Garlic,
                            <span className="block text-green-600">
                                Ready for Your Kitchen.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Welcome to <strong>TheGarlicFresh</strong> — your trusted source
                            for fresh, hygienically peeled garlic. We make everyday cooking
                            easier by bringing you quality garlic that is cleaned, peeled
                            and ready to use.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
                            >
                                Shop Fresh Garlic
                                <ArrowRight className="h-5 w-5" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:border-green-500 hover:text-green-600"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative flex justify-center w-full">
                        <div className="relative h-[350px] sm:h-[480px] lg:h-[600px] w-full max-w-lg overflow-hidden rounded-2xl">
                            <Image
                                src="/images/image.png"
                                alt="TheGarlicFresh - Peeled. Fresh. Convenient."
                                fill
                                priority
                                className="object-contain object-center transition duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                        About TheGarlicFresh
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Making Garlic Preparation Easier
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        Garlic is an essential ingredient in countless dishes, but peeling
                        it can take time. At TheGarlicFresh, our goal is simple — provide
                        fresh, peeled garlic so you can spend less time preparing and more
                        time enjoying your food.
                    </p>
                </div>
            </section>

            {/* ================= OUR STORY ================= */}
            <section className="bg-gray-50">
                <div className="mx-auto grid max-w-7xl items-center gap-4 px-6 py-5 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-6">

                    {/* Visual */}
                    <div className="relative">
                        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl">
                            <Image
                                src="/images/image2.png"
                                alt="Simple Idea. Fresh Results."
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain object-center transition duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 sm:text-sm">
                            Our Story
                        </span>

                        <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                            Freshness You Can Count On
                        </h2>

                        <div className="mt-4 space-y-3.5 text-gray-600 leading-7">
                            <p>
                                TheGarlicFresh was created around a simple everyday need:
                                <strong> fresh garlic without the hassle of peeling it.</strong>
                            </p>

                            <p>
                                We carefully prepare our garlic so that it is convenient for
                                homes, restaurants, food businesses and anyone who loves
                                cooking with fresh ingredients.
                            </p>

                            <p>
                                From selecting garlic to peeling and packing, we focus on
                                cleanliness, freshness and careful handling at every stage.
                            </p>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-green-100 bg-white p-4 shadow-sm">
                                <Leaf className="h-6 w-6 text-green-600" />

                                <h3 className="mt-2 font-bold">
                                    Fresh Produce
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    Quality garlic selected for freshness.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-100 bg-white p-4 shadow-sm">
                                <Sparkles className="h-6 w-6 text-green-600" />

                                <h3 className="mt-2 font-bold">
                                    Ready to Use
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    Peeled and convenient for cooking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= Satyam / LEADERSHIP SECTION ================= */}
            <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-900 via-emerald-950 to-gray-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl">
                    <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

                    <div className="relative mx-auto grid items-center gap-10 lg:grid-cols-12">
                        {/* Left Content */}
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-900/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-300 shadow-sm backdrop-blur">
                                <UserCheck className="h-4 w-4 text-green-400" />
                                Leadership & Vision
                            </div>

                            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Satyam
                            </h2>

                            <p className="mt-2 text-lg font-semibold text-green-400">
                                Founder & Managing Director
                            </p>

                            <div className="mt-6 space-y-4 text-base leading-7 text-gray-200 lg:text-lg">
                                <p>
                                    With over <strong className="text-white font-bold underline decoration-green-500 decoration-2 underline-offset-4">5 years of hands-on working experience</strong> in agricultural sourcing, food processing, and supply chain quality control, Satyam leads <strong>TheGarlicFresh</strong> with a commitment to excellence.
                                </p>

                                <p>
                                    Driven by the vision to eliminate time-consuming kitchen prep, Satyam established TheGarlicFresh to supply 100% natural, hygienically peeled garlic directly to home cooks, cloud kitchens, and commercial food businesses.
                                </p>

                                <p>
                                    Under his leadership, every single batch of garlic undergoes strict quality selection and clean processing standards to guarantee fresh, aromatic, and ready-to-cook garlic in every package.
                                </p>
                            </div>

                            {/* Experience Highlights / Stats */}
                            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                    <div className="flex items-center gap-2 text-green-400">
                                        <Briefcase className="h-5 w-5" />
                                        <span className="text-2xl font-extrabold text-white">5+ Yrs</span>
                                    </div>
                                    <p className="mt-1 text-xs text-gray-300">Industry Experience</p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                    <div className="flex items-center gap-2 text-green-400">
                                        <Award className="h-5 w-5" />
                                        <span className="text-2xl font-extrabold text-white">100%</span>
                                    </div>
                                    <p className="mt-1 text-xs text-gray-300">Quality Assured</p>
                                </div>

                                <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                    <div className="flex items-center gap-2 text-green-400">
                                        <ShieldCheck className="h-5 w-5" />
                                        <span className="text-2xl font-extrabold text-white">Clean</span>
                                    </div>
                                    <p className="mt-1 text-xs text-gray-300">Hygienic Process</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-sm sm:max-w-md">
                                {/* Decorative background glow frame */}
                                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-400 opacity-30 blur-lg transition duration-500 group-hover:opacity-100" />

                                <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 bg-gray-800 shadow-2xl">
                                    <div className="relative aspect-[4/5] w-full">
                                        <Image
                                            src="/images/satyam.png"
                                            alt="Satyam - Founder"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover object-top transition duration-500 hover:scale-105"
                                            priority
                                        />
                                    </div>

                                    {/* Floating Overlay Label */}
                                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-gray-900/80 p-4 text-center backdrop-blur shadow-lg">
                                        <p className="text-lg font-bold text-white">Satyam</p>
                                        <p className="text-xs font-semibold text-green-400">5+ Years Working Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY US ================= */}
            <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                <div className="text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                        Why Choose Us
                    </span>

                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                        More Convenience in Every Pack
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        We focus on the things that matter most when you buy fresh,
                        ready-to-use garlic.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: Leaf,
                            title: "Fresh Garlic",
                            text: "We focus on delivering fresh garlic suitable for everyday cooking.",
                        },
                        {
                            icon: ShieldCheck,
                            title: "Hygienic Handling",
                            text: "Careful handling and preparation are an important part of our process.",
                        },
                        {
                            icon: Clock3,
                            title: "Save Time",
                            text: "No peeling required. Open the pack and get straight to cooking.",
                        },
                        {
                            icon: Heart,
                            title: "Made with Care",
                            text: "We care about consistency, freshness and customer satisfaction.",
                        },
                    ].map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 transition group-hover:bg-green-600">
                                    <Icon className="h-7 w-7 text-green-600 group-hover:text-white" />
                                </div>

                                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="bg-green-50">
                <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                            Our Process
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            From Garlic to Your Kitchen
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Every step is focused on delivering convenient, fresh and
                            carefully prepared garlic.
                        </p>
                    </div>

                    <div className="relative mt-14 grid gap-8 md:grid-cols-4">
                        {[
                            {
                                number: "01",
                                title: "Selection",
                                text: "Garlic is selected with freshness and quality in mind.",
                            },
                            {
                                number: "02",
                                title: "Peeling",
                                text: "The garlic is carefully peeled to make preparation easier.",
                            },
                            {
                                number: "03",
                                title: "Packing",
                                text: "Prepared garlic is packed carefully for delivery.",
                            },
                            {
                                number: "04",
                                title: "Delivery",
                                text: "Your order is sent to you ready for your kitchen.",
                            },
                        ].map((step) => (
                            <div key={step.number} className="relative text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-extrabold text-white shadow-lg shadow-green-600/20">
                                    {step.number}
                                </div>

                                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= QUALITY PROMISE ================= */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="overflow-hidden rounded-[2rem] bg-gray-900">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-8 sm:p-12 lg:p-16">
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                                Our Promise
                            </span>

                            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                                Quality That Starts Before You Cook
                            </h2>

                            <p className="mt-5 leading-8 text-gray-300">
                                We believe convenience should never mean ignoring quality.
                                That is why we pay attention to the garlic we select, the way
                                it is prepared and how it reaches you.
                            </p>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Freshly prepared peeled garlic",
                                    "Careful handling",
                                    "Convenient packaging",
                                    "Customer-focused service",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-gray-200"
                                    >
                                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative min-h-[300px] sm:min-h-[380px] overflow-hidden flex items-center justify-center bg-gray-900">
                            <Image
                                src="/images/image5.png"
                                alt="Quality Garlic - TheGarlicFresh"
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHO WE SERVE ================= */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                            Made for Everyone
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Perfect for Everyday Cooking
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                icon: "🏠",
                                title: "Homes",
                                text: "Make everyday meal preparation quicker and easier.",
                            },
                            {
                                icon: "🍳",
                                title: "Restaurants",
                                text: "Save valuable preparation time in busy kitchens.",
                            },
                            {
                                icon: "👨‍🍳",
                                title: "Food Businesses",
                                text: "A convenient garlic solution for food preparation.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-8 text-center shadow-sm"
                            >
                                <div className="text-5xl">{item.icon}</div>

                                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                                <p className="mt-3 leading-7 text-gray-500">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-green-600 to-green-700 shadow-2xl">
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-lime-300/10 blur-2xl" />

                    <div className="relative mx-auto max-w-4xl px-6 py-12 text-center lg:px-8">
                        <HandHeart className="mx-auto h-12 w-12 text-green-100" />

                        <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                            Fresh Garlic, Less Preparation.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-50">
                            Make your cooking routine easier with fresh, peeled garlic from
                            TheGarlicFresh.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-green-700 shadow-lg transition hover:bg-green-50"
                            >
                                Shop Now
                                <ArrowRight className="h-5 w-5" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* JSON-LD Schema for Google Rich Search */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            name: "About Us | TheGarlicFresh",
                            url: "https://thegarlicfresh.com/about",
                            description: "Learn about TheGarlicFresh, led by Satyam with 5+ years experience supplying fresh peeled garlic across India.",
                            mainEntity: {
                                "@type": "Person",
                                name: "Satyam",
                                jobTitle: "Founder & Managing Director",
                                worksFor: {
                                    "@type": "Organization",
                                    name: "TheGarlicFresh",
                                    url: "https://thegarlicfresh.com",
                                },
                                image: "https://thegarlicfresh.com/images/satyam.png",
                                description: "Over 5 years of experience in fresh agricultural sourcing and food processing.",
                            },
                        },
                    ]),
                }}
            />
        </main>
    );
}