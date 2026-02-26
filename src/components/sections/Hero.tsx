"use client";

import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-20">
      <div className="container-wide px-6 md:px-8">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 md:gap-24 items-start">
          {/* Left Column - Massive Typography */}
          <div className="pt-12 md:pt-20">
            {/* Small label */}
            <div className="mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="accent-line mb-4" />
              <p className="text-body-xs uppercase tracking-luxury text-rose font-medium">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Massive Headline */}
            <h1
              className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-charcoal mb-12 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              Formulation,<br />
              Perfected.
            </h1>

            {/* Single Strong CTA */}
            <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="#inquiry"
                className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 rounded-none border-2 border-charcoal transition-all duration-300 hover:bg-background hover:text-charcoal group"
              >
                <span className="text-sm font-medium tracking-wide uppercase">Get Started</span>
                <span className="text-rose group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Description Card */}
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <div className="bg-white border border-border p-10 mt-0 md:mt-32">
              <p className="text-body-lg text-charcoal-light leading-relaxed mb-6">
                Strategic formula audits and custom product development across
                skincare, haircare, body care, and cosmetics.
              </p>
              <a
                href="#services"
                className="link-underline text-sm uppercase tracking-wider text-rose-dark font-medium"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
