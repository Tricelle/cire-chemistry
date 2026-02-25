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
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          {/* Left — headline */}
          <RevealOnScroll>
            <p className="text-body-xs uppercase tracking-luxury text-rose mb-6">
              Who This Is For
            </p>
            <h2 className="font-serif text-h1 md:text-display-md text-charcoal">
              You are in the right place.
            </h2>
          </RevealOnScroll>

          {/* Right — body + list */}
          <div>
            <RevealOnScroll delay={100}>
              <p className="text-body-lg text-charcoal-light mb-6 leading-relaxed">
                Whether you have a formula that needs expert review or a product
                concept that needs to be built from the ground up, you are in
                the right place.
              </p>
              <p className="text-body-lg text-charcoal-light mb-10 leading-relaxed">
                Maybe your texture is off. Maybe the stability concerns you.
                Maybe the cost does not add up. Or maybe you are starting from
                scratch and need a formulator who can take your vision from
                concept to production.
              </p>
            </RevealOnScroll>

            <ul className="space-y-5">
              {clientTypes.map((type, i) => (
                <RevealOnScroll key={type} delay={200 + i * 80}>
                  <li className="flex items-start gap-4">
                    <span className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose" />
                    <span className="text-body-md text-charcoal-light">
                      {type}
                    </span>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>

            <RevealOnScroll delay={600}>
              <div className="mt-10">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-button bg-charcoal px-10 py-4 text-sm font-medium tracking-wide text-white transition-all duration-500 hover:bg-charcoal-dark"
                >
                  Get Started
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
