"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { intakeFormSchema, type IntakeFormInput } from "@/lib/utils/validators";
import { Button, Input, Label, Select, Textarea } from "@/components/ui";
import { CheckCircle, Upload, X } from "lucide-react";

export function IntakeForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IntakeFormInput>({
    resolver: zodResolver(intakeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      ingredientList: "",
      percentages: "",
      manufacturingMethod: "",
      targetClaims: "",
      problems: "",
      testingResults: "",
      hasManufacturer: "No",
      timeline: "",
      targetPrice: "",
    },
  });

  async function onSubmit(data: IntakeFormInput) {
    try {
      setSubmitState("idle");
      setErrorMessage("");

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      if (file) {
        formData.append("formulaDocument", file);
      }

      const response = await fetch("/api/intake", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit intake form");
      }

      setSubmitState("success");
      reset();
      setFile(null);
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (submitState === "success") {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <CheckCircle className="h-16 w-16 text-rose mx-auto mb-6" />
        <h2 className="font-serif text-h2 text-charcoal mb-4">
          Intake Form Received
        </h2>
        <p className="text-body-lg text-charcoal-light">
          Thank you for submitting your formula details. I'll review
          everything thoroughly before our session.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="intake-name">Name</Label>
        <Input
          {...register("name")}
          id="intake-name"
          placeholder="Your name"
          error={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="intake-email">Email</Label>
        <Input
          {...register("email")}
          id="intake-email"
          type="email"
          placeholder="you@example.com"
          error={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* 1. Ingredient List */}
      <div className="space-y-2">
        <Label htmlFor="ingredientList">
          1. Full ingredient list with INCI names
        </Label>
        <Textarea
          {...register("ingredientList")}
          id="ingredientList"
          placeholder="List each ingredient with its INCI name..."
          error={!!errors.ingredientList}
          className="min-h-[150px]"
        />
        {errors.ingredientList && (
          <p className="text-sm text-red-500">
            {errors.ingredientList.message}
          </p>
        )}
      </div>

      {/* 2. Percentages */}
      <div className="space-y-2">
        <Label htmlFor="percentages">
          2. Percentages for each ingredient
        </Label>
        <Textarea
          {...register("percentages")}
          id="percentages"
          placeholder="List the percentage for each ingredient..."
          error={!!errors.percentages}
          className="min-h-[150px]"
        />
        {errors.percentages && (
          <p className="text-sm text-red-500">{errors.percentages.message}</p>
        )}
      </div>

      {/* 3. Manufacturing Method */}
      <div className="space-y-2">
        <Label htmlFor="manufacturingMethod">
          3. Manufacturing/mixing method (if known)
        </Label>
        <Textarea
          {...register("manufacturingMethod")}
          id="manufacturingMethod"
          placeholder="Describe your mixing process, temperatures, order of addition, etc..."
        />
      </div>

      {/* 4. Target Claims */}
      <div className="space-y-2">
        <Label htmlFor="targetClaims">
          4. What claims are you targeting?
        </Label>
        <Textarea
          {...register("targetClaims")}
          id="targetClaims"
          placeholder="e.g., anti-aging, hydrating, brightening, soothing..."
          error={!!errors.targetClaims}
        />
        {errors.targetClaims && (
          <p className="text-sm text-red-500">
            {errors.targetClaims.message}
          </p>
        )}
      </div>

      {/* 5. Problems */}
      <div className="space-y-2">
        <Label htmlFor="problems">
          5. What specific problems are you experiencing?
        </Label>
        <Textarea
          {...register("problems")}
          id="problems"
          placeholder="Describe any stability, texture, performance, or other issues..."
          error={!!errors.problems}
        />
        {errors.problems && (
          <p className="text-sm text-red-500">{errors.problems.message}</p>
        )}
      </div>

      {/* 6. Testing Results */}
      <div className="space-y-2">
        <Label htmlFor="testingResults">
          6. Have you tested this formula? If yes, what were the results?
        </Label>
        <Textarea
          {...register("testingResults")}
          id="testingResults"
          placeholder="Describe any testing you've done and the results..."
        />
      </div>

      {/* 7. Manufacturer */}
      <div className="space-y-2">
        <Label htmlFor="hasManufacturer">
          7. Do you have a manufacturer selected?
        </Label>
        <Select
          {...register("hasManufacturer")}
          id="hasManufacturer"
          error={!!errors.hasManufacturer}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </Select>
      </div>

      {/* 8. Timeline */}
      <div className="space-y-2">
        <Label htmlFor="timeline">8. Timeline for manufacturing</Label>
        <Input
          {...register("timeline")}
          id="timeline"
          placeholder="e.g., Q3 2026, within 6 months, ASAP..."
        />
      </div>

      {/* 9. Target Price */}
      <div className="space-y-2">
        <Label htmlFor="targetPrice">9. Target retail price point</Label>
        <Input
          {...register("targetPrice")}
          id="targetPrice"
          placeholder="e.g., $25-35, under $50..."
        />
      </div>

      {/* 10. File Upload */}
      <div className="space-y-2">
        <Label>10. Upload your formula document (if available)</Label>
        <div
          className="border-2 border-dashed border-input rounded-button p-6 text-center cursor-pointer hover:border-rose transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt"
            onChange={(e) => {
              const selected = e.target.files?.[0];
              if (selected) setFile(selected);
            }}
          />
          {file ? (
            <div className="flex items-center justify-center gap-3">
              <span className="text-body-sm text-charcoal">{file.name}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="text-muted-foreground hover:text-charcoal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload className="h-8 w-8 text-muted-foreground" />
              <p className="text-body-sm text-muted-foreground">
                Click to upload (PDF, DOC, XLS, CSV, TXT)
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Error message */}
      {submitState === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
      >
        Submit Intake Form
      </Button>
    </form>
  );
}
