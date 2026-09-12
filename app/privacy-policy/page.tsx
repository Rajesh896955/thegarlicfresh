import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Cookie, CreditCard, UserCheck, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | TheGarlicFresh",
  description: "Read the Privacy Policy of TheGarlicFresh regarding user data protection, cookies, and order safety.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-800 p-8 text-white shadow-xl sm:p-12 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-100 backdrop-blur">
            <Lock className="h-4 w-4 text-green-300" />
            Your Data is Secure
          </div>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm leading-6 text-green-100 sm:text-base">
            Last Updated: September 2026 • At TheGarlicFresh, we respect your privacy and are committed to protecting your personal information.
          </p>
        </div>

        {/* Policy Content Cards */}
        <div className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <UserCheck className="h-5 w-5 text-green-600" /> 1. Information We Collect
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              When you visit or place an order on <strong>TheGarlicFresh</strong>, we collect essential information required to process and deliver your order, including your name, delivery address, phone number, and email address.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Lock className="h-5 w-5 text-green-600" /> 2. How We Use Your Information
            </h2>
            <ul className="mt-4 list-disc pl-5 text-sm sm:text-base text-gray-600 space-y-2">
              <li>To process, fulfill, and deliver your orders of fresh peeled garlic.</li>
              <li>To send order confirmation, delivery updates, and customer support notifications.</li>
              <li>To improve our website functionality, product range, and customer service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <CreditCard className="h-5 w-5 text-green-600" /> 3. Order Payments & Security
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Payment information is securely processed through encrypted payment gateway providers. <strong>TheGarlicFresh</strong> does not store bank account details, credit card numbers, or UPI PINs on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Cookie className="h-5 w-5 text-green-600" /> 4. Cookies & Analytics
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              We use standard session cookies to enhance browsing, remember cart items, and collect aggregated site traffic analytics. You can choose to disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <ShieldCheck className="h-5 w-5 text-green-600" /> 5. Data Protection Rights
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              You have the right to request access to the personal data we hold about you, or ask for updates and deletion. For any privacy queries, please reach out to our team at support@thegarlicfresh.in.
            </p>
          </section>

          <div className="rounded-2xl bg-green-50 p-6 border border-green-100 text-center mt-10">
            <h3 className="font-bold text-green-900 text-lg">Have Questions About Your Data?</h3>
            <p className="text-sm text-green-700 mt-1">Our support team is always available to help you.</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-green-700 transition"
            >
              <Mail className="h-4 w-4" /> Contact Privacy Support
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
