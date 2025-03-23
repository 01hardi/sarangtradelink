
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormValues } from './InquiryFormSchema';

interface FormFieldsProps {
  form: UseFormReturn<FormValues>;
}

export const PersonalInfoFields: React.FC<FormFieldsProps> = ({ form }) => {
  return (
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
  );
};

export const ContactInfoFields: React.FC<FormFieldsProps> = ({ form }) => {
  return (
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
                <SelectItem value="edinburgh">Edinburgh City Tour</SelectItem>
                <SelectItem value="york">Historic York</SelectItem>
                <SelectItem value="cambridge">Cambridge University Tour</SelectItem>
                <SelectItem value="oxford">Oxford Day Trip</SelectItem>
                <SelectItem value="lake-district">Lake District Nature Tour</SelectItem>
                <SelectItem value="cotswolds">Cotswolds Village Experience</SelectItem>
                <SelectItem value="liverpool">Beatles Liverpool Tour</SelectItem>
                <SelectItem value="stratford">Shakespeare's Stratford-upon-Avon</SelectItem>
                <SelectItem value="harry-potter">Warner Bros. Harry Potter Studio</SelectItem>
                <SelectItem value="other">Other Destinations</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export const MessageField: React.FC<FormFieldsProps> = ({ form }) => {
  return (
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
  );
};

export const WhatsAppOption: React.FC<FormFieldsProps> = ({ form }) => {
  return (
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
  );
};
