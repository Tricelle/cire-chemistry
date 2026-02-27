"use client";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div className="space-y-8 py-section">
          {/* Headline - Centered and Elegant */}
          <h1 className="font-serif text-display-lg text-charcoal">
            Formulation, Perfected.
          </h1>

          {/* Description - Simple and Clear */}
          <p className="text-body-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Strategic formula audits and custom product development across
            skincare, haircare, body care, and cosmetics.
          </p>

          {/* Single CTA */}
          <div>
            <a
              href="#inquiry"
              className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 border-2 border-charcoal transition-all duration-300 hover:bg-background hover:text-charcoal group"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Get Started
              </span>
              <span className="text-rose group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
