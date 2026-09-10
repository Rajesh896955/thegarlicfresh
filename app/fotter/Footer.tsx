import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

function FacebookIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={className}
        >
            <radialGradient id="ig-radial" cx="30%" cy="107%" r="150%">
                <stop offset="0%" stopColor="#ffd600" />
                <stop offset="10%" stopColor="#ff7a00" />
                <stop offset="50%" stopColor="#ff0169" />
                <stop offset="75%" stopColor="#d300c5" />
                <stop offset="100%" stopColor="#7638fa" />
            </radialGradient>
            <rect width="24" height="24" rx="6" fill="url(#ig-radial)" />
            <path
                d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8.2A3.2 3.2 0 1 1 15.2 12 3.2 3.2 0 0 1 12 15.2zm5.23-8.35a1.17 1.17 0 1 1-1.17-1.17 1.17 1.17 0 0 1 1.17 1.17zm2.7 1.18a3.5 3.5 0 0 0-.95-2.48 3.5 3.5 0 0 0-2.48-.95c-1-.06-3.95-.06-4.95 0a3.5 3.5 0 0 0-2.48.95 3.5 3.5 0 0 0-.95 2.48c-.06 1-.06 3.95 0 4.95a3.5 3.5 0 0 0 .95 2.48 3.5 3.5 0 0 0 2.48.95c1 .06 3.95.06 4.95 0a3.5 3.5 0 0 0 2.48-.95 3.5 3.5 0 0 0 .95-2.48c.06-1 .06-3.95 0-4.95zm-1.8 6.47a2.1 2.1 0 0 1-1.18 1.18c-.78.31-2.63.24-3.95.24s-3.17.07-3.95-.24a2.1 2.1 0 0 1-1.18-1.18c-.31-.78-.24-2.63-.24-3.95s-.07-3.17.24-3.95a2.1 2.1 0 0 1 1.18-1.18c.78-.31 2.63-.24 3.95-.24s3.17-.07 3.95.24a2.1 2.1 0 0 1 1.18 1.18c.31.78.24 2.63.24 3.95s.07 3.17-.24 3.95z"
                fill="#ffffff"
            />
        </svg>
    );
}

function TwitterIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}

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
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-green-600 hover:text-white"
                            >
                                <FacebookIcon size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/thegarlicfresh?stkn=ajJ3NXdjOWQyNWNv"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden transition duration-300 hover:scale-110 shadow-sm hover:shadow-md hover:shadow-pink-500/20"
                            >
                                <InstagramIcon size={36} />
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
                                    href="mailto:support@thegarlicfresh.com"
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