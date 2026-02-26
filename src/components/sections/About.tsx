import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  return (
    <section id="about" className="relative section-padding bg-gradient-to-br from-background via-cream-50 to-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-bl from-rose/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose-light/10 to-transparent rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header with decorative elements */}
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose to-transparent" />
                <p className="text-body-xs uppercase tracking-luxury text-rose font-medium">
                  About
                </p>
                <div className="w-12 h-px bg-gradient-to-r from-rose via-transparent to-transparent" />
              </div>

              <h2 className="font-serif text-h1 md:text-display-md text-charcoal mb-4 relative inline-block">
                Tricelle Gray
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-rose/40 to-transparent rounded-full" />
              </h2>

              <div className="mt-6 space-y-1">
                <p className="text-body-md text-charcoal font-medium">
                  Founder &amp; Principal Cosmetic Chemist
                </p>
                <p className="text-body-md text-rose-dark font-medium">
                  Software Engineer
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Bio content with creative layout */}
          <div className="space-y-8">
            <RevealOnScroll delay={100}>
              <div className="relative p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-rose/10 shadow-sm">
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-rose/20 to-transparent" />
                <p className="text-body-lg md:text-xl text-charcoal-light leading-relaxed">
                  I am a cosmetic chemist and software engineer, a combination
                  that shapes how I approach formulation:{" "}
                  <span className="text-charcoal font-medium">methodical, precise,
                  and built to scale.</span>
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  As the founder of{" "}
                  <a
                    href="https://formuley.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block link-underline text-rose-dark font-semibold transition-colors duration-500 hover:text-rose group"
                  >
                    Formuley
                    <span className="absolute -right-4 top-0 text-rose opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                  , an intelligent formulation platform designed for cosmetic
                  chemists and beauty brands, I operate at the intersection of
                  technical development and hands-on product creation. Beyond
                  building technology, I formulate across skincare, haircare,
                  body care, and cosmetics.
                </p>
                <div className="hidden md:block w-1 h-full bg-gradient-to-b from-rose/30 via-rose/10 to-transparent rounded-full" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="relative p-6 pl-8 border-l-4 border-gradient-to-b from-rose via-rose-light to-rose/20 bg-gradient-to-r from-rose/5 to-transparent rounded-r-2xl">
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
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <p className="text-body-lg text-charcoal-light leading-relaxed">
                When specialized testing, regulatory review, or manufacturing
                coordination is required, I collaborate with trusted industry
                partners to ensure each formulation is properly supported from
                development through production.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={500}>
              <div className="relative mt-12 p-10 rounded-3xl bg-gradient-to-br from-charcoal to-charcoal-dark text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-rose/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-rose-light/20 to-transparent rounded-full blur-2xl" />
                <p className="relative text-2xl md:text-3xl font-serif text-center leading-relaxed">
                  I build. I formulate. I solve.
                </p>
                <div className="relative mt-6 flex justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose pulse-glow" />
                  <div className="w-2 h-2 rounded-full bg-rose-light pulse-glow" style={{ animationDelay: "0.5s" }} />
                  <div className="w-2 h-2 rounded-full bg-rose pulse-glow" style={{ animationDelay: "1s" }} />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
