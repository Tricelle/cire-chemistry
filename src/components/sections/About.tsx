import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Label */}
        <RevealOnScroll>
          <div className="mb-16">
            <div className="accent-line-long mb-4" />
            <p className="text-body-xs uppercase tracking-luxury text-rose font-medium">
              About
            </p>
          </div>
        </RevealOnScroll>

        {/* Editorial Grid Layout */}
        <div className="grid md:grid-cols-[auto_2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Photo Space - Clean placeholder */}
          <RevealOnScroll>
            <div className="photo-space w-full max-w-[280px]" />
          </RevealOnScroll>

          {/* Bio Content */}
          <div className="space-y-8">
            <RevealOnScroll delay={100}>
              <div className="mb-10">
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-3 leading-tight">
                  Tricelle Gray
                </h2>
                <p className="text-body-md text-charcoal-light font-medium mb-1">
                  Founder & Principal Cosmetic Chemist
                </p>
                <p className="text-body-md text-rose-dark font-medium">
                  Software Engineer
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-body-lg text-charcoal-light leading-relaxed max-w-2xl">
                I am a cosmetic chemist and software engineer, a combination
                that shapes how I approach formulation: methodical, precise,
                and built to scale.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <p className="text-body-lg text-charcoal-light leading-relaxed max-w-2xl">
                As the founder of{" "}
                <a
                  href="https://formuley.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-rose-dark font-semibold transition-colors duration-500 hover:text-rose"
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

            <RevealOnScroll delay={400}>
              <p className="text-body-lg text-charcoal-light leading-relaxed max-w-2xl">
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

            <RevealOnScroll delay={500}>
              <p className="text-body-lg text-charcoal-light leading-relaxed max-w-2xl">
                When specialized testing, regulatory review, or manufacturing
                coordination is required, I collaborate with trusted industry
                partners to ensure each formulation is properly supported from
                development through production.
              </p>
            </RevealOnScroll>
          </div>

          {/* Signature Quote - Offset */}
          <RevealOnScroll delay={600}>
            <div className="mt-0 md:mt-20">
              <div className="bg-charcoal text-white p-8 border-l-4 border-rose">
                <p className="font-serif text-2xl leading-tight">
                  I build.<br />
                  I formulate.<br />
                  I solve.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
