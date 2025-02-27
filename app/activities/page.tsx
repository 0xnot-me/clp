import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

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
            <div className="bg-gray-100 p-6 rounded-lg h-fit">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message: Dates and Reservation Details"
                    rows={4}
                    className="w-full px-4 py-2 border rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
                >
                  INQUIRE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 