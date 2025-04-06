import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"

export default function RatesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Rates & Availability" />
      <div className="min-h-[calc(100vh-400px)]">
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg italic mb-8">
                  All rates include private access to Casa La Playa's luxury amenities and the villa's full-service staff to best accommodate you during your stay.
                </p>

                <h2 className="text-2xl font-bold mb-4">Nightly Rates ($USD)</h2>
                
                {/* Desktop Table */}
                <div className="hidden md:block">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Dates</th>
                        <th className="text-left py-3 px-4">6 Bedroom</th>
                        <th className="text-left py-3 px-4">7 Bedroom</th>
                        <th className="text-left py-3 px-4">8 Bedroom</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">May 1-Sept. 30</td>
                        <td className="py-3 px-4">$3200</td>
                        <td className="py-3 px-4">$4000</td>
                        <td className="py-3 px-4">$5000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Oct. 1-Apr. 30</td>
                        <td className="py-3 px-4">$3200</td>
                        <td className="py-3 px-4">$4000</td>
                        <td className="py-3 px-4">$5000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Christmas Week</td>
                        <td className="py-3 px-4">N/A</td>
                        <td className="py-3 px-4">N/A</td>
                        <td className="py-3 px-4">$7000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Easter Week</td>
                        <td className="py-3 px-4">N/A</td>
                        <td className="py-3 px-4">N/A</td>
                        <td className="py-3 px-4">$5500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-6">
                  {[
                    { period: "May 1-Sept. 30", six: "$3200", seven: "$4000", eight: "$5000" },
                    { period: "Oct. 1-Apr. 30", six: "$3200", seven: "$4000", eight: "$5000" },
                    { period: "Christmas Week", six: "N/A", seven: "N/A", eight: "$7000" },
                    { period: "Easter Week", six: "N/A", seven: "N/A", eight: "$5500" }
                  ].map((rate, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                      <div className="font-semibold text-lg mb-3">{rate.period}</div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">6 Bedroom:</span>
                          <span className="font-medium">{rate.six}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">7 Bedroom:</span>
                          <span className="font-medium">{rate.seven}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">8 Bedroom:</span>
                          <span className="font-medium">{rate.eight}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 text-sm mt-4">
                  Note: Until confirmed, rates are subject to change without notice. The villa accommodates 16 guests maximum. The above rates include a full housekeeping staff and chef. Restrictions may apply. All rates are subject to Mexican Federal Tax and Local Hotel Tax.
                </p>
                
                <div className="space-y-1 mt-2 text-gray-600 text-sm font-bold">
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
                  <p className="text-gray-600">info@casalaplaya.com</p>
                  <p className="text-gray-600">310-986-2299</p>
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