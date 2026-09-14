import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().min(1, "Please select a budget range."),
  projectDescription: z
    .string()
    .min(20, "Tell us a bit more about the project (at least 20 characters)."),
  timeline: z.string().optional(),
  source: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export interface SubmitContactFormResult {
  success: boolean;
  message: string;
}

/**
 * UI -> validation (contactFormSchema) -> this API abstraction -> future email/CRM integration.
 *
 * No backend is configured yet, so this simulates a network round-trip and
 * always resolves successfully. Replace the body with a real request to an
 * API route (e.g. POST /api/contact) once an email/CRM provider (Resend,
 * SendGrid, HubSpot, Zoho, or a custom backend) is connected.
 */
export async function submitContactForm(
  values: ContactFormValues,
): Promise<SubmitContactFormResult> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    success: true,
    message: `Thanks, ${values.name.split(" ")[0]}. Your project inquiry has been received.`,
  };
}
