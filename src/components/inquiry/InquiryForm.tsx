
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Form } from '@/components/ui/form';
import { formSchema, FormValues } from './InquiryFormSchema';
import { 
  PersonalInfoFields, 
  ContactInfoFields, 
  MessageField, 
  WhatsAppOption 
} from './FormFields';
import SubmitButton from './SubmitButton';
import SuccessMessage from './SuccessMessage';

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
    return <SuccessMessage onReset={() => setIsSubmitted(false)} className={className} />;
  }

  return (
    <div className={`bg-white p-6 md:p-8 rounded-lg shadow-md ${className}`}>
      <h3 className="text-2xl font-playfair font-bold text-travel-navy mb-6">Send an Inquiry</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <PersonalInfoFields form={form} />
          <ContactInfoFields form={form} />
          <MessageField form={form} />
          <WhatsAppOption form={form} />
          
          <SubmitButton isSubmitting={isSubmitting} />
          
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our Privacy Policy and Terms & Conditions.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default InquiryForm;
