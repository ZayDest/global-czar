import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Truck, FileCheck, Compass, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Services | GLOBAL CZAR",
  description:
    "Premium aluminum alloys: ADC12, AK5M2, AC4B, AC2B, LM25, LM27, A356. Industrial metals: lead ingots, zinc ingots, and ferroalloys. Full-service trading and logistics.",
};

const alloys = [
  {
    id: "adc12",
    name: "ADC12",
    fullName: "Aluminum Die Casting Alloy ADC12",
    standard: "JIS H 5302",
    desc: "The most widely used aluminum die casting alloy globally. ADC12 offers excellent fluidity, castability, and good mechanical properties. Ideal for complex, thin-walled components in automotive and electronics.",
    composition: "Al-Si10-Cu2.5 (Si: 9.6–12.0%, Cu: 1.5–3.5%)",
    applications: [
      "Automotive engine components",
      "Transmission housings",
      "Electronic enclosures",
      "Consumer electronics",
      "Power tool housings",
    ],
    properties: [
      { prop: "Tensile Strength", val: "≥ 230 MPa" },
      { prop: "Yield Strength", val: "≥ 180 MPa" },
      { prop: "Hardness", val: "≥ 85 HB" },
      { prop: "Density", val: "2.74 g/cm³" },
    ],
    color: "from-[#0a1628] to-[#1a3a5c]",
    popular: true,
  },
  {
    id: "ak5m2",
    name: "AK5M2",
    fullName: "Aluminum Casting Alloy AK5M2",
    standard: "GOST 1583",
    desc: "Russian-specification alloy with excellent castability and good mechanical strength. Widely used in Japanese and European automotive components for engine and structural parts.",
    composition: "Al-Si5-Cu2 (Si: 4–6%, Cu: 1.5–3%)",
    applications: [
      "Engine blocks and heads",
      "Pump housings",
      "Automotive structural parts",
      "Industrial machinery",
      "Aerospace components",
    ],
    properties: [
      { prop: "Tensile Strength", val: "≥ 200 MPa" },
      { prop: "Elongation", val: "≥ 2%" },
      { prop: "Hardness", val: "70–90 HB" },
      { prop: "Melting Point", val: "575–635°C" },
    ],
    color: "from-[#112240] to-[#1e4a78]",
    popular: false,
  },
  {
    id: "a356",
    name: "A356 / LM25",
    fullName: "Aluminum Casting Alloy A356 / LM25",
    standard: "ASTM B179 / BS 1490",
    desc: "Premium casting alloy known for excellent corrosion resistance, superior elongation, and high strength-to-weight ratio. The preferred alloy for structural and safety-critical components.",
    composition: "Al-Si7-Mg0.3 (Si: 6.5–7.5%, Mg: 0.25–0.45%)",
    applications: [
      "Automotive wheels and suspension",
      "Aerospace structural parts",
      "Marine components",
      "Bicycle frames",
      "Medical equipment",
    ],
    properties: [
      { prop: "Tensile Strength", val: "≥ 280 MPa (T6)" },
      { prop: "Yield Strength", val: "≥ 210 MPa (T6)" },
      { prop: "Elongation", val: "≥ 8% (T6)" },
      { prop: "Hardness", val: "≥ 75 HB" },
    ],
    color: "from-[#1a3a5c] to-[#2a5a8c]",
    popular: true,
  },
  {
    id: "ac4b",
    name: "AC4B / AC2B",
    fullName: "Aluminum Die Casting Alloy AC4B / AC2B",
    standard: "JIS H 5302",
    desc: "Japanese-specification alloys designed for high-pressure die casting. AC4B offers excellent castability while AC2B provides superior mechanical properties for demanding applications.",
    composition: "AC4B: Al-Si8-Cu3 / AC2B: Al-Si8-Cu3-Mg",
    applications: [
      "Engine components (OEM)",
      "Valve bodies",
      "Hydraulic components",
      "High-pressure castings",
      "Precision die castings",
    ],
    properties: [
      { prop: "Tensile Strength", val: "≥ 215 MPa" },
      { prop: "Elongation", val: "≥ 1%" },
      { prop: "Hardness", val: "≥ 80 HB" },
      { prop: "Porosity", val: "Low (die-cast grade)" },
    ],
    color: "from-[#0f2a4a] to-[#1a4a70]",
    popular: false,
  },
  {
    id: "lm27",
    name: "LM27",
    fullName: "Aluminum Casting Alloy LM27",
    standard: "BS 1490",
    desc: "British-specification alloy with excellent machinability and good corrosion resistance. Versatile alloy used across engineering, marine, and general manufacturing applications.",
    composition: "Al-Si7-Cu2-Mg0.3",
    applications: [
      "General engineering castings",
      "Marine hardware",
      "Electrical components",
      "Automotive accessories",
      "Decorative components",
    ],
    properties: [
      { prop: "Tensile Strength", val: "≥ 190 MPa" },
      { prop: "Elongation", val: "≥ 3%" },
      { prop: "Hardness", val: "65–80 HB" },
      { prop: "Machinability", val: "Excellent" },
    ],
    color: "from-[#162035] to-[#243d5c]",
    popular: false,
  },
];

const otherMetals = [
  {
    id: "billets",
    name: "Aluminum Billets & Ingots",
    desc: "High-purity aluminum billets and ingots for extrusion, rolling, and foundry use. Available in 1xxx–7xxx series.",
    icon: "🔩",
    specs: ["1050, 1060, 1070 purity grades", "6061, 6063 extrusion billets", "99.7% purity ingots", "Custom sizes available"],
  },
  {
    id: "lead-ingots",
    name: "Lead Ingots",
    desc: "High-purity lead ingots (99.97%+) for battery manufacturing, radiation shielding, and industrial applications.",
    icon: "⚫",
    specs: ["Purity: 99.97% – 99.99%", "Standard pig: 25–50 kg", "LME-grade quality", "REACH compliant"],
  },
  {
    id: "zinc-ingots",
    name: "Zinc Ingots",
    desc: "SHG (Special High Grade) zinc for galvanizing, die casting, and chemical applications.",
    icon: "🔲",
    specs: ["SHG: 99.995% purity", "Standard ingot: 25 kg", "Galvanizing grade", "Die casting grade"],
  },
  {
    id: "ferroalloys",
    name: "Ferroalloys",
    desc: "Ferro-silicon, ferro-manganese, ferro-chrome, and other specialty alloys for steel production.",
    icon: "⚙️",
    specs: ["Ferro-Silicon (FeSi 75%)", "Ferro-Manganese (FeMn)", "Ferro-Chrome (FeCr)", "Custom compositions"],
  },
];

const services = [
  {
    icon: Compass,
    title: "Sourcing & Procurement",
    desc: "Direct procurement from ISO-certified smelters in UAE, Nigeria, Oman, Qatar, and India. Competitive spot and contract pricing.",
    features: ["Certified mill sourcing", "Spot & contract supply", "Competitive pricing", "Multiple origin options"],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Full quality control including chemical composition analysis, mechanical testing, and third-party inspection.",
    features: ["Mill Test Certificates (MTC)", "Third-party inspection", "Chemical analysis reports", "SGS / Bureau Veritas"],
  },
  {
    icon: Truck,
    title: "Logistics & Shipping",
    desc: "End-to-end freight management from loading at origin to final delivery at your facility.",
    features: ["Full container loads (FCL)", "LCL consolidation", "Air freight option", "Insurance coverage"],
  },
  {
    icon: FileCheck,
    title: "Export Documentation",
    desc: "Complete compliance documentation for smooth customs clearance in all major import markets.",
    features: ["Certificate of Origin", "Packing lists & BOL", "Customs invoices", "Phytosanitary certs"],
  },
  {
    icon: BarChart3,
    title: "Market Advisory",
    desc: "Stay ahead with real-time market intelligence, LME price tracking, and procurement strategy advisory.",
    features: ["LME price monitoring", "Market trend reports", "Procurement optimization", "Supply risk assessment"],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#c8960c]/20 border border-[#c8960c]/40 text-[#f0b429] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            Products & Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Premium Metals Portfolio
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Aluminum alloys, lead ingots, zinc ingots, industrial metals, and full-service trading solutions
            — sourced from certified mills, delivered globally.
          </p>
        </div>
      </section>

      {/* Alloys */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Aluminum Alloys</span>
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-4">
              Aluminum Alloy Grades
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              All alloys sourced from certified smelters with full Mill Test Certificates.
              Custom specifications available on request.
            </p>
          </div>

          <div className="space-y-8">
            {alloys.map((alloy) => (
              <div
                key={alloy.id}
                id={alloy.id}
                className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left accent */}
                  <div className={`lg:col-span-1 bg-gradient-to-br ${alloy.color} p-8 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                    {alloy.popular && (
                      <div className="absolute top-3 right-3 bg-[#c8960c] text-[#0a1628] text-[10px] font-black px-2 py-0.5 rounded uppercase">
                        Popular
                      </div>
                    )}
                    <div className="text-white/20 text-5xl font-black absolute">{alloy.name}</div>
                    <div className="relative">
                      <div className="text-[#f0b429] text-xs font-bold uppercase tracking-widest mb-2">
                        {alloy.standard}
                      </div>
                      <div className="text-white font-black text-4xl">{alloy.name}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-4 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h3 className="font-black text-[#0a1628] dark:text-white text-xl mb-2">{alloy.fullName}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mb-2 font-mono bg-slate-50 dark:bg-slate-900/60 inline-block px-2 py-1 rounded">
                          {alloy.composition}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-3 mb-4">{alloy.desc}</p>
                        <div>
                          <div className="text-xs font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-2">Applications</div>
                          <div className="flex flex-wrap gap-2">
                            {alloy.applications.map((app) => (
                              <span key={app} className="text-xs bg-[#0a1628]/5 text-[#0a1628] dark:text-white px-3 py-1 rounded-full">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-[#0a1628] dark:text-white uppercase tracking-wider mb-3">
                          Typical Properties
                        </div>
                        <div className="space-y-2">
                          {alloy.properties.map((p) => (
                            <div key={p.prop} className="flex justify-between text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                              <span className="text-slate-500 dark:text-slate-400">{p.prop}</span>
                              <span className="font-semibold text-[#0a1628] dark:text-white">{p.val}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href="/contact#rfq"
                          className="mt-5 flex items-center justify-center gap-2 bg-[#c8960c] hover:bg-[#f0b429] text-[#0a1628] font-bold text-sm px-4 py-2.5 rounded transition-all w-full"
                        >
                          Request Quote <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Metals */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Industrial Metals</span>
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl font-black text-[#0a1628] mb-4">
              Billets, Lead Ingots, Zinc Ingots & Industrial Metals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherMetals.map((m) => (
              <div
                key={m.id}
                id={m.id}
                className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 hover:border-[#0a1628]/20 hover:shadow-lg transition-all card-hover"
              >
                <div className="flex gap-4 items-start mb-4">
                  <div className="text-4xl">{m.icon}</div>
                  <div>
                    <h3 className="font-black text-[#0a1628] dark:text-white text-lg">{m.name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1">{m.desc}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  {m.specs.map((spec) => (
                    <div key={spec} className="flex gap-2 items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle size={14} className="text-[#c8960c] flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact#rfq"
                  className="inline-flex items-center gap-2 text-[#0a1628] dark:text-white font-semibold text-sm border-b border-[#c8960c] hover:gap-3 transition-all"
                >
                  Request Quote <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Our Services</span>
              <div className="w-8 h-0.5 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              End-to-End Trading Services
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              More than just supply — we manage your entire metals procurement lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c8960c]/40 rounded-2xl p-6 transition-all ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="w-12 h-12 bg-[#c8960c]/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#c8960c]" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="space-y-2">
                    {s.features.map((f) => (
                      <div key={f} className="flex gap-2 items-center text-xs text-slate-400 dark:text-slate-500">
                        <div className="w-1 h-1 bg-[#c8960c] rounded-full flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c8960c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0a1628] mb-4">
            Need Specifications or Pricing?
          </h2>
          <p className="text-[#0a1628]/70 mb-8">
            Submit an RFQ and receive a detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#rfq"
              className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded hover:bg-[#112240] transition-colors"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="/quality"
              className="inline-flex items-center gap-2 border-2 border-[#0a1628] text-[#0a1628] font-bold px-8 py-4 rounded hover:bg-[#0a1628] hover:text-white transition-all"
            >
              View Quality Standards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
