import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const nohemi = localFont({
  src: "../fonts/Nohemi-VF.ttf",
  variable: "--font-nohemi",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Finch & Flight Psychotherapy",
    template: "%s | Finch & Flight Psychotherapy",
  },
  description:
    "Individual and couples therapy in Seattle and online across Washington. A steady, unhurried space to work through what's actually going on.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Finch & Flight Psychotherapy",
  description:
    "Individual and couples therapy practice offering in-person sessions in Seattle and online sessions across Washington.",
  medicalSpecialty: "Psychiatric",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seattle",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: "WA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nohemi.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/*
          Runs synchronously before body paints. Only once this class is
          present does globals.css hide [data-reveal] elements, so a
          visitor with JS disabled (or where this fails) always sees
          full content — never a blank/invisible section.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ScrollReveal />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
