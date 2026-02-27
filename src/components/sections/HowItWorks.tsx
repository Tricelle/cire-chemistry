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
    <section id="process" className="section-padding bg-cream-50">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-display-md text-charcoal mb-4">
              How It Works
            </h2>
            <div className="separator mb-6" />
            <p className="text-body-lg text-charcoal-light max-w-2xl mx-auto mb-8 md:mb-12">
              Two services, two clear paths. Select a service to see the process.
            </p>

            {/* Tab Switcher - Responsive Cards */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
              <button
                onClick={() => setActiveTab("audit")}
                className={cn(
                  "flex-1 px-6 py-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 border-2 rounded-lg",
                  activeTab === "audit"
                    ? "border-rose bg-rose/5 text-charcoal"
                    : "border-border bg-white text-charcoal-light hover:border-rose/40 hover:text-charcoal"
                )}
              >
                Formulation Audit
              </button>
              <button
                onClick={() => setActiveTab("development")}
                className={cn(
                  "flex-1 px-6 py-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 border-2 rounded-lg",
                  activeTab === "development"
                    ? "border-rose bg-rose/5 text-charcoal"
                    : "border-border bg-white text-charcoal-light hover:border-rose/40 hover:text-charcoal"
                )}
              >
                Custom Development
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Steps - Enhanced Cards */}
        <div className="grid gap-6 md:gap-8 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <RevealOnScroll key={`${activeTab}-${i}`}>
              <div className="bg-white border border-border rounded-lg p-6 md:p-8 transition-all duration-300 hover:border-rose/40 hover:shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center">
                      <span className="text-lg font-medium text-rose">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="font-serif text-xl md:text-2xl text-charcoal">
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
