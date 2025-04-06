import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import ContactForm from "@/components/contact-form"

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
                  <li className="text-lg mb-2">Complimentary Chef Service for Breakfast and Lunch</li>
                  <li className="text-lg mb-2">Dinner Chef Service Available (Additional Fee) – Email for details</li>
                  <li className="text-lg italic">Guests are responsible for the cost of all food and beverages</li>
                </ul>

                {/* First section with image and wrapped text */}
                <div className="relative mb-8">
                  <div className="float-left mr-6 mb-4 w-1/2">
                    <Image
                      src="/dining.jpg"
                      alt="Delicious Mexican Cuisine"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="text-lg leading-relaxed">
                    <p className="mb-4">
                      Casa La Playa offers an 
                      <span className="font-semibold"> unforgettable oceanfront dining experience</span> that will surely enhance your stay. 
                      All meals are prepared with nothing but the freshest ingredients. Customize your menu courses 
                      and come enjoy delicious private meals on the terrace surrounded by gorgeous beachfront landscape.
                    </p>
                    <p className="mb-4">
                      Whether you choose to dine indoors or outdoors — "al fresco," you'll be sure to enjoy gourmet 
                      chef-created meals with freshly picked seasonal fruit and vegetables. We include Breakfast and 
                      Lunch chef service - "family-style" meals are prepared daily and guests are given the option to 
                      choose meals from a prepared menu or to make special requests.
                    </p>
                  </div>
                </div>

                {/* Second section with image and wrapped text */}
                <div className="relative mb-8 clear-both">
                  <div className="float-right ml-6 mb-4 w-1/2">
                    <Image
                      src="/marg.png"
                      alt="Refreshing Margarita"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="text-lg leading-relaxed">
                    <p className="mb-4">
                      Our staff will do their best to accommodate any special dietary restrictions or preferences. 
                      Dinner Service can be added for just an additional charge per guest per day, our chef will 
                      provide you with a quote for your meal.
                    </p>
                    <p className="mb-4">
                      All meals and beverages are prepared with the highest sanitization standards. Drinking water and 
                      ice are carefully purified and fruits and vegetables are given a thorough antibacterial rinse to 
                      ensure both the safety and comfort of ours guests.
                    </p>
                    <p className="mb-4">
                      Please note that advance notice is required in order to allow time for our staff to shop for the 
                      freshest ingredients and prepare wholesome meals. Our property manager prepares receipts for the 
                      cost of groceries and guests are responsible for reimbursing the staff for all supplies at the 
                      end of each week's stay.
                    </p>
                    <p className="mb-4">
                    Enjoy hassle-free vacation dining! Our professional chef and staff not only prepare all your meals and drinks, but we also handle all the grocery shopping for you—a significant convenience in a foreign country where navigating local markets and language barriers can be challenging. Our property manager takes care of all the shopping and provides detailed receipts, with guests simply reimbursing the staff for food and beverage purchases at the end of each guest's stay. You can relax completely while we manage everything from shopping to preparation to cleanup.
                    </p>
                  </div>
                </div>

                <div className="clear-both">
                  <p className="text-lg leading-relaxed">
                    View a Sample Dining Menu Here: <a href="/sample-menu" className="text-blue-600 hover:underline">Casa La Playa Sample Menu</a>
                  </p>
                </div>
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