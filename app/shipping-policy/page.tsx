import React from "react";
import Link from "next/link";
import { Truck, ShieldCheck, Clock, MapPin, Mail } from "lucide-react";

export const metadata = {
  title: "Shipping & Delivery Policy | TheGarlicFresh",
  description: "Read the Shipping and Delivery Policy of TheGarlicFresh. All India fast doorstep delivery for fresh peeled garlic.",
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-800 p-8 text-white shadow-xl sm:p-12 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-100 backdrop-blur">
            <Truck className="h-4 w-4 text-green-300" />
            All India Doorstep Shipping
          </div>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Shipping & Delivery Policy
          </h1>
          <p className="mt-3 text-sm leading-6 text-green-100 sm:text-base">
            At TheGarlicFresh, we ensure your peeled garlic is freshly packed and dispatched with fast, reliable courier delivery across India.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <MapPin className="h-5 w-5 text-green-600" /> 1. Delivery Coverage Area
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              We deliver fresh peeled garlic orders to all major cities, metro areas, tier-2, tier-3 towns, and PIN codes across <strong>All India</strong> via trusted express logistics partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Clock className="h-5 w-5 text-green-600" /> 2. Dispatch & Delivery Timeline
            </h2>
            <ul className="mt-4 list-disc pl-5 text-sm sm:text-base text-gray-600 space-y-2">
              <li><strong>Order Dispatch:</strong> All orders are packed fresh and dispatched within 24 hours of confirmation.</li>
              <li><strong>Metro Delivery:</strong> Estimated delivery time is 2 to 4 business days.</li>
              <li><strong>Rest of India:</strong> Estimated delivery time is 3 to 6 business days depending on delivery location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <ShieldCheck className="h-5 w-5 text-green-600" /> 3. Freshness & Hygienic Packaging
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Every batch of garlic is hygienically peeled, quality inspected, and vacuum fresh-sealed in insulated moisture-resistant packaging to preserve aroma, crispness, and taste during transit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <Truck className="h-5 w-5 text-green-600" /> 4. Shipping Charges & Order Tracking
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Standard shipping rates or free delivery offers will be shown at checkout based on your order quantity. Once your order is dispatched, a SMS / Email with live tracking link will be shared.
            </p>
          </section>

          <div className="rounded-2xl bg-green-50 p-6 border border-green-100 text-center mt-10">
            <h3 className="font-bold text-green-900 text-lg">Need Help With Your Shipment?</h3>
            <p className="text-sm text-green-700 mt-1">Our support team is ready to assist you with tracking your order.</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-green-700 transition"
            >
              <Mail className="h-4 w-4" /> Contact Shipping Support
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
