import { z } from "zod";

export const productTypes = [
  "Moisturizer",
  "Serum",
  "Cleanser",
  "Body Butter",
  "Hair Care",
  "Bar/Soap",
  "Lip Product",
  "Cosmetics/Makeup",
  "Other",
] as const;

export const inquiryFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or less"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  productType: z.enum(productTypes, {
    errorMap: () => ({ message: "Please select a product type" }),
  }),
  hasFormula: z.enum(["Yes", "No"], {
    errorMap: () => ({ message: "Please select an option" }),
  }),
  description: z
    .string()
    .min(1, "Please describe what you need help with")
    .max(2000, "Description must be 2000 characters or less"),
  website: z.string().max(500).optional(), // Honeypot
});

export type InquiryFormInput = z.infer<typeof inquiryFormSchema>;

export const intakeFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or less"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  ingredientList: z
    .string()
    .min(1, "Please provide your ingredient list"),
  percentages: z
    .string()
    .min(1, "Please provide percentages for each ingredient"),
  manufacturingMethod: z.string().optional(),
  targetClaims: z
    .string()
    .min(1, "Please describe your target claims"),
  problems: z
    .string()
    .min(1, "Please describe the problems you are experiencing"),
  testingResults: z.string().optional(),
  hasManufacturer: z.enum(["Yes", "No"], {
    errorMap: () => ({ message: "Please select an option" }),
  }),
  timeline: z.string().optional(),
  targetPrice: z.string().optional(),
});

export type IntakeFormInput = z.infer<typeof intakeFormSchema>;
