import Image from "next/image"
import Link from "next/link"

export default function RentalOptions() {
  const options = [
    {
      title: "6 Bedrooms",
      guests: "(up to 12 guests)",
      image: "/01.jpg",
    },
    {
      title: "7 Bedrooms",
      guests: "(12-14 guests)",
      image: "/02.jpg",
    },
    {
      title: "Full House",
      guests: "(16-18 guests)",
      image: "/03.jpg",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed tracking-wide mb-16">
          Casa La Playa is a superb study in elegant simplicity set on the beach in a tropical paradise. Discover a world of barefoot sophistication while enjoying near-perfect weather and breathtaking sunsets everyday. The sophisticated architecture of this elegant estate serves to seamlessly connect indoor and outdoor living spaces. Enjoy private, unfettered beachfront views from every room and every floor of the stylish villa that is walking distance to Puerto Vallarta's most popular restaurants, shopping, and nightlife.
        </p>

        <h2 className="text-5xl font-black text-center mb-12">Rental Options</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold mb-1">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.guests}</p>
              <div className="relative group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src={option.image || "/placeholder.svg"} 
                    alt={option.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <Link 
                  href="#contact" 
                  className="absolute bottom-0 left-0 right-0 bg-[#333333] text-white py-4 font-semibold tracking-[0.2em] text-sm uppercase text-center"
                >
                  Request More Information
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

