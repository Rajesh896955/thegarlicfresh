import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Cookie,
  CreditCard,
  UserCheck,
  Mail,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "information",
    title: "1. Information We Collect",
  },
  {
    id: "usage",
    title: "2. How We Use Your Information",
  },
  {
    id: "orders",
    title: "3. Orders and Payments",
  },
  {
    id: "cookies",
    title: "4. Cookies and Tracking",
  },
  {
    id: "sharing",
    title: "5. Sharing Your Information",
  },
  {
    id: "security",
    title: "6. Data Security",
  },
  {
    id: "retention",
    title: "7. Data Retention",
  },
  {
    id: "rights",
    title: "8. Your Privacy Rights",
  },
  {
    id: "children",
    title: "9. Children's Privacy",
  },
  {
    id: "thirdparty",
    title: "10. Third-Party Services",
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
  },
  {
    id: "contact",
    title: "12. Contact Us",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-50">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
            <ShieldCheck className="h-8 w-8 text-green-600" />
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            At <strong>TheGarlicFresh</strong>, we respect your privacy and
            are committed to protecting the personal information you share
            with us.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last Updated: September 8, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
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
                    <ChevronRight className="h-4 w-4" />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
            {/* Introduction */}
            <div className="border-b border-gray-200 pb-8">
              <p className="text-lg leading-8 text-gray-600">
                Welcome to <strong>TheGarlicFresh</strong>. This Privacy Policy
                explains how we collect, use, store, and protect your personal
                information when you visit our website, place an order, create
                an account, or otherwise interact with our services.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                By using our website, you acknowledge that you have read and
                understood this Privacy Policy.
              </p>
            </div>

            {/* 1 */}
            <section id="information" className="scroll-mt-8 py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  1. Information We Collect
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                We may collect information that you provide directly to us
                when using TheGarlicFresh website.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Personal Information
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing and shipping address</li>
                <li>Account information</li>
                <li>Order and purchase details</li>
                <li>Information you provide when contacting us</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">
                Automatically Collected Information
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                When you visit our website, certain technical information may
                be collected automatically, such as your IP address, browser
                type, device type, operating system, pages visited, referring
                website, and approximate location information.
              </p>
            </section>

            {/* 2 */}
            <section id="usage" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                2. How We Use Your Information
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                We use the information we collect for legitimate business and
                service purposes, including:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>Processing and fulfilling your orders</li>
                <li>Delivering products to your address</li>
                <li>Processing payments</li>
                <li>Creating and managing customer accounts</li>
                <li>Providing customer support</li>
                <li>Sending order confirmations and updates</li>
                <li>Improving our website and services</li>
                <li>Preventing fraud and unauthorized activity</li>
                <li>Maintaining website security</li>
                <li>Complying with applicable legal requirements</li>
              </ul>
            </section>

            {/* 3 */}
            <section id="orders" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  3. Orders and Payments
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                When you place an order through TheGarlicFresh, we collect the
                information necessary to process and fulfill your purchase.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Payments may be processed through secure third-party payment
                providers. Depending on the payment method selected, payment
                information may be handled directly by the payment provider.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We do not intend to store complete credit or debit card
                numbers on our own servers unless specifically required and
                lawfully permitted.
              </p>
            </section>

            {/* 4 */}
            <section id="cookies" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <Cookie className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  4. Cookies and Tracking
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                TheGarlicFresh may use cookies and similar technologies to
                provide essential website functionality, remember preferences,
                understand website usage, and improve your experience.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Types of Cookies
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>
                  <strong>Essential Cookies:</strong> Required for core website
                  functionality.
                </li>

                <li>
                  <strong>Preference Cookies:</strong> Used to remember your
                  preferences.
                </li>

                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  visitors use our website.
                </li>

                <li>
                  <strong>Marketing Cookies:</strong> May be used to provide
                  relevant advertising where applicable and where legally
                  permitted.
                </li>
              </ul>

              <p className="mt-5 leading-7 text-gray-600">
                Where required by applicable law, we will request your consent
                before placing non-essential cookies on your device.
              </p>
            </section>

            {/* 5 */}
            <section id="sharing" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                5. Sharing Your Information
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                We do not sell your personal information. We may share
                information with trusted service providers when necessary to
                operate our business and provide our services.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                These parties may include:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>Payment processing providers</li>
                <li>Delivery and logistics providers</li>
                <li>Website hosting providers</li>
                <li>Analytics and technology providers</li>
                <li>Customer support service providers</li>
                <li>Professional advisers</li>
              </ul>

              <p className="mt-5 leading-7 text-gray-600">
                We may also disclose information when required by law,
                regulation, court order, or to protect our legal rights,
                customers, website, or business.
              </p>
            </section>

            {/* 6 */}
            <section id="security" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  6. Data Security
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                We take reasonable technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, loss, or destruction.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                However, no method of transmitting or storing information over
                the internet can be guaranteed to be completely secure.
              </p>
            </section>

            {/* 7 */}
            <section id="retention" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                7. Data Retention
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                We retain personal information only for as long as reasonably
                necessary to provide our services, process orders, maintain
                business records, resolve disputes, prevent fraud, and comply
                with applicable legal and accounting requirements.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                When personal information is no longer required, we will take
                reasonable steps to delete or anonymize it, subject to legal
                retention requirements.
              </p>
            </section>

            {/* 8 */}
            <section id="rights" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                8. Your Privacy Rights
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Depending on where you live and applicable privacy laws, you
                may have rights regarding your personal information.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-gray-600">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to restrict certain processing</li>
                <li>Right to object to certain processing</li>
                <li>Right to data portability where applicable</li>
                <li>Right to withdraw consent where processing is based on consent</li>
              </ul>

              <p className="mt-5 leading-7 text-gray-600">
                To exercise an applicable privacy right, please contact us
                using the contact details provided below.
              </p>
            </section>

            {/* 9 */}
            <section id="children" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                9. Children's Privacy
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                TheGarlicFresh is not intended for children who are unable to
                legally enter into purchases or provide personal information
                without appropriate authorization.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We do not knowingly collect personal information from children
                in violation of applicable law.
              </p>
            </section>

            {/* 10 */}
            <section id="thirdparty" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                10. Third-Party Services
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Our website may use third-party services for payment
                processing, hosting, analytics, delivery, communication, or
                other business functions.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                These third parties may process information according to their
                own privacy policies. We encourage you to review the privacy
                practices of third-party services that you use through our
                website.
              </p>
            </section>

            {/* 11 */}
            <section id="changes" className="scroll-mt-8 border-t py-8">
              <h2 className="text-2xl font-bold">
                11. Changes to This Privacy Policy
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                We may update this Privacy Policy from time to time to reflect
                changes in our services, technology, legal requirements, or
                business practices.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                When we make changes, we will update the “Last Updated” date at
                the top of this page.
              </p>
            </section>

            {/* 12 */}
            <section id="contact" className="scroll-mt-8 border-t py-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">
                  12. Contact Us
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                If you have questions about this Privacy Policy or want to
                exercise your privacy rights, please contact TheGarlicFresh.
              </p>

              <div className="mt-6 rounded-2xl bg-green-50 p-6">
                <h3 className="font-bold text-gray-900">
                  TheGarlicFresh
                </h3>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Email:</strong>{" "}
                    privacy@thegarlicfresh.in
                  </p>

                  <p>
                    <strong>Website:</strong> TheGarlicFresh
                  </p>

                  <p>
                    <strong>Address:</strong> [Add your business address]
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-8 border-t pt-8">
              <p className="text-sm leading-6 text-gray-500">
                This Privacy Policy is provided for general informational
                purposes and should be reviewed and customized according to
                TheGarlicFresh's actual business practices, technologies,
                payment providers, analytics tools, applicable laws, and
                operating locations.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-6 py-10 sm:flex-row lg:px-8">
          <div>
            <h2 className="font-bold text-gray-900">
              Have questions about your privacy?
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Our team is happy to help.
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