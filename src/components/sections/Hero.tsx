"use client";

import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-background pt-20">
      <div className="container-wide px-6 md:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
          {/* Left — text */}
          <div>
            <p
              className="text-body-xs uppercase tracking-luxury text-rose mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {siteConfig.tagline}
            </p>

            <h1
              className="font-serif text-display-md md:text-display-lg lg:text-display-hero text-charcoal mb-6 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              Formulation, Perfected.
            </h1>

            <p
              className="text-body-lg text-charcoal-light mb-10 max-w-lg leading-relaxed opacity-0 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              Strategic formula audits and custom product development across
              skincare, haircare, body care, and cosmetics.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: "1.0s" }}
            >
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center rounded-button bg-charcoal px-10 py-4 text-sm font-medium tracking-wide text-white transition-all duration-500 hover:bg-charcoal-dark"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-button border border-charcoal px-10 py-4 text-sm font-medium tracking-wide text-charcoal transition-all duration-500 hover:bg-charcoal hover:text-white"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right — photo placeholder */}
          <div
            className="flex justify-center md:justify-end opacity-0 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-200 to-rose-50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full border border-rose/30 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-rose/15" />
                </div>
                <p className="text-body-sm text-charcoal-light/40 font-medium tracking-extra-wide uppercase">
                  Photo Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
