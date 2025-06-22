import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Home, Info } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 md:pr-8">
            {/* Logo + Powered By */}
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Devesh Real Estate Dehradun"
                width={60}
                height={60}
                className="rounded-full flex-shrink-0"
              />
              <div>
                <h3 className="text-[1.1rem] font-bold">Devesh Real Estate Dehradun</h3>
                <div className="flex items-center space-x-2 pt-1">
                  <Image
                    src="/Doon-logo.jpg"
                    alt="Doon Biosphere LLP"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <p className="text-[.8rem] text-blue-400">– Powered by Doon Biosphere LLP</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium real estate investments in Dehradun. 15+ years of experience in helping
              families find their dream properties.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577071786295" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/devesh_real_estate_dehradun/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <div className="flex items-center space-x-2">
                  <Home className="w-4 h-4 text-blue-400" />
                  <Link href="/" className="text-gray-400 hover:text-blue-400">
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <Link href="/properties" className="text-gray-400 hover:text-blue-400">
                    Properties
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <Info className="w-4 h-4 text-blue-400" />
                  <Link href="/about" className="text-gray-400 hover:text-blue-400">
                    About Us
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <Link href="/contact" className="text-gray-400 hover:text-blue-400">
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-400">9760872136</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:deveshrajput5245@gmail.com" className="text-gray-400 hover:text-blue-400 break-all">
                  deveshrajput5245@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-400">Dehradun, Uttarakhand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Devesh Real Estate Dehradun – Powered by Doon Biosphere LLP. All rights reserved. |
            <span className="text-blue-400"> Trusted by 500+ families</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
