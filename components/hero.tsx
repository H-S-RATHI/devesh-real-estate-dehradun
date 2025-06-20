import Image from "next/image"
import { TrackedButton } from "@/components/tracked-button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image with dark gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/residential-development.png"
          alt="Beautiful plots in Bhauwala, Dehradun"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay: darken background for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight">
            🌄 Escape the City Chaos
            <br />
            <span className="text-blue-500">Own Paradise in Bhauwala</span>
          </h1>

          {/* Subheading / tagline */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-md">
            🏞️ 30ft Wide Road | 🍃 Peaceful Surroundings | 📍 Prime Location
          </p>

          {/* Pricing block with backdrop */}
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 drop-shadow-xl">
            <p className="text-2xl sm:text-3xl font-bold text-teal-300 mb-2 drop-shadow-md">
              Just ₹17,000 per sq. yard
            </p>
            <p className="text-base sm:text-lg text-gray-200">(Negotiable)</p>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedButton
              type="phone"
              location="Hero Section"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 drop-shadow"
            >
              Call Now: 9760872136
            </TrackedButton>

            <TrackedButton
              type="whatsapp"
              location="Hero Section"
              size="lg"
              href="https://wa.me/919760872136?text=Hi, I'm interested in your premium plots in Dehradun. Please share more details."
              className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-6 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 drop-shadow"
            >
              WhatsApp
            </TrackedButton>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-lg sm:text-xl text-yellow-600 font-semibold animate-pulse drop-shadow-md">
            📍 Book Your Site Visit Today – Don't Miss Out!
          </p>
        </div>
      </div>
    </section>
  )
}
