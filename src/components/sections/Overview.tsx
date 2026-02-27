import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Overview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow text-center">
        <RevealOnScroll>
          <p className="text-body-xs uppercase tracking-luxury text-rose mb-6">
            Overview
          </p>
          <h2 className="text-h1 md:text-display-md font-semibold text-charcoal mb-6">
            Precision Formulation, End to End
          </h2>
          <div className="separator mb-10" />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <p className="text-body-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            Cire Chemistry is an independent cosmetic formulation lab offering
            strategic formula audits and full custom product development. Whether
            you need a second set of expert eyes on an existing formula or a
            product built from the ground up, every engagement is backed by
            technical rigor and delivered with manufacturer-ready documentation.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
