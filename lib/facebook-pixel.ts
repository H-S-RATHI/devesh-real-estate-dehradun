declare global {
  interface Window {
    fbq: any
  }
}

export const FB_PIXEL_ID = "1491169048516176"

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView")
  }
}

export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters)
  }
}

export const trackContact = () => {
  trackEvent("Contact", {
    content_name: "Real Estate Inquiry",
    content_category: "Real Estate",
  })
}

export const trackPhoneCall = (location: string) => {
  trackEvent("Contact", {
    content_name: "Phone Call",
    content_category: "Real Estate",
    custom_parameter_1: location,
  })
}

export const trackWhatsApp = (location: string) => {
  trackEvent("Contact", {
    content_name: "WhatsApp Message",
    content_category: "Real Estate",
    custom_parameter_1: location,
  })
}

export const trackPropertyView = (propertyName: string, price: string) => {
  trackEvent("ViewContent", {
    content_name: propertyName,
    content_category: "Real Estate",
    value: price,
    currency: "INR",
  })
}

export const trackLead = (propertyName: string) => {
  trackEvent("Lead", {
    content_name: propertyName,
    content_category: "Real Estate",
  })
}
