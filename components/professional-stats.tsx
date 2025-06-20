import { Card, CardContent } from "@/components/ui/card"

export function ProfessionalStats() {
  const stats = [
    {
      number: "₹50+ Cr",
      label: "Properties Sold",
      description: "Total value of transactions",
      color: "text-blue-600",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on customer feedback",
      color: "text-green-600",
    },
    {
      number: "24hrs",
      label: "Response Time",
      description: "Average query response",
      color: "text-red-600",
    },
    {
      number: "100%",
      label: "Legal Compliance",
      description: "All properties verified",
      color: "text-blue-600",
    },
  ]

  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional Excellence</h2>
          <p className="text-gray-600">Trusted by leading families and investors in Dehradun</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
