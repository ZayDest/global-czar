import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries Served | GLOBAL CZAR",
  description:
    "GLOBAL CZAR serves automotive, electronics, industrial machinery, and construction sectors with premium aluminum alloys and metals.",
};

const industries = [
  {
    id: "automotive",
    icon: "🚗",
    title: "Automotive",
    headline: "Powering the World's Vehicles",
    desc: "The automotive industry demands aluminum alloys that combine lightweight properties with exceptional strength and dimensional accuracy. Our ADC12, AK5M2, and A356 alloys are trusted by leading OEMs and Tier-1 suppliers across Japan and Europe.",
    alloys: ["ADC12 — Engine blocks, transmission parts", "AK5M2 — Structural castings", "A356 — Wheels, suspension arms", "AC4B / AC2B — High-pressure die castings"],
    stats: [
      { n: "35%", l: "Revenue from Automotive" },
      { n: "50+", l: "Automotive Partners" },
    ],
    gradient: "from-[#0a1628] to-[#1a3a5c]",
    accent: "#c8960c",
  },
  {
    id: "electronics",
    icon: "⚡",
    title: "Electronics & Electrical",
    headline: "Precision Alloys for Modern Technology",
    desc: "Electronics manufacturers require alloys with excellent thermal conductivity, tight tolerances, and surface finish quality. Our ADC12 and LM25 grades are ideal for heat sinks, enclosures, connectors, and precision electronic components.",
    alloys: ["ADC12 — Enclosures, housings", "LM25 — Heat sinks, connectors", "LM27 — Electrical components", "1xxx Series — High-conductivity applications"],
    stats: [
      { n: "25%", l: "Electronics Sector Share" },
      { n: "30+", l: "Electronics Clients" },
    ],
    gradient: "from-[#112240] to-[#1e4a78]",
    accent: "#4a6fa5",
  },
  {
    id: "machinery",
    icon: "⚙️",
    title: "Industrial Machinery",
    headline: "The Backbone of Manufacturing",
    desc: "Heavy industrial machinery requires metals with high wear resistance, machinability, and structural integrity. Our ferroalloys, LM27, and industrial aluminum grades deliver the performance needed for demanding manufacturing environments.",
    alloys: ["LM27 — Machine parts, housings", "Ferro-Silicon — Steel alloying", "Ferro-Manganese — Structural steel", "AC4B — Hydraulic components"],
    stats: [
      { n: "25%", l: "Industrial Sector Share" },
      { n: "40+", l: "Machinery Clients" },
    ],
    gradient: "from-[#1a3a5c] to-[#2a5a8c]",
    accent: "#c8960c",
  },
  {
    id: "construction",
    icon: "🏗️",
    title: "Construction & Infrastructure",
    headline: "Building Tomorrow's Infrastructure",
    desc: "Construction applications demand corrosion-resistant, lightweight, and cost-effective metals. Our aluminum billets, 6xxx series alloys, and lead products serve the growing construction and infrastructure sectors across the Middle East and Asia.",
    alloys: ["6061 Billets — Structural profiles", "6063 Billets — Window frames, extrusions", "Lead ingots — Roofing, radiation shielding", "Zinc ingots — Galvanizing, coating"],
    stats: [
      { n: "15%", l: "Construction Sector Share" },
      { n: "35+", l: "Construction Partners" },
    ],
    gradient: "from-[#0f2a4a] to-[#1a4a70]",
    accent: "#4a6fa5",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#c8960c]/20 border border-[#c8960c]/40 text-[#f0b429] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            Industries Served
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Powering Global Industries
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From automotive production lines to electronics manufacturing — GLOBAL CZAR
            Global supplies the metals that keep the world moving.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="group block text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:bg-[#0a1628] hover:border-[#0a1628] transition-all duration-300 card-hover"
              >
                <div className="text-4xl mb-3">{ind.icon}</div>
                <div className="font-bold text-[#0a1628] dark:text-white group-hover:text-white text-sm transition-colors">
                  {ind.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Details */}
      {industries.map((ind, i) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`py-24 ${i % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-slate-50 dark:bg-slate-900/60"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Visual */}
              <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div
                  className={`rounded-2xl bg-gradient-to-br ${ind.gradient} p-10 text-center relative overflow-hidden`}
                >
                  <div className="text-8xl mb-6 relative z-10">{ind.icon}</div>
                  <h3 className="text-white font-black text-2xl mb-2 relative z-10">{ind.title}</h3>
                  <p className="text-slate-300 text-sm relative z-10 mb-6">{ind.headline}</p>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {ind.stats.map((s) => (
                      <div key={s.l} className="bg-white/10 rounded-xl p-4">
                        <div className="text-[#f0b429] font-black text-2xl">{s.n}</div>
                        <div className="text-slate-300 text-xs mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
                </div>
              </div>

              {/* Text */}
              <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-1 bg-[#c8960c] rounded" />
                  <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">
                    {ind.title} Sector
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] dark:text-white mb-5">
                  {ind.headline}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">{ind.desc}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-3">
                    Recommended Alloys
                  </h4>
                  <div className="space-y-2">
                    {ind.alloys.map((alloy) => (
                      <div key={alloy} className="flex gap-3 items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle size={16} className="text-[#c8960c] flex-shrink-0" />
                        {alloy}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="/contact#rfq"
                    className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#1a3a5c] text-white font-semibold px-5 py-3 rounded text-sm transition-all"
                  >
                    Request Quote <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-[#0a1628] dark:text-white font-semibold text-sm border-b border-[#c8960c] hover:gap-3 transition-all pb-0.5"
                  >
                    View Alloys <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-[#c8960c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0a1628] mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-[#0a1628]/70 mb-8">
            We serve many more sectors including marine, aerospace, energy, and specialty
            manufacturing. Contact us to discuss your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded hover:bg-[#112240] transition-colors"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
