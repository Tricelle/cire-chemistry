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
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        <RevealOnScroll>
          <p className="text-body-xs uppercase tracking-luxury text-rose mb-6 text-center">
            Services
          </p>
          <h2 className="font-serif text-h1 md:text-display-md text-charcoal mb-6 text-center">
            What I Offer
          </h2>
          <div className="separator mb-16" />
        </RevealOnScroll>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Service 1: Formulation Audit */}
          <RevealOnScroll delay={100}>
            <div className="card-hover rounded-2xl border border-border bg-white p-10 md:p-12 h-full flex flex-col">
              <p className="text-body-xs uppercase tracking-luxury text-rose mb-6">
                Service 01
              </p>

              <h3 className="font-serif text-h2 md:text-h1 text-charcoal mb-3">
                Formulation Audit &amp; Strategic Review
              </h3>
              <p className="font-serif text-h3 text-rose mb-8">$425</p>

              <p className="text-body-md text-charcoal-light mb-8 leading-relaxed">
                A professional deep-dive analysis of your existing formula. You
                submit your ingredients, percentages, and problem areas. I review
                everything in depth before our session, then walk you through
                what's working, what's risky, and what needs to change.
              </p>

              <p className="text-body-sm font-medium text-charcoal mb-4">
                What's included:
              </p>
              <ul className="space-y-3 mb-10">
                {auditIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose" />
                    <span className="text-body-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-lg bg-cream-100 p-5">
                <p className="text-body-sm text-charcoal-light/70 italic leading-relaxed">
                  This service provides expert analysis and strategic direction.
                  It does not include reformulation, corrected formula documents,
                  or manufacturer-ready documentation. Full reformulation is
                  available through Custom Formulation Development.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Service 2: Custom Formulation Development */}
          <RevealOnScroll delay={200}>
            <div className="card-hover rounded-2xl border border-rose/60 bg-white p-10 md:p-12 h-full flex flex-col">
              <p className="text-body-xs uppercase tracking-luxury text-rose mb-6">
                Service 02
              </p>

              <h3 className="font-serif text-h2 md:text-h1 text-charcoal mb-3">
                Custom Formulation Development
              </h3>
              <p className="text-body-sm text-rose-dark mb-8 tracking-wide">
                Currently Booking Fall 2026
              </p>

              <p className="text-body-md text-charcoal-light mb-8 leading-relaxed">
                Complete formula development from concept to manufacturer-ready
                documentation. I develop your product with full ingredient
                specifications, processing instructions, safety and stability
                documentation, and everything your manufacturer needs to produce.
              </p>

              <p className="text-body-sm font-medium text-charcoal mb-4">
                What's included:
              </p>
              <ul className="space-y-3 mb-10">
                {developmentIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose" />
                    <span className="text-body-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="#inquiry"
                  className="group inline-flex items-center justify-center rounded-button border border-rose px-8 py-3.5 text-sm font-medium tracking-wide text-charcoal transition-all duration-500 hover:bg-rose hover:text-white"
                >
                  Join the Waitlist
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={300}>
          <p className="text-body-sm text-charcoal-light/60 text-center mt-12">
            Have questions?{" "}
            <a
              href="/faq"
              className="link-underline text-charcoal-light hover:text-charcoal transition-colors duration-500"
            >
              See the FAQ
            </a>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
