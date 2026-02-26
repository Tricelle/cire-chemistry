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
      <div className="container-wide">
        {/* Section Header - Left Aligned */}
        <RevealOnScroll>
          <div className="mb-20">
            <div className="accent-line-long mb-4" />
            <p className="text-body-xs uppercase tracking-luxury text-rose font-medium mb-3">
              Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal max-w-2xl">
              What I Offer
            </h2>
          </div>
        </RevealOnScroll>

        {/* Staggered Cards */}
        <div className="space-y-12 md:space-y-20">
          {/* Service 1: Formulation Audit - Full Width, Offset Left */}
          <RevealOnScroll delay={100}>
            <div className="md:max-w-4xl">
              <div className="card-clean flex flex-col">
                <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12">
                  <div className="editorial-number">01</div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
                      Formulation Audit & Strategic Review
                    </h3>
                    <p className="font-serif text-2xl text-rose mb-6">$425</p>

                    <p className="text-body-lg text-charcoal-light mb-8 leading-relaxed max-w-2xl">
                      A professional deep-dive analysis of your existing formula. You
                      submit your ingredients, percentages, and problem areas. I review
                      everything in depth before our session, then walk you through
                      what's working, what's risky, and what needs to change.
                    </p>

                    <p className="text-body-sm font-semibold text-charcoal mb-4 uppercase tracking-wide">
                      What's included:
                    </p>
                    <ul className="space-y-2 mb-8">
                      {auditIncludes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 block h-1 w-1 flex-shrink-0 bg-rose" />
                          <span className="text-body-md text-charcoal-light">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-l-2 border-rose pl-6 py-4 bg-cream-50">
                      <p className="text-body-sm text-charcoal-light leading-relaxed">
                        This service provides expert analysis and strategic direction.
                        It does not include reformulation, corrected formula documents,
                        or manufacturer-ready documentation. Full reformulation is
                        available through Custom Formulation Development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Service 2: Custom Formulation Development - Full Width, Offset Right */}
          <RevealOnScroll delay={200}>
            <div className="md:ml-auto md:max-w-4xl">
              <div className="card-clean border-rose/40 flex flex-col">
                <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12">
                  <div className="editorial-number">02</div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
                      Custom Formulation Development
                    </h3>
                    <p className="text-body-sm text-rose-dark mb-6 tracking-wide uppercase">
                      Currently Booking Fall 2026
                    </p>

                    <p className="text-body-lg text-charcoal-light mb-8 leading-relaxed max-w-2xl">
                      Complete formula development from concept to manufacturer-ready
                      documentation. I develop your product with full ingredient
                      specifications, processing instructions, safety and stability
                      documentation, and everything your manufacturer needs to produce.
                    </p>

                    <p className="text-body-sm font-semibold text-charcoal mb-4 uppercase tracking-wide">
                      What's included:
                    </p>
                    <ul className="space-y-2 mb-10">
                      {developmentIncludes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 block h-1 w-1 flex-shrink-0 bg-rose" />
                          <span className="text-body-md text-charcoal-light">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a
                        href="#inquiry"
                        className="inline-flex items-center gap-3 bg-rose text-white px-8 py-4 border-2 border-rose transition-all duration-300 hover:bg-background hover:text-rose group"
                      >
                        <span className="text-sm font-medium tracking-wide uppercase">Join the Waitlist</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={300}>
          <p className="text-body-sm text-charcoal-light mt-16">
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
