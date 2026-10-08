import Image from "next/image"
import Link from "next/link"
import { BedDouble, ChefHat, ConciergeBell, ShieldCheck, Sparkles, Waves } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import QuoteCta from "@/components/quote-cta"
import { pageMetadata } from "@/lib/metadata"
import { holidayRates, rentalOptions, usd } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Casa La Playa Rates | 6–8 Bedroom Beachfront Villa, Puerto Vallarta",
  description:
    "Nightly rates for Casa La Playa Puerto Vallarta: 6 bedrooms $3,200, 7 bedrooms $4,000, full 8-bedroom house $5,000. Chef and full staff included. Sleeps 16.",
  path: "/rates",
})

const optionPhotos = [
  { src: "/01.jpg", alt: "Casa La Playa garden, pool and villa" },
  { src: "/02.jpg", alt: "Sunset over Banderas Bay from Casa La Playa" },
  { src: "/03.jpg", alt: "Casa La Playa full house on Playa Camarones" },
]

const included = [
  { icon: ChefHat, label: "Private chef for breakfast and lunch" },
  { icon: Sparkles, label: "Two maids, daily housekeeping" },
  { icon: ShieldCheck, label: "Night watchman" },
  { icon: ConciergeBell, label: "Bilingual concierge" },
  { icon: Waves, label: "2 pools, jacuzzi, on the beach" },
  { icon: BedDouble, label: "Oceanfront suites with private baths" },
]

const photos = [
  { src: "/Main-Building-Suite.jpg", alt: "Oceanfront bedroom suite at Casa La Playa" },
  { src: "/Penthouse-reflecting-pool-3rd-floor.jpg", alt: "Penthouse reflecting pool with ocean view" },
  { src: "/2nd-Floor-Living-Room.jpg", alt: "Second-floor living and dining room" },
  { src: "/Penthouse-Master-Suite_3rd_floor.jpg", alt: "Penthouse master suite on the third floor" },
  { src: "/Penthouse-night-view.jpg", alt: "Penthouse lounge and pool at night" },
  { src: "/1st-Floor-Kitchen-Lounge.jpg", alt: "First-floor kitchen lounge" },
]

export default function RatesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Rates" />
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 min-w-0 space-y-12">
            <section>
              <h2 className="text-3xl font-black mb-1">Nightly Rates (USD)</h2>
              <p className="text-lg text-gray-600 mb-6">Chef and full staff included. One group at a time.</p>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                {rentalOptions.map((o, i) => (
                  <div key={o.bedrooms} className="rounded-xl border overflow-hidden flex sm:block">
                    <div className="relative w-2/5 shrink-0 sm:w-auto sm:aspect-[4/3]">
                      <Image src={optionPhotos[i].src} alt={optionPhotos[i].alt} fill sizes="(min-width: 640px) 25vw, 40vw" className="object-cover" />
                    </div>
                    <div className="p-4 min-w-0">
                      <h3 className="text-xl font-bold">{o.bedrooms === 8 ? "Full House: 8 Bedrooms" : `${o.bedrooms} Bedrooms`}</h3>
                      <p className="text-gray-600">Up to {o.maxGuests} guests</p>
                      <p className="text-2xl sm:text-3xl font-black mt-2">
                        {usd(o.nightly)}
                        <span className="text-base font-semibold text-gray-600">/night</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-lg mt-4">
                <span className="font-semibold">Holidays (8 bedrooms only):</span> Christmas week {usd(holidayRates.christmas)}/night,
                Easter week {usd(holidayRates.easter)}/night.
              </p>
            </section>

            <QuoteCta />

            <section>
              <h2 className="text-2xl font-bold mb-4">Every Stay Includes</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {included.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3 text-lg">
                    <Icon className="w-7 h-7 shrink-0" aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {photos.map((p) => (
                  <Link key={p.src} href="/gallery" className="relative aspect-square overflow-hidden rounded-lg">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 22vw, 50vw" className="object-cover hover:scale-105 transition-transform" />
                  </Link>
                ))}
              </div>
              <div className="text-center mt-4">
                <Link href="/gallery" className="inline-block border-2 border-black px-8 py-3 font-semibold">
                  See All Photos
                </Link>
              </div>
            </section>

            <section className="text-base text-gray-600 space-y-1">
              <p>Rates are subject to 19% hotel and local taxes and may change until your booking is confirmed.</p>
              <p>Christmas and New Year&apos;s require the full 8 bedrooms with a 1-week minimum.</p>
              <p>Groceries and dinner chef service are extra. See <Link href="/dining" className="underline">dining</Link> and the <Link href="/faq" className="underline">FAQ</Link>.</p>
            </section>
          </div>

          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
