import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col gap-2 border-t border-[#3a3d32] bg-dark px-6 py-8 text-[0.82rem] text-dark-muted md:flex-row md:items-center md:justify-between md:px-[6%]">
      <span>Finch &amp; Flight Psychotherapy &middot; Seattle, WA</span>
      <span className="flex flex-wrap gap-x-6 gap-y-1">
        <a href="mailto:hello@finchandflighttherapy.com" className="transition-colors duration-200 ease-out hover:text-dark-ink">
          hello@finchandflighttherapy.com
        </a>
        <Link href="/contact" className="transition-colors duration-200 ease-out hover:text-dark-ink">
          Contact
        </Link>
        <Link href="/fees" className="transition-colors duration-200 ease-out hover:text-dark-ink">
          Fees &amp; insurance
        </Link>
      </span>
    </footer>
  );
}
