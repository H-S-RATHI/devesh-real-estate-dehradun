"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { trackLead, trackContact } from "@/lib/facebook-pixel"
import emailjs from '@emailjs/browser';

// Debug log to check environment variables
console.log('EmailJS Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
console.log('EmailJS Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
console.log('EmailJS Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);

export function ContactFormTracked() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      trackLead(formData.property || "General Inquiry");
      trackContact();

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        property: formData.property,
        budget: formData.budget,
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
        email: "",
        property: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Property Interest</label>
        <select
          name="property"
          value={formData.property}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Property</option>
          <option value="Bhauwala Plots">Bhauwala Residential Plots</option>
          <option value="Thano Road Plots">Thano Road Plots</option>
          <option value="Commercial Properties">Commercial Properties</option>
          <option value="Investment Consultation">Investment Consultation</option>
          <option value="Other">Other</option>
        </select>
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
    </form>
  )
}
