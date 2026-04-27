import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Award, FileCheck, Search, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Compliance | GLOBAL CZAR",
  description:
    "ISO-certified sourcing, CE / REACH / RoHS compliance, mill test certificates, and third-party inspection for every shipment.",
};

const standards = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    desc: "Our sourcing partners operate under ISO 9001:2015 certified quality management systems, ensuring consistent process control and product quality.",
    icon: "🏅",
  },
  {
    code: "CE Marking",
    title: "European Conformity",
    desc: "Products supplied to European markets comply with CE marking requirements, meeting EU safety, health, and environmental protection standards.",
    icon: "🇪🇺",
  },
  {
    code: "RoHS Compliant",
    title: "Restriction of Hazardous Substances",
    desc: "All electronic-grade alloys comply with RoHS Directive 2011/65/EU, restricting use of lead, mercury, cadmium, and other hazardous substances.",
    icon: "♻️",
  },
  {
    code: "REACH",
    title: "Chemical Safety Regulation",
    desc: "We ensure full compliance with EU REACH regulation (EC) 1907/2006 for the registration and safety of chemical substances in our metals.",
    icon: "⚗️",
  },
  {
    code: "JIS H 5302",
    title: "Japanese Industrial Standard",
    desc: "ADC12, AK5M2, AC4B, and AC2B alloys are sourced to Japanese Industrial Standards, ensuring compatibility with Japanese OEM requirements.",
    icon: "🇯🇵",
  },
  {
    code: "ASTM / BS EN",
    title: "International Standards",
    desc: "A356, LM25, and LM27 alloys conform to ASTM B179 and British Standard BS 1490 specifications for casting alloys.",
    icon: "📋",
  },
];

const qcProcess = [
  {
    step: "01",
    title: "Supplier Audit & Approval",
    desc: "Rigorous qualification of all smelters and mills. Only ISO-certified facilities with proven track records enter our supply chain.",
    icon: Search,
  },
  {
    step: "02",
    title: "Pre-Shipment Sampling",
    desc: "Chemical composition sampling from every heat/batch before shipment. Spectrometric analysis confirming alloy grade compliance.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Third-Party Inspection",
    desc: "Independent inspection by SGS, Bureau Veritas, or Intertek at origin port. Weight verification, condition reports, and quantity confirmation.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Mill Test Certificate (MTC)",
    desc: "Full material traceability with MTC for every consignment. Chemical composition, mechanical properties, and heat number documentation.",
    icon: FileCheck,
  },
  {
    step: "05",
    title: "Packing & Loading Supervision",
    desc: "Loading supervision to ensure correct packing, proper securing, and accurate container sealing for the intended delivery.",
    icon: Award,
  },
  {
    step: "06",
    title: "Post-Delivery Support",
    desc: "Quality claims management, NCR handling, and corrective action follow-up. We stand behind every shipment we supply.",
    icon: CheckCircle,
  },
];

const docs = [
  { name: "Mill Test Certificate (MTC)", desc: "Chemical composition and mechanical property certification from the producing mill" },
  { name: "Certificate of Origin (CO)", desc: "Officially notarized document confirming product country of origin for customs" },
  { name: "Packing List", desc: "Detailed shipment contents with weights, dimensions, and package identification" },
  { name: "Commercial Invoice", desc: "Full pricing and product details for customs and payment processing" },
  { name: "Bill of Lading (BOL)", desc: "Carrier-issued shipping document confirming receipt and terms of delivery" },
  { name: "Inspection Report", desc: "Third-party inspector's findings on quality, quantity, and condition" },
  { name: "MSDS / SDS", desc: "Material Safety Data Sheet for safe handling, storage, and emergency response" },
  { name: "SGS / BV Certificate", desc: "Pre-shipment inspection certificate from accredited third-party inspectors" },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#c8960c]/20 border border-[#c8960c]/40 text-[#f0b429] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            Quality & Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Quality You Can
            <br />
            <span style={{ background: "linear-gradient(135deg, #c8960c, #f0b429)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Measure & Trust
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Every shipment backed by international certifications, independent
            inspection, and full material traceability documentation.
          </p>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🔬", title: "Every Heat Tested", desc: "Chemical analysis on each batch" },
              { icon: "🏅", title: "ISO-Certified Supply", desc: "Only certified mill partners" },
              { icon: "🔍", title: "3rd Party Inspection", desc: "SGS / BV / Intertek" },
              { icon: "📄", title: "Full Documentation", desc: "MTC, CO, BOL, and more" },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-[#0a1628] dark:text-white text-sm">{item.title}</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Standards</span>
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-4">
              Certifications & Compliance Standards
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              We source and supply in compliance with leading international quality and safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((s) => (
              <div
                key={s.code}
                className="bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:border-[#c8960c]/30 hover:shadow-lg transition-all card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{s.icon}</div>
                  <div>
                    <div className="font-black text-[#c8960c] text-base">{s.code}</div>
                    <div className="text-[#0a1628] dark:text-white font-semibold text-sm">{s.title}</div>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Our Process</span>
              <div className="w-8 h-0.5 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Our Quality Control Process
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A rigorous 6-step quality control process ensures every shipment meets your specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qcProcess.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#c8960c] rounded-lg flex items-center justify-center text-[#0a1628] font-black text-sm">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-[#c8960c]" />
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Documentation</span>
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl font-black text-[#0a1628] mb-4">
              Complete Shipment Documentation
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              We provide all documents required for smooth import clearance and internal quality records.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {docs.map((doc) => (
              <div
                key={doc.name}
                className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-xl p-4 hover:border-[#c8960c]/30 hover:bg-[#c8960c]/5 transition-all"
              >
                <div className="flex gap-2 items-start mb-2">
                  <FileCheck size={16} className="text-[#c8960c] flex-shrink-0 mt-0.5" />
                  <span className="font-bold text-[#0a1628] dark:text-white text-sm">{doc.name}</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed pl-6">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c8960c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0a1628] mb-4">
            Quality Specifications Available on Request
          </h2>
          <p className="text-[#0a1628]/70 mb-8">
            Request our full quality documentation pack, sample certificates, or arrange a
            technical consultation with our quality team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded hover:bg-[#112240] transition-colors"
          >
            Request Quality Docs <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
