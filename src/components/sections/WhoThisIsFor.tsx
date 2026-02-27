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
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <RevealOnScroll>
          <h2 className="font-serif text-display-md text-charcoal mb-8">
            You are in the right place.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="space-y-6 mb-12">
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
        </RevealOnScroll>

        <RevealOnScroll>
          <ul className="space-y-3 mb-12 text-left max-w-2xl mx-auto">
            {clientTypes.map((type) => (
              <li key={type} className="flex items-start gap-3">
                <span className="mt-2 block h-1 w-1 flex-shrink-0 bg-rose" />
                <span className="text-body-md text-charcoal-light">
                  {type}
                </span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll>
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
