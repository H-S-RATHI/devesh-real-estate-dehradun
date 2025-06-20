import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🚨 Don't Wait - Limited Plots Available!</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Only 5 plots remaining at this special price. Book your site visit today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">📞 Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-200" />
                    <div>
                      <p className="font-semibold">Call/WhatsApp</p>
                      <p className="text-blue-100">9760872136</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-200" />
                    <div>
                      <p className="font-semibold">Office Location</p>
                      <p className="text-blue-100">2-nd Floor, Toothpick Building, Kirshali Chowk, Dehradun</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-200" />
                    <div>
                      <p className="font-semibold">Available</p>
                      <p className="text-blue-100">24/7 for urgent queries</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-red-600 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">⚡ URGENT NOTICE</h4>
              <p className="text-red-100">Price will increase by ₹2,000/sq.yd from next month!</p>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100 text-lg py-4">
                <a href="tel:9760872136" className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now: 9760872136</span>
                </a>
              </Button>

              {/* Transparent outline button */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-blue-700 text-lg py-4"
              >
                <a href="https://wa.me/919760872136?text=Hi, I'm interested in the Bhauwala plots. Please share more details.">
                  <MessageCircle className="w-5 h-5 inline-block align-middle" />
                  <span className="align-middle">WhatsApp for Details</span>
                </a>
              </Button>
            </div>


            <div className="text-center">
              <p className="text-blue-100 text-sm">💡 Pro Tip: Mention this website for an additional 2% discount!</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <h4 className="text-xl font-bold mb-2">🎁 Special Offer</h4>
            <p className="text-blue-100">Book site visit this week and get FREE legal consultation worth ₹5,000!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
