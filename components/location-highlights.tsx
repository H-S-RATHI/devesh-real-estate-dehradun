import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Building, Heart } from "lucide-react"

export function LocationHighlights() {
  const locations = [
    {
      icon: GraduationCap,
      name: "GRD College",
      distance: "1 km",
      time: "2 mins drive",
      color: "text-blue-600",
    },
    {
      icon: GraduationCap,
      name: "Dev Bhoomi University",
      distance: "2 km",
      time: "5 mins drive",
      color: "text-green-600",
    },
    {
      icon: Building,
      name: "Prem Nagar",
      distance: "20 mins",
      time: "City center",
      color: "text-purple-600",
    },
    {
      icon: Heart,
      name: "IMA & Hospitals",
      distance: "Nearby",
      time: "Healthcare",
      color: "text-red-600",
    },
    {
      icon: GraduationCap,
      name: "Uttaranchal University",
      distance: "Close",
      time: "Education hub",
      color: "text-orange-600",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📍 Location Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategically located with easy access to educational institutions, healthcare, and city center
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100`}>
                    <location.icon className={`w-6 h-6 ${location.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
                    <p className="text-gray-600">{location.distance}</p>
                    <p className="text-sm text-gray-500">{location.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Perfect Location Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Easy connectivity to major educational institutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Quick access to healthcare facilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Well-connected to city center and markets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Peaceful environment away from city chaos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>High potential for future development</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">🚀 Investment Potential</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Price:</span>
                  <span className="font-semibold">₹17,000/sq.yd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected (2 years):</span>
                  <span className="font-semibold text-green-600">₹22,000/sq.yd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Potential:</span>
                  <span className="font-semibold text-green-600">25-30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
