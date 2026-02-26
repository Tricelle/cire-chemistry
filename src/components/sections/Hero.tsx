"use client";

import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-20 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-gradient-to-br from-rose/20 to-rose-light/10 rounded-full blur-3xl float"
           style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-gradient-to-tr from-rose-light/15 to-transparent rounded-full blur-3xl float"
           style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-rose/5 to-transparent blob opacity-30" />

      {/* Main content */}
      <div className="container-wide px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-rose/20 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-rose pulse-glow" />
              <p className="text-body-xs uppercase tracking-luxury text-rose font-medium">
                {siteConfig.tagline}
              </p>
            </div>
          </div>

          <h1
            className="font-serif text-display-md md:text-display-lg lg:text-display-hero text-charcoal mb-8 opacity-0 animate-slide-up relative"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="relative inline-block">
              Formulation,
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-rose/20 via-rose/30 to-rose/20 -z-10 blur-sm" />
            </span>
            <br />
            <span className="bg-gradient-to-br from-charcoal via-charcoal to-charcoal-light bg-clip-text text-transparent">
              Perfected.
            </span>
          </h1>

          <p
            className="text-body-lg md:text-xl text-charcoal-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            Strategic formula audits and custom product development across
            skincare, haircare, body care, and cosmetics.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="#inquiry"
              className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-dark px-10 py-5 text-sm font-medium tracking-wide text-white transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-br from-rose/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center rounded-2xl border-2 border-charcoal bg-white/50 backdrop-blur-sm px-10 py-5 text-sm font-medium tracking-wide text-charcoal transition-all duration-500 hover:scale-105 hover:border-rose hover:bg-white/80 hover:shadow-lg"
            >
              <span className="relative">Explore Services</span>
            </a>
          </div>

          {/* Floating stats/badges */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-0 animate-fade-in"
               style={{ animationDelay: "1.2s" }}>
            <div className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-rose/10 shadow-sm hover:shadow-md transition-all duration-500">
              <div className="text-2xl">✨</div>
              <div className="text-left">
                <div className="text-sm font-medium text-charcoal">Custom Formulas</div>
                <div className="text-xs text-charcoal-light">Tailored Solutions</div>
              </div>
            </div>
            <div className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-rose/10 shadow-sm hover:shadow-md transition-all duration-500">
              <div className="text-2xl">🔬</div>
              <div className="text-left">
                <div className="text-sm font-medium text-charcoal">Expert Analysis</div>
                <div className="text-xs text-charcoal-light">Formula Audits</div>
              </div>
            </div>
            <div className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-rose/10 shadow-sm hover:shadow-md transition-all duration-500">
              <div className="text-2xl">💎</div>
              <div className="text-left">
                <div className="text-sm font-medium text-charcoal">Premium Quality</div>
                <div className="text-xs text-charcoal-light">Industry Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
           style={{ animationDelay: "1.5s" }}>
        <div className="flex flex-col items-center gap-2 text-charcoal-light">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-rose/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-rose rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
