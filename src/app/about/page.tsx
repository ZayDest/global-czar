import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  Users,
  HeartHandshake,
  Eye,
  Lightbulb,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | GLOBAL CZAR",
  description:
    "14+ years of excellence in global aluminum alloys and industrial metals trading. Learn about our mission, values, and global operations.",
};

const milestones = [
  { year: "2010", event: "GLOBAL CZAR founded in India" },
  { year: "2013", event: "First major export contract to Japanese automotive sector" },
  { year: "2016", event: "Expanded sourcing network to Nigeria and Oman" },
  { year: "2018", event: "Opened Singapore logistics hub for Asia-Pacific markets" },
  { year: "2020", event: "Achieved ISO 9001:2015 certified sourcing partnerships" },
  { year: "2022", event: "Launched market advisory services for global clients" },
  { year: "2024", event: "Entered European markets with CE-certified alloy portfolio" },
  { year: "2026", event: "Expanding into ferroalloys and specialty metals" },
];

const values = [
  {
    icon: Shield,
    title: "Reliability",
    desc: "We deliver on our commitments — every shipment, every time. Our clients depend on us for on-time delivery and consistent quality.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Honest pricing, clear communication, and no hidden terms. We believe sustainable partnerships are built on full transparency.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "Every decision we make is guided by our clients' success. Your procurement challenges become our problem to solve.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Continuously improving our supply chain, technology, and service offerings to stay ahead of market needs.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    desc: "Operating with local expertise and global standards, bridging cultures and markets seamlessly.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    desc: "Every quote, every contract, every shipment reflects our uncompromising ethical standards.",
  },
];

const team = [
  { name: "General Manager", role: "Operations & Strategy", initial: "GM" },
  { name: "Head of Sourcing", role: "UAE & Middle East", initial: "HS" },
  { name: "Export Manager", role: "Japan & Europe Markets", initial: "EM" },
  { name: "Quality Director", role: "Compliance & Standards", initial: "QD" },
];

export default function AboutPage() {
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
            About GLOBAL CZAR
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Our Story, Our Strength
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From an India-based metals trading firm to a globally recognized
            supplier — 14+ years of excellence, integrity, and growth.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-[#c8960c] rounded" />
                <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Our Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-6">
                Connecting Global Smelters with Industry Leaders
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                GLOBAL CZAR was founded in 2010 with a singular vision: to
                become the most trusted bridge between premium metals producers
                and world-class manufacturers. Starting with aluminum alloys for
                the Japanese automotive sector, we quickly expanded our portfolio
                and geographic reach.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Today, we source from certified smelters across the UAE, Nigeria,
                Oman, Qatar, and India — bringing consistent quality and
                competitive pricing to clients across Japan, Europe, and the
                Middle East. Our dual logistics hubs in UAE and Singapore ensure
                fast, reliable delivery anywhere in the world.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our team of experienced metals professionals manages every
                aspect of the supply chain — from quality inspection and export
                documentation to market advisory and after-sales support.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "14+", l: "Years Experience" },
                  { n: "20+", l: "Export Countries" },
                  { n: "500+", l: "Partner Companies" },
                  { n: "6+", l: "Alloy Grades" },
                ].map((s) => (
                  <div key={s.l} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
                    <div className="text-2xl font-black text-[#c8960c]">{s.n}</div>
                    <div className="text-slate-600 text-sm mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-black text-[#0a1628] mb-6">
                Our Milestones
              </h3>
              <div className="space-y-4">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[#0a1628] rounded-full flex items-center justify-center text-[#c8960c] font-bold text-xs flex-shrink-0">
                        {m.year.slice(2)}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-0.5 h-8 bg-slate-200 mt-1" />
                      )}
                    </div>
                    <div className="pt-2">
                      <span className="text-[#c8960c] font-bold text-sm">{m.year}</span>
                      <p className="text-slate-600 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                text: "To be the most reliable global supplier of aluminum alloys and industrial metals, delivering consistent quality, transparent pricing, and world-class logistics to manufacturers worldwide.",
              },
              {
                icon: "🔭",
                title: "Our Vision",
                text: "To expand our global footprint across every major manufacturing hub, becoming the preferred metals trading partner for industries in 50+ countries by 2030.",
              },
              {
                icon: "⚖️",
                title: "Our Commitment",
                text: "Every transaction is backed by ISO-certified sourcing, full documentation, and our personal guarantee of quality — because your trust is the foundation of our business.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
              <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest">Core Values</span>
              <div className="w-8 h-1 bg-[#c8960c] rounded" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-4">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:border-[#c8960c]/30 hover:shadow-lg transition-all card-hover">
                  <div className="w-12 h-12 bg-[#c8960c]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#c8960c]" />
                  </div>
                  <h3 className="font-black text-[#0a1628] text-base mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#0a1628] mb-4">Our Leadership Team</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Experienced professionals with deep expertise in metals trading, logistics, and global supply chain management.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform shadow-lg">
                  <span className="text-[#c8960c] font-black text-xl">{member.initial}</span>
                </div>
                <div className="font-bold text-[#0a1628] text-sm">{member.name}</div>
                <div className="text-slate-500 text-xs mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c8960c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0a1628] mb-4">
            Partner With a Team You Can Trust
          </h2>
          <p className="text-[#0a1628]/70 mb-8">
            Let our experts handle your metals procurement — from sourcing to delivery.
          </p>
          <Link
            href="/contact#rfq"
            className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded hover:bg-[#112240] transition-colors"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
