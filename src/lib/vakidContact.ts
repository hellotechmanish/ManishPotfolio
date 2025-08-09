import { z } from "zod";

export const ContactInputs = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .max(15)
    .optional(),
  message: z.string().min(1, "Message is required"),
});
