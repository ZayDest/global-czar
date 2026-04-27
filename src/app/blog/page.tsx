import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Market Insights | GLOBAL CZAR",
  description:
    "Aluminum market trends, LME price updates, export/import guides, and industry insights from GLOBAL CZAR.",
};

const posts = [
  {
    slug: "adc12-market-outlook-2026",
    category: "Market Analysis",
    title: "ADC12 Aluminum Alloy: Market Outlook & Price Trends for 2026",
    excerpt:
      "With global automotive production rebounding and EV adoption accelerating, demand for ADC12 die-casting alloy is expected to grow by 8–12% in 2026. Here's what buyers need to know about pricing, availability, and key supplier regions.",
    date: "April 20, 2026",
    readTime: "7 min read",
    tag: "ADC12",
    featured: true,
  },
  {
    slug: "aluminum-sourcing-guide-japan",
    category: "Export Guide",
    title: "The Complete Guide to Sourcing Aluminum Alloys for Japanese Manufacturers",
    excerpt:
      "Japanese OEMs and Tier-1 suppliers require JIS-specification alloys with tight quality tolerances. This guide covers JIS H 5302 compliance, documentation requirements, and choosing the right sourcing partner.",
    date: "April 15, 2026",
    readTime: "10 min read",
    tag: "Japan",
    featured: true,
  },
  {
    slug: "lme-aluminum-price-q2-2026",
    category: "Price Update",
    title: "LME Aluminum Price Update: Q2 2026 Analysis and Forward Expectations",
    excerpt:
      "London Metal Exchange aluminum prices have shown moderate volatility in Q1 2026. We analyze key drivers including energy costs, Chinese production data, and global supply chain dynamics.",
    date: "April 10, 2026",
    readTime: "5 min read",
    tag: "LME Prices",
    featured: false,
  },
  {
    slug: "ferroalloys-steel-industry-2026",
    category: "Industry Trends",
    title: "Ferroalloy Demand Surge: Why Steel Producers Are Scrambling for FeSi and FeMn",
    excerpt:
      "Global steel production recovery is driving strong demand for ferro-silicon and ferro-manganese. We examine supply chain bottlenecks, key producing regions, and strategies for securing long-term supply.",
    date: "April 5, 2026",
    readTime: "8 min read",
    tag: "Ferroalloys",
    featured: false,
  },
  {
    slug: "ev-battery-aluminum-demand",
    category: "Market Analysis",
    title: "How the EV Revolution is Reshaping Aluminum Alloy Demand",
    excerpt:
      "Electric vehicle production requires 2–3x more aluminum than conventional vehicles. We break down which alloy grades are benefiting most and how supply chains are adapting.",
    date: "March 28, 2026",
    readTime: "9 min read",
    tag: "EV Trends",
    featured: false,
  },
  {
    slug: "export-documentation-guide",
    category: "Export Guide",
    title: "Export Documentation for Metals Trading: A Complete Checklist",
    excerpt:
      "Missing a single document can delay your shipment by weeks. This practical checklist covers everything from MTC and certificates of origin to dangerous goods declarations and customs invoices.",
    date: "March 20, 2026",
    readTime: "6 min read",
    tag: "Documentation",
    featured: false,
  },
  {
    slug: "a356-automotive-quality",
    category: "Technical Guide",
    title: "Why A356 / LM25 is the Preferred Alloy for Automotive Safety Components",
    excerpt:
      "From wheel hubs to suspension arms, A356 alloy's combination of strength, ductility, and corrosion resistance makes it the go-to choice for safety-critical automotive castings.",
    date: "March 15, 2026",
    readTime: "7 min read",
    tag: "A356 / LM25",
    featured: false,
  },
  {
    slug: "middle-east-metals-trading-hub",
    category: "Industry Trends",
    title: "UAE as a Global Metals Trading Hub: Advantages for Buyers and Sellers",
    excerpt:
      "UAE Jebel Ali port, DIFC financial infrastructure, and strategic location between East and West make the UAE an unparalleled hub for metals trading. Here's why more companies are routing through UAE.",
    date: "March 8, 2026",
    readTime: "6 min read",
    tag: "UAE Market",
    featured: false,
  },
];

const categories = ["All", "Market Analysis", "Export Guide", "Price Update", "Industry Trends", "Technical Guide"];

export default function BlogPage() {
  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#c8960c]/20 border border-[#c8960c]/40 text-[#f0b429] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            Market Insights
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Industry Insights &amp; Analysis
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Stay ahead with GLOBAL CZAR&apos;s expert analysis on aluminum markets,
            price trends, export guides, and industry developments.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                  cat === "All"
                    ? "bg-[#0a1628] border-[#0a1628] text-white"
                    : "border-slate-200 text-slate-600 hover:border-[#c8960c] hover:text-[#c8960c]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#0a1628] mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {featured.map((post) => (
              <div
                key={post.slug}
                className="group rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow card-hover"
              >
                <div className="h-32 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] p-6 flex items-end">
                  <div className="flex gap-2">
                    <span className="bg-[#c8960c] text-[#0a1628] text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="bg-white/10 text-white text-[10px] font-semibold px-2 py-1 rounded">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-[#0a1628] text-lg leading-tight mb-3 group-hover:text-[#4a6fa5] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#c8960c] font-semibold text-xs flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Posts */}
          <h2 className="text-xl font-black text-[#0a1628] mb-6">All Articles</h2>
          <div className="space-y-4">
            {regular.map((post) => (
              <div
                key={post.slug}
                className="group flex gap-4 items-start p-5 rounded-xl border border-slate-100 hover:border-[#0a1628]/20 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Tag size={22} className="text-[#c8960c]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#c8960c] text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-slate-300 text-xs">·</span>
                    <span className="text-slate-400 text-xs">{post.date}</span>
                    <span className="text-slate-300 text-xs">·</span>
                    <span className="text-slate-400 text-xs flex items-center gap-0.5">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0a1628] text-sm sm:text-base leading-tight group-hover:text-[#4a6fa5] transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 hidden sm:block">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex-shrink-0 text-xs font-semibold text-[#c8960c] flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#0a1628] mb-3">
            Stay Informed on Metals Markets
          </h2>
          <p className="text-slate-500 mb-6 text-sm">
            Get weekly price updates, market analysis, and trade insights delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 border border-slate-200 rounded text-sm focus:outline-none focus:border-[#c8960c] transition-colors"
            />
            <button className="bg-[#c8960c] hover:bg-[#f0b429] text-[#0a1628] font-bold px-5 py-3 rounded text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
