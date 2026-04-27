"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import GlobalCzarLogo from "./GlobalCzarLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", hasMenu: true },
  { label: "Sourcing", href: "/global-reach" },
  { label: "Markets", href: "/industries" },
  { label: "Services", href: "/products#services" },
  { label: "News", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="bg-[#062b5f] text-white">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[11px] sm:px-6 lg:px-8">
          <p className="hidden sm:block">GLOBAL CZAR - Connecting Global Suppliers to Global Industries</p>
          <div className="ml-auto flex items-center gap-4">
            <a className="flex items-center gap-1.5" href="tel:+919997274666">
              <Phone size={13} /> +91 99972 74666
            </a>
            <span className="hidden items-center gap-1.5 lg:flex">
              <MapPin size={13} /> India
            </span>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-[210px] items-center gap-3 lg:min-w-[245px]">
            <GlobalCzarLogo
              markClassName="text-[#062b5f] dark:text-white"
              textClassName="text-[#09234b] dark:text-white"
            />
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[12px] font-black uppercase text-slate-950 transition-colors hover:text-[#062b5f] dark:text-slate-100 dark:hover:text-sky-300"
              >
                {link.label}
                {link.hasMenu ? <ChevronDown size={13} strokeWidth={3} /> : null}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            <ThemeToggle />
            <Link
              href="/contact#rfq"
              className="shrink-0 bg-[#062b5f] px-6 py-3 text-[12px] font-black uppercase text-white transition-colors hover:bg-[#0b3b7d]"
            >
              Get Quote
            </Link>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded border border-slate-200 text-[#062b5f] dark:border-slate-700 dark:text-white xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-200 py-3 dark:border-slate-800 xl:hidden">
            <div className="mb-2 flex justify-end">
              <ThemeToggle />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-3 text-sm font-bold uppercase text-slate-900 dark:text-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#rfq"
              className="mt-2 block bg-[#062b5f] px-5 py-3 text-center text-sm font-black uppercase text-white"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
