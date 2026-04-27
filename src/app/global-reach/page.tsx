import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Truck, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Reach | GLOBAL CZAR",
  description:
    "GLOBAL CZAR sources from UAE, Nigeria, Oman, Qatar, and India. Supplying to Japan, Europe, Middle East, and Asia-Pacific with logistics hubs in UAE and Singapore.",
};

const sourcingCountries = [
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    role: "Primary Hub & Source",
    desc: "Our headquarters and primary logistics hub. Major smelter partnerships for aluminum alloys and industrial metals.",
    products: ["ADC12", "Aluminum Billets", "Ferroalloys"],
    color: "bg-[#c8960c]",
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    role: "Aluminum Source",
    desc: "Growing aluminum production hub. Sourcing primary aluminum and scrap for remelting into quality alloys.",
    products: ["Primary Aluminum", "Aluminum Scrap", "Ingots"],
    color: "bg-[#4a6fa5]",
  },
  {
    country: "Oman",
    flag: "🇴🇲",
    role: "Aluminum & Lead Source",
    desc: "SOHAR aluminum smelter is one of the region's largest. We leverage Oman's growing metals production capacity.",
    products: ["Aluminum Billets", "Lead Ingots", "ADC12"],
    color: "bg-[#1a3a5c]",
  },
  {
    country: "Qatar",
    flag: "🇶🇦",
    role: "Specialty Metals",
    desc: "Qatar-based partnerships for specialty metals and ferroalloys, leveraging the country's industrial expansion.",
    products: ["Ferroalloys", "Specialty Metals"],
    color: "bg-[#112240]",
  },
  {
    country: "India",
    flag: "🇮🇳",
    role: "Alloy Production",
    desc: "India's growing secondary aluminum industry provides competitive alloy grades for our global supply chain.",
    products: ["AK5M2", "LM25", "LM27", "AC4B"],
    color: "bg-[#0a1628]",
  },
];

const exportMarkets = [
  {
    region: "Japan",
    flag: "🇯🇵",
    share: "35%",
    desc: "Our largest export market. Japanese automotive OEMs and Tier-1 suppliers trust our JIS-compliant ADC12, AK5M2, AC4B, and AC2B alloys.",
    keyAlloys: ["ADC12", "AK5M2", "AC4B", "AC2B"],
  },
  {
    region: "Europe",
    flag: "🇪🇺",
    share: "25%",
    desc: "CE-certified alloys for European automotive and industrial manufacturers. Strong presence in Germany, Italy, and Eastern Europe.",
    keyAlloys: ["A356 / LM25", "LM27", "ADC12"],
  },
  {
    region: "Middle East",
    flag: "🌙",
    share: "20%",
    desc: "Serving UAE, Saudi Arabia, Qatar, Kuwait, and Oman industrial sectors. Local knowledge and fast delivery times.",
    keyAlloys: ["ADC12", "Aluminum Billets", "Ferroalloys"],
  },
  {
    region: "Asia-Pacific",
    flag: "🌏",
    share: "20%",
    desc: "Singapore hub enables fast delivery across Southeast Asia. Growing presence in South Korea, Taiwan, and Malaysia.",
    keyAlloys: ["ADC12", "LM25", "Lead & Zinc"],
  },
];

const logistics = [
  {
    hub: "India",
    flag: "🇦🇪",
    type: "Primary Hub",
    desc: "Jebel Ali Port access. Bonded warehouse with full FCL/LCL capabilities. Primary hub for Middle East, Europe, and Japan shipments.",
    capacity: "5,000+ MT monthly",
    services: ["FCL & LCL consolidation", "Bonded storage", "Re-export capabilities", "Same-day loading"],
  },
  {
    hub: "Singapore",
    flag: "🇸🇬",
    type: "Asia-Pacific Hub",
    desc: "Strategic APAC distribution center. Singapore Port enables fast delivery across Southeast Asia, Japan, and Australia.",
    capacity: "2,000+ MT monthly",
    services: ["Asia-Pacific distribution", "Transit storage", "Customs clearance", "Value-added services"],
  },
];

export default function GlobalReachPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)" }}
      >
        <div className="absolute inset-0 opacity-5">
          <div style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px", width: "100%", height: "100%" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#c8960c]/20 border border-[#c8960c]/40 text-[#f0b429] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            Global Reach
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Connecting Continents,
            <br />Delivering Excellence
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-12">
            5 sourcing countries. 20+ export markets. 2 logistics hubs.
            GLOBAL CZAR operates everywhere your business needs us.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { n: "5", l: "Sourcing Countries" },
              { n: "20+", l: "Export Markets" },
              { n: "2", l: "Logistics Hubs" },
              { n: "4", l: "Continents" },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center">
                <div className="text-3xl font-black text-[#f0b429]">{s.n}</div>
                <div className="text-slate-300 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Visual */}
      <section className="py-20 bg-[#060e1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white mb-2">Our Global Network</h2>
            <p className="text-slate-400 text-sm">Supply origins and export destinations</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {/* Simplified network visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sourcing */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-[#c8960c] rounded-full" />
                  <span className="text-[#c8960c] text-xs font-bold uppercase tracking-wider">Sourcing Origins</span>
                </div>
                <div className="space-y-2">
                  {sourcingCountries.map((c) => (
                    <div key={c.country} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span>{c.flag}</span>
                      <span>{c.country}</span>
                      <span className="text-slate-600 text-xs ml-auto">{c.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hubs */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="w-28 h-28 bg-[#c8960c]/20 border-2 border-[#c8960c] rounded-full flex items-center justify-center">
                    <Globe size={48} className="text-[#c8960c]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4a6fa5] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    SG
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#c8960c] rounded-full flex items-center justify-center text-[#0a1628] text-xs font-bold">
                    AE
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-white font-bold text-sm">Trading Hubs</div>
                  <div className="text-slate-400 text-xs">UAE + Singapore</div>
                </div>
              </div>

              {/* Markets */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-[#4a6fa5] rounded-full" />
                  <span className="text-[#4a6fa5] text-xs font-bold uppercase tracking-wider">Export Markets</span>
                </div>
                <div className="space-y-2">
                  {exportMarkets.map((m) => (
                    <div key={m.region} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span>{m.flag}</span>
                      <span>{m.region}</span>
                      <span className="text-[#f0b429] text-xs font-bold ml-auto">{m.share}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Countries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Supply Origins</span>
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-4">
              Sourcing Network
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Certified mill partnerships across 5 countries ensure supply security and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourcingCountries.map((c) => (
              <div
                key={c.country}
                className="rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow card-hover"
              >
                <div className={`${c.color} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{c.flag}</span>
                    <div>
                      <div className="font-black text-lg">{c.country}</div>
                      <div className="text-white/70 text-xs">{c.role}</div>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.products.map((p) => (
                      <span key={p} className="text-xs bg-[#0a1628]/5 text-[#0a1628] font-medium px-2.5 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Export Destinations</span>
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-4">
              Markets We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exportMarkets.map((m) => (
              <div key={m.region} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{m.flag}</span>
                    <div>
                      <div className="font-black text-[#0a1628] text-xl">{m.region}</div>
                    </div>
                  </div>
                  <div className="bg-[#c8960c]/15 text-[#c8960c] font-black text-lg px-4 py-1.5 rounded-full">
                    {m.share}
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{m.desc}</p>
                <div>
                  <div className="text-xs font-bold text-[#0a1628] uppercase tracking-wider mb-2">Key Products</div>
                  <div className="flex flex-wrap gap-2">
                    {m.keyAlloys.map((a) => (
                      <span key={a} className="text-xs bg-[#0a1628] text-white px-2.5 py-1 rounded-full">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Logistics Infrastructure</span>
              <div className="w-8 h-0.5 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Our Logistics Hubs
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Strategic warehouse and distribution facilities ensuring reliable,
              fast delivery to any destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logistics.map((hub) => (
              <div key={hub.hub} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{hub.flag}</span>
                      <div>
                        <div className="text-white font-black text-lg">{hub.hub}</div>
                        <div className="text-[#c8960c] text-xs font-bold uppercase tracking-wider">{hub.type}</div>
                      </div>
                    </div>
                    <div className="bg-[#c8960c]/20 text-[#f0b429] text-xs font-bold px-3 py-1.5 rounded-full">
                      {hub.capacity}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{hub.desc}</p>
                  <div className="space-y-2">
                    {hub.services.map((s) => (
                      <div key={s} className="flex gap-2 items-center text-slate-300 text-sm">
                        <Truck size={14} className="text-[#c8960c] flex-shrink-0" />
                        {s}
                      </div>
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
            Ready to Ship Worldwide?
          </h2>
          <p className="text-[#0a1628]/70 mb-8">
            Our logistics team will find the fastest and most cost-effective route to your facility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded hover:bg-[#112240] transition-colors"
          >
            Contact Logistics Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
