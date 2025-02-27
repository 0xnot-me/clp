import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
export default function LocationPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Location" />
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Our Location</h1>
          <div className="aspect-[16/9] w-full mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.298!2d-105.233355!3d20.619901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84214544a598353f%3A0xc7abd8e0d203c778!2sCasa+La+Playa%2C+Puerto+Vallarta!5e0!3m2!1sen!2sus!4v1710284151824!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Located in the heart of Puerto Vallarta, Casa La Playa offers easy access to local 
              attractions while maintaining a private, peaceful atmosphere.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 