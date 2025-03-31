import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Contact" />
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-6">
                We're here to help plan your perfect vacation. Reach out to us 
                with any questions or to make a reservation.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  310-986-2299
                </p>
                <p className="flex items-center gap-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  info@casalaplaya.com
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