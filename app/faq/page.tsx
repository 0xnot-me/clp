import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import { JsonLd, faqSchema } from "@/components/json-ld"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Casa La Playa Puerto Vallarta FAQ | Guests, Chef, Rates, Location",
  description:
    "Answers about Casa La Playa Puerto Vallarta: where it is, how many guests it sleeps, what the chef and staff cover, rates and taxes, holiday minimums and how to book.",
  path: "/faq",
})

const faqs = [
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
    q: "Can we rent only part of the villa?",
    a: "Yes. You can rent 6 bedrooms, 7 bedrooms or the full 8-bedroom house. We only rent to one group at a time, so you never share the villa with strangers.",
  },
  {
    q: "How much does Casa La Playa cost per night?",
    a: "Nightly rates are $3,200 USD for 6 bedrooms, $4,000 for 7 bedrooms and $5,000 for the full 8-bedroom house. Christmas week is $7,000 and Easter week is $5,500 per night (8 bedrooms only). Rates include the staff and chef service and are subject to 19% hotel and local taxes. Rates can change until your booking is confirmed. The calculator on the rates page gives an instant estimate for your dates.",
  },
  {
    q: "Is there a minimum stay over the holidays?",
    a: "Christmas and New Year's require booking the full 8-bedroom house with a one-week minimum.",
  },
  {
    q: "What staff come with the house?",
    a: "Every stay includes a private chef, two maids for daily housekeeping, a night watchman and a bilingual concierge whose office is across the street. A bartender can be arranged when you need one.",
  },
  {
    q: "Are meals included?",
    a: "Chef service for breakfast and lunch is included. Dinner chef service is available for an additional charge per guest per day. Guests pay for the food and drinks themselves: the staff do the grocery shopping, our property manager keeps receipts, and you reimburse the staff at the end of each week.",
  },
  {
    q: "Can the chef handle dietary restrictions?",
    a: "Yes. The chef cooks family-style meals from a menu or by special request and will accommodate dietary restrictions and preferences with advance notice. See the sample menu for examples.",
  },
  {
    q: "Does Casa La Playa have pools, air conditioning and Wi-Fi?",
    a: "Yes. The villa has 2 pools and a jacuzzi, central air conditioning, Wi-Fi, satellite TV, 2 full kitchens and 2 kitchenettes, an elevator and parking for 2 cars.",
  },
  {
    q: "How do I book Casa La Playa?",
    a: "Book directly with us by calling 310-986-2299, emailing info@casalaplaya.com or sending the inquiry form with your dates and group size. We'll confirm availability and rates.",
  },
  {
    q: "Is it cheaper to book Casa La Playa directly?",
    a: "Yes. When you book directly with us there are no booking-site service fees, which typically add 4–12% on booking sites. It's the same house, the same staff and the same nightly rates.",
  },
]

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <Navbar />
      <PageHeader title="Frequently Asked Questions" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            {faqs.map(({ q, a }) => (
              <section key={q}>
                <h2 className="text-2xl font-bold mb-2">{q}</h2>
                <p className="text-lg leading-relaxed text-gray-700">{a}</p>
              </section>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
