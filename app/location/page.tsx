import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Casa La Playa Location | Playa Camarones, Downtown Puerto Vallarta",
  description:
    "Casa La Playa sits on Playa Camarones in downtown Puerto Vallarta, about a 10-minute walk to the Malecón and 15–20 minutes from the airport.",
  path: "/location",
})

const distances = [
  ["Playa Camarones beach", "Right outside the gate"],
  ["Teatro Vallarta", "About a 2-minute walk"],
  ["Malecón boardwalk", "About a 10-minute walk (0.8 km)"],
  ["Old Town and the Romantic Zone", "A short walk or taxi ride"],
  ["Puerto Vallarta International Airport (PVR)", "15–20 minutes by car"],
]

export default function LocationPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Location: Playa Camarones" />
      <div className="pt-2 min-h-screen">
        <div className="container mx-auto px-4 py-16">
        <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
            Casa La Playa sits on the beautiful beachfront of Playa Camarones, just 15-20 minutes from Puerto Vallarta International Airport. This exclusive villa perfectly balances elegant simplicity with tropical paradise living in the heart of Puerto Vallarta. While guests enjoy a secluded beachfront setting, the vibrant Malecon boardwalk is less than a 10-minute walk away, offering easy access to the city's finest restaurants, boutique shopping, and nightlife.
            </p>
            <p className="text-lg leading-relaxed">
            The villa is in Colonia 5 de Diciembre, on the north edge of downtown Puerto Vallarta, Jalisco. It is not in Conchas Chinas, the Hotel Zone or Marina Vallarta.
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">How Far Is Casa La Playa From...</h2>
          <dl className="grid sm:grid-cols-[18rem_1fr] gap-x-6 gap-y-2 text-lg mb-12">
            {distances.map(([place, time]) => (
              <div key={place} className="contents">
                <dt className="font-semibold">{place}</dt>
                <dd className="text-gray-700">{time}</dd>
              </div>
            ))}
          </dl>
          <div className="aspect-[16/9] w-full mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.298!2d-105.233355!3d20.619901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84214544a598353f%3A0xc7abd8e0d203c778!2sCasa+La+Playa%2C+Puerto+Vallarta!5e0!3m2!1sen!2sus!4v1710284151824!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Casa La Playa on Playa Camarones, Puerto Vallarta"
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
            Puerto Vallarta, Mexico is the perfect place to vacation. Enjoy the vibrant culture, friendly locals, and breathtaking beauty that distinguishes Puerto Vallarta, Mexico as one of the most popular vacation destinations in Mexico and perhaps the world. The panoramic oceanfront landscape serves as a beautiful backdrop for visitors to fully immerse themselves in traditional Mexican culture, upbeat art and music scenes, and the finest resort style living and vacation stay.
            </p>
            
            <p className="text-lg leading-relaxed pt-4">
            Throughout Puerto Vallarta's transformation from a small, remote seaside village to a fully-developed city of culture, this popular Mexican vacation town has become known for its luxurious resorts and so much more. The history and beauty of Puerto Vallarta, Mexico has been sacredly protected and preserved so locals and visitors alike can enjoy its historic cobbled streets and original Puerto Vallarta-style houses, complete with vibrant red terracotta tiled roofs. Puerto Vallarta is a place that allows you to get lost in lush green mountains and glimmering blue ocean waters that have charmed visitors and vacation-goers for decades.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 