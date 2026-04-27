import Link from "next/link";
import { Mail, MapPin, Phone, Send, Share2 } from "lucide-react";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Sourcing Regions", "/global-reach"],
  ["Markets", "/industries"],
  ["Services", "/products#services"],
  ["News", "/blog"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="bg-[#062b5f] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-7 sm:px-6 md:grid-cols-[1.2fr_1.5fr_1.3fr_0.7fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-white">
              <span className="text-lg font-black">G</span>
            </div>
            <div>
              <span className="block text-base font-black uppercase leading-none">GLOBAL CZAR</span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">
                Mohammad Rizwan Siddiqui
              </span>
            </div>
          </Link>
          <p className="mt-5 text-sm font-semibold text-white/85">Global Sourcing. Reliable Supply.</p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase">Quick Links</h3>
          <div className="mt-3 grid grid-cols-3 gap-x-7 gap-y-2">
            {quickLinks.map(([label, href]) => (
              <Link key={href} href={href} className="text-xs text-white/75 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase">Contact Info</h3>
          <ul className="mt-3 space-y-1.5 text-xs text-white/80">
            <li className="flex items-center gap-2">
              <Mail size={14} /> Mohammad Rizwan Siddiqui
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} /> +91 99972 74666
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> India
            </li>
            <li>Business Hours: Mon - Sat | 9:00 AM - 6:00 PM (IST)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            {[Share2, Send, Mail].map((Icon, index) => (
              <a
                key={index}
                href={index === 2 ? "tel:+919997274666" : "https://linkedin.com"}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
                aria-label={index === 0 ? "LinkedIn" : index === 1 ? "Twitter" : "Email"}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 px-4 py-3 text-center text-xs text-white/60">
        © 2026 GLOBAL CZAR. All Rights Reserved.
      </div>
    </footer>
  );
}
