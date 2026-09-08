import React from "react";
import Link from "next/link";
import { RotateCcw, ShieldCheck, CheckCircle2, AlertCircle, Mail } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | TheGarlicFresh",
  description: "Read the Refund and Cancellation Policy of TheGarlicFresh for fresh peeled garlic orders.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-800 p-8 text-white shadow-xl sm:p-12 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-100 backdrop-blur">
            <RotateCcw className="h-4 w-4 text-green-300" />
            100% Quality Assurance
          </div>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-3 text-sm leading-6 text-green-100 sm:text-base">
            Your satisfaction is our top priority. Learn about our easy replacement and refund terms for fresh produce.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" /> 1. Fresh Produce Quality Guarantee
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Because peeled garlic is a fresh agricultural product, we take utmost care during processing and packing. If you receive a damaged package or fresh quality issue, we offer immediate replacement or full refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <RotateCcw className="h-5 w-5 text-green-600" /> 2. Returns & Replacement Eligibility
            </h2>
            <ul className="mt-4 list-disc pl-5 text-sm sm:text-base text-gray-600 space-y-2">
              <li>Please inspect package upon delivery and notify customer support within <strong>24 to 48 hours</strong> of delivery for damage/quality claims.</li>
              <li>Share photos or a short video of the delivered package and garlic item via WhatsApp or Email.</li>
              <li>Verified quality claims will be processed immediately for free reshipment or refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <AlertCircle className="h-5 w-5 text-green-600" /> 3. Order Cancellation
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              You can cancel your order anytime before it is dispatched from our facility. Once an order is handed over to the courier partner for express delivery, cancellations cannot be accepted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <ShieldCheck className="h-5 w-5 text-green-600" /> 4. Refund Processing Time
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Approved refunds are credited back to your original payment method (Bank Account, UPI, or Credit/Debit Card) within <strong>5 to 7 business days</strong>.
            </p>
          </section>

          <div className="rounded-2xl bg-green-50 p-6 border border-green-100 text-center mt-10">
            <h3 className="font-bold text-green-900 text-lg">Need Assistance With a Refund or Order?</h3>
            <p className="text-sm text-green-700 mt-1">Our support team is available to help resolve any order queries.</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-green-700 transition"
            >
              <Mail className="h-4 w-4" /> Contact Customer Support
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
