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

  const handleNativeShare = async () => {
    const urlToShare = shareUrl || (typeof window !== "undefined" ? window.location.href : "");
    if (navigator.share) {
      try {
        await navigator.share({
          title: productName,
          text: shareText,
          url: urlToShare,
        });
      } catch {
        // User cancelled or share failed silently
      }
    } else {
      handleCopyLink();
    }
  };

  const currentUrl = shareUrl || `https://thegarlicfresh.in/products/${slug}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n\n👉 Order/View Here: ${currentUrl}`)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

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
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#20ba59] active:scale-95"
          title="Share on WhatsApp"
        >
          <MessageCircle className="h-4 w-4 fill-white" />
          WhatsApp
        </a>

        {/* Facebook Button */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#166fe5] active:scale-95"
          title="Share on Facebook"
        >
          <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </a>

        {/* Copy Link Button */}
        <button
          type="button"
          onClick={handleCopyLink}
          className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold transition active:scale-95 ${
            copied
              ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm"
              : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
          }`}
          title="Copy Product Link"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-gray-600" />}
          {copied ? "Copied!" : "Copy Link"}
        </button>

        {/* Mobile Native Share Button (if supported) */}
        <button
          type="button"
          onClick={handleNativeShare}
          className="sm:hidden inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-700 transition hover:bg-gray-50 active:scale-95"
          title="More Share Options"
        >
          <Share2 className="h-3.5 w-3.5 text-gray-600" />
          More
        </button>
      </div>
    </div>
  );
}
