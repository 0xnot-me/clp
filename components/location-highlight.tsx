import Image from "next/image"
import Link from "next/link"
import { Footprints, Lock, Plane, Waves } from "lucide-react"

const points = [
  {
    icon: Waves,
    title: "Right on the beach",
    text: "Step out the door onto Playa Camarones.",
  },
  {
    icon: Footprints,
    title: "Walk to everything",
    text: "Restaurants, bars, clubs, galleries and the Malecón. No car needed.",
  },
  {
    icon: Plane,
    title: "Close to the airport",
    text: "15–20 minutes from the Puerto Vallarta airport.",
  },
  {
    icon: Lock,
    title: "Complete privacy",
    text: "One group at a time. The whole villa is yours.",
  },
]

export default function LocationHighlight() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-600">What makes Casa La Playa special</p>
          <h2 className="text-3xl md:text-5xl font-black mt-2">Location, Location, Location</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Most villas are up in the hills, so every outing means a taxi. Here you&apos;re on the beach and walking
            distance to everything, with total privacy when you stay in.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/header2.jpg"
              alt="Casa La Playa on the sand at Playa Camarones with downtown Puerto Vallarta behind it"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="w-8 h-8 mb-2" aria-hidden="true" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-lg text-gray-700 mt-1 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/location" className="inline-block bg-gray-900 text-white px-8 py-3 font-medium tracking-wide">
            SEE THE LOCATION
          </Link>
        </div>
      </div>
    </section>
  )
}
