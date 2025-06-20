import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, TrendingUp, Clock, MapPin } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "100% Legal & Verified",
      description: "All properties come with clear titles and proper documentation",
      color: "text-green-600",
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Trusted by 500+ families in Dehradun region",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "High ROI Guaranteed",
      description: "Average 20-25% appreciation in prime locations",
      color: "text-purple-600",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Personal consultation from property experts",
      color: "text-orange-600",
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast documentation and registration process",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Handpicked locations with growth potential",
      color: "text-red-600",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Devesh Real Estate?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in finding the perfect property investment in Dehradun
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🎯 Success Rate: 98%</h3>
          <p className="text-lg mb-4">Over 500 satisfied customers have found their dream properties with us</p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm">Happy Families</p>
            </div>
            <div>
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">25%</p>
              <p className="text-sm">Avg. ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
