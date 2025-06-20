import { Card, CardContent } from "@/components/ui/card"
import { TrackedButton } from "@/components/tracked-button"
import { ContactFormTracked } from "@/components/contact-form-tracked"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">📞 Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to find your dream property? Get in touch with our experts today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Call/WhatsApp</p>
                      <p className="text-blue-600 font-medium">9760872136</p>
                      <p className="text-sm text-gray-600">Available 24/7 for urgent queries</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Office Locations</p>
                      <p className="text-green-600 font-medium">2-nd Floor, Toothpick Building, Kirshali Chowk, Dehradun</p>
                      <p className="text-sm text-gray-600">Visit us for site inspection</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Working Hours</p>
                      <p className="text-purple-600 font-medium">Mon-Sun: 9 AM - 8 PM</p>
                      <p className="text-sm text-gray-600">Emergency calls accepted anytime</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-blue-700 to-blue-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">🚀 Quick Actions</h3>
                <div className="space-y-3">
                  <TrackedButton
                    type="phone"
                    location="Contact Page"
                    size="lg"
                    className="w-full bg-white text-blue-700 hover:bg-gray-100"
                  >
                    Call Now: 9760872136
                  </TrackedButton>

                  <TrackedButton
                    type="whatsapp"
                    location="Contact Page"
                    size="lg"
                    className="w-full border-white text-white hover:bg-white hover:text-blue-700"
                    href="https://wa.me/919760872136?text=Hi, I'm interested in your properties in Dehradun. Please share details about available plots."
                  >
                    WhatsApp for Instant Response
                  </TrackedButton>
                </div>

                <div className="mt-4 p-3 bg-white/10 rounded-lg text-center">
                  <p className="text-sm">💡 Mention this website for 2% extra discount!</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactFormTracked />
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-gray-700">
                  <strong>⚡ Quick Response Guarantee:</strong> We'll call you back within 30 minutes during business
                  hours!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-600 text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">🚨 Urgent Property Query?</h3>
          <p className="mb-4">For immediate assistance, call us directly</p>
          <TrackedButton
            type="phone"
            location="Emergency Contact"
            size="lg"
            className="bg-white text-red-700 hover:bg-gray-100"
          >
            Emergency Call: 9760872136
          </TrackedButton>
        </div>
      </div>
    </div>
  )
}
