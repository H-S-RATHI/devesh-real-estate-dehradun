export const properties = [
  {
    id: 1,
    title: "Premium Bhauwala Plots",
    location: "Bhauwala, Dehradun",
    price: "₹17,000",
    unit: "per sq. yard",
    image: "/Bhauwala-1.jpg",
    images: [
      "/Bhauwala-5.jpg",
      "/Bhauwala-1.jpg",
      "/Bhauwala-2.jpg",
      "/Bhauwala-3.jpg",
      "/Bhauwala-4.jpg"
    ],
    features: ["30ft Wide Road", "Mountain Views", "Peaceful Surroundings"],
    status: "Available",
    views: 1047,
    trending: true,
    highlights: [
      "1 km – GRD College",
      "2 km – Dev Bhoomi University",
      "20 mins – Prem Nagar",
      "Close to IMA & Hospitals",
    ],
    description: "Escape the city chaos with these premium plots offering stunning mountain and forest views.",
    detailedDescription: "Premium residential plots in Bhauwala offering the perfect balance of peaceful living and urban connectivity. These plots are strategically located to provide stunning mountain views while being close to educational institutions and healthcare facilities. The area is known for its clean air, natural beauty, and excellent investment potential.",
    specifications: {
      plotSize: "Various sizes available (100-500 sq yards)",
      roadWidth: "30 feet wide internal roads",
      electricity: "24/7 power supply available",
      water: "Bore well and municipal water",
      approval: "All necessary approvals in place"
    },
    amenities: ["Wide Roads", "Mountain Views", "Clean Environment", "Good Connectivity", "Educational Institutes Nearby"]
  },
  {
    id: 2,
    title: "Thano Road Residential Plots",
    location: "Thano Road, Dehradun",
    price: "₹27,000",
    unit: "per Gaj",
    image: "/Thano-1.jpg",
    images: [
      "/Thano-3.jpg",
      "/Thano-2.jpg",
      "/Thano-4.jpg",
      "/Thano-1.jpg",
      "/Thano-5.jpg"
    ],
    features: ["15ft Wide Road", "Mountain View", "Forest View", "Highway Access"],
    status: "Available",
    views: 1132,
    trending: true,
    highlights: [
      "100M Main Thano Road Highway",
      "6.5 KM Jolly Grant Airport",
      "20 KM Rishikesh",
      "12 KM Doiwala Railway Station",
    ],
    description: "Prime location plots with excellent connectivity to airport and major destinations.",
    detailedDescription: "Strategically located residential plots on Thano Road offering unparalleled connectivity to major destinations. Just minutes from Jolly Grant Airport and with easy access to Rishikesh, these plots are perfect for those who value connectivity without compromising on natural beauty. The location offers both mountain and forest views.",
    specifications: {
      plotSize: "Various sizes available (80-400 Gaj)",
      roadWidth: "15 feet wide approach road",
      electricity: "Grid connection available",
      water: "Himalayan spring water access",
      approval: "MDDA guidelines compliant"
    },
    amenities: ["Airport Connectivity", "Highway Access", "Mountain Views", "Forest Views", "Tourism Hub Access"]
  },
  {
    id: 3,
    title: "Sahastradhara Road Project",
    location: "Asthal, Dehradun",
    price: "₹60,000",
    unit: "per sq. yard",
    image: "/sold-1.png",
    images: [
      "/sold-1.png",
      "/sold-2.png",
      "/sold-3.png",
      "/sold-4.png",
      "/sold-5.png"
    ],
    features: ["40ft & 30ft Wide Roads", "Mountain View", "Forest View", "All Facilities"],
    status: "SOLD OUT",
    views: 5156,
    trending: false,
    highlights: ["6KM Sahastradhara Road", "4KM Maldevta", "9KM Clock Tower", "All Facilities Available"],
    description: "Successfully completed project - All plots sold! A testament to our quality and location selection.",
    detailedDescription: "Our flagship completed project that showcased our commitment to quality and customer satisfaction. This project featured premium plots with wide roads, all modern facilities, and excellent connectivity. All plots were successfully sold to satisfied customers, establishing our reputation in the market.",
    specifications: {
      plotSize: "200-800 sq yards (SOLD)",
      roadWidth: "40ft & 30ft wide roads",
      electricity: "Underground cables installed",
      water: "Municipal water & bore well",
      approval: "MDDA Approved"
    },
    amenities: ["Wide Roads", "All Facilities", "Prime Location", "Mountain Views", "Complete Infrastructure"]
  },
]

export const getAvailableProperties = () => {
  return properties.filter((p) => p.status === "Available")
}

export const getSoldProjects = () => {
  return properties.filter((p) => p.status === "SOLD OUT")
}

export const getPropertyById = (id: number) => {
  return properties.find((p) => p.id === id)
}
