"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { FB_PIXEL_ID, pageview } from "@/lib/facebook-pixel"

export function FacebookPixel() {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize Facebook Pixel
    if (typeof window !== "undefined") {
      ;((f: any, b, e, v) => {
        let n: any, t: any, s: any;
        if (f.fbq) return
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = !0
        n.version = "2.0"
        n.queue = []
        t = b.createElement(e)
        t.async = !0
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")

      window.fbq("init", FB_PIXEL_ID)
      window.fbq("track", "PageView")
    }
  }, [])

  useEffect(() => {
    // Track page views on route changes
    pageview()
  }, [pathname])

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  )
}
