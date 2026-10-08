import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import FactSheet from "@/components/fact-sheet"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "About Casa La Playa | Staffed Beachfront Villa in Puerto Vallarta",
  description:
    "Casa La Playa is a 20,000 sq ft, 8-suite beachfront villa on Playa Camarones in downtown Puerto Vallarta with a private chef, maids, night watchman and concierge.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="About Casa La Playa" />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 min-w-0">
              <FactSheet />
              <div className="prose max-w-none">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <Image
                    src="/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0007_9.png"
                    alt="Casa La Playa villa exterior on the beach in Puerto Vallarta"
                    width={2800}
                    height={600}
                    className="rounded-lg w-full md:w-1/2 h-auto object-cover"
                  />
                  <div className="w-full md:w-1/2">
                    <p className="text-lg leading-relaxed">
                      Your luxury vacation awaits you in Puerto Vallarta, Mexico. Come enjoy sandy beaches and 
                      vibrant Mexican culture during your private stay at Casa La Playa. This gorgeous Mexican villa is a 
                      beachfront hideaway with 20,000 square feet of beautiful Mexican architecture. Enjoy the 
                      comfort of 8 full oceanfront suites located only four blocks from downtown Puerto Vallarta. This gorgeous villa is just a relaxing stroll or short 
                      cab ride away from the center of town!
                    </p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Natural beauty and contemporary elegance come together in this ideally located three-story 
                  villa which features swimming pools, reflecting pools, and lush ground-level and rooftop 
                  gardens that serve to add to the ambiance of a serene tropical sanctuary. It offers an 
                  unforgettable backdrop for retreats, family vacations, honeymoons, weddings, and much more. 
                  Book your stay at Casa La Playa and you will easily forget that this beautiful Mexican villa is just 
                  a short walk away from countless shops, restaurants, and many other cultural offerings right in 
                  downtown Puerto Vallarta, Mexico.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Expansive windows in every room offer stunning views of the Puerto Vallarta sunset right over 
                  Banderas Bay, while spacious outdoor living areas offer the fresh ocean breeze. Aquatic 
                  relaxation is always within reach with a large pool on the ground floor, a small pool at penthouse 
                  level, a plunge pool on the second floor, and a neighboring sandy beach that harbors 
                  breathtaking views.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="w-full md:w-1/2">
                    <p className="text-lg leading-relaxed">
                      The inside architecture and design of Casa La Playa closely rivals the beauty of the villa's 
                      gorgeous surroundings in Puerto Vallarta. Elegant contemporary architecture and an open 
                      spacious floorplan characterize this stylish Mexican villa, its 2 living areas and dining areas, 
                      2 kitchens and kitchenettes, 8 bedroom suites, 8 full bathrooms, and 2 half baths. This rental villa offers plenty of space for guests to relax 
                      and unwind!
                    </p>
                  </div>
                  <Image
                    src="/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0005_7.png"
                    alt="Casa La Playa interior living space with ocean views"
                    width={2800}
                    height={600}
                    className="rounded-lg w-full md:w-1/2 h-auto object-cover"
                  />
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  With central air conditioning, Wi-Fi internet access, satellite television, and full phone service, 
                  Casa La Playa provides you with all the comforts of home while traveling. Our staff includes a 
                  private chef, 2 attentive maids, a night watchman, and a bilingual concierge whose office is just 
                  across the street. A bartender can be arranged whenever you need one. We love our employees: almost all of them have worked for the owner's family for many years, and we employ whole families. We believe service is a big part of the experience, so we pay our staff well, and they're here to provide a pampering, full-service stay that will make 
                  your time in Puerto Vallarta, Mexico simply unforgettable.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  We&apos;ve owned Casa La Playa for more than 25 years. We hire everyone locally, support local
                  businesses and source as much as we can from the community. As for house rules, there really
                  aren&apos;t any: have fun, be smart and don&apos;t do anything foolish. We&apos;re super chill and we
                  want you to have an experience. Be a good member of the community and everyone will treat you with
                  respect. At the end of the day, we&apos;re all one.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  This beautiful Mexican villa is ideal for those seeking a luxury vacation, a memorable wedding 
                  venue, or a one-of-a-kind venue for any other special event.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  View The Official Puerto Vallarta Travel Guide: <a href="https://VisitPuertoVallarta.com" className="text-blue-600 hover:underline">VisitPuertoVallarta.com</a>
                </p>

                <p className="text-lg leading-relaxed">
                  Contact our team today to learn about the villa's upcoming availability.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 