"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { ProfessionalHeaderBanner } from "@/components/professional-header-banner"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <ProfessionalHeaderBanner />
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 min-w-0 flex-1 mr-4">
              {/* Main Logo */}
              <Image
                src="/logo.png"
                alt="Devesh Real Estate Dehradun"
                width={50}
                height={50}
                className="rounded-full flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight truncate">
                  Devesh Real Estate Dehradun
                </h1>
                {/* Powered By with Doon Biosphere logo */}
                <div className="flex items-center space-x-1 pt-1">
                  <Image
                    src="/Doon-logo.jpg"
                    alt="Doon Biosphere LLP"
                    width={16}
                    height={16}
                    className="rounded-full flex-shrink-0"
                  />
                  <p className="text-xs md:text-sm text-blue-600 leading-tight truncate">
                    – Powered by Doon Biosphere LLP
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/properties" className="text-gray-700 hover:text-blue-600 transition-colors">
                Properties
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Call Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="tel:9760872136" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex-shrink-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link href="/properties" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Properties
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 w-fit">
                  <a href="tel:9760872136" className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}