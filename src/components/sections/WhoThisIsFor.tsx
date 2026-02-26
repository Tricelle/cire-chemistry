import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const clientTypes = [
  "Indie brands getting ready for their first manufacturer or production run",
  "Established brands looking to expand, reformulate, or improve existing products",
  "Entrepreneurs and founders bringing a beauty product to market for the first time",
  "Brands struggling with formula stability, performance, cost, or compliance",
  "Estheticians, dermatologists, and practitioners developing their own product line",
];

export function WhoThisIsFor() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Label */}
        <RevealOnScroll>
          <div className="mb-16">
            <div className="accent-line-long mb-4" />
            <p className="text-body-xs uppercase tracking-luxury text-rose font-medium">
              Who This Is For
            </p>
          </div>
        </RevealOnScroll>

        {/* Asymmetric Grid */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-16 md:gap-20 mb-16">
          {/* Left — Large Intro Text */}
          <RevealOnScroll>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-10 leading-tight max-w-3xl">
                You are in the right place.
              </h2>

              <div className="space-y-6 max-w-2xl">
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  Whether you have a formula that needs expert review or a product
                  concept that needs to be built from the ground up, you are in
                  the right place.
                </p>
                <p className="text-body-lg text-charcoal-light leading-relaxed">
                  Maybe your texture is off. Maybe the stability concerns you.
                  Maybe the cost does not add up. Or maybe you are starting from
                  scratch and need a formulator who can take your vision from
                  concept to production.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — Empty space for visual balance */}
          <div />
        </div>

        {/* Client Types - Multi-Column List */}
        <RevealOnScroll delay={200}>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl">
            {clientTypes.map((type, i) => (
              <div key={type} className="flex items-start gap-3">
                <span className="mt-2 block h-1 w-1 flex-shrink-0 bg-rose" />
                <span className="text-body-md text-charcoal-light">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <div className="mt-12">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 border-2 border-charcoal transition-all duration-300 hover:bg-background hover:text-charcoal group"
            >
              <span className="text-sm font-medium tracking-wide uppercase">Get Started</span>
              <span className="text-rose group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
