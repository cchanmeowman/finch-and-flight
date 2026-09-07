"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FinchMark from "@/components/icons/FinchMark";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fees", label: "Fees" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-6 py-6 md:px-[6%] bg-paper transition-shadow duration-300 ease-out border-b ${
        scrolled
          ? "border-line shadow-[0_1px_0_0_rgba(38,40,32,0.06),0_4px_16px_-8px_rgba(38,40,32,0.18)]"
          : "border-transparent shadow-none"
      }`}
    >
      <Link href="/" className="flex items-center gap-2.5 font-semibold text-lg">
        <FinchMark className="h-6 w-auto text-ink" />
        Finch &amp; Flight
      </Link>
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-7 text-[0.9rem]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ink/85 transition-colors duration-200 ease-out hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-block rounded-[3px] bg-accent px-5 py-2.5 text-[0.85rem] font-semibold text-paper transition-[translate,box-shadow] duration-200 ease-out hover:-translate-y-px hover:shadow-[0_4px_12px_-4px_rgba(79,113,122,0.5)]"
        >
          Reach out
        </Link>
      </div>
    </nav>
  );
}
