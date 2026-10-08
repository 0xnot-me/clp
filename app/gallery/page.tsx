import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GalleryGrid from "@/components/gallery-grid"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Casa La Playa Photos | Puerto Vallarta Beachfront Villa Gallery",
  description:
    "Photos of Casa La Playa Puerto Vallarta: the beachfront pool and jacuzzi, penthouse, oceanfront suites and terraces, shown for the full house and 6 and 7-bedroom options.",
  path: "/gallery",
})

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Photo Gallery" />
      <div className="pt-2 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              Casa La Playa can be rented as the full 8-bedroom house or as a 6 or 7-bedroom option. The villa
              includes a penthouse, 2 living and dining areas, 2 kitchens, 8 bedroom suites, 8 full bathrooms and 2
              half baths, 2 pools, reflecting pools and a jacuzzi, all facing the beach. It offers the service of a
              5-star resort with the privacy of a home, with plenty of space for both entertaining and relaxing.
            </p>
          </div>
          <GalleryGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}
