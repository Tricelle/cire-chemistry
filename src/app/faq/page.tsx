import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { WaxSealLogo } from "@/components/ui/WaxSealLogo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about formulation audits, custom product development, and working with Cire Chemistry.",
};

const faqs = [
  {
    question: "What's included in the Formulation Audit?",
    answer:
      "The audit includes a pre-session analysis of your formula, a 60-minute strategic review session, and a written summary with findings, risk assessment, and recommended next steps. The summary is delivered within 48 hours of our session.",
  },
  {
    question: "What's NOT included in the audit?",
    answer:
      "The audit provides analysis and strategic direction only. It does not include reformulation, corrected formula documents, specific replacement ingredients, new percentages, or manufacturer-ready documentation. If you need full reformulation, that's available through Custom Formulation Development.",
  },
  {
    question: "Do I need a complete formula to work with you?",
    answer:
      "It depends on the service. For the Formulation Audit, yes. You'll need a complete formula with ingredients and percentages. For Custom Formulation Development, no. I develop the formula from scratch based on your product vision and goals.",
  },
  {
    question: "How long does the audit process take from start to finish?",
    answer:
      "From inquiry to final report, the process typically takes one to two weeks. After payment and intake, I spend time analyzing your formula before we meet. The 60-minute session is followed by a written summary delivered within 48 hours.",
  },
  {
    question: "What product categories do you work across?",
    answer:
      "I formulate across skincare, haircare, body care, and cosmetics. My work spans treatment butters, corrective bars, targeted serums, cleansers, lip products, and full product line development.",
  },
  {
    question: "What does Custom Formulation Development include?",
    answer:
      "Everything from a discovery session to manufacturer-ready documentation. That includes complete formula development with INCI listing and percentages, processing instructions, ingredient sourcing guidance, safety and stability documentation, and review rounds until the formula meets your standards.",
  },
  {
    question: "When are you booking for Custom Formulation Development?",
    answer:
      "I'm currently planning my November 2026 project schedule. Submit an inquiry to discuss your timeline and product vision, and I'll review it within 48 hours.",
  },
  {
    question: "How should I prepare for my audit session?",
    answer:
      "After payment, you'll receive a detailed intake questionnaire. Provide your full ingredient list with INCI names, percentages, manufacturing method, problem areas, and any testing results. The more detail you provide, the more value you'll get from the session.",
  },
  {
    question: "Do you work with international brands?",
    answer:
      "Yes. Sessions are conducted virtually, so I work with brands nationwide and internationally. All documentation is delivered digitally.",
  },
  {
    question: "What happens after I submit an inquiry?",
    answer:
      "I review every inquiry within 48 hours. If the service is a good fit, I'll reach out with next steps, typically a 15-minute call to confirm the right service for your needs, followed by a payment link and intake questionnaire.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-charcoal py-6 px-6 md:px-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 text-cream-100">
            <WaxSealLogo size={32} variant="dark" />
            <span className="font-serif text-h3">{siteConfig.name}</span>
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
        <div className="max-w-3xl mx-auto">
          <p className="text-body-xs uppercase tracking-luxury text-rose mb-6">
            FAQ
          </p>
          <h1 className="text-h1 md:text-display-md font-semibold text-charcoal mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-body-lg text-charcoal-light mb-16 max-w-2xl">
            Common questions about services, process, and what to expect.
          </p>

          <div className="space-y-10">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-border pb-10 last:border-0"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-charcoal mb-3">
                  {faq.question}
                </h2>
                <p className="text-sm md:text-base text-charcoal-light/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-border text-center">
            <p className="text-body-lg text-charcoal-light mb-6">
              Still have questions?
            </p>
            <a
              href="/#inquiry"
              className="inline-flex items-center justify-center rounded-button bg-charcoal px-10 py-4 text-sm font-medium tracking-wide text-white transition-all duration-500 hover:bg-charcoal-dark"
            >
              Submit an Inquiry
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
