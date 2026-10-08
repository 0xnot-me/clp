import Image from "next/image"
import Link from "next/link"
import { Footprints, Lock, Plane, Waves } from "lucide-react"

const points = [
  {
    icon: Waves,
    title: "Right on the beach",
    text: "Step out the door onto Playa Camarones for swimming, jet skis, parasailing and sunsets over Banderas Bay.",
  },
  {
    icon: Footprints,
    title: "Walk to everything",
    text: "Restaurants, bars, nightclubs, art galleries, shopping and the Malecón are all walking distance. No car, no waiting on taxis.",
  },
  {
    icon: Plane,
    title: "Close to the airport",
    text: "Just 15–20 minutes from Puerto Vallarta International Airport, so you start your vacation sooner.",
  },
  {
    icon: Lock,
    title: "Complete privacy",
    text: "We rent to one group at a time, with staff on site and a night watchman, so the whole villa is yours.",
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
            Many Puerto Vallarta villas sit up in the hills or far from town, where every dinner, drink or outing means
            a car or a taxi. At Casa La Playa you&apos;re on the beach and in the middle of everything, and when you
            want to stay in, you have the whole place to yourselves.
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
