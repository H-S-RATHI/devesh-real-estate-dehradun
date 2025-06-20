export const properties = [
  {
    id: 1,
    title: "Premium Bhauwala Plots",
    location: "Bhauwala, Dehradun",
    price: "₹17,000",
    unit: "per sq. yard",
    image: "/bhauwala-plots.png",
    features: ["30ft Wide Road", "Mountain Views", "Clear Title", "Peaceful Surroundings"],
    status: "Available",
    views: 47,
    trending: true,
    highlights: [
      "1 km – GRD College",
      "2 km – Dev Bhoomi University",
      "20 mins – Prem Nagar",
      "Close to IMA & Hospitals",
    ],
    description: "Escape the city chaos with these premium plots offering stunning mountain and forest views.",
  },
  {
    id: 2,
    title: "Thano Road Residential Plots",
    location: "Thano Road, Dehradun",
    price: "₹27,000",
    unit: "per Gaj",
    image: "/thano-site.png",
    features: ["15ft Wide Road", "Mountain View", "Forest View", "Highway Access"],
    status: "Available",
    views: 32,
    trending: true,
    highlights: [
      "100M Main Thano Road Highway",
      "6.5 KM Jolly Grant Airport",
      "20 KM Rishikesh",
      "12 KM Doiwala Railway Station",
    ],
    description: "Prime location plots with excellent connectivity to airport and major destinations.",
  },
  {
    id: 3,
    title: "Sahastradhara Road Project",
    location: "Asthal, Dehradun",
    price: "₹60,000",
    unit: "per sq. yard",
    image: "/sold-out.png",
    features: ["40ft & 30ft Wide Roads", "Mountain View", "Forest View", "All Facilities"],
    status: "SOLD OUT",
    views: 156,
    trending: false,
    highlights: ["6KM Sahastradhara Road", "4KM Maldevta", "9KM Clock Tower", "All Facilities Available"],
    description: "Successfully completed project - All plots sold! A testament to our quality and location selection.",
  },
]

export const getAvailableProperties = () => {
  return properties.filter((p) => p.status === "Available")
}

export const getSoldProjects = () => {
  return properties.filter((p) => p.status === "SOLD OUT")
}
