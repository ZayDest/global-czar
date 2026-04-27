import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Globe, Package, Zap, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Expansion & Vision | GLOBAL CZAR",
  description:
    "GLOBAL CZAR's global expansion strategy, product diversification roadmap, and vision for 2030.",
};

const phases = [
  {
    phase: "Phase 1",
    period: "2010 – 2018",
    title: "Foundation & Japan Market",
    status: "Completed",
    color: "bg-[#c8960c]",
    milestones: [
      "Established India headquarters",
      "Built Japan automotive supply partnerships",
      "ADC12 and AK5M2 as core products",
      "Singapore APAC hub operational",
    ],
  },
  {
    phase: "Phase 2",
    period: "2019 – 2024",
    title: "European Entry & Portfolio Expansion",
    status: "Completed",
    color: "bg-[#4a6fa5]",
    milestones: [
      "Entered European automotive supply chain",
      "Added A356, LM25, LM27 to portfolio",
      "ISO-certified sourcing partnerships",
      "Lead, Zinc and Ferroalloy lines launched",
    ],
  },
  {
    phase: "Phase 3",
    period: "2025 – 2027",
    title: "Americas & Africa Expansion",
    status: "In Progress",
    color: "bg-[#1a3a5c]",
    milestones: [
      "Entering North American markets (USA, Canada)",
      "Expanding African sourcing (South Africa, Egypt)",
      "Launch of specialty alloys division",
      "Digital procurement platform development",
    ],
  },
  {
    phase: "Phase 4",
    period: "2028 – 2030",
    title: "Global Leadership",
    status: "Planned",
    color: "bg-[#0a1628]",
    milestones: [
      "Operations in 50+ countries",
      "Proprietary alloy blending capabilities",
      "Green & recycled aluminum product line",
      "Full digital supply chain integration",
    ],
  },
];

const diversification = [
  {
    icon: "🔋",
    title: "Battery-Grade Aluminum",
    desc: "Entering the EV battery components market with high-purity aluminum foils and strips for energy storage applications.",
    timeline: "2025–2026",
  },
  {
    icon: "♻️",
    title: "Green Recycled Aluminum",
    desc: "Secondary and recycled aluminum alloys meeting sustainability requirements for eco-conscious manufacturers.",
    timeline: "2026–2027",
  },
  {
    icon: "🚀",
    title: "Specialty & Aerospace Alloys",
    desc: "Expanding into 2xxx and 7xxx series aluminum alloys for aerospace, defense, and high-performance applications.",
    timeline: "2026–2028",
  },
  {
    icon: "💻",
    title: "Digital Procurement Platform",
    desc: "Proprietary B2B platform for real-time pricing, instant RFQ submission, and supply chain tracking.",
    timeline: "2025–2026",
  },
  {
    icon: "🌍",
    title: "Americas Market Entry",
    desc: "Strategic entry into US, Canadian, and Mexican markets serving the North American automotive supply chain.",
    timeline: "2025–2027",
  },
  {
    icon: "⚡",
    title: "Value-Added Processing",
    desc: "Partnerships for in-country alloy blending, ingot casting, and custom specification production.",
    timeline: "2027–2030",
  },
];

const targets2030 = [
  { n: "50+", l: "Countries Served" },
  { n: "$500M+", l: "Target Revenue" },
  { n: "15+", l: "Product Lines" },
  { n: "200+", l: "Team Members" },
];

export default function ExpansionPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)" }}
      >
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#c8960c]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#c8960c]/20 border border-[#c8960c]/40 text-[#f0b429] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            Expansion & Vision
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Built for the Future.
            <br />
            <span style={{ background: "linear-gradient(135deg, #c8960c, #f0b429)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Growing Globally.
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Our ambitious roadmap to become the world&apos;s most trusted aluminum alloys
            supplier by 2030 — expanding markets, diversifying products, and leading with innovation.
          </p>
        </div>
      </section>

      {/* 2030 Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#0a1628]">GLOBAL CZAR 2030 Targets</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targets2030.map((t) => (
              <div key={t.l} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white">
                <div className="text-3xl sm:text-4xl font-black text-[#f0b429]">{t.n}</div>
                <div className="text-slate-300 text-sm mt-2">{t.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Growth Roadmap</span>
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-4">
              Our Strategic Growth Plan
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              A phased approach to global expansion, built on strong foundations and sustainable growth.
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((phase) => (
              <div
                key={phase.phase}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className={`${phase.color} p-6 text-white flex flex-col justify-center`}>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
                      {phase.phase}
                    </div>
                    <div className="font-black text-xl">{phase.period}</div>
                    <div className="mt-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        phase.status === "Completed"
                          ? "bg-green-500/20 text-green-300"
                          : phase.status === "In Progress"
                          ? "bg-[#c8960c]/30 text-[#f0b429]"
                          : "bg-white/10 text-white/60"
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6">
                    <h3 className="font-black text-[#0a1628] text-xl mb-4">{phase.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.milestones.map((m) => (
                        <div key={m} className="flex gap-2 items-start text-sm text-slate-600">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                            phase.status === "Completed" ? "bg-green-500" :
                            phase.status === "In Progress" ? "bg-[#c8960c]" : "bg-slate-300"
                          }`} />
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Diversification */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Product Roadmap</span>
              <div className="w-8 h-0.5 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Product Diversification Strategy
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Expanding beyond traditional alloys into high-growth sectors and value-added services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diversification.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#c8960c]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="bg-[#c8960c]/20 text-[#f0b429] text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.timeline}
                  </div>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#0a1628] mb-4">New Market Targets</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Strategic geographic expansion to capture fast-growing manufacturing markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                region: "Americas",
                countries: ["USA 🇺🇸", "Canada 🇨🇦", "Mexico 🇲🇽", "Brazil 🇧🇷"],
                desc: "North American automotive and aerospace sectors are a major target for our aluminum alloy portfolio.",
                eta: "2025–2027",
                icon: "🌎",
              },
              {
                region: "Africa",
                countries: ["South Africa 🇿🇦", "Egypt 🇪🇬", "Kenya 🇰🇪", "Morocco 🇲🇦"],
                desc: "Growing manufacturing base in Africa presents significant opportunities for both sourcing and supply.",
                eta: "2026–2028",
                icon: "🌍",
              },
              {
                region: "South & Southeast Asia",
                countries: ["Vietnam 🇻🇳", "Indonesia 🇮🇩", "Thailand 🇹🇭", "Bangladesh 🇧🇩"],
                desc: "Manufacturing migration from China to Southeast Asia creates strong demand for quality input materials.",
                eta: "2025–2026",
                icon: "🌏",
              },
            ].map((market) => (
              <div key={market.region} className="rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow card-hover">
                <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] p-6 text-center">
                  <div className="text-5xl mb-3">{market.icon}</div>
                  <div className="text-white font-black text-xl">{market.region}</div>
                  <div className="bg-[#c8960c]/20 text-[#f0b429] text-xs font-bold px-3 py-1 rounded-full inline-block mt-2">
                    Target: {market.eta}
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{market.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {market.countries.map((c) => (
                      <span key={c} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c8960c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0a1628] mb-4">
            Grow Your Business With Us
          </h2>
          <p className="text-[#0a1628]/70 mb-8">
            Join our growing network of global partners and benefit from our expanding
            product range, markets, and logistics capabilities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded hover:bg-[#112240] transition-colors"
          >
            Partner With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
