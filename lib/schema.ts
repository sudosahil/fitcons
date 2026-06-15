import { z } from "zod";
import { GOALS, EXPERIENCE_LEVELS, CHALLENGES, TIMELINES } from "@/lib/data";

// Single source of truth for the coaching application shape — used by both
// the client quiz and the API route boundary.
export const applicationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  age: z.coerce
    .number()
    .int()
    .min(14, "You must be at least 14")
    .max(99, "Please enter a valid age"),
  gender: z.enum(["Male", "Female", "Other"]),
  weight: z.string().trim().min(1, "Enter your current weight").max(20),
  height: z.string().trim().min(1, "Enter your height").max(20),
  goal: z.enum(GOALS as [string, ...string[]]),
  experience: z.enum(EXPERIENCE_LEVELS as [string, ...string[]]),
  challenge: z.enum(CHALLENGES as [string, ...string[]]),
  timeline: z.enum(TIMELINES as [string, ...string[]]),
  whatsapp: z
    .string()
    .trim()
    .min(7, "Enter a valid WhatsApp number")
    .max(20)
    .regex(/^[+\d][\d\s-]{6,}$/, "Enter a valid WhatsApp number"),
  email: z.string().trim().email("Enter a valid email address").max(120),
});

export type Application = z.infer<typeof applicationSchema>;
