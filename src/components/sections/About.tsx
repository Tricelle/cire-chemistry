import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[360px_1fr] gap-12">
          {/* Photo Space */}
          <RevealOnScroll>
            <div className="photo-space w-full" />
          </RevealOnScroll>

          {/* Bio Content */}
          <div className="space-y-6">
            <RevealOnScroll>
              <div>
                <h2 className="font-serif text-display-md text-charcoal mb-2">
                  Tricelle Gray
                </h2>
                <p className="text-body-md text-charcoal-light font-medium">
                  Founder | Principal Cosmetic Chemist | Software Engineer
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <p className="text-body-lg text-charcoal-light leading-relaxed">
                I am a cosmetic chemist and software engineer, a combination
                that shapes how I approach formulation: methodical, precise,
                and built to scale.
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <p className="text-body-lg text-charcoal-light leading-relaxed">
                As the founder of{" "}
                <a
                  href="https://formuley.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-semibold transition-colors duration-500 text-[#8B5CF6] hover:text-[#7C3AED]"
                >
                  Formuley
                </a>
                , an intelligent formulation platform designed for cosmetic
                chemists and beauty brands, I operate at the intersection of
                technical development and hands-on product creation. Beyond
                building technology, I formulate across skincare, haircare,
                body care, and cosmetics.
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <p className="text-body-lg text-charcoal-light leading-relaxed">
                My work includes treatment butters, corrective bars, targeted
                serums, cleansers, and cohesive product line systems. Each
                formula is developed with structural integrity and delivered
                with complete documentation. That includes ingredient
                specifications, processing instructions, safety
                considerations, and manufacturer-ready technical sheets. Every
                detail is reviewed for stability, performance, and
                scalability.
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <p className="text-body-lg text-charcoal-light leading-relaxed">
                When specialized testing, regulatory review, or manufacturing
                coordination is required, I collaborate with trusted industry
                partners to ensure each formulation is properly supported from
                development through production.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
