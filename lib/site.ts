export const site = {
  name: "Casa La Playa",
  brand: "Casa La Playa Puerto Vallarta",
  url: "https://casalaplaya.com",
  email: "info@casalaplaya.com",
  phoneDisplay: "310-986-2299",
  phoneE164: "+13109862299",
  telHref: "tel:+13109862299",
  instagram: "https://www.instagram.com/casalaplaya/",
  vrbo8Bedroom: "https://www.vrbo.com/906203",
  vrbo6Bedroom: "https://www.vrbo.com/405807",
  address: {
    street: "Calle Paraguay 1201",
    neighborhood: "Colonia 5 de Diciembre",
    city: "Puerto Vallarta",
    region: "Jalisco",
    postalCode: "48350",
    country: "MX",
  },
  geo: { latitude: 20.618362, longitude: -105.231918 },
  beach: "Playa Camarones",
  bedrooms: 8,
  fullBathrooms: 8,
  halfBathrooms: 2,
  maxGuests: 16,
  squareFeet: 20000,
  beachfrontFeet: 175,
  priceRange: "$3,200–$5,000 USD per night",
  ogImage: "/og-image.jpg",
}

export type Bedrooms = 6 | 7 | 8

export const rentalOptions: { bedrooms: Bedrooms; maxGuests: number; nightly: number }[] = [
  { bedrooms: 6, maxGuests: 12, nightly: 3200 },
  { bedrooms: 7, maxGuests: 14, nightly: 4000 },
  { bedrooms: 8, maxGuests: 16, nightly: 5000 },
]

// Christmas: nights from Dec 24 through Dec 31 (check-out Jan 1). Easter: Palm Sunday through Holy Saturday.
// Both are 8 bedrooms only; Christmas and New Year's also require a 7-night minimum.
export const holidayRates = {
  christmas: 7000,
  easter: 5500,
  christmasMinNights: 7,
}

export const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

export const staff = [
  "Private chef (breakfast and lunch included)",
  "Two maids with daily housekeeping",
  "Night watchman",
  "Bilingual concierge with an office across the street",
  "Bartender available on request",
]
