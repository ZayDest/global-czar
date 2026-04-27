import type { Metadata } from "next";
import { Mail, Phone, MapPin, ExternalLink, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | GLOBAL CZAR",
  description:
    "Contact GLOBAL CZAR for aluminum alloy RFQ, product inquiries, or partnership opportunities. India headquarters with global reach.",
};

const offices = [
  {
    city: "India",
    flag: "🇮🇳",
    type: "Headquarters",
    address: "India",
    phone: "+91 99972 74666",
    email: "Mohammad Rizwan Siddiqui",
    hours: "Mon–Sat: 9:00 AM – 6:00 PM IST",
  },
];

const contactReasons = [
  { label: "Request a Quote (RFQ)", icon: "📋" },
  { label: "Product Inquiry", icon: "🔬" },
  { label: "Partnership / Distribution", icon: "🤝" },
  { label: "Quality / Compliance", icon: "🏅" },
  { label: "Logistics & Shipping", icon: "🚢" },
  { label: "Other", icon: "💬" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#c8960c]/20 border border-[#c8960c]/40 text-[#f0b429] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Whether you need a quote, have a product question, or want to explore
            partnership opportunities — our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-12 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-6">How can we help you?</p>
          <div className="flex flex-wrap justify-center gap-3">
            {contactReasons.map((r) => (
              <div
                key={r.label}
                className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:border-[#c8960c]/40 hover:bg-[#c8960c]/5 px-4 py-2.5 rounded-full text-sm text-slate-600 dark:text-slate-300 font-medium cursor-pointer transition-all"
              >
                <span>{r.icon}</span>
                {r.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/60" id="rfq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - takes 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-[#0a1628] dark:text-white mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Complete the form below and we&apos;ll get back to you within 24 business hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info - takes 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick contact */}
              <div className="bg-[#0a1628] rounded-2xl p-6 text-white">
                <h3 className="font-black text-lg mb-5">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919997274666"
                    className="flex gap-3 items-center group"
                  >
                    <div className="w-10 h-10 bg-[#c8960c]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[#c8960c]" />
                    </div>
                    <div>
                      <div className="text-slate-400 dark:text-slate-500 text-xs">Owner</div>
                      <div className="text-white text-sm font-medium group-hover:text-[#c8960c] transition-colors">
                        Mohammad Rizwan Siddiqui
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+919997274666"
                    className="flex gap-3 items-center group"
                  >
                    <div className="w-10 h-10 bg-[#c8960c]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[#c8960c]" />
                    </div>
                    <div>
                      <div className="text-slate-400 dark:text-slate-500 text-xs">Phone / WhatsApp</div>
                      <div className="text-white text-sm font-medium group-hover:text-[#c8960c] transition-colors">
                        +91 99972 74666
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 items-center group"
                  >
                    <div className="w-10 h-10 bg-[#c8960c]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ExternalLink size={16} className="text-[#c8960c]" />
                    </div>
                    <div>
                      <div className="text-slate-400 dark:text-slate-500 text-xs">LinkedIn</div>
                      <div className="text-white text-sm font-medium group-hover:text-[#c8960c] transition-colors">
                        GLOBAL CZAR
                      </div>
                    </div>
                  </a>
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-[#c8960c]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-[#c8960c]" />
                    </div>
                    <div>
                      <div className="text-slate-400 dark:text-slate-500 text-xs">Response Time</div>
                      <div className="text-white text-sm font-medium">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 p-5"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <div className="font-black text-[#0a1628] dark:text-white text-sm">{office.city}</div>
                      <div className="text-[#c8960c] text-xs font-bold uppercase tracking-wider">
                        {office.type}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-start text-xs text-slate-500 dark:text-slate-400">
                      <MapPin size={12} className="text-slate-400 dark:text-slate-500 mt-0.5 flex-shrink-0" />
                      {office.address}
                    </div>
                    <div className="flex gap-2 items-center text-xs text-slate-500 dark:text-slate-400">
                      <Phone size={12} className="text-slate-400 dark:text-slate-500 flex-shrink-0" />
                      {office.phone}
                    </div>
                    <div className="flex gap-2 items-center text-xs text-slate-500 dark:text-slate-400">
                      <Mail size={12} className="text-slate-400 dark:text-slate-500 flex-shrink-0" />
                      {office.email}
                    </div>
                    <div className="flex gap-2 items-center text-xs text-slate-500 dark:text-slate-400">
                      <Clock size={12} className="text-slate-400 dark:text-slate-500 flex-shrink-0" />
                      {office.hours}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] rounded-2xl h-40 flex items-center justify-center text-center">
                <div>
                  <MapPin size={32} className="text-[#c8960c] mx-auto mb-2" />
                  <p className="text-slate-300 text-xs">India</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c8960c] text-xs font-semibold mt-1 block hover:underline"
                  >
                    View on Map →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#0a1628] dark:text-white text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the minimum order quantity (MOQ)?",
                a: "Our standard MOQ starts at 5 MT for most aluminum alloy grades. We can discuss smaller quantities for new customers on a case-by-case basis.",
              },
              {
                q: "How quickly can you supply?",
                a: "For stocked grades (ADC12, AK5M2), we can typically ship within 7–14 days when material is available. Other grades depend on availability at source.",
              },
              {
                q: "Do you provide Mill Test Certificates?",
                a: "Yes. Every shipment includes a full Mill Test Certificate (MTC) with chemical composition analysis and mechanical properties from the producing mill.",
              },
              {
                q: "What payment terms do you offer?",
                a: "We offer T/T (bank transfer), LC at sight, and for established customers, deferred payment options. Terms are discussed during onboarding.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#0a1628] dark:text-white text-sm hover:bg-slate-50 dark:hover:bg-slate-800 dark:bg-slate-900/60 transition-colors">
                  {faq.q}
                  <span className="text-[#c8960c] text-xl font-light transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
