import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  FileText,
  ShoppingCart,
  CreditCard,
  Truck,
  RotateCcw,
  ShieldCheck,
  AlertCircle,
  Mail,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | TheGarlicFresh",
  description: "Read the official Terms and Conditions of TheGarlicFresh regarding peeled garlic orders, payment terms, and delivery across India.",
  alternates: {
    canonical: "https://thegarlicfresh.com/terms-condition",
  },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
  },
  {
    id: "about",
    title: "2. About TheGarlicFresh",
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
  },
  {
    id: "products",
    title: "4. Products and Information",
  },
  {
    id: "orders",
    title: "5. Orders",
  },
  {
    id: "pricing",
    title: "6. Pricing and Availability",
  },
  {
    id: "payment",
    title: "7. Payments",
  },
  {
    id: "delivery",
    title: "8. Delivery",
  },
  {
    id: "cancellation",
    title: "9. Cancellation",
  },
  {
    id: "returns",
    title: "10. Returns and Refunds",
  },
  {
    id: "user",
    title: "11. User Responsibilities",
  },
  {
    id: "intellectual",
    title: "12. Intellectual Property",
  },
  {
    id: "liability",
    title: "13. Limitation of Liability",
  },
  {
    id: "changes",
    title: "14. Changes to Terms",
  },
  {
    id: "law",
    title: "15. Governing Law",
  },
  {
    id: "contact",
    title: "16. Contact Us",
  },
];

export default function TermsConditionPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
            <FileText className="h-8 w-8 text-green-600" />
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms &amp; Conditions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Please read these Terms &amp; Conditions carefully before using
            <strong> TheGarlicFresh</strong> or placing an order.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last Updated: September 8, 2026
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

          {/* =================================================
              SIDEBAR
          ================================================== */}
          <aside className="h-fit lg:sticky lg:top-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                On This Page
              </h2>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-green-50 hover:text-green-700"
                  >
                    <ChevronRight className="h-4 w-4 shrink-0" />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* =================================================
              TERMS CONTENT
          ================================================== */}
          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">

            {/* INTRODUCTION */}
            <div className="border-b border-gray-200 pb-8">
              <p className="text-lg leading-8 text-gray-600">
                Welcome to <strong>TheGarlicFresh</strong>. These Terms &amp;
                Conditions govern your access to and use of our website,
                products, services, and online ordering platform.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                By accessing our website or purchasing products from us, you
                agree to be bound by these Terms &amp; Conditions.
              </p>
            </div>

            {/* =================================================
                1. ACCEPTANCE
            ================================================== */}
            <section id="acceptance" className="scroll-mt-8 py-8">
              <h2 className="text-2xl font-bold">
                1. Acceptance of Terms
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                By using TheGarlicFresh website, you confirm that you have read,
                understood, and agreed to these Terms &amp; Conditions.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                If you do not agree with any part of these terms, please do not
                use our website or purchase our products.
              </p>
            </section>

            {/* =================================================
                2. ABOUT
            ================================================== */}
            <section id="about" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                2. About TheGarlicFresh
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                TheGarlicFresh provides fresh, peeled garlic and related food
                products through its online platform.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Our goal is to make garlic preparation more convenient by
                providing carefully prepared and packaged peeled garlic for
                homes, restaurants, and food businesses.
              </p>
            </section>

            {/* =================================================
                3. ELIGIBILITY
            ================================================== */}
            <section id="eligibility" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                3. Eligibility
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                You must be legally capable of entering into a binding
                agreement under the laws applicable to you in order to place an
                order through our website.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                If you are purchasing on behalf of another person or
                organization, you confirm that you have the authority to do so.
              </p>
            </section>

            {/* =================================================
                4. PRODUCTS
            ================================================== */}
            <section id="products" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  4. Products and Information
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                We make reasonable efforts to ensure that product descriptions,
                images, prices, quantities, and other information displayed on
                our website are accurate.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                However, product appearance, packaging, size, weight, and
                availability may vary from time to time.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Product images are provided for illustrative purposes and may
                not always represent the exact appearance of the product
                received.
              </p>
            </section>

            {/* =================================================
                5. ORDERS
            ================================================== */}
            <section id="orders" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                5. Orders
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                When you place an order through our website, you agree to
                provide accurate and complete information necessary to process
                your order.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                After placing an order, you may receive an order confirmation.
                An order confirmation does not necessarily mean that the order
                has been accepted if there are issues relating to stock,
                pricing, payment, delivery, or other circumstances.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We reserve the right to refuse, cancel, or limit an order where
                reasonably necessary.
              </p>
            </section>

            {/* =================================================
                6. PRICING
            ================================================== */}
            <section id="pricing" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                6. Pricing and Availability
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Product prices displayed on the website are subject to change
                without prior notice.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We may update product prices, promotions, discounts, offers,
                product quantities, or availability at any time.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                If a pricing or availability error affects an order, we may
                contact you before fulfilling the order or cancel the affected
                order and provide an appropriate refund where applicable.
              </p>
            </section>

            {/* =================================================
                7. PAYMENT
            ================================================== */}
            <section id="payment" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  7. Payments
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                We may offer multiple payment methods through secure
                third-party payment providers.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Payment must be successfully authorized or completed before
                an order can be processed, unless another payment arrangement
                has been explicitly agreed upon.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We are not responsible for payment failures caused by your
                bank, card issuer, payment provider, network connection, or
                other third-party systems.
              </p>
            </section>

            {/* =================================================
                8. DELIVERY
            ================================================== */}
            <section id="delivery" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  8. Delivery
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                We will make reasonable efforts to deliver orders within the
                estimated delivery timeframe displayed at checkout or
                communicated to you.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Delivery times may be affected by factors outside our
                reasonable control, including weather, traffic, logistics
                disruptions, incorrect addresses, carrier delays, or other
                unforeseen circumstances.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Customers are responsible for providing a complete and accurate
                delivery address and contact information.
              </p>
            </section>

            {/* =================================================
                9. CANCELLATION
            ================================================== */}
            <section id="cancellation" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                9. Cancellation
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Order cancellation may be available before an order enters
                preparation, processing, or dispatch.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Once an order has been prepared or dispatched, cancellation may
                no longer be possible.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Any cancellation and refund will be handled according to our
                applicable cancellation and refund procedures and applicable
                law.
              </p>
            </section>

            {/* =================================================
                10. RETURNS & REFUNDS
            ================================================== */}
            <section id="returns" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <RotateCcw className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  10. Returns and Refunds
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                Because peeled garlic is a perishable food product, returns may
                be subject to specific restrictions for food safety and hygiene
                reasons.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                If you receive an incorrect, damaged, defective, or otherwise
                unacceptable order, please contact us as soon as reasonably
                possible with your order details and relevant information.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Where a refund or replacement is appropriate, we will process
                it according to our refund policy and applicable consumer
                protection laws.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                  <p className="text-sm leading-6 text-amber-800">
                    Perishable food products may be subject to different
                    cancellation and return rights depending on the applicable
                    law and the condition of the product. Please check our
                    specific Refund/Return Policy before publishing this page.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                11. USER RESPONSIBILITIES
            ================================================== */}
            <section id="user" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                11. User Responsibilities
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                When using TheGarlicFresh website, you agree to:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>Provide accurate information.</li>
                <li>Use the website for lawful purposes.</li>
                <li>Not attempt to interfere with website functionality.</li>
                <li>Not use automated systems to abuse or overload the website.</li>
                <li>Not attempt unauthorized access to accounts or systems.</li>
                <li>Respect the intellectual property rights of TheGarlicFresh.</li>
              </ul>
            </section>

            {/* =================================================
                12. INTELLECTUAL PROPERTY
            ================================================== */}
            <section id="intellectual" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  12. Intellectual Property
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                Unless otherwise stated, the content of TheGarlicFresh
                website, including logos, branding, text, graphics, images,
                product descriptions, design elements, and software, is owned
                by or licensed to TheGarlicFresh.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                You may not reproduce, copy, modify, distribute, sell, or use
                our content for commercial purposes without prior written
                permission.
              </p>
            </section>

            {/* =================================================
                13. LIABILITY
            ================================================== */}
            <section id="liability" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                13. Limitation of Liability
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                To the extent permitted by applicable law, TheGarlicFresh will
                not be responsible for losses arising from circumstances beyond
                our reasonable control.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                This may include service interruptions, internet failures,
                payment provider failures, delivery delays, technical issues,
                natural events, or other circumstances outside our reasonable
                control.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Nothing in these Terms &amp; Conditions is intended to exclude
                or limit liability where such exclusion or limitation is not
                permitted by applicable law.
              </p>
            </section>

            {/* =================================================
                14. CHANGES
            ================================================== */}
            <section id="changes" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                14. Changes to These Terms
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                We may update or modify these Terms &amp; Conditions from time
                to time to reflect changes to our services, business practices,
                technology, or legal requirements.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                The updated version will be posted on this page with a revised
                “Last Updated” date.
              </p>
            </section>

            {/* =================================================
                15. GOVERNING LAW
            ================================================== */}
            <section id="law" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                15. Governing Law
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                These Terms &amp; Conditions shall be interpreted and applied
                in accordance with the applicable laws governing
                TheGarlicFresh and its customers.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Where mandatory consumer protection laws apply, nothing in
                these terms is intended to restrict rights that cannot legally
                be excluded.
              </p>
            </section>

            {/* =================================================
                16. CONTACT
            ================================================== */}
            <section id="contact" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  16. Contact Us
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                If you have any questions about these Terms &amp; Conditions,
                please contact us.
              </p>

              <div className="mt-6 rounded-2xl bg-green-50 p-6">
                <h3 className="font-bold text-gray-900">
                  TheGarlicFresh
                </h3>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Email:</strong>{" "}
                    support@thegarlicfresh.com
                  </p>

                  <p>
                    <strong>Website:</strong>{" "}
                    TheGarlicFresh
                  </p>

                  <p>
                    <strong>Business Address:</strong>{" "}
                    [Add your business address]
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                DISCLAIMER
            ================================================== */}
            <div className="mt-8 border-t pt-8">
              <p className="text-sm leading-6 text-gray-500">
                These Terms &amp; Conditions are a general template and should
                be customized according to TheGarlicFresh's actual business
                model, country of operation, delivery policy, refund policy,
                payment providers, and applicable consumer protection laws.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="border-t bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-6 py-10 sm:flex-row lg:px-8">
          <div>
            <h2 className="font-bold text-gray-900">
              Have questions about our terms?
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Contact our team for more information.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}