import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"

export default function ActivitiesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Activities" />
      <div className="min-h-[calc(100vh-400px)]">
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  From shopping with local artisans in the downtown area to exploring Banderas Bay, Casa La 
                  Playa's location provides easy access to all of the exciting activities that Puerto Vallarta, Mexico 
                  has to offer. While this is one of the most gorgeous spots around to just sit back and relax, 
                  adventure is never too far away. Come enjoy the natural scenery, countless aquatic activities, 
                  jungle exploration, hiking, and so much more. Casa La Playa is a private villa that offers a world 
                  of both luxury and excitement to your stay in Puerto Vallarta, Mexico. Here is a list of activities 
                  most frequently enjoyed by guests of the villa:
                </p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8">
                  <div>✈ Sports Fishing</div>
                  <div>✈ Jungle Tours</div>
                  <div>✈ Swimming with Dolphins</div>
                  <div>✈ Surfing</div>
                  <div>✈ Diving</div>
                  <div>✈ Snorkeling</div>
                  <div>✈ Golfing</div>
                  <div>✈ Jet Skiing</div>
                  <div>✈ Sailing</div>
                  <div>✈ Parasailing</div>
                  <div>✈ Ecoadventures</div>
                  <div>✈ Boat Trips</div>
                  <div>✈ Air Trips</div>
                  <div>✈ Kayaking</div>
                  <div>✈ Turtle Camp</div>
                  <div>✈ Hiking</div>
                  <div>✈ Whale Watching</div>
                  <div>✈ Tennis</div>
                  <div>✈ Yoga</div>
                </div>

                <p className="text-lg mb-8">
                  To get more information on these activities or to make reservations, visit{' '}
                  <a href="https://vallarta-adventures.com" className="text-blue-600 hover:underline">
                    vallarta-adventures.com
                  </a>{' '}
                  or{' '}
                  <a href="https://vallartainfo.com" className="text-blue-600 hover:underline">
                    vallartainfo.com
                  </a>
                  .
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