"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquiryFormSchema, productTypes, type InquiryFormInput } from "@/lib/utils/validators";
import { Button, Input, Label, Select, Textarea } from "@/components/ui";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle, ArrowRight } from "lucide-react";

export function InquiryForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormInput>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      productType: "Moisturizer",
      hasFormula: "No",
      description: "",
      website: "",
    },
  });

  async function onSubmit(data: InquiryFormInput) {
    try {
      setSubmitState("idle");
      setErrorMessage("");

      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit inquiry");
      }

      setSubmitState("success");
      reset();
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (submitState === "success") {
    return (
      <section id="inquiry" className="section-padding bg-background">
        <div className="container-narrow">
          <div className="max-w-xl mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-full bg-rose-50 mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-rose" />
            </div>
            <h2 className="font-serif text-h1 text-charcoal mb-4">
              Inquiry Received
            </h2>
            <p className="text-body-lg text-charcoal-light leading-relaxed">
              Thank you for reaching out. I review all inquiries within 48
              hours. If the service is the right fit, you'll hear from me
              with next steps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto">
          <RevealOnScroll>
            <p className="text-body-xs uppercase tracking-luxury text-rose mb-6 text-center">
              Inquire
            </p>
            <h2 className="font-serif text-h1 md:text-display-md text-charcoal mb-6 text-center">
              Ready to Get Started?
            </h2>
            <div className="separator mb-6" />
            <p className="text-body-lg text-charcoal-light mb-12 text-center">
              Fill out the form below and I'll be in touch within 48 hours.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-7 bg-white rounded-2xl p-8 md:p-12 border border-border/50"
            >
              {/* Honeypot */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  {...register("website")}
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...register("name")}
                  id="name"
                  placeholder="Your name"
                  error={!!errors.name}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  error={!!errors.email}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="productType">Product Type</Label>
                <Select
                  {...register("productType")}
                  id="productType"
                  error={!!errors.productType}
                >
                  {productTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
                {errors.productType && (
                  <p className="text-sm text-red-500">{errors.productType.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="hasFormula">
                  Do you have a complete formula with ingredients and percentages?
                </Label>
                <Select
                  {...register("hasFormula")}
                  id="hasFormula"
                  error={!!errors.hasFormula}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
                {errors.hasFormula && (
                  <p className="text-sm text-red-500">{errors.hasFormula.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">
                  Briefly describe what you need help with
                </Label>
                <Textarea
                  {...register("description")}
                  id="description"
                  placeholder="Tell me about your product and what you're looking for..."
                  error={!!errors.description}
                />
                {errors.description && (
                  <p className="text-sm text-red-500">{errors.description.message}</p>
                )}
              </div>

              {submitState === "error" && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <p className="text-sm text-red-600">{errorMessage}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full group"
              >
                Submit Inquiry
                {!isSubmitting && (
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                )}
              </Button>

              <p className="text-body-sm text-charcoal-light/50 text-center">
                I review all inquiries within 48 hours.
              </p>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
