import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FacebookPixel } from "@/components/facebook-pixel"
import { InstantPopupFormSmart } from "@/components/instant-popup-form-smart"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devesh Real Estate Dehradun | Premium Plots Bhauwala & Thano Road | Starting ₹17,000/sq.yd",
  description:
    "Premium residential plots in Dehradun. Bhauwala plots ₹17,000/sq.yd, Thano Road plots ₹27,000/Gaj. Mountain views, clear titles. Call 9760872136",
  keywords:
    "Dehradun plots, Bhauwala real estate, Thano Road plots, residential plots Dehradun, property investment, mountain view plots",
  openGraph: {
    title: "Premium Plots in Dehradun - Devesh Real Estate",
    description: "Escape city chaos! Premium plots with mountain views starting ₹17,000/sq.yd",
    images: ["/bhauwala-plots.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FacebookPixel />
        <Header />
        {children}
        <Footer />
        <InstantPopupFormSmart />
      </body>
    </html>
  )
}
