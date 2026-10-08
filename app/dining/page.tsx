import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import Link from "next/link"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"
import { pageMetadata } from "@/lib/metadata"
import { sampleMenus } from "@/lib/menus"

export const metadata = pageMetadata({
  title: "Puerto Vallarta Villa With Private Chef | Casa La Playa",
  description:
    "Breakfast and lunch from Casa La Playa's private chef are included. Dinner is available for a fee, the staff shop for groceries, and dietary needs are welcome.",
  path: "/dining",
})

export default function DiningPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema("Dining", "/dining")} />
      <Navbar />
      <PageHeader title="Private Chef & Dining" />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 min-w-0">
              <div className="prose max-w-none">
                <ul className="list-none p-0 mb-6">
                  <li className="text-lg mb-2">Complimentary Chef Service for Breakfast and Lunch</li>
                  <li className="text-lg mb-2">Dinner Chef Service Available (Additional Fee) – Email for details</li>
                  <li className="text-lg italic">Guests are responsible for the cost of all food and beverages</li>
                </ul>

                {/* First section with image and wrapped text */}
                <div className="relative mb-8">
                  <div className="mb-4 w-full sm:float-left sm:mr-6 sm:w-1/2">
                    <Image
                      src="/dining.jpg"
                      alt="Mexican dishes prepared by the private chef at Casa La Playa"
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
                  <div className="mb-4 w-full sm:float-right sm:ml-6 sm:w-1/2">
                    <Image
                      src="/marg.png"
                      alt="Margarita served poolside at Casa La Playa"
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
                      ensure both the safety and comfort of our guests.
                    </p>
                    <p className="mb-4">
                      Please note that advance notice is required in order to allow time for our staff to shop for the 
                      freshest ingredients and prepare wholesome meals. Our house manager, Paz, provides receipts for all groceries and drinks, which are paid in cash during your stay. Many groups give Paz a lump sum up front and she checks in with the group leader as it's spent. We estimate about $20 to $60 per person per day for food and drinks.
                    </p>
                    <p className="mb-4">
                    Enjoy hassle-free vacation dining! Our professional chef and staff not only prepare all your meals and drinks, but we also handle all the grocery shopping for you—a significant convenience in a foreign country where navigating local markets and language barriers can be challenging. The chef and her team take care of all the shopping and Paz provides detailed receipts. You can relax completely while we manage everything from shopping to preparation to cleanup.
                    </p>
                  </div>
                </div>

                <section className="clear-both not-prose pt-4">
                  <h2 className="text-3xl font-bold">Take a Look at Our Sample Menus</h2>
                  <p className="text-lg text-gray-600 mt-2 mb-6">
                    A taste of what Chef Wendy Galeana cooks for guests. Every dish can be adapted to your tastes and
                    dietary needs.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {sampleMenus.map((menu) => (
                      <Link key={menu.id} href={`/sample-menu#${menu.id}`} className="group block rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                          <Image
                            src={menu.image}
                            alt={menu.alt}
                            fill
                            sizes="(min-width: 640px) 33vw, 100vw"
                            className="object-cover object-top group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-bold">{menu.title}</h3>
                          <p className="text-gray-600 mt-1">{menu.blurb}</p>
                          <span className="inline-block mt-3 font-semibold underline">View the menu</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
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