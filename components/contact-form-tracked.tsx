"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { trackLead, trackContact } from "@/lib/facebook-pixel"
import emailjs from '@emailjs/browser';
import Link from "next/link";

// Debug log to check environment variables
console.log('EmailJS Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
console.log('EmailJS Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
console.log('EmailJS Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);

export function ContactFormTracked() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTouched, setIsTouched] = useState({
    name: false,
    phone: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show errors
    setIsTouched({
      name: true,
      phone: true
    });
    
    // Validate all fields
    const nameError = validateField('name', formData.name);
    const phoneError = validateField('phone', formData.phone);
    
    setErrors({
      name: nameError,
      phone: phoneError,
    });
    
    // If there are validation errors, don't submit
    if (nameError || phoneError) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Initialize EmailJS with public key
    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
      alert('Failed to initialize email service. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Track lead generation
      trackLead("General Inquiry");
      trackContact();

      // Send email using EmailJS
      const templateParams = {
        name: formData.name,  // Changed from from_name to name to match template
        phone: formData.phone,
        budget: formData.budget,  // Fixed typo from 'budget' to 'budget' to match template
        message: formData.message,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );
      console.log('Email sent successfully:', response);
      
      alert("Thank you! We will contact you within 30 minutes.");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateField = (name: string, value: string) => {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 3) return 'Name must be at least 3 characters';
      if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name can only contain letters and spaces';
      return '';
    }
    
    if (name === 'phone') {
      if (!value) return 'Phone number is required';
      if (!/^\d+$/.test(value)) return 'Phone number must contain only numbers';
      if (value.length !== 10) return 'Phone number must be 10 digits';
      return '';
    }
    
    return '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setIsTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate the field when it loses focus
    const error = validateField(name, formData[name as keyof typeof formData]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // For phone field, only allow numbers
    if (name === 'phone' && value !== '' && !/^\d*$/.test(value)) {
      return; // Don't update if not a number
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Only validate if the field has been touched before
    if (isTouched[name as keyof typeof isTouched]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full name"
            className={isTouched.name && errors.name ? 'border-red-500' : ''}
          />
          {isTouched.name && errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <Input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your 10-digit phone number"
            maxLength={10}
            className={isTouched.phone && errors.phone ? 'border-red-500' : ''}
          />
          {isTouched.phone && errors.phone ? (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          ) : (
            <p className="mt-1 text-xs text-gray-500">We'll use this to contact you</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Budget</option>
          <option value="₹10-20 Lakhs">₹10-20 Lakhs</option>
          <option value="₹20-50 Lakhs">₹20-50 Lakhs</option>
          <option value="₹50 Lakhs - 1 Crore">₹50 Lakhs - 1 Crore</option>
          <option value="Above ₹1 Crore">Above ₹1 Crore</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          rows={4}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-red-600 hover:bg-red-700 text-lg py-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message & Get Call Back'}
      </Button>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
        <p className="text-xs text-gray-600 text-center">
          By submitting this form, you agree to our{" "}
          <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
            Privacy Policy
          </Link>
          . We respect your privacy and will only use your information to contact you about properties.
        </p>
      </div>
    </form>
  )
}
