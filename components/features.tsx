import Image from "next/image"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      title: "Discover Beauty",
      description: "Delight in natural elegance",
      image: "/1.jpg",
    },
    {
      title: "Experience Pleasure",
      description: "Indulge in pure luxury",
      image: "/2.jpg",
    },
    {
      title: "Refresh the Spirit",
      description: "Retreat to a tropical oasis",
      image: "/3.jpg",
    },
    {
      image: "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0002_4.png",
    },  
    {
      image: "/5.jpg",
    },  
    {
      image: "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0006_8.png",
    },  
  ]

  return (
    <section id="features" className="py-23 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto">
            A superb study in elegant simplicity, A stunning villa + beachfront oasis located only blocks away from
            downtown Puerto Vallarta, Mexico
          </h1>
          <Link href="tel:+13109862299" className="inline-block bg-gray-900 text-white px-8 py-3 font-medium">
            CALL US NOW!
          </Link>
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
                  alt={feature.title || "Gallery image"} 
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

