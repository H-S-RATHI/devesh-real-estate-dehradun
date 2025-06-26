"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrackedButton } from "@/components/tracked-button"
import {
  MapPin,
  Eye,
  Star,
  Tag,
  TrendingUp,
  Zap,
  Droplets,
  FileCheck,
  MapIcon,
  Camera,
  Mail,
  Phone,
  PhoneCall,
  Search,
  MessageCircle,
  Heart,
  Share2,
  ArrowLeft,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Home
} from "lucide-react"
import { getPropertyById } from "@/lib/properties-data"
import { trackPropertyView } from "@/lib/facebook-pixel"

export default function PropertyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [property, setProperty] = useState<any>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  
  // Initialize Embla Carousel with type assertion
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }) as [any, any]
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  const onSelect = () => {
    if (!emblaApi) return
    setActiveImageIndex(emblaApi.selectedScrollSnap())
  }

  useEffect(() => {
    if (!emblaApi) return
    
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (params.id) {
      const propertyId = parseInt(params.id as string)
      const foundProperty = getPropertyById(propertyId)

      if (foundProperty) {
        setProperty(foundProperty)
        trackPropertyView(foundProperty.title, foundProperty.price)
      }
      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading property details...</p>
        </div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist.</p>
          <div
            onClick={() => router.push("/properties")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-flex items-center justify-center cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </div>
        </div>
      </div>
    )
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: `Check out this amazing property: ${property.title}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-white">


      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[5/3] rounded-2xl overflow-hidden" ref={emblaRef}>
              <div className="flex h-full">
                {property.images.map((image: string, index: number) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Property image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation buttons */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-md z-10"
                onClick={() => emblaApi && emblaApi.scrollPrev()}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-md z-10"
                onClick={() => emblaApi && emblaApi.scrollNext()}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {activeImageIndex + 1} / {property.images.length}
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-3">
              {property.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-opacity duration-200 ${
                    index === activeImageIndex ? "ring-2 ring-blue-500" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image 
                    src={image || "/placeholder.svg"} 
                    alt={`Thumbnail ${index + 1}`} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 10vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{property.location}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{property.title}</h1>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-green-100 text-green-800">{property.status}</Badge>
                {property.trending && (
                  <Badge className="bg-orange-100 text-orange-800">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gray-900">{property.price}</span>
                <span className="text-xl text-gray-600">{property.unit}</span>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex gap-3">
              <TrackedButton
                type="phone"
                location={property.location}
                className="flex-1 h-12 text-lg bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                Call Now
              </TrackedButton>

              <TrackedButton
                type="whatsapp"
                location={property.location}
                className="flex-1 h-12 text-lg bg-green-600 hover:bg-green-700 text-white"
                size="lg"
                href={`https://wa.me/919760872136?text=Hi, I'm interested in ${property.title} at ${property.location}. I saw the detailed page and would like to know more about pricing, availability, and site visit options.`}
              >
                WhatsApp
              </TrackedButton>
            </div>
                        {/* Quick Facts */}
                        <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Property ID</span>
                    <span className="text-sm font-medium text-gray-900">#{property.id}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Views</span>
                    <span className="text-sm font-medium text-gray-900">{property.views}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge
                      variant="secondary"
                      className={`${
                        property.status === "Available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {property.status}
                    </Badge>
                  </div>
                  {property.trending && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Trending</span>
                      <Badge className="bg-orange-100 text-orange-800">
                        🔥 Hot Property
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
        </div>

        {/* Property Details Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Location Highlights */}
            <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <CardContent className="p-5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-blue-100">
                  <div className="p-2 bg-blue-100/80 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Location Highlights</h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {property.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="p-3 bg-white/80 backdrop-blur-sm rounded-lg flex items-start gap-3 group hover:bg-white transition-all duration-200 shadow-sm">
                      <div className="mt-1.5 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Property Specifications */}
            <Card className="bg-gradient-to-br from-white to-amber-50 border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <CardContent className="p-5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-amber-100">
                  <div className="p-2 bg-amber-100/80 rounded-lg">
                    <Home className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Property Specifications</h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-200 shadow-sm">
                    <p className="text-xs font-medium text-amber-600 mb-1">Plot Size</p>
                    <p className="text-sm font-medium text-gray-800">{property.specifications.plotSize}</p>
                  </div>
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-200 shadow-sm">
                    <p className="text-xs font-medium text-amber-600 mb-1">Road Width</p>
                    <p className="text-sm font-medium text-gray-800">{property.specifications.roadWidth}</p>
                  </div>
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-200 shadow-sm">
                    <p className="text-xs font-medium text-amber-600 mb-1">Electricity</p>
                    <p className="text-sm font-medium text-gray-800">{property.specifications.electricity}</p>
                  </div>
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-200 shadow-sm">
                    <p className="text-xs font-medium text-amber-600 mb-1">Water Supply</p>
                    <p className="text-sm font-medium text-gray-800">{property.specifications.water}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100 hover:border-green-200 transition-all duration-200 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                        <FileCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-emerald-700">Approval Status</p>
                        <p className="text-xs text-emerald-600 mt-0.5">All necessary approvals obtained</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="bg-gradient-to-br from-white to-green-50 border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <CardContent className="p-5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-green-100">
                  <div className="p-2 bg-green-100/80 rounded-lg">
                    <Star className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Amenities</h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {property.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="p-3 bg-white/80 backdrop-blur-sm rounded-lg flex items-start gap-3 hover:bg-white transition-all duration-200 shadow-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-6 space-y-6 mt-8 lg:mt-0">
          {/* Contact Card */}
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interested in this property?</h3>
                <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              {property.status === "Available" ? (
                <div className="space-y-6">
                  {/* Quick Response Card */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Zap className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-800 mb-1">Quick Response Guaranteed</p>
                        <p className="text-xs text-blue-600">Get property details and schedule a visit within 2 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Special Offer Card */}
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Tag className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-amber-800 mb-1">Exclusive Special Offer</p>
                        <p className="text-xs text-amber-700">Book site visit this week and get special pricing</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-4 pt-2">
                    <div className="flex gap-3">
                      <TrackedButton
                        type="phone"
                        location={property.location}
                        className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                      >
                        Call Now
                      </TrackedButton>
                      <TrackedButton
                        type="whatsapp"
                        location={property.location}
                        className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-white font-medium"
                        href={`https://wa.me/919760872136?text=Hi, I'm interested in ${property.title} at ${property.location}`}
                      >
                        WhatsApp
                      </TrackedButton>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Sold Out Badge */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-100 text-center">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-green-800 mb-1">Project Successfully Completed</h4>
                    <p className="text-sm text-green-600">All plots sold to satisfied customers</p>
                  </div>

                  {/* Similar Properties CTA */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-600">Interested in similar properties?</p>
                      <p className="text-sm text-gray-500">We have other great options available</p>
                    </div>
                    <Button 
                      onClick={() => router.push('/properties')}
                      className="w-full bg-blue-600 hover:bg-blue-700 h-12 font-medium"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      View Similar Properties
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

        </div>
        </div>
      </div>
  
  )
}
