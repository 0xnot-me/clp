import { site, staff } from "@/lib/site"

export default function FactSheet() {
  const facts = [
    ["Location", `Beachfront on ${site.beach}, ${site.address.neighborhood}, downtown ${site.address.city}, Jalisco, Mexico`],
    ["Bedrooms", "8 oceanfront suites (rent 6, 7 or all 8)"],
    ["Guests", `Up to ${site.maxGuests}`],
    ["Bathrooms", `${site.fullBathrooms} full, ${site.halfBathrooms} half`],
    ["Size", "20,000 sq. ft., 3 stories with elevator, 175 ft. of beachfront"],
    ["Pools", "2 pools and a jacuzzi"],
    ["Staff", staff.join("; ")],
    ["Meals", "Breakfast and lunch chef service included; dinner available for a fee; guests reimburse groceries"],
    ["Distances", "About a 10-minute walk to the Malecón; 15–20 minutes by car to Puerto Vallarta airport (PVR)"],
    ["Rates", `${site.priceRange} plus 19% hotel and local taxes`],
  ]

  return (
    <section aria-labelledby="facts-heading" className="bg-gray-50 rounded-lg p-6 mb-10 not-prose">
      <h2 id="facts-heading" className="text-2xl font-bold mb-4">Casa La Playa at a Glance</h2>
      <dl className="grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-2 text-base">
        {facts.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="font-semibold">{label}</dt>
            <dd className="text-gray-700">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
