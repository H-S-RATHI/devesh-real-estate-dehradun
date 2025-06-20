import Image from "next/image"
import { TrackedButton } from "@/components/tracked-button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/residential-development.png"
          alt="Beautiful plots in Bhauwala, Dehradun"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🌄 Escape the City Chaos
            <br />
            <span className="text-blue-400">Own Paradise in Bhauwala</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            🏞️ 30ft Wide Road | 🍃 Peaceful Surroundings | 📍 Prime Location
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
            <p className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">Just ₹17,000 per sq. yard</p>
            <p className="text-lg text-gray-200">(Negotiable)</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedButton
              type="phone"
              location="Hero Section"
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4"
            >
              Call Now: 9760872136
            </TrackedButton>

            <TrackedButton
              type="whatsapp"
              location="Hero Section"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
              href="https://wa.me/919760872136?text=Hi, I'm interested in your premium plots in Dehradun. Please share more details."
            >
              WhatsApp
            </TrackedButton>
          </div>

          <p className="mt-6 text-lg text-yellow-300 font-semibold animate-pulse">
            📍 Book Your Site Visit Today – Don't Miss Out!
          </p>
        </div>
      </div>
    </section>
  )
}
