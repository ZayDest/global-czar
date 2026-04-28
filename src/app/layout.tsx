import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GLOBAL CZAR | Aluminum Alloys, Lead Ingots & Zinc Ingots Trading",
  description:
    "Trusted global supplier of aluminum alloys (ADC12, AK5M2, A356, LM25), lead ingots, zinc ingots, and industrial metals. 14+ years serving automotive, electronics, and industrial sectors across Japan, Europe, and the Middle East.",
  keywords:
    "aluminum alloys, ADC12, AK5M2, A356, LM25, metals trading, industrial metals, aluminum ingots, lead ingots, zinc ingots, ferroalloys",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme')||((window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-950 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
