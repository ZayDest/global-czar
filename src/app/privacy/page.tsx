import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | GLOBAL CZAR",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-black text-[#0a1628] dark:text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Last updated: April 27, 2026</p>
        <div className="prose prose-sm max-w-none text-slate-600 dark:text-slate-300 space-y-6">
          <p>GLOBAL CZAR (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or contact us for business purposes.</p>
          <h2 className="text-lg font-black text-[#0a1628] dark:text-white">Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or subscribe to our newsletter. This may include your name, company name, email address, phone number, and business requirements.</p>
          <h2 className="text-lg font-black text-[#0a1628] dark:text-white">How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide quotations, deliver services, and send relevant market updates if you have subscribed. We do not sell or share your personal information with third parties for marketing purposes.</p>
          <h2 className="text-lg font-black text-[#0a1628] dark:text-white">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@alloycraftglobal.com" className="text-[#c8960c]">info@alloycraftglobal.com</a>.</p>
        </div>
        <Link href="/" className="inline-block mt-8 text-[#c8960c] font-semibold text-sm hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
