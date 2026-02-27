import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const auditIncludes = [
  "Pre-session formula analysis",
  "60-minute strategic review session",
  "Written summary with findings, risk assessment, and recommended next steps",
];

const developmentIncludes = [
  "Discovery session to define product vision, target market, and goals",
  "Complete formula development with INCI listing, percentages, and processing instructions",
  "Ingredient sourcing guidance",
  "Safety and stability documentation",
  "Manufacturer-ready formula sheets",
  "Review and refinement rounds",
  "Product line development available for multi-product collections",
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-cream-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <h2 className="text-4xl md:text-display-md font-semibold text-charcoal text-center mb-12 md:mb-16">
            Services
          </h2>
        </RevealOnScroll>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Service 1: Formulation Audit */}
          <RevealOnScroll>
            <div className="bg-white border border-cream-200 rounded-lg p-8 md:p-10 lg:p-12 h-full flex flex-col">
              {/* Header */}
              <div className="mb-8">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal leading-tight mb-3">
                  Formulation Audit & Strategic Review
                </h3>
                <p className="text-lg text-rose-dark font-medium">$425</p>
              </div>

              {/* Description */}
              <p className="text-base md:text-body-lg text-charcoal-light mb-10 leading-relaxed">
                A professional deep-dive analysis of your existing formula. You
                submit your ingredients, percentages, and problem areas. I review
                everything in depth before our session, then walk you through
                what's working, what's risky, and what needs to change.
              </p>

              {/* Includes */}
              <div className="mb-10">
                <p className="text-xs font-semibold text-charcoal mb-5 uppercase tracking-luxury">
                  What's included:
                </p>
                <ul className="space-y-4">
                  {auditIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 bg-rose rounded-full" />
                      <span className="text-sm md:text-base text-charcoal-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="mt-auto border-l-2 border-rose pl-5 py-4 bg-cream-50 rounded-r">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  This service provides expert analysis and strategic direction.
                  It does not include reformulation, corrected formula documents,
                  or manufacturer-ready documentation. Full reformulation is
                  available through Custom Formulation Development.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Service 2: Custom Formulation Development */}
          <RevealOnScroll>
            <div className="bg-white border border-cream-200 rounded-lg p-8 md:p-10 lg:p-12 h-full flex flex-col">
              {/* Header */}
              <div className="mb-8">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal leading-tight mb-3">
                  Custom Formulation Development
                </h3>
                <p className="text-xs text-rose-dark tracking-luxury uppercase font-medium">
                  Currently Booking Fall 2026
                </p>
              </div>

              {/* Description */}
              <p className="text-base md:text-body-lg text-charcoal-light mb-10 leading-relaxed">
                Complete formula development from concept to manufacturer-ready
                documentation. I develop your product with full ingredient
                specifications, processing instructions, safety and stability
                documentation, and everything your manufacturer needs to produce.
              </p>

              {/* Includes */}
              <div className="mb-10">
                <p className="text-xs font-semibold text-charcoal mb-5 uppercase tracking-luxury">
                  What's included:
                </p>
                <ul className="space-y-4">
                  {developmentIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 bg-rose rounded-full" />
                      <span className="text-sm md:text-base text-charcoal-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="mt-auto border-l-2 border-rose pl-5 py-4 bg-cream-50 rounded-r">
                <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                  Currently booking for Fall 2026 projects. Submit an inquiry to discuss
                  your timeline and product vision.
                </p>
                <a
                  href="#inquiry"
                  className="text-sm text-charcoal font-medium hover:text-rose transition-colors duration-300 inline-flex items-center gap-1.5 group"
                >
                  Submit inquiry below
                  <span className="group-hover:translate-x-0.5 transition-transform text-rose">→</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <p className="text-sm text-charcoal-light mt-12 md:mt-16 text-center">
            Have questions?{" "}
            <a
              href="/faq"
              className="link-underline text-charcoal font-medium hover:text-rose transition-colors duration-500"
            >
              See the FAQ
            </a>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
