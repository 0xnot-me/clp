import { site } from "@/lib/site"

const listings = [
  { label: "8-bedroom on Vrbo", href: site.vrbo8Bedroom },
  { label: "6-bedroom on Vrbo", href: site.vrbo6Bedroom },
  { label: "Airbnb", href: site.airbnb },
]

export default function GuestReviews() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-black">Guest reviews</h2>
        <p className="mt-4 text-lg text-gray-700">
          Casa La Playa is independently listed and reviewed on Vrbo and Airbnb. Read those reviews
          before you book. The house, staff and location are the same whether you book there or
          directly with us.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {listings.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-black px-5 py-3 font-semibold"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
