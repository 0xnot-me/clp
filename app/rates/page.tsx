import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import { pageMetadata } from "@/lib/metadata"
import { holidayRates, rentalOptions, site, usd } from "@/lib/site"
import QuoteCta from "@/components/quote-cta"

export const metadata = pageMetadata({
  title: "Casa La Playa Rates | 6–8 Bedroom Beachfront Villa, Puerto Vallarta",
  description:
    "Nightly rates for Casa La Playa Puerto Vallarta: 6 bedrooms $3,200, 7 bedrooms $4,000, full 8-bedroom house $5,000. Chef and full staff included. Sleeps 16.",
  path: "/rates",
})

export default function RatesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Rates & Availability" />
      <div className="min-h-[calc(100vh-400px)]">
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 min-w-0">
              <div className="prose max-w-none">
                <p className="text-lg italic mb-8">
                  All rates include private access to Casa La Playa's luxury amenities and the villa's full-service staff to best accommodate you during your stay.
                </p>

                <QuoteCta />

                <h2 className="text-2xl font-bold mb-4">Nightly Rates ($USD)</h2>
                <div className="md:hidden not-prose space-y-3">
                  {rentalOptions.map((o) => (
                    <div key={o.bedrooms} className="rounded-lg border p-4">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-xl font-bold">{o.bedrooms === 8 ? "Full house (8 bedrooms)" : `${o.bedrooms} bedrooms`}</h3>
                        <span className="text-gray-600">up to {o.maxGuests} guests</span>
                      </div>
                      <dl className="mt-2 space-y-1 text-lg">
                        <div className="flex justify-between"><dt>Year-round</dt><dd className="font-semibold">{usd(o.nightly)}</dd></div>
                        {o.bedrooms === 8 && (
                          <>
                            <div className="flex justify-between"><dt>Christmas week <span className="block text-sm text-gray-500">Dec. 24 to Jan. 1</span></dt><dd className="font-semibold">{usd(holidayRates.christmas)}</dd></div>
                            <div className="flex justify-between"><dt>Easter week <span className="block text-sm text-gray-500">Palm Sunday to Easter Sunday</span></dt><dd className="font-semibold">{usd(holidayRates.easter)}</dd></div>
                          </>
                        )}
                      </dl>
                    </div>
                  ))}
                  <p className="text-gray-600">Christmas and Easter weeks are available for the full 8-bedroom house only.</p>
                </div>
                <div className="hidden md:block overflow-x-auto not-prose">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-3">Dates</th>
                        {rentalOptions.map((o) => (
                          <th key={o.bedrooms} className="py-3 px-3">
                            {o.bedrooms} Bedrooms <span className="block font-normal text-sm text-gray-500">up to {o.maxGuests} guests</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-3">Year-round</td>
                        {rentalOptions.map((o) => (
                          <td key={o.bedrooms} className="py-3 px-3 font-medium">{usd(o.nightly)}</td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-3">Christmas week <span className="block text-sm text-gray-500">Dec. 24 to Jan. 1</span></td>
                        <td className="py-3 px-3 text-gray-400">N/A</td>
                        <td className="py-3 px-3 text-gray-400">N/A</td>
                        <td className="py-3 px-3 font-medium">{usd(holidayRates.christmas)}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-3">Easter week <span className="block text-sm text-gray-500">Palm Sunday to Easter Sunday</span></td>
                        <td className="py-3 px-3 text-gray-400">N/A</td>
                        <td className="py-3 px-3 text-gray-400">N/A</td>
                        <td className="py-3 px-3 font-medium">{usd(holidayRates.easter)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-600 text-base md:text-sm mt-4">
                  Note: Until confirmed, rates are subject to change without notice. The villa accommodates 16 guests maximum. The above rates include a full housekeeping staff and chef. Restrictions may apply. All rates are subject to 19% hotel and local taxes.
                </p>
                
                <div className="space-y-1 mt-2 text-gray-600 text-base md:text-sm font-bold">
                  <p className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>We only rent to ONE group at a time.</span>
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Christmas and New Years require 8 bedroom booking with a 1 week minimum.</span>
                  </p>
                </div>

                <div className="prose max-w-none mb-8 pt-8">
                  <p className="text-lg leading-relaxed">
                    Thank you for considering beautiful Casa La Playa for your next vacation or special event. Located near the heart of downtown Puerto Vallarta, this unforgettable villa will quickly become home during your stay in Puerto Vallarta, Mexico. To complete the relaxing and luxurious experience, the villa's full-wait staff will always be available at your service. This gorgeous Mexican villa and its friendly staff will surely become a memorable part of your dream vacation or wedding day. Come experience Casa La Playa and leave with a lifetime of unforgettable memories!
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">To reserve your private stay or book Casa La Playa for your next special event, contact our friendly staff at:</h3>
                  <p className="text-gray-600"><a href={`mailto:${site.email}`} className="underline">{site.email}</a></p>
                  <p className="text-gray-600"><a href={site.telHref} className="underline">{site.phoneDisplay}</a> (call or <a href={site.smsHref} className="underline">text</a>)</p>
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