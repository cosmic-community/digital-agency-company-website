import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service_interest: z.enum(['web-dev', 'design', 'seo', 'consulting', 'other']).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget_range: z.enum(['5k-10k', '10k-25k', '25k-50k', '50k+']).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;