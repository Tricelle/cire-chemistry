"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";

const auditSteps = [
  {
    title: "Submit an Inquiry",
    description:
      "Fill out a short form telling me about your product and what you need.",
  },
  {
    title: "Review",
    description:
      "I review your submission within 48 hours and reach out if it's a fit.",
  },
  {
    title: "Quick Call",
    description:
      "A 15-minute call to confirm the audit is the right service for your needs.",
  },
  {
    title: "Payment & Intake",
    description:
      "You receive a payment link. Once paid, you'll complete a detailed questionnaire to submit your full formula details.",
  },
  {
    title: "Pre-Review",
    description: "I analyze your formula in depth before our session.",
  },
  {
    title: "Audit Session",
    description:
      "60 minutes. I walk you through my findings with clear, actionable recommendations.",
  },
  {
    title: "Summary Report",
    description:
      "A written document with all findings and recommended next steps, delivered within 48 hours.",
  },
];

const developmentSteps = [
  {
    title: "Submit an Inquiry",
    description:
      "Fill out a short form telling me about your product vision and goals.",
  },
  {
    title: "Review & Fit Assessment",
    description:
      "I review your submission and determine if it's the right fit for development.",
  },
  {
    title: "Discovery Session",
    description:
      "A deep-dive session to define your product vision, target market, ingredient preferences, and goals.",
  },
  {
    title: "Proposal & Agreement",
    description:
      "You receive a custom project scope, timeline, and pricing based on your needs.",
  },
  {
    title: "Formula Development",
    description:
      "I develop your formula with full INCI listing, percentages, and processing instructions.",
  },
  {
    title: "Review & Refinement",
    description:
      "Collaborative review rounds to refine until the formula meets your standards.",
  },
  {
    title: "Final Delivery",
    description:
      "Complete manufacturer-ready documentation including formula sheets, safety data, and sourcing guidance.",
  },
];

type Tab = "audit" | "development";

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<Tab>("audit");

  const steps = activeTab === "audit" ? auditSteps : developmentSteps;

  return (
    <section id="process" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-serif text-display-md text-charcoal mb-6">
              How It Works
            </h2>
            <p className="text-body-lg text-charcoal-light max-w-lg mx-auto mb-12">
              Two services, two clear paths. Select a service to see the process.
            </p>

            {/* Tab Switcher - Clean Minimal */}
            <div className="inline-flex gap-2 border-b border-border">
              <button
                onClick={() => setActiveTab("audit")}
                className={cn(
                  "px-6 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-300 border-b-2",
                  activeTab === "audit"
                    ? "border-rose text-charcoal"
                    : "border-transparent text-charcoal-light hover:text-charcoal"
                )}
              >
                Formulation Audit
              </button>
              <button
                onClick={() => setActiveTab("development")}
                className={cn(
                  "px-6 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-300 border-b-2",
                  activeTab === "development"
                    ? "border-rose text-charcoal"
                    : "border-transparent text-charcoal-light hover:text-charcoal"
                )}
              >
                Custom Development
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Steps - Clean Minimal List */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <RevealOnScroll key={`${activeTab}-${i}`}>
              <div className="border-l-2 border-rose/20 pl-6 py-2">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-sm font-medium text-rose uppercase tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal">
                    {step.title}
                  </h3>
                </div>
                <p className="text-body-md text-charcoal-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
