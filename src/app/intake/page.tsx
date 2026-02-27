import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { IntakeForm } from "@/components/sections/IntakeForm";

export const metadata: Metadata = {
  title: "Formula Intake Questionnaire",
  description:
    "Submit your formula details for your upcoming Formulation Audit session.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-charcoal text-cream-50 py-6 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-h3">{siteConfig.name}</p>
        </div>
      </div>

      {/* Form */}
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-h1 md:text-display-md font-semibold text-charcoal mb-4">
            Formula Intake Questionnaire
          </h1>
          <p className="text-body-lg text-charcoal-light mb-10">
            Please provide as much detail as possible about your formula. This
            information will be reviewed in depth before our session to ensure
            we make the most of our time together.
          </p>

          <IntakeForm />
        </div>
      </div>
    </main>
  );
}
