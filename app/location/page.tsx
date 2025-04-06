import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
export default function LocationPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Location" />
      <div className="pt-2 min-h-screen">
        <div className="container mx-auto px-4 py-16">
        <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
            Casa La Playa sits on the beautiful beachfront of Playa Camarones, just 15-20 minutes from Puerto Vallarta International Airport. This exclusive villa perfectly balances elegant simplicity with tropical paradise living in the heart of Puerto Vallarta. While guests enjoy a secluded beachfront setting, the vibrant Malecon boardwalk is less than a 10-minute walk away, offering easy access to the city's finest restaurants, boutique shopping, and nightlife.
            </p>
          </div>
          <div className="aspect-[16/9] w-full mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.298!2d-105.233355!3d20.619901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84214544a598353f%3A0xc7abd8e0d203c778!2sCasa+La+Playa%2C+Puerto+Vallarta!5e0!3m2!1sen!2sus!4v1710284151824!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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