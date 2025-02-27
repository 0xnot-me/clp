import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Amenities from "@/components/amenities"
import PageHeader from "@/components/page-header"
export default function AmenitiesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Amenities" />
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Our Amenities</h1>
          <Amenities />
        </div>
      </div>
      <Footer />
    </main>
  )
} 