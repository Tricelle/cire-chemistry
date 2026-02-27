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
    <section id="process" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-serif text-display-md text-charcoal mb-6">
              How It Works
            </h2>
            <p className="text-body-lg text-charcoal-light max-w-lg mx-auto mb-12">
              Two services, two clear paths. Select a service to see the process.
            </p>

            {/* Tab Switcher */}
            <div className="inline-flex rounded-full border border-border bg-white p-1.5 shadow-sm">
              <button
                onClick={() => setActiveTab("audit")}
                className={cn(
                  "rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wide transition-all duration-300",
                  activeTab === "audit"
                    ? "bg-rose text-white"
                    : "text-charcoal-light hover:text-charcoal"
                )}
              >
                Formulation Audit
              </button>
              <button
                onClick={() => setActiveTab("development")}
                className={cn(
                  "rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wide transition-all duration-300",
                  activeTab === "development"
                    ? "bg-rose text-white"
                    : "text-charcoal-light hover:text-charcoal"
                )}
              >
                Custom Development
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Steps - Creative Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-rose/20 via-rose/40 to-rose/20" />

          {steps.map((step, i) => (
            <RevealOnScroll key={`${activeTab}-${i}`}>
              <div className="relative flex gap-8 pb-12 last:pb-0">
                {/* Number Circle */}
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white border-2 border-rose shadow-sm">
                  <span className="font-serif text-lg font-semibold text-rose">
                    {i + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 pt-1">
                  <div className="bg-white border border-border rounded-lg p-6 hover:border-rose/40 transition-colors duration-300">
                    <h3 className="font-serif text-xl text-charcoal mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-charcoal-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
