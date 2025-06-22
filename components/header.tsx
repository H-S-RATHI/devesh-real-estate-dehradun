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
        <div className="container mx-auto flex items-center justify-between px-4 py-10 h-16">
          {/* Logo & Title */}
          <Link href="/" className="flex items-center space-x-3 flex-1 min-w-0">
            <Image
              src="/logo.png"
              alt="Devesh Real Estate Dehradun"
              width={60}
              height={60}
              className="rounded-full flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight truncate -mb-2">
                Devesh Real Estate Dehradun
              </h1>
              <div className="flex items-center space-x-1 pt-1">
                <Image
                  src="/Doon-logo.jpg"
                  alt="Doon Biosphere LLP"
                  width={30}
                  height={30}
                  className="rounded-full flex-shrink-0 "
                />
                <p className="text-xs md:text-sm text-blue-600 leading-tight truncate">
                  – Powered by Doon Biosphere LLP
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav + Call Button */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
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
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="tel:9760872136" className="flex items-center space-x-2 px-4 py-2">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex-shrink-0 text-gray-700 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 px-4 py-4">
            <nav className="flex flex-col space-y-3">
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
              <Button asChild className="bg-blue-600 hover:bg-blue-700 w-fit mt-2">
                <a href="tel:9760872136" className="flex items-center space-x-2 px-4 py-2">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
