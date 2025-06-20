import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Eye, Star, TrendingUp } from "lucide-react"

export function FeaturedProperty() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🏆 Featured Property - Bhauwala Plots</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium residential plots with stunning mountain views and modern amenities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="/residential-development.png"
              alt="Residential development in Bhauwala"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              🔥 HOT DEAL
            </div>
            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ✅ VERIFIED
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-blue-600">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Bhauwala, Dehradun</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900">Premium Residential Plots</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center space-x-2 text-green-600 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">Price Appreciation</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">25%</p>
                <p className="text-sm text-gray-600">Expected in 2 years</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center space-x-2 text-blue-600 mb-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-semibold">Views Today</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">47</p>
                <p className="text-sm text-gray-600">High demand!</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-900">Why This Plot?</span>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>✔️ Stunning Mountain & Forest Views</li>
                <li>✔️ All Essential Facilities Available</li>
                <li>✔️ 30ft Wide Approach Road</li>
                <li>✔️ Clear Title & Legal Documentation</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                <a href="tel:9760872136">Schedule Site Visit</a>
              </Button>
              <Button variant="outline" className="flex-1">
                <a href="https://wa.me/919760872136">Get Details</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
