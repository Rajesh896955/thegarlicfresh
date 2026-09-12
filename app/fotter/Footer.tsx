import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-3 transition hover:opacity-95">
                            <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white p-1 shadow-md border border-gray-800">
                                <Image
                                    src="/images/logo.png"
                                    alt="TheGarlicFresh Logo"
                                    fill
                                    sizes="56px"
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    TheGarlicFresh
                                </h2>
                                <p className="text-xs text-gray-400">
                                    Fresh • Clean • Convenient
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
                            Fresh, peeled and ready-to-use garlic delivered with quality
                            and convenience. We make everyday cooking easier with fresh
                            garlic you can trust.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 hover:scale-110"
                            >
                                <Image
                                    src="/blog/facebook.png"
                                    alt="Facebook"
                                    width={36}
                                    height={36}
                                    className="h-9 w-9 object-contain"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/thegarlicfresh?stkn=ajJ3NXdjOWQyNWNv"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 hover:scale-110"
                            >
                                <Image
                                    src="/blog/instagram.png"
                                    alt="Instagram"
                                    width={36}
                                    height={36}
                                    className="h-9 w-9 object-contain"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-green-400"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/products"
                                    className="transition hover:text-green-400"
                                >
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="transition hover:text-green-400"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="transition hover:text-green-400"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Customer Support
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="transition hover:text-green-400"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/terms-condition"
                                    className="transition hover:text-green-400"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/shipping-policy"
                                    className="transition hover:text-green-400"
                                >
                                    Shipping Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/refund-policy"
                                    className="transition hover:text-green-400"
                                >
                                    Refund & Return Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-sm">

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <Mail
                                    size={19}
                                    className="mt-0.5 shrink-0 text-green-400"
                                />

                                <a
                                    href="mailto:support@thegarlicfresh.in"
                                    className="transition hover:text-green-400"
                                >
                                    thegarlicfresh@gmail.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <Phone
                                    size={19}
                                    className="mt-0.5 shrink-0 text-green-400"
                                />

                                <a
                                    href="tel:+919354309538"
                                    className="transition hover:text-green-400"
                                >
                                    +91 9354309538
                                </a>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={19}
                                    className="mt-0.5 shrink-0 text-green-400"
                                />

                                <p className="leading-6 text-gray-400">
                                    MIDC Bhosari
                                    <br />
                                    Pune , 411026, Maharashtra, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-gray-500 sm:px-6 md:flex-row lg:px-8">
                    <p>
                        © {new Date().getFullYear()} TheGarlicFresh. All rights reserved.
                    </p>

                    <p>
                        Fresh Garlic. Better Cooking. ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}