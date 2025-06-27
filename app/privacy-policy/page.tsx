import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, UserCheck, Database, Phone, Mail, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Devesh Real Estate Dehradun | Data Protection & Privacy",
  description: "Learn how Devesh Real Estate Dehradun protects your personal information. Our comprehensive privacy policy explains data collection, usage, and your rights.",
  keywords: "privacy policy, data protection, Devesh Real Estate Dehradun, personal information, cookies policy, data rights",
  openGraph: {
    title: "Privacy Policy - Devesh Real Estate Dehradun",
    description: "Your privacy matters to us. Learn how we protect and use your personal information.",
    images: ["/logo.png"],
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Company Information */}
        <Card className="mb-8 border-l-4 border-l-blue-600">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">About This Policy</h2>
                <p className="text-gray-700 mb-4">
                  This Privacy Policy applies to <strong>Devesh Real Estate Dehradun</strong>, powered by <strong>Doon Biosphere LLP</strong>. 
                  We are committed to protecting your personal information and being transparent about how we use it.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>9760872136</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>deveshrajput5245@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Dehradun, Uttarakhand</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📋 Personal Information You Provide</h3>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Contact Details:</strong> Name, phone number, email address</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Property Preferences:</strong> Budget, location preferences, property type</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Communication:</strong> Messages, inquiries, and feedback you send us</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📊 Automatically Collected Information</h3>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Website Usage:</strong> Pages visited, time spent, referral sources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Device Information:</strong> Browser type, IP address, device type</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Cookies:</strong> For website functionality and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">🏠 Property Services</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Show you relevant properties</li>
                  <li>• Schedule site visits</li>
                  <li>• Provide property information</li>
                  <li>• Process property inquiries</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">📞 Communication</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Respond to your inquiries</li>
                  <li>• Send property updates</li>
                  <li>• Provide customer support</li>
                  <li>• Share market insights</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">📈 Website Improvement</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Analyze website performance</li>
                  <li>• Improve user experience</li>
                  <li>• Track popular properties</li>
                  <li>• Optimize marketing efforts</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">⚖️ Legal Compliance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Comply with legal requirements</li>
                  <li>• Maintain business records</li>
                  <li>• Prevent fraud and abuse</li>
                  <li>• Resolve disputes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">🔗 Third-Party Services We Use</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">📊 Facebook Pixel</h3>
                <p className="text-sm text-gray-700">
                  We use Facebook Pixel to track website interactions and improve our advertising. 
                  This helps us show relevant ads to people interested in real estate.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">💬 WhatsApp Business</h3>
                <p className="text-sm text-gray-700">
                  When you click WhatsApp buttons, you'll be redirected to WhatsApp with a pre-filled message. 
                  Your conversation is subject to WhatsApp's privacy policy.
                </p>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">📧 EmailJS</h3>
                <p className="text-sm text-gray-700">
                  We use EmailJS to handle contact form submissions securely. 
                  Your form data is processed to send us your inquiry.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">How We Protect Your Data</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">🔒 Security Measures</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure servers and hosting</li>
                  <li>• Limited access to personal data</li>
                  <li>• Regular security updates</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">👥 Access Control</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Only authorized staff access data</li>
                  <li>• Staff trained on privacy practices</li>
                  <li>• Regular audit of data access</li>
                  <li>• Secure disposal of old records</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">✋ Your Rights</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">📞 Access & Update</h3>
                <p className="text-sm text-gray-700">
                  You can request to see what personal information we have about you or ask us to update it. 
                  Simply call us at <strong>9760872136</strong> or email <strong>deveshrajput5245@gmail.com</strong>.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">🚫 Opt-Out</h3>
                <p className="text-sm text-gray-700">
                  You can ask us to stop contacting you for marketing purposes. 
                  We'll still contact you about properties you've specifically inquired about.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">🗑️ Data Deletion</h3>
                <p className="text-sm text-gray-700">
                  You can request that we delete your personal information, subject to legal requirements 
                  and legitimate business needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies Policy */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">🍪 Cookies Policy</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What are Cookies?</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide you with a better experience.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">📊 Analytics</h4>
                  <p className="text-xs text-gray-600">Track website usage and performance</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">⚙️ Functional</h4>
                  <p className="text-xs text-gray-600">Remember your preferences and settings</p>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">🎯 Marketing</h4>
                  <p className="text-xs text-gray-600">Show relevant ads and content</p>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Managing Cookies:</strong> You can control cookies through your browser settings. 
                  However, disabling cookies may affect website functionality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">⏰ How Long We Keep Your Data</h2>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">📞 Active Inquiries</h3>
                  <p className="text-sm text-gray-700">
                    We keep your contact information as long as you're actively looking for properties 
                    or until you ask us to remove it.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">📋 Completed Transactions</h3>
                  <p className="text-sm text-gray-700">
                    For customers who have purchased properties, we retain records for legal and 
                    tax compliance purposes (typically 7 years).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">🌐 Website Analytics</h3>
                  <p className="text-sm text-gray-700">
                    Anonymous website usage data is retained for up to 2 years to help us 
                    improve our services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">📧 Marketing Communications</h3>
                  <p className="text-sm text-gray-700">
                    We keep marketing preferences until you opt out or ask us to delete your information.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time to reflect changes in our practices 
              or for legal reasons. When we make significant changes, we'll notify you by:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Updating the "Last updated" date at the top of this page</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Sending an email notification to our active customers</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Posting a notice on our website</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">📞 Questions About Privacy?</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or how we handle your personal information, 
              please don't hesitate to contact us:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-200" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-blue-200">9760872136</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-200" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-blue-200 text-sm">deveshrajput5245@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-200" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-blue-200 text-sm">Dehradun, Uttarakhand</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="text-sm">
                <strong>🤝 Our Promise:</strong> We're committed to protecting your privacy and will respond to all 
                privacy-related inquiries within 2 business days.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">
            This privacy policy is part of our commitment to transparency and data protection. 
            <br />
            <strong>Devesh Real Estate Dehradun</strong> – Powered by <strong>Doon Biosphere LLP</strong>
          </p>
        </div>
      </div>
    </div>
  )
}