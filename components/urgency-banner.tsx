"use client"

import { useState, useEffect } from "react"
import { X, Clock } from "lucide-react"

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-red-600 text-white py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-center">
        <Clock className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">
          🔥 LIMITED TIME OFFER: Only 2 Corner plots left! Special price ends in{" "}
          <span className="font-bold">
            {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </span>
        <button onClick={() => setIsVisible(false)} className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
