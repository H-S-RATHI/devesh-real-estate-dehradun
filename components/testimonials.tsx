import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Bhauwala Plot Owner",
      rating: 5,
      text: "Devesh ji helped us find the perfect plot with mountain views. The documentation was smooth and transparent. Highly recommended!",
      investment: "Bought 200 sq.yd plot",
    },
    {
      name: "Priya Sharma",
      location: "Satisfied Customer",
      rating: 5,
      text: "Excellent service and honest dealing. The location is exactly as promised - peaceful yet well-connected. Great investment!",
      investment: "Bought 150 sq.yd plot",
    },
    {
      name: "Amit Verma",
      location: "Happy Investor",
      rating: 5,
      text: "Professional approach and genuine guidance. The plot value has already increased by 15% in just 8 months. Thank you Devesh Real Estate!",
      investment: "Bought 300 sq.yd plot",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">💬 What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real customers who found their dream properties with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-2" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.investment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Customer Satisfaction: 98%</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-green-600">500+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">4.9/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">100%</p>
              <p className="text-gray-600">Legal Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
