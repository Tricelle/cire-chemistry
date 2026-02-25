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
      <div className="container-narrow">
        <RevealOnScroll>
          <p className="text-body-xs uppercase tracking-luxury text-rose mb-6 text-center">
            Process
          </p>
          <h2 className="font-serif text-h1 md:text-display-md text-charcoal mb-6 text-center">
            How It Works
          </h2>
          <div className="separator mb-6" />
          <p className="text-body-lg text-charcoal-light text-center mb-14 max-w-lg mx-auto">
            Two services, two clear paths. Select a service to see the process.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex rounded-full border border-border bg-background p-1.5">
              <button
                onClick={() => setActiveTab("audit")}
                className={cn(
                  "rounded-full px-7 py-3 text-body-sm font-medium transition-all duration-500",
                  activeTab === "audit"
                    ? "bg-rose text-white shadow-sm"
                    : "text-charcoal-light hover:text-charcoal"
                )}
              >
                Formulation Audit
              </button>
              <button
                onClick={() => setActiveTab("development")}
                className={cn(
                  "rounded-full px-7 py-3 text-body-sm font-medium transition-all duration-500",
                  activeTab === "development"
                    ? "bg-rose text-white shadow-sm"
                    : "text-charcoal-light hover:text-charcoal"
                )}
              >
                Custom Development
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <div key={`${activeTab}-${i}`} className="flex gap-7">
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-rose bg-white text-body-sm font-semibold text-rose">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border my-2" />
                )}
              </div>

              <div className={cn("pb-10", i === steps.length - 1 && "pb-0")}>
                <h3 className="text-body-lg font-semibold text-charcoal mb-1.5">
                  {step.title}
                </h3>
                <p className="text-body-md text-charcoal-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
