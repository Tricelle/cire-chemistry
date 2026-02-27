"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils/cn";
import { Menu, X } from "lucide-react";
import { WaxSealLogo } from "@/components/ui/WaxSealLogo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Inquire", href: "#inquiry" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-border/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-wide flex items-center justify-between px-6 md:px-8">
        <a href="#" className="flex items-center gap-3 text-charcoal">
          <WaxSealLogo size={36} />
          <span className="font-serif text-xl md:text-2xl tracking-wide">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-body-md uppercase tracking-extra-wide text-charcoal-light hover:text-charcoal transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/50">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-body-md text-charcoal-light hover:text-charcoal py-3 transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
