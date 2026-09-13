"use client";

import React, { FormEvent, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">Thank You!</h3>
                <p className="mt-2 text-gray-600">
                    Your inquiry has been submitted successfully. Our team will contact you shortly regarding your garlic order.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl bg-green-600 px-6 py-2.5 font-bold text-white shadow hover:bg-green-700"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Full Name *</label>
                    <input
                        type="text"
                        required
                        placeholder="ABC Kumar"
                        className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                <input
                    type="email"
                    placeholder="contact@thegarlicfresh.in"
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700">Inquiry Type</label>
                <select className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20">
                    <option value="retail">Home / Retail Purchase</option>
                    <option value="bulk">Bulk Supply (Restaurants / Hotels)</option>
                    <option value="partnership">Distributor / Partnership Inquiry</option>
                    <option value="general">General Support</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700">Message / Requirement *</label>
                <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your garlic requirement (quantity, pack size, city)..."
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                />
            </div>

            <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
            >
                <Send className="h-5 w-5" />
                Submit Message
            </button>
        </form>
    );
}
