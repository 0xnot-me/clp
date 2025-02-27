import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"

export default function DiningPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Dining" />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <ul className="list-none p-0 mb-6">
                  <li className="text-lg mb-2">Breakfast Chef Service Included</li>
                  <li className="text-lg mb-2">Lunch Service Included</li>
                  <li className="text-lg mb-2">Dinner Service Extra – Email us for details.</li>
                  <li className="text-lg italic">* Food and Beverages are guest's responsibility.</li>
                </ul>

                <div className="flex gap-6 mb-6">
                  <Image
                    src="/dining.jpg"
                    alt="Delicious Mexican Cuisine"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-lg leading-relaxed">
                      With two talented chefs on staff and its dreamy location, Casa La Playa offers an 
                      <span className="font-semibold"> unforgettable oceanfront dining experience</span> that will surely enhance your stay. 
                      All meals are prepared with nothing but the freshest ingredients. Customize your menu courses 
                      and come enjoy delicious private meals on the terrace surrounded by gorgeous beachfront landscape.
                    </p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Whether you choose to dine indoors or outdoors — "al fresco," you'll be sure to enjoy gourmet 
                  chef-created meals with freshly picked seasonal fruit and vegetables. We include Breakfast and 
                  Lunch chef service - "family-style" meals are prepared daily and guests are given the option to 
                  choose meals from a prepared menu or to make special requests. Our staff will do their best to 
                  accommodate any special dietary restrictions or preferences. Dinner Service can be added for just 
                  an additional charge per guest per day, our chef will provide you with a quote for your meal.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  All meals and beverages are prepared with the highest sanitization standards. Drinking water and 
                  ice are carefully purified and fruits and vegetables are given a thorough antibacterial rinse to 
                  ensure both the safety and comfort of ours guests.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Please note that advance notice is required in order to allow time for our staff to shop for the 
                  freshest ingredients and prepare wholesome meals. Our property manager prepares receipts for the 
                  cost of groceries and guests are responsible for reimbursing the staff for all supplies at the 
                  end of each week's stay.
                </p>

                <p className="text-lg leading-relaxed">
                  View a Sample Dining Menu Here: <a href="/sample-menu" className="text-blue-600 hover:underline">Casa La Playa Sample Menu</a>
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