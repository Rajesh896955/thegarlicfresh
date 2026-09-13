"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, Truck, ShieldCheck } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur shadow-sm">
      {/* Top Bar Announcement */}
      <div className="bg-[#044c26] px-4 py-2 text-xs sm:text-sm font-semibold text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center sm:justify-end gap-3 sm:gap-5">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Truck className="h-4 w-4 sm:h-[18px] sm:w-[18px] shrink-0 text-white" />
            <span>Free Shipping on Orders Above ₹999</span>
          </div>

          <span className="text-white/40 select-none">|</span>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <ShieldCheck className="h-4 w-4 sm:h-[18px] sm:w-[18px] shrink-0 text-white" />
            <span>100% Quality Guarantee</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo Image */}
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-95"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white p-1 shadow-md border border-gray-100">
            <Image
              src="/images/logo.png"
              alt="TheGarlicFresh Logo"
              fill
              sizes="64px"
              priority
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-green-700 sm:text-3xl tracking-tight">
              TheGarlicFresh
            </h1>
            <p className="hidden text-xs font-semibold tracking-wider uppercase text-gray-500 sm:block">
              Fresh • Clean • Convenient
            </p>
          </div>
        </Link>

        {/* Desktop Navigation - Active link highlighted */}
        <nav className="hidden items-center gap-8 lg:gap-12 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-1 text-lg transition duration-200 ${isActive
                  ? "font-extrabold text-green-600 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-green-600"
                  : "font-bold text-gray-700 hover:text-green-600"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-gray-700 md:hidden hover:bg-gray-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-6 space-y-2 sm:px-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-5 py-3.5 text-lg transition ${isActive
                    ? "bg-green-100 font-extrabold text-green-700"
                    : "font-bold text-gray-800 hover:bg-green-50 hover:text-green-700"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}