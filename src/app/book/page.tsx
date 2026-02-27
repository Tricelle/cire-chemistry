import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Your Formulation Audit",
  description:
    "Complete payment to begin your Formulation Audit with Cire Chemistry.",
  robots: {
    index: false,
    follow: false,
  },
};

const included = [
  "Pre-session formula analysis",
  "60-minute strategic review session",
  "Written summary with findings, risk assessment, and next steps",
  "Delivered within 48 hours of session",
];

export default function BookPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-charcoal py-6 px-6 md:px-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="font-serif text-h3 text-cream-100">
            {siteConfig.name}
          </a>
          <a
            href="/"
            className="text-body-sm text-cream-200/60 hover:text-cream-100 transition-colors duration-500"
          >
            Back to Home
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding">
        <div className="max-w-2xl mx-auto">
          <p className="text-body-xs uppercase tracking-luxury text-rose mb-6">
            Formulation Audit
          </p>
          <h1 className="text-h1 md:text-display-md font-semibold text-charcoal mb-4">
            Book Your Audit
          </h1>
          <p className="text-body-lg text-charcoal-light mb-12 max-w-xl leading-relaxed">
            You're one step away from a professional review of your
            formula. Complete payment below to begin.
          </p>

          {/* Service card */}
          <div className="rounded-2xl border border-border bg-white p-8 md:p-10 mb-10">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-h2 font-semibold text-charcoal">
                Formulation Audit &amp; Strategic Review
              </h2>
              <p className="font-serif text-h2 text-rose ml-4 flex-shrink-0">
                $425
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-rose flex-shrink-0 mt-0.5" />
                  <span className="text-body-md text-charcoal-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={siteConfig.stripePaymentUrl}
              className="group inline-flex w-full items-center justify-center rounded-button bg-charcoal px-10 py-4 text-sm font-medium tracking-wide text-white transition-all duration-500 hover:bg-charcoal-dark"
            >
              Proceed to Payment
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>

            <p className="text-body-sm text-charcoal-light/50 text-center mt-4">
              Secure payment via Stripe. You'll be redirected to complete
              payment, then brought back to fill out your intake questionnaire.
            </p>
          </div>

          {/* What happens next */}
          <div className="rounded-lg bg-cream-200/40 p-6 md:p-8">
            <h3 className="font-serif text-h3 text-charcoal mb-4">
              What happens after payment
            </h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-rose text-rose text-body-sm font-medium flex items-center justify-center mt-0.5">
                  1
                </span>
                <span className="text-body-md text-charcoal-light">
                  You'll be redirected to the intake questionnaire to submit
                  your formula details.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-rose text-rose text-body-sm font-medium flex items-center justify-center mt-0.5">
                  2
                </span>
                <span className="text-body-md text-charcoal-light">
                  You'll receive a link to book your 60-minute audit
                  session.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-rose text-rose text-body-sm font-medium flex items-center justify-center mt-0.5">
                  3
                </span>
                <span className="text-body-md text-charcoal-light">
                  I review your formula in depth before our session, then walk
                  you through everything.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
