import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import { JsonLd, faqSchema } from "@/components/json-ld"
import { pageMetadata } from "@/lib/metadata"
import { InstagramButton, ReelCard } from "@/components/vibe-reel"

export const metadata = pageMetadata({
  title: "Casa La Playa Puerto Vallarta FAQ | Rates, Chef, Food, Staff, Location",
  description:
    "Answers about Casa La Playa Puerto Vallarta: location, guests, rates and taxes, the chef and food costs, staff, activities, tipping and how to book.",
  path: "/faq",
})

type Faq = { q: string; a: string }

const groups: { title: string; faqs: Faq[] }[] = [
  {
    title: "The House and Location",
    faqs: [
      {
        q: "What makes Casa La Playa different from other Puerto Vallarta villas?",
        a: "Location. Casa La Playa is right on the beach and within walking distance of downtown Puerto Vallarta's restaurants, bars, nightclubs, art galleries, shopping and the Malecón, and it's only 15–20 minutes from the airport. Many villas are in the hills or far from town, where you need a car or taxi for everything. Here you walk out the door, and because we rent to one group at a time, you still have complete privacy when you stay in.",
      },
      {
        q: "Where is Casa La Playa in Puerto Vallarta?",
        a: "Casa La Playa is directly on Playa Camarones beach in Colonia 5 de Diciembre, on the north edge of downtown Puerto Vallarta, Jalisco, Mexico. It is not in Conchas Chinas, the Hotel Zone or Marina Vallarta.",
      },
      {
        q: "How far is Casa La Playa from the Malecón?",
        a: "The Malecón boardwalk is about a 10-minute walk (0.8 km) along the beach or through town. Restaurants, shops, galleries and nightlife in Old Town are walking distance, so most guests don't need taxis.",
      },
      {
        q: "How far is Casa La Playa from the Puerto Vallarta airport?",
        a: "Puerto Vallarta International Airport (PVR) is 15–20 minutes by car, south toward town.",
      },
      {
        q: "How many guests does Casa La Playa sleep?",
        a: "The full 8-bedroom house sleeps up to 16 guests. The 6-bedroom option sleeps up to 12 and the 7-bedroom option up to 14.",
      },
      {
        q: "How many bedrooms and bathrooms are there?",
        a: "There are 8 oceanfront bedroom suites, 8 full bathrooms and 2 half baths across 20,000 square feet on three floors, connected by an elevator.",
      },
      {
        q: "Does Casa La Playa have pools, air conditioning and Wi-Fi?",
        a: "Yes. The villa has 2 pools and a jacuzzi, central air conditioning, Wi-Fi in every room, satellite TV with sports channels, 2 full kitchens and 2 kitchenettes, an elevator and parking for 2 cars.",
      },
      {
        q: "Will my cell phone work in Puerto Vallarta?",
        a: "Yes, your phone will work, but it will be roaming in Mexico, so check your carrier's international plan before you travel. The house has Wi-Fi in every room.",
      },
    ],
  },
  {
    title: "Rates and Booking",
    faqs: [
      {
        q: "Can we rent only part of the villa?",
        a: "Yes. You can rent 6 bedrooms, 7 bedrooms or the full 8-bedroom house. We only rent to one group at a time, so you never share the villa with strangers.",
      },
      {
        q: "How much does Casa La Playa cost per night?",
        a: "Nightly rates are $3,200 USD for 6 bedrooms, $4,000 for 7 bedrooms and $5,000 for the full 8-bedroom house. Christmas week is $7,000 and Easter week is $5,500 per night (8 bedrooms only). Rates include the staff and chef service and are subject to 19% hotel and local taxes. Rates can change until your booking is confirmed. Call or text 310-986-2299 for an exact quote for your dates.",
      },
      {
        q: "Is there a minimum stay over the holidays?",
        a: "Christmas and New Year's require booking the full 8-bedroom house with a one-week minimum.",
      },
      {
        q: "How do I book Casa La Playa?",
        a: "Book directly with us by calling 310-986-2299, emailing info@casalaplaya.com or sending the inquiry form with your dates and group size. We'll confirm availability and rates.",
      },
      {
        q: "Is it cheaper to book Casa La Playa directly?",
        a: "Yes. When you book directly with us there are no booking-site service fees, which typically add 4–12% on booking sites. It's the same house, the same staff and the same nightly rates.",
      },
    ],
  },
  {
    title: "Chef, Food and Drinks",
    faqs: [
      {
        q: "Are meals included?",
        a: "Chef service for breakfast and lunch is included with every stay, prepared by Chef Wendy Galeana and her team. Dinner chef service is available for an additional charge. The cost of the food and drinks themselves is separate.",
      },
      {
        q: "How much should we budget for food and drinks?",
        a: "We estimate about $20 to $60 per person per day for three meals, depending mostly on how much you drink and your drink preferences.",
      },
      {
        q: "How does grocery shopping and payment for food work?",
        a: "The chef and her team do all the shopping for you, usually daily, and our house manager, Paz, provides receipts. Food and drinks are paid for in cash during your stay. Many groups give Paz a lump sum up front and she checks in with the group leader as it's spent. At this time we don't accept credit cards for food and drinks. There are ATMs nearby and Paz can point you to one.",
      },
      {
        q: "Can we have the chef cook dinner?",
        a: "Yes. Many guests love the house so much they don't want to go out, so we offer dinner chef service for an additional fee. Chefs are in high demand, so let us know in advance which nights you'd like dinner.",
      },
      {
        q: "Can the chef handle allergies and dietary restrictions?",
        a: "Yes. Let the chef know about food allergies and special requests before you arrive. She cooks family-style meals from a menu or by request, and has a full vegetarian menu. See the sample lunch and vegetarian menus for ideas. Keep in mind it's Mexico, so a few specific items may not be available, but the chef will do her best to accommodate.",
      },
    ],
  },
  {
    title: "During Your Stay",
    faqs: [
      {
        q: "What staff come with the house?",
        a: "Every stay includes a private chef, two maids for daily housekeeping, a night watchman and Paz, our bilingual house manager and concierge, whose office is across the street. A bartender can be arranged when you need one. A staff member is at the house throughout your stay, so if you need anything, just ask.",
      },
      {
        q: "What happens when we arrive?",
        a: "You'll get a tour of the house, meet the staff and be welcomed with drinks (margaritas, beer and fresh fruit waters) and Mexican appetizers. Paz will go over the house guide and the few house rules we have.",
      },
      {
        q: "What activities can we book?",
        a: "Jet skis, parasailing, banana boat rides, kayaks and beach volleyball are available on the beach in front of the house from local vendors. For your security, please don't bring beach vendors into the house. For tours and excursions we recommend Vallarta Adventures, which you can book and pay for online. For scuba diving, Chico's Dive Shop can come to the house with equipment and give a refresher course in the pool before taking you out. Paz can help arrange it.",
      },
      {
        q: "Can we get massages or spa services at the house?",
        a: "Yes. Our preferred vendors make house calls for massages, hair, makeup, manicures and pedicures. Paz has a menu of services and will help you schedule.",
      },
      {
        q: "What if someone needs a doctor?",
        a: "Tell the staff right away in any emergency. There are lifeguards trained in CPR on the beach, two hospitals close to the house, and a house doctor, used by many of the local hotels, who makes house calls at any time of day.",
      },
      {
        q: "Should we tip the staff?",
        a: "Our recommended tip is 10–15% or more of the rental rate before taxes, and it's up to you who to tip and how. We love our employees. Almost all of them have worked for the owner's family for many years, and we employ whole families. We believe service is a big part of the experience, so we pay our staff well. The chef works independently, so she may give you a separate tip envelope for her team.",
      },
    ],
  },
]

const faqs = groups.flatMap((g) => g.faqs)

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-")

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <PageHeader title="Frequently Asked Questions" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 min-w-0 space-y-8">
            <nav aria-label="FAQ topics" className="flex flex-wrap gap-2">
              {groups.map((g) => (
                <a key={g.title} href={`#${slug(g.title)}`} className="border border-gray-900 px-4 py-2 text-base font-medium">
                  {g.title}
                </a>
              ))}
            </nav>
            {groups.map((g) => (
              <section key={g.title} id={slug(g.title)} className="scroll-mt-28 space-y-6">
                <h2 className="text-3xl font-black border-b pb-2">{g.title}</h2>
                {g.faqs.map(({ q, a }) => (
                  <div key={q}>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{q}</h3>
                    <p className="text-lg leading-relaxed text-gray-700">{a}</p>
                  </div>
                ))}
              </section>
            )).flatMap((section, i) =>
              i === 0
                ? [
                    section,
                    <section key="vibe" className="rounded-xl bg-gray-50 p-5 sm:p-8 grid sm:grid-cols-2 gap-6 items-center">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-black">See the Vibe</h2>
                        <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                          Watch a stay at Casa La Playa through the eyes of travel creator @adventures_bysky, who called
                          it &ldquo;the ultimate beachfront vacation home.&rdquo;
                        </p>
                        <p className="text-lg font-semibold mt-4">Want to see what the house is really like? Check out our Instagram.</p>
                        <div className="mt-4"><InstagramButton /></div>
                      </div>
                      <ReelCard />
                    </section>,
                  ]
                : [section],
            )}
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
