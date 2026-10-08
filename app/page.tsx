import Hero from "@/components/hero"
import Features from "@/components/features"
import LocationHighlight from "@/components/location-highlight"
import VibeReel from "@/components/vibe-reel"
import RentalOptions from "@/components/rental-options"
import Amenities from "@/components/amenities"
import GuestReviews from "@/components/guest-reviews"
import Footer from "@/components/footer"
import { JsonLd, vacationRentalSchema } from "@/components/json-ld"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Beachfront Villa Puerto Vallarta | Chef & Staff | Casa La Playa",
  description:
    "Rent Casa La Playa, a private beachfront villa in downtown Puerto Vallarta. 6–8 bedrooms, chef and staff, two pools, and walkable location. Book direct.",
  path: "/",
})

export default function Home() {
  return (
    <main>
      <JsonLd data={vacationRentalSchema} />
      <Hero />
      <Features />
      <LocationHighlight />
      <GuestReviews />
      <VibeReel />
      <RentalOptions />
      <Amenities />
      <Footer />
    </main>
  )
}
