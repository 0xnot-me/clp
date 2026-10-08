import Image from "next/image"
import Link from "next/link"
import { rentalOptions, site, usd } from "@/lib/site"

export default function Features() {
  const features = [
    {
      title: "Discover Beauty",
      description: "Delight in natural elegance",
      image: "/1.jpg",
      alt: "Aerial view of Casa La Playa's modern white villa, palm trees and pool on the beach in Puerto Vallarta",
    },
    {
      title: "Experience Pleasure",
      description: "Indulge in pure luxury",
      image: "/2.jpg",
      alt: "Casa La Playa seen from the water on Playa Camarones beach, Puerto Vallarta",
    },
    {
      title: "Refresh the Spirit",
      description: "Retreat to a tropical oasis",
      image: "/3.jpg",
      alt: "Casa La Playa pool, sun loungers and gardens overlooking Banderas Bay at dusk",
    },
    {
      image: "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0002_4.png",
      alt: "Pool, jacuzzi and outdoor dining table beside the ocean at Casa La Playa",
    },  
    {
      image: "/5.jpg",
      alt: "Oceanfront terrace and dining room with glass walls at Casa La Playa",
    },  
    {
      image: "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0006_8.png",
      alt: "Beachfront dinner table set at night with the villa lit up behind it",
    },  
  ]

  return (
    <section id="features" className="py-23 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto">
            Casa La Playa Puerto Vallarta: Private Beachfront Villa Rental on Playa Camarones
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rent 6, 7 or all 8 bedrooms. Private chef and staff included. On the sand, walking distance to everything.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/rates" className="inline-block bg-gray-900 text-white px-8 py-3 font-medium">
              SEE RATES: FROM {usd(rentalOptions[0].nightly)}/NIGHT
            </Link>
            <Link href={site.telHref} className="inline-block border border-gray-900 px-8 py-3 font-medium">
              CALL US NOW!
            </Link>
            <a href={site.smsHref} className="inline-block border border-gray-900 px-8 py-3 font-medium">
              TEXT US
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className={`text-center ${index >= 3 ? 'space-y-0' : 'space-y-4'}`}>
              {index < 3 && (
                <>
                  <h2 className="text-2xl font-bold">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
                </>
              )}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={feature.image} 
                  alt={feature.alt} 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

