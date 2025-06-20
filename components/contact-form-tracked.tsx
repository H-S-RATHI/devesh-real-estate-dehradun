"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { trackLead, trackContact } from "@/lib/facebook-pixel"

export function ContactFormTracked() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Track lead generation
    trackLead(formData.property || "General Inquiry")
    trackContact()

    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData)

    // Show success message or redirect
    alert("Thank you! We will contact you within 30 minutes.")
  }

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

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
        Send Message & Get Call Back
      </Button>
    </form>
  )
}
