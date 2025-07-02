"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { trackLead, trackContact } from "@/lib/facebook-pixel"
import emailjs from '@emailjs/browser';
import { X, Phone, MessageCircle, Gift, Clock } from "lucide-react"

export function InstantPopupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
    message: "I'm interested in your property. Please call me back.",
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

  // Show popup after 3.5 seconds on every page load
  useEffect(() => {
    // Track user engagement
    let scrolled = false;
    let mouseMovements = 0;
    
    const handleScroll = () => {
      scrolled = true;
    };
    
    const handleMouseMove = () => {
      mouseMovements++;
    };
    
    // Add event listeners to track engagement
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    const timer = setTimeout(() => {
      // Show popup if user is engaged (scrolled or moved mouse) or just show it anyway
      if (scrolled || mouseMovements > 10 || true) { // Always show for now
        setIsVisible(true);
      }
    }, 3500); // 3.5 seconds

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

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
      trackLead("Popup Callback Request");
      trackContact();

      // Send email using EmailJS with popup identifier
      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        budget: formData.budget,
        message: `[POPUP CALLBACK REQUEST] ${formData.message}`,
        form_source: "Instant Popup Form"
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );
      console.log('Popup form email sent successfully:', response);
      
      alert("Thank you! We will call you back within 15 minutes during business hours.");
      
      // Close popup and reset form
      setIsVisible(false);
      setFormData({
        name: "",
        phone: "",
        budget: "",
        message: "I'm interested in your property. Please call me back.",
      });
    } catch (error) {
      console.error("Error sending popup form email:", error);
      alert("There was an error sending your request. Please try again later.");
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

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 popup-backdrop animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Popup Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto popup-entrance shadow-2xl border-2 border-blue-200 popup-pulse">
          <CardHeader className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 text-white hover:text-gray-200 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Gift className="w-6 h-6 mr-2 text-yellow-300" />
                <CardTitle className="text-xl font-bold">🎁 Special Offer!</CardTitle>
              </div>
              <p className="text-blue-100 text-sm">
                Get FREE site visit & legal consultation worth ₹5,000
              </p>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center text-red-700 mb-1">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-semibold text-sm">Limited Time Offer</span>
              </div>
              <p className="text-xs text-red-600">
                Only 5 plots left at current prices! Price increases next month.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  className={isTouched.name && errors.name ? 'border-red-500' : ''}
                />
                {isTouched.name && errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter 10-digit phone number"
                  maxLength={10}
                  className={isTouched.phone && errors.phone ? 'border-red-500' : ''}
                />
                {isTouched.phone && errors.phone ? (
                  <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                ) : (
                  <p className="mt-1 text-xs text-gray-500">We'll call you back in 15 mins</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Range (Optional)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Select Budget</option>
                  <option value="₹10-20 Lakhs">₹10-20 Lakhs</option>
                  <option value="₹20-50 Lakhs">₹20-50 Lakhs</option>
                  <option value="₹50 Lakhs - 1 Crore">₹50 Lakhs - 1 Crore</option>
                  <option value="Above ₹1 Crore">Above ₹1 Crore</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 text-sm py-2 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  <Phone className="w-4 h-4 mr-1" />
                  {isSubmitting ? 'Sending...' : 'Get Call Back'}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="text-sm py-2 flex items-center justify-center border-blue-300 text-blue-600 hover:bg-blue-50"
                  onClick={handleClose}
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Maybe Later
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  💡 <strong>Pro Tip:</strong> Mention this popup for extra 2% discount!
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}