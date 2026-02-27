import { siteConfig } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";
import { WaxSealLogo } from "@/components/ui/WaxSealLogo";

export function Footer() {
  return (
    <footer className="bg-charcoal py-20 px-6 md:px-8">
      <div className="container-narrow">
        {/* Top — centered brand */}
        <div className="text-center mb-14">
          <WaxSealLogo size={48} variant="dark" className="mx-auto mb-4" />
          <span className="font-serif text-2xl tracking-wide text-cream-100 block mb-3">
            {siteConfig.name}
          </span>
          <p className="text-body-md text-cream-200/60 tracking-wide">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Links row */}
        <div className="flex flex-wrap justify-center gap-8 mb-14">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-1.5 text-body-md text-cream-200/70 hover:text-rose transition-colors duration-500"
          >
            {siteConfig.email}
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-body-md text-cream-200/70 hover:text-rose transition-colors duration-500"
          >
            LinkedIn
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href={siteConfig.formuley}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-body-md text-cream-200/70 hover:text-rose transition-colors duration-500"
          >
            Formuley
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="/faq"
            className="group inline-flex items-center gap-1.5 text-body-md text-cream-200/70 hover:text-rose transition-colors duration-500"
          >
            FAQ
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>

        {/* Separator */}
        <div className="w-12 h-px bg-cream-200/20 mx-auto mb-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-body-md text-cream-200/40">
          <p>
            Based in {siteConfig.location}. Serving brands nationwide.
          </p>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
