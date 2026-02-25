import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:items-center">
          {/* Photo */}
          <RevealOnScroll>
            <div className="flex justify-center md:justify-start">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white">
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
          </RevealOnScroll>

          {/* Bio */}
          <div>
            <RevealOnScroll delay={100}>
              <p className="text-body-xs uppercase tracking-luxury text-rose mb-6">
                About
              </p>
              <h2 className="font-serif text-h1 md:text-display-md text-charcoal mb-2">
                Tricelle Gray
              </h2>
              <p className="text-body-md text-charcoal-light mb-1">
                Founder &amp; Principal Cosmetic Chemist
              </p>
              <p className="text-body-md text-charcoal-light mb-10">
                Software Engineer
              </p>
            </RevealOnScroll>

            <div className="space-y-6">
              <RevealOnScroll delay={200}>
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  I am a cosmetic chemist and software engineer, a combination
                  that shapes how I approach formulation: methodical, precise,
                  and built to scale.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  As the founder of{" "}
                  <a
                    href="https://formuley.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-rose-dark font-medium transition-colors duration-500 hover:text-rose"
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

              <RevealOnScroll delay={500}>
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  When specialized testing, regulatory review, or manufacturing
                  coordination is required, I collaborate with trusted industry
                  partners to ensure each formulation is properly supported from
                  development through production.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={600}>
                <p className="text-body-lg text-charcoal font-medium border-l-2 border-rose pl-6 my-4">
                  I build. I formulate. I solve.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
