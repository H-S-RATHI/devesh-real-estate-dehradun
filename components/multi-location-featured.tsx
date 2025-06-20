"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { TrackedButton } from "@/components/tracked-button"
import { MapPin, Eye, Star, TrendingUp, CheckCircle } from "lucide-react"
import { properties } from "@/lib/properties-data"
import { trackPropertyView } from "@/lib/facebook-pixel"
import { useEffect } from "react"

export function MultiLocationFeatured() {
  const availableProperties = properties.filter((p) => p.status === "Available")
  const soldProject = properties.find((p) => p.status === "SOLD OUT")

  useEffect(() => {
    // Track property views
    availableProperties.forEach((property) => {
      trackPropertyView(property.title, property.price)
    })
  }, [availableProperties])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🏆 Premium Properties in Dehradun</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple prime locations with excellent connectivity and investment potential
          </p>
        </div>

        {/* Available Properties */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {availableProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ✅ AVAILABLE
                  </div>
                  {property.trending && (
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      🔥 HOT DEAL
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center space-x-1">
                  <Eye className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">{property.views}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-blue-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{property.location}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.description}</p>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">{property.price}</span>
                  <span className="text-gray-600">{property.unit}</span>
                  <span className="text-sm text-gray-500">(Negotiable)</span>
                  {property.trending && <TrendingUp className="w-4 h-4 text-green-600" />}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Star className="w-4 h-4 text-blue-600 mr-2" />
                    Location Highlights
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {property.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <TrackedButton
                    type="phone"
                    location={property.location}
                    className="bg-blue-600 hover:bg-blue-700 flex-1"
                  >
                    Schedule Visit
                  </TrackedButton>
                  <TrackedButton
                    type="whatsapp"
                    location={property.location}
                    className="bg-green-600 hover:bg-green-700 flex-1"
                    href={`https://wa.me/919760872136?text=Hi, I'm interested in ${property.title} at ${property.location}. Please share more details.`}
                  >
                    Get Details
                  </TrackedButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Story - Sold Project */}
        {soldProject && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🎉 Success Story - Project Completed</h3>
              <p className="text-gray-600">Our track record speaks for itself</p>
            </div>

            <Card className="relative max-w-2xl mx-auto overflow-hidden">
            <Image
                  src={soldProject.image || "/placeholder.svg"}
                  alt={soldProject.title}
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              {/* MDDA Approved Stamp */}
              <div className="absolute top-3 right-4 bg-yellow-500 text-white px-6 py-1 rounded-full text-sm font-semibold transform shadow-md">
                MDDA Approved
              </div>
              <div className="px-6 pt-4">
                <div className="flex items-center space-x-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{soldProject.location}</span>
                </div>
              </div>
              <CardContent className="px-6 pb-6 pt-2">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{soldProject.title}</h4>
                  </div>
                  <div className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold -mt-6">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    SOLD OUT
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{soldProject.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Project Highlights:</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {soldProject.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Final Price:</h5>
                    <p className="text-2xl font-bold text-green-600">
                      {soldProject.price} {soldProject.unit}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">All plots successfully sold to satisfied customers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
