import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Amenities from "@/components/amenities"
import PageHeader from "@/components/page-header"
import FactSheet from "@/components/fact-sheet"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Casa La Playa Amenities | Pools, Elevator, Chef and Full Staff",
  description:
    "Amenities at Casa La Playa Puerto Vallarta: 8 beachfront suites, 2 swimming pools, a reflecting pool and a jacuzzi, elevator, 2 kitchens, 175 ft of beachfront, private chef, maids and concierge.",
  path: "/amenities",
})

export default function AmenitiesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Amenities" />
      <div className="pt-1 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <FactSheet />
          <Amenities />
        </div>
      </div>
      <Footer />
    </main>
  )
}
