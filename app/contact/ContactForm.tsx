"use client";

import React, { FormEvent, useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, PhoneCall, MessageCircle } from "lucide-react";

interface FormData {
    name: string;
    phone: string;
    email: string;
    inquiryType: string;
    message: string;
}

const initialForm: FormData = {
    name: "",
    phone: "",
    email: "",
    inquiryType: "retail",
    message: "",
};

export default function ContactForm() {
    const [form, setForm] = useState<FormData>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [savedContact, setSavedContact] = useState<{ name: string; phone: string } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errorMessage) setErrorMessage(null);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(null);
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to submit inquiry. Please try again.");
            }

            setSavedContact({ name: form.name, phone: form.phone });
            setSubmitted(true);
            setForm(initialForm);
        } catch (err: any) {
            setErrorMessage(err.message || "An unexpected error occurred. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-lime-50 p-8 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">Inquiry Sent Successfully!</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                    Thank you <span className="font-semibold text-gray-900">{savedContact?.name || "Customer"}</span>. Your details have been sent to our team at{" "}
                    <span className="font-semibold text-green-700">thegarlicfresh@gmail.com</span>. We will call you on{" "}
                    <span className="font-semibold text-gray-900">{savedContact?.phone}</span> shortly.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href={`https://wa.me/919354309538?text=${encodeURIComponent(
                            `Hello TheGarlicFresh, I have submitted an inquiry on your website under name: ${savedContact?.name || ""}. Please assist me!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-[#20bd5a] transition"
                    >
                        <MessageCircle className="h-4 w-4" />
                        Chat on WhatsApp
                    </a>

                    <a
                        href="tel:+919354309538"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition"
                    >
                        <PhoneCall className="h-4 w-4 text-green-600" />
                        Call +91 9354309538
                    </a>
                </div>

                <div className="mt-6 border-t border-green-100 pt-6">
                    <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-sm font-semibold text-green-700 hover:text-green-800 underline underline-offset-4"
                    >
                        ← Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
                <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                    <div>
                        <p className="font-semibold">Message not sent</p>
                        <p className="mt-0.5 text-red-700">{errorMessage}</p>
                    </div>
                </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Satyam Kumar"
                        className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                    />
                </div>
                <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700">
                    Email Address <span className="text-xs font-normal text-gray-500">(Optional)</span>
                </label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your-email@gmail.com"
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                />
            </div>

            <div>
                <label htmlFor="contact-inquiryType" className="block text-sm font-semibold text-gray-700">
                    Inquiry Type
                </label>
                <select
                    id="contact-inquiryType"
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                >
                    <option value="retail">Home / Retail Purchase</option>
                    <option value="bulk">Bulk Supply (Restaurants / Hotels / Caterers)</option>
                    <option value="partnership">Distributor / Partnership Inquiry</option>
                    <option value="general">General Support / Question</option>
                </select>
            </div>

            <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700">
                    Message / Requirement <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your garlic requirement (quantity e.g. 5kg, 50kg, pack size, delivery city)..."
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending Message...
                    </>
                ) : (
                    <>
                        <Send className="h-5 w-5" />
                        Submit Message
                    </>
                )}
            </button>
        </form>
    );
}
