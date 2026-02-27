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
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Hero Statement */}
        <div className="text-center mb-20">
          <RevealOnScroll>
            <h2 className="font-serif text-display-md text-charcoal mb-4">
              You are in the right place.
            </h2>
          </RevealOnScroll>

          {/* Animated Tagline - Larger & More Prominent */}
          <div className="overflow-hidden my-16">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <span className="inline-block opacity-0 animate-[slideInUp_0.6s_ease-out_0.2s_forwards] text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal">
                I build.
              </span>
              <span className="inline-block opacity-0 animate-[slideInUp_0.6s_ease-out_0.5s_forwards] text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal">
                I formulate.
              </span>
              <span className="inline-block opacity-0 animate-[slideInUp_0.6s_ease-out_0.8s_forwards] text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal">
                I solve.
              </span>
            </div>
          </div>

          <RevealOnScroll>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-body-lg text-charcoal-light leading-relaxed">
                Whether you have a formula that needs expert review or a product
                concept that needs to be built from the ground up, you are in
                the right place.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left: Problems */}
          <RevealOnScroll>
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-charcoal">
                Maybe you need help with:
              </h3>
              <div className="space-y-3 text-body-md text-charcoal-light leading-relaxed">
                <p>Texture that's off.</p>
                <p>Stability that concerns you.</p>
                <p>Cost that doesn't add up.</p>
                <p>Or starting from scratch and need a formulator who can take your vision from concept to production.</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Client Types */}
          <RevealOnScroll>
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-charcoal">
                I work with:
              </h3>
              <ul className="space-y-3">
                {clientTypes.map((type) => (
                  <li key={type} className="flex items-start gap-3">
                    <span className="mt-2 block h-1 w-1 flex-shrink-0 bg-rose" />
                    <span className="text-body-md text-charcoal-light">
                      {type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        {/* CTA - Centered */}
        <RevealOnScroll>
          <div className="text-center">
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
