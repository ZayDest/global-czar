"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const productOptions = [
  "ADC12 Aluminum Alloy",
  "AK5M2 Aluminum Alloy",
  "A356 / LM25 Aluminum Alloy",
  "AC4B / AC2B Aluminum Alloy",
  "LM27 Aluminum Alloy",
  "Aluminum Billets & Ingots",
  "Lead Ingots",
  "Zinc Ingots",
  "Ferroalloys",
  "Other / Not Listed",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-black text-[#0a1628] dark:text-white mb-2">Message Sent!</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mx-auto">
          Thank you for reaching out. Our team will contact you within 24 business hours.
        </p>
        <button
          className="mt-6 text-[#c8960c] font-semibold text-sm underline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#c8960c] focus:ring-1 focus:ring-[#c8960c] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-1.5">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#c8960c] focus:ring-1 focus:ring-[#c8960c] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-1.5">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#c8960c] focus:ring-1 focus:ring-[#c8960c] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 99972 74666"
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#c8960c] focus:ring-1 focus:ring-[#c8960c] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-1.5">
            Product of Interest
          </label>
          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#c8960c] focus:ring-1 focus:ring-[#c8960c] transition-colors"
          >
            <option value="">Select a product...</option>
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-1.5">
            Estimated Quantity (MT/month)
          </label>
          <input
            type="text"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g. 50 MT/month"
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#c8960c] focus:ring-1 focus:ring-[#c8960c] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-1.5">
          Message / Specifications <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Please describe your requirements, specifications, delivery destination, and any other relevant details..."
          className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#c8960c] focus:ring-1 focus:ring-[#c8960c] transition-colors resize-none"
        />
      </div>

      <div className="flex items-start gap-2.5">
        <input
          type="checkbox"
          name="subscribe"
          id="subscribe"
          checked={form.subscribe}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 accent-[#c8960c] flex-shrink-0"
        />
        <label htmlFor="subscribe" className="text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
          Subscribe to receive market price updates, product availability, and industry insights from GLOBAL CZAR.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[#c8960c] hover:bg-[#f0b429] disabled:opacity-60 text-[#0a1628] font-black px-6 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c8960c]/30 text-sm"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-[#0a1628]/30 border-t-[#0a1628] rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Submit Request for Quote <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
        By submitting, you agree to our privacy policy. We never share your information with third parties.
      </p>
    </form>
  );
}
