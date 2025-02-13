import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import Image from "next/image"
import Script from 'next/script'

export default function Amenities() {
  const amenities = [
    "8 beachfront bedrooms",
    "20,000 sq. ft. modern villa",
    "3-story plan with elevator",
    "2 pools",
    "2 full-size kitchens and 2 kitchenettes",
    "In town, walking distance to restaurants and shops",
    "Certified beach clean, lifeguard, 24 hr security, closed at night to the public",
    "House man, 2 maids and concierge",
    "2 oversized apartments",
    "2 car parking",
    "Oceanfront glass walls",
    "Vonage, Satellite TV, IPOD stations",
    "Office across the street to service your needs",
    "175 ft. of beachfront",
    "Large garden",
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="amenities" className="w-full">
          <div className="border-b border-gray-200">
            <TabsList className="w-full justify-start rounded-none border-0 bg-transparent p-0">
              <TabsTrigger 
                value="amenities" 
                className="text-lg border-b-2 border-transparent -mb-[2px] px-0 mr-12 rounded-none bg-transparent text-gray-500 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-black hover:text-black transition-colors focus:outline-none focus-visible:outline-none"
              >
                Amenities
              </TabsTrigger>
              <TabsTrigger 
                value="location" 
                className="text-lg border-b-2 border-transparent -mb-[2px] px-0 mr-12 rounded-none bg-transparent text-gray-500 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-black hover:text-black transition-colors focus:outline-none focus-visible:outline-none"
              >
                Location
              </TabsTrigger>
              <TabsTrigger 
                value="video" 
                className="text-lg border-b-2 border-transparent -mb-[2px] px-0 rounded-none bg-transparent text-gray-500 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-black hover:text-black transition-colors focus:outline-none focus-visible:outline-none"
              >
                Video
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="amenities" className="mt-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 pl-8">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="h-3 w-3 flex-shrink-0"
                      fill="currentColor"
                    >
                      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
                    </svg>
                    <span className="text-sm tracking-wide">{amenity}</span>
                  </div>
                ))}
              </div>
              <div className="relative h-full">
                <div className="absolute inset-0 rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <iframe
                    src="https://www.instagram.com/casalaplaya/embed"
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="location" className="mt-8">
            <div className="relative h-[600px] w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.298!2d-105.233355!3d20.619901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84214544a598353f%3A0xc7abd8e0d203c778!2sCasa+La+Playa%2C+Puerto+Vallarta!5e0!3m2!1sen!2sus!4v1710284151824!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </TabsContent>
          <TabsContent value="video" className="mt-8">
            <div className="relative h-[600px] w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/kJsu3WmaS8w"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  )
}

