import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | GLOBAL CZAR",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-black text-[#0a1628] mb-2">Terms of Use</h1>
        <p className="text-slate-500 text-sm mb-8">Last updated: April 27, 2026</p>
        <div className="prose prose-sm max-w-none text-slate-600 space-y-6">
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website&apos;s particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          <h2 className="text-lg font-black text-[#0a1628]">Use of Website</h2>
          <p>This website is for informational and business inquiry purposes only. The content provided is for general information about GLOBAL CZAR&apos;s products and services. Prices and availability are subject to change without notice.</p>
          <h2 className="text-lg font-black text-[#0a1628]">Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of GLOBAL CZAR and is protected by applicable intellectual property laws.</p>
          <h2 className="text-lg font-black text-[#0a1628]">Limitation of Liability</h2>
          <p>GLOBAL CZAR shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website or its content.</p>
          <h2 className="text-lg font-black text-[#0a1628]">Contact</h2>
          <p>For questions about these Terms, contact <a href="mailto:info@alloycraftglobal.com" className="text-[#c8960c]">info@alloycraftglobal.com</a>.</p>
        </div>
        <Link href="/" className="inline-block mt-8 text-[#c8960c] font-semibold text-sm hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
