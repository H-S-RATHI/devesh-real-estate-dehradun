"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { trackPhoneCall, trackWhatsApp, trackContact } from "@/lib/facebook-pixel"
import { Phone, MessageCircle } from "lucide-react"

interface TrackedButtonProps {
  type: "phone" | "whatsapp" | "contact"
  location?: string
  className?: string
  size?: "default" | "sm" | "lg"
  children?: React.ReactNode
  href?: string
}

export function TrackedButton({ type, location = "General", className, size, children, href }: TrackedButtonProps) {
  const handleClick = () => {
    switch (type) {
      case "phone":
        trackPhoneCall(location)
        break
      case "whatsapp":
        trackWhatsApp(location)
        break
      case "contact":
        trackContact()
        break
    }
  }

  if (type === "phone") {
    return (
      <Button size={size} className={className} onClick={handleClick}>
        <a href="tel:9760872136" className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>{children || "Call Now"}</span>
        </a>
      </Button>
    )
  }

  if (type === "whatsapp") {
    return (
      <Button size={size} className={className} onClick={handleClick}>
        <a href={href || "https://wa.me/919760872136"} className="flex items-center space-x-2">
          <MessageCircle className="w-4 h-4" />
          <span>{children || "WhatsApp"}</span>
        </a>
      </Button>
    )
  }

  return (
    <Button size={size} className={className} onClick={handleClick}>
      {children}
    </Button>
  )
}
