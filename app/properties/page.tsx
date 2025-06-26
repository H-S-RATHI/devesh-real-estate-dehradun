"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrackedButton } from "@/components/tracked-button"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Eye, TrendingUp, CheckCircle } from "lucide-react"
import { properties } from "@/lib/properties-data"
import { trackPropertyView } from "@/lib/facebook-pixel"
import { useEffect } from "react"

export default function PropertiesPage() {
  useEffect(() => {
    // Track property page view
    properties.forEach((property) => {
      trackPropertyView(property.title, property.price)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🏘️ Our Property Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium properties across multiple prime locations in Dehradun
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <Link href={`/properties/${property.id}`} className="block">
                <div className="relative">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <Badge
                      className={`${
                        property.status === "Available"
                          ? "bg-green-600"
                          : property.status === "SOLD OUT"
                            ? "bg-red-600"
                            : "bg-orange-600"
                      }`}
                    >
                      {property.status === "SOLD OUT" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {property.status}
                    </Badge>
                    {property.trending && property.status === "Available" && (
                      <Badge className="bg-orange-600">🔥 Trending</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center space-x-1">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">{property.views}</span>
                  </div>
                  {/* Click to view overlay */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium text-gray-900">Click to view full details</span>
                    </div>
                  </div>
                </div>
              </Link>

              <CardContent className="p-6">
                <Link href={`/properties/${property.id}`} className="block hover:bg-gray-50 -mx-6 -mt-6 px-6 pt-6 mb-4 transition-colors duration-300">
                  <div className="flex items-center space-x-2 text-blue-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.description}</p>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-green-600">{property.price}</span>
                    <span className="text-gray-600">{property.unit}</span>
                    {property.status === "Available" && <span className="text-sm text-gray-500">(Negotiable)</span>}
                    {property.trending && <TrendingUp className="w-4 h-4 text-green-600" />}
                  </div>
                </Link>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Location Highlights:</h4>
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
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3">
                  <Link href={`/properties/${property.id}`}>
                    <div
                      className="bg-blue-600 hover:bg-blue-700 w-full text-center text-white px-4 py-2 rounded-md cursor-pointer"
                    >
                      {property.status === "Available" ? "🏠 View Full Details & Gallery" : "📊 View Success Story"}
                    </div>
                  </Link>
                  
                  {property.status === "Available" ? (
                    <div className="flex space-x-2">
                      <TrackedButton
                        type="phone"
                        location={property.location}
                        className="bg-red-600 hover:bg-red-700 flex-1"
                      >
                        Call Now
                      </TrackedButton>
                      <TrackedButton
                        type="whatsapp"
                        location={property.location}
                        className="bg-green-600 hover:bg-green-700 flex-1"
                        href={`https://wa.me/919760872136?text=Hi, I'm interested in ${property.title} at ${property.location}. Please share more details.`}
                      >
                       WhatsApp
                      </TrackedButton>
                    </div>
                  ) : (
                    <div className="bg-gray-100 p-3 rounded text-center">
                      <p className="text-gray-600 font-medium">✅ Successfully Completed Project</p>
                      <p className="text-sm text-gray-500">All plots sold to satisfied customers</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚨 Looking for Something Specific?</h2>
          <p className="text-lg mb-6">We have exclusive off-market properties and upcoming projects</p>
          <TrackedButton
            type="phone"
            location="Properties Page CTA"
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            Call for Exclusive Listings
          </TrackedButton>
        </div>
      </div>
    </div>
  )
}
