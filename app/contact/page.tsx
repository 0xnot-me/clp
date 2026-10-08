import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import { pageMetadata } from "@/lib/metadata"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Contact Casa La Playa Puerto Vallarta | Reservations & Availability",
  description:
    "Book Casa La Playa Puerto Vallarta directly. Call 310-986-2299 or email info@casalaplaya.com for availability on our 6, 7 and 8-bedroom beachfront villa options.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Contact Casa La Playa" />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Book Direct and Save</h2>
              <p className="text-lg mb-4">
                Booking directly with us means no booking-site service fees, which typically add 4–12% to your stay.
              </p>
              <p className="text-lg mb-6">
                We&apos;re here to help plan your stay. Tell us your dates, how many guests and which bedroom option
                you&apos;re considering (6, 7 or all 8 bedrooms), and we&apos;ll confirm availability and rates. We
                rent to one group at a time, and Christmas and New Year&apos;s require the full 8-bedroom house with a
                one-week minimum.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  <a href={site.telHref} className="hover:underline">{site.phoneDisplay}</a>
                  <span>·</span>
                  <a href={site.smsHref} className="hover:underline">Text us</a>
                </p>
                <p className="flex items-center gap-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
                </p>
                <address className="not-italic text-lg">
                  {site.name}<br />
                  {site.address.street}, {site.address.neighborhood}<br />
                  {site.address.postalCode} {site.address.city}, {site.address.region}, Mexico
                </address>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
