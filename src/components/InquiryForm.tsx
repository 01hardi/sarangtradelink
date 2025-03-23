
import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Check, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(5, { message: 'Please enter a valid phone number' }),
  service: z.string({ required_error: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  contactWhatsApp: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

interface InquiryFormProps {
  className?: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ className }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      contactWhatsApp: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // This is where you would integrate with Supabase
      // For now, we'll simulate a successful submission
      console.log('Form data to submit:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success('Inquiry submitted successfully!', {
        description: 'We will get back to you shortly.',
      });
      
      setIsSubmitted(true);
      
      // If user opted for WhatsApp contact
      if (data.contactWhatsApp) {
        // Replace with your actual WhatsApp business number
        const phoneNumber = '447123456789';
        const message = `Hello! I'm ${data.name} and I'm interested in your ${data.service} service. ${data.message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit inquiry', {
        description: 'Please try again later or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white p-8 rounded-lg shadow-md text-center ${className}`}>
        <div className="mb-4 mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-travel-navy mb-2">Thank You!</h3>
        <p className="text-travel-dark-gray mb-6">
          Your inquiry has been submitted successfully. We will get back to you as soon as possible.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="bg-travel-gold hover:bg-travel-navy text-white"
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className={`bg-white p-6 md:p-8 rounded-lg shadow-md ${className}`}>
      <h3 className="text-2xl font-playfair font-bold text-travel-navy mb-6">Send an Inquiry</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+44 123 456 7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service of Interest</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="london-experience">London Experience</SelectItem>
                      <SelectItem value="visa-services">Visa Services</SelectItem>
                      <SelectItem value="accommodation">Accommodation & Transfers</SelectItem>
                      <SelectItem value="day-trips">UK Day Trips</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please let us know your requirements or questions..."
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="contactWhatsApp"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I would also like to be contacted via WhatsApp
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-travel-gold hover:bg-travel-navy text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Inquiry'
            )}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our Privacy Policy and Terms & Conditions.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default InquiryForm;
