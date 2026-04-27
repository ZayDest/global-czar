import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Globe2,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Ship,
  Users,
} from "lucide-react";

const stats = [
  { icon: BriefcaseBusiness, value: "13-14", label: "Years of Experience" },
  { icon: Globe2, value: "20+", label: "Supplying Countries" },
  { icon: Ship, value: "50+", label: "Satisfied Clients" },
  { icon: Handshake, value: "100+", label: "Successful Shipments" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const products = [
  {
    name: "ADC12",
    kicker: "ADC12",
    image: "/reference-assets/product-adc12.jpeg",
    desc: "High-quality aluminium die-casting alloy with excellent fluidity and castability.",
  },
  {
    name: "AK5M2",
    kicker: "AK5M2",
    image: "/reference-assets/product-ak5m2.jpeg",
    desc: "Premium aluminium alloy known for high strength, durability, and mechanical properties.",
  },
  {
    name: "Other Aluminium Alloys",
    kicker: "A356, 6061, 7075",
    image: "/reference-assets/product-rounds.jpeg",
    desc: "A356, 6061, 6063, 7075, LM24, and custom grades as per customer requirements.",
  },
  {
    name: "Non-Ferrous Metals",
    kicker: "Copper, Zinc, Lead",
    image: "/reference-assets/product-copper.jpeg",
    desc: "Copper, zinc, lead, nickel, tin, and their alloys for global industrial buyers.",
  },
  {
    name: "Ferrous Metals",
    kicker: "Steel & Cast Iron",
    image: "/reference-assets/product-ferrous.jpeg",
    desc: "Steel, stainless steel, cast iron, and other industrial ferrous metals.",
  },
];

const regions = [
  ["🇦🇪", "UAE - 75% of Supply"],
  ["🇳🇬", "Nigeria"],
  ["🇬🇳", "Konakry, Guinea"],
  ["🇴🇲", "Oman"],
  ["🇶🇦", "Qatar"],
  ["🌍", "Expanding to More Regions"],
];

const markets = ["Asia", "Europe", "North America", "Middle East", "Africa", "Other Global Markets"];

const services = [
  "Indenting & Sourcing",
  "Quality Inspection",
  "Logistics & Shipping",
  "Export Documentation",
  "Market Advisory",
  "Long-Term Supply Contracts",
];

const reasons = [
  { icon: PackageCheck, title: "Experience", text: "13-14 years of industry expertise and global trade knowledge." },
  { icon: Users, title: "Reliability", text: "Consistent quality, on-time delivery, and transparent processes." },
  { icon: Globe2, title: "Global Network", text: "Strong relationships with trusted suppliers and clients worldwide." },
  { icon: FileCheck2, title: "Flexibility", text: "Customized solutions for diverse customer requirements." },
  { icon: ShieldCheck, title: "Integrity", text: "Ethical business practices and long-term partnership approach." },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 inline-block border-b-2 border-slate-300 pb-1 text-xl font-black uppercase text-[#09234b] dark:border-slate-600 dark:text-white">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="bg-white pt-24 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <section className="relative overflow-hidden bg-slate-100 dark:bg-slate-900">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block">
          <Image
            src={assetPath("/reference-assets/hero-metal.jpeg")}
            alt="Stacked aluminium alloy ingots"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/75 to-transparent dark:from-slate-900 dark:via-slate-900/80" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center px-4 py-7 sm:px-6 md:min-h-[240px] lg:px-8">
          <div className="max-w-[560px]">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-[#062b5f] dark:text-sky-300">
              GLOBAL CZAR
            </p>
            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#09234b] dark:text-white sm:text-5xl">
              Global Sourcing.
              <br />
              Reliable Supply.
            </h1>
            <p className="mt-3 max-w-[560px] text-base font-bold leading-snug text-slate-950 dark:text-slate-100">
              Your Trusted Indentor & Trading Partner for Aluminium Alloys, Non-Ferrous & Ferrous Metals
            </p>
            <p className="mt-3 max-w-[560px] text-sm leading-relaxed text-slate-800 dark:text-slate-300">
              With 13-14 years of experience, we specialize in ADC12, AK5M2 and a wide range of aluminium
              alloys. Led by Mohammad Rizwan Siddiqui, we source and deliver reliable metal supply for global buyers.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex bg-[#062b5f] px-6 py-3 text-xs font-black uppercase text-white transition-colors hover:bg-[#0b3b7d]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#062b5f] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center justify-center gap-4 border-white/10 px-4 py-4 lg:border-l">
                <Icon size={30} strokeWidth={1.8} />
                <div>
                  <div className="text-3xl font-black leading-none">{stat.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-white/85">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[270px_1fr] lg:px-8">
        <div>
          <SectionTitle>About Us</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-slate-800 dark:text-slate-300">
            <p>
              GLOBAL CZAR is an India-based indenting and trading company, specializing in the sourcing and supply of
              aluminium alloys and metals to international markets.
            </p>
            <p>
              Under the ownership of Mohammad Rizwan Siddiqui, we have built strong partnerships with trusted smelters and suppliers
              across the Middle East and Africa, ensuring consistent quality, competitive pricing, and timely delivery.
            </p>
            <p>
              Currently, we supply 75% of our cargo from the UAE, with significant sourcing from Nigeria,
              Konakry (Guinea), Oman, and Qatar.
            </p>
          </div>
        </div>

        <div>
          <SectionTitle>Our Products</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <article key={product.name} className="overflow-hidden border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="relative h-24">
                  <Image
                    src={assetPath(product.image)}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 180px, (min-width: 640px) 50vw, 100vw"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400">{product.kicker}</p>
                  <h3 className="mt-1 text-sm font-black uppercase text-[#09234b] dark:text-white">{product.name}</h3>
                  <p className="mt-2 text-[12px] leading-snug text-slate-700 dark:text-slate-300">{product.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-6 sm:px-6 lg:grid-cols-[270px_1fr_1.6fr] lg:px-8">
        <div>
          <SectionTitle>Sourcing Regions</SectionTitle>
          <div className="space-y-1">
            {regions.map(([flag, label]) => (
              <Link
                key={label}
                href="/global-reach"
                className="flex items-center justify-between bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">{flag}</span> {label}
                </span>
                <ChevronRight size={16} />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Our Markets</SectionTitle>
          <p className="mb-3 text-sm leading-relaxed text-slate-800 dark:text-slate-300">
            Currently supplying to Japan, and expanding to serve clients across:
          </p>
          <div className="grid gap-4 sm:grid-cols-[140px_1fr]">
            <ul className="space-y-2">
              {markets.map((market) => (
                <li key={market} className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-[#062b5f] dark:text-sky-300" /> {market}
                </li>
              ))}
            </ul>
            <div className="relative min-h-[155px] overflow-hidden rounded-sm">
              <Image
                src={assetPath("/reference-assets/market-ship.jpeg")}
                alt="Container ship for export markets"
                fill
                sizes="(min-width: 1024px) 240px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Our Services</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-[1fr_245px]">
            <ul className="divide-y divide-slate-200 dark:divide-slate-800">
              {services.map((service) => (
                <li key={service} className="flex items-center justify-between py-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                  <span className="flex items-center gap-2">
                    <BadgeCheck size={17} className="text-[#062b5f] dark:text-sky-300" /> {service}
                  </span>
                  <ChevronRight size={15} className="text-slate-400" />
                </li>
              ))}
            </ul>
            <div className="relative min-h-[180px] overflow-hidden rounded-sm">
              <Image
                src={assetPath("/reference-assets/services-handshake.jpeg")}
                alt="Metals logistics and supply partnership"
                fill
                sizes="(min-width: 1024px) 245px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-4 sm:px-6 lg:grid-cols-[1fr_355px] lg:px-8">
        <div>
          <SectionTitle>Why Choose Us?</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="bg-slate-100 px-4 py-4 text-center dark:bg-slate-900">
                  <Icon className="mx-auto text-[#062b5f] dark:text-sky-300" size={28} />
                  <h3 className="mt-3 text-xs font-black uppercase text-[#09234b] dark:text-white">{reason.title}</h3>
                  <p className="mt-1 text-[12px] leading-snug text-slate-700 dark:text-slate-300">{reason.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-100 p-5 dark:bg-slate-900">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-black uppercase text-[#09234b] dark:text-white">Certifications & Compliance</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-800 dark:text-slate-300">
                We ensure all materials meet international quality standards and customer specifications.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-800 dark:text-slate-300">
                {["Mill Test Certificates (MTC)", "Chemical & Mechanical Reports", "Packing & Weight Reports", "Certificate of Origin"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#062b5f] dark:text-sky-300" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-2 border-[#062b5f] bg-white text-center text-[#062b5f] dark:border-sky-300 dark:bg-slate-950 dark:text-sky-300">
              <div>
                <Award className="mx-auto" size={25} />
                <p className="text-xs font-black leading-tight">ISO<br />9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#062b5f] px-4 py-5 text-center text-white">
        <h2 className="text-2xl font-black uppercase tracking-wide">Let&apos;s Build Your Next Success Together</h2>
        <p className="mx-auto mt-2 max-w-4xl text-sm text-white/85">
          Whether you need ADC12, AK5M2, other aluminium alloys, or a wide range of metals - we are here to source,
          supply, and deliver with excellence.
        </p>
        <Link
          href="/contact#rfq"
          className="mt-4 inline-flex bg-white px-6 py-3 text-xs font-black uppercase text-[#062b5f] transition-colors hover:bg-slate-100"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}
