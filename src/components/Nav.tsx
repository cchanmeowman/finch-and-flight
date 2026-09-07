"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FinchMark from "@/components/icons/FinchMark";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fees", label: "Fees" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-paper transition-shadow duration-300 ease-out border-b ${
        scrolled || open
          ? "border-line shadow-[0_1px_0_0_rgba(38,40,32,0.06),0_4px_16px_-8px_rgba(38,40,32,0.18)]"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-6 md:px-[6%]">
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
            className="hidden sm:inline-block rounded-[3px] bg-accent px-5 py-2.5 text-[0.85rem] font-semibold text-paper transition-[translate,box-shadow] duration-200 ease-out hover:-translate-y-px hover:shadow-[0_4px_12px_-4px_rgba(79,113,122,0.5)]"
          >
            Reach out
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-5 bg-ink transition-transform duration-200 ease-out ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-ink transition-opacity duration-200 ease-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-5 bg-ink transition-transform duration-200 ease-out ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`grid overflow-hidden border-t border-line transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col px-6 py-2">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <Link
                  href={link.href}
                  className="block py-4 text-[1rem] text-ink/85 transition-colors duration-200 ease-out hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6 pt-2">
            <Link
              href="/contact"
              className="block rounded-[3px] bg-accent px-5 py-3 text-center text-[0.9rem] font-semibold text-paper"
            >
              Reach out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
