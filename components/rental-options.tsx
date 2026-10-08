import Image from "next/image"
import Link from "next/link"
import { rentalOptions, usd } from "@/lib/site"

const cards = [
  { title: "6 Bedrooms", image: "/01.jpg", alt: "Casa La Playa garden, pool and villa, 6-bedroom option" },
  { title: "7 Bedrooms", image: "/02.jpg", alt: "Sunset over Banderas Bay from Casa La Playa, 7-bedroom option" },
  { title: "Full House: 8 Bedrooms", image: "/03.jpg", alt: "Casa La Playa full house, 8-bedroom beachfront villa in Puerto Vallarta" },
]

export default function RentalOptions() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed tracking-wide mb-16">
          Casa La Playa is a private beachfront villa rental in Puerto Vallarta, right on Playa Camarones and a
          10-minute walk to the Malecón. Up to 16 guests, a private chef and full staff, and sunsets over Banderas
          Bay every night.
        </p>

        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">Rental Options &amp; Rates</h2>
        <p className="text-center text-gray-600 mb-12">
          One group at a time. Chef and staff included. Book direct and skip booking-site fees.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const option = rentalOptions[index]
            return (
              <div key={card.title} className="text-center">
                <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
                <p className="text-gray-600">Up to {option.maxGuests} guests</p>
                <p className="text-xl font-semibold mb-6">
                  {usd(option.nightly)} <span className="text-base font-normal text-gray-600">per night</span>
                </p>
                <div className="relative group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href="/rates#quote"
                    className="absolute bottom-0 left-0 right-0 bg-[#333333] text-white py-4 font-semibold tracking-[0.2em] text-sm uppercase text-center hover:bg-black"
                  >
                    Get Your Exact Quote
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/rates" className="inline-block bg-gray-900 text-white px-8 py-3 font-medium tracking-wide">
            SEE ALL RATES &amp; HOLIDAY PRICING
          </Link>
        </div>
      </div>
    </section>
  )
}
