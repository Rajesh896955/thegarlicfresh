"use client";

import React, { useState, useEffect } from "react";
import { Share2, Copy, Check, MessageCircle } from "lucide-react";

interface ShareButtonsProps {
  productName: string;
  slug: string;
}

export default function ShareButtons({ productName, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, [slug]);

  const shareText = `Check out ${productName} on TheGarlicFresh - Fresh, Hygienic Peeled Garlic delivered All India!`;

  const handleCopyLink = async () => {
    const urlToCopy = shareUrl || `${window.location.origin}/products/${slug}`;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(urlToCopy);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = urlToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const currentUrl = shareUrl || `https://thegarlicfresh.in/products/${slug}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n\n👉 View Product: ${currentUrl}`)}`;

  return (
    <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/80 p-4">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700">
          <Share2 className="h-4 w-4 text-green-600" /> Share this Product
        </span>
        {copied && (
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 animate-pulse">
            Link copied!
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {/* WhatsApp Share */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#20ba59] active:scale-95"
          title="Share on WhatsApp"
        >
          <MessageCircle className="h-4 w-4 fill-white" />
          WhatsApp
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopyLink}
          className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-bold transition active:scale-95 ${
            copied
              ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm"
              : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
          }`}
          title="Copy Product Link"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-gray-600" />}
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
