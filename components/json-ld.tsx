import { site } from "@/lib/site"

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

const amenity = (name: string) => ({ "@type": "LocationFeatureSpecification", name, value: true })

export const vacationRentalSchema = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  "@id": `${site.url}/#villa`,
  identifier: "casa-la-playa-puerto-vallarta",
  name: site.brand,
  alternateName: site.name,
  url: site.url,
  description:
    "Fully staffed 8-bedroom beachfront villa on Playa Camarones in downtown Puerto Vallarta, Mexico. 20,000 sq ft, 175 ft of beachfront, private chef, sleeps 16, about a 10-minute walk to the Malecón.",
  image: [
    `${site.url}/og-image.jpg`,
    `${site.url}/header2.jpg`,
    `${site.url}/header.jpg`,
    `${site.url}/Penthouse-view.jpg`,
    `${site.url}/Penthouse-pool-3rd-floor.jpg`,
    `${site.url}/Penthouse-Master-Suite_3rd_floor.jpg`,
    `${site.url}/Main-Building-Suite.jpg`,
    `${site.url}/2nd-Floor-Living-Room.jpg`,
  ],
  telephone: site.phoneE164,
  email: site.email,
  priceRange: site.priceRange,
  latitude: site.geo.latitude,
  longitude: site.geo.longitude,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: [site.instagram, site.vrbo8Bedroom, site.vrbo6Bedroom, site.airbnb],
  containsPlace: {
    "@type": "Accommodation",
    additionalType: "EntirePlace",
    occupancy: { "@type": "QuantitativeValue", maxValue: site.maxGuests },
    numberOfBedrooms: site.bedrooms,
    numberOfBathroomsTotal: site.fullBathrooms + site.halfBathrooms,
    numberOfFullBathrooms: site.fullBathrooms,
    numberOfPartialBathrooms: site.halfBathrooms,
    floorSize: { "@type": "QuantitativeValue", value: site.squareFeet, unitCode: "FTK" },
    amenityFeature: [
      amenity("beachAccess"),
      amenity("ocean view"),
      amenity("pool"),
      amenity("reflecting pool"),
      amenity("hot tub"),
      amenity("ac"),
      amenity("wifi"),
      amenity("kitchen"),
      amenity("elevator"),
      amenity("freeParking"),
      amenity("private chef"),
      amenity("daily housekeeping"),
      amenity("concierge"),
    ],
  },
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
}
