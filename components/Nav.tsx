"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { generalEnquiryMessage, whatsappLink } from "@/lib/whatsapp";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-navy-950/95 backdrop-blur-md shadow-[var(--shadow-card)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Pramukh Pharma Tech"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full bg-white-warm p-0.5"
          />
          <span className="text-sm font-semibold tracking-wide text-white-warm">
            PRAMUKH PHARMA TECH
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-200 transition-colors hover:text-brand-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={whatsappLink(generalEnquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-[var(--radius-sm)] bg-brand-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brand-400 sm:inline-flex"
            onClick={() => setMenuOpen(false)}
          >
            Request a Quote
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-white-warm md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-brand-400"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={whatsappLink(generalEnquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-brand-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brand-400 sm:hidden"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
