import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Families",
      description: "Helped families find their dream properties",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Trusted expertise in Dehradun real estate",
    },
    {
      icon: TrendingUp,
      number: "25%",
      label: "Average ROI",
      description: "Consistent returns for our investors",
    },
    {
      icon: Shield,
      number: "100%",
      label: "Legal Compliance",
      description: "All properties with clear documentation",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Devesh Real Estate Dehradun – Powered by Doon Biosphere LLP</h1>
              <p className="text-lg text-gray-700 mb-6">
                With over 15 years of experience in Dehradun's real estate market, we have established ourselves as the
                most trusted name for property investments in the region.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is simple: to help families and investors find the perfect property that not only meets
                their needs but also provides excellent returns on investment.
              </p>
              <div className="flex items-center space-x-2">
                <Image src="/logo.png" alt="Devesh Real Estate Dehradun – Powered by Doon Biospehere LLP" width={60} height={60} className="rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900">Devesh Rajput</p>
                  <p className="text-blue-600">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/residential-development.png"
                alt="Our successful projects"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600">Numbers that speak for our commitment and success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <achievement.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</p>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🤝 Transparency</h3>
                <p className="text-gray-600">
                  Complete transparency in all dealings. No hidden costs, no false promises - just honest,
                  straightforward service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Customer First</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We go above and beyond to ensure you find the perfect property for
                  your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📈 Quality Investment</h3>
                <p className="text-gray-600">
                  We only recommend properties with genuine growth potential and excellent return on investment
                  prospects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Why Dehradun Families Trust Us</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-blue-100">Deep knowledge of Dehradun's best investment locations</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-blue-100">15+ years of successful property transactions</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Service</h3>
                <p className="text-blue-100">From property selection to legal documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
