"use client";

import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-background pt-20">
      <div className="container-wide px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
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
            className="text-body-lg text-charcoal-light mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            Strategic formula audits and custom product development across
            skincare, haircare, body care, and cosmetics.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up"
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
      </div>
    </section>
  );
}
