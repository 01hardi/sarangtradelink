
import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(5, { message: 'Please enter a valid phone number' }),
  service: z.string({ required_error: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  contactWhatsApp: z.boolean().default(false),
});

export type FormValues = z.infer<typeof formSchema>;
