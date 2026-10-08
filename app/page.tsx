import Hero from "@/components/hero"
import Features from "@/components/features"
import RentalOptions from "@/components/rental-options"
import Amenities from "@/components/amenities"
import Footer from "@/components/footer"
import { JsonLd, vacationRentalSchema } from "@/components/json-ld"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Casa La Playa Puerto Vallarta | 8-Bedroom Beachfront Villa with Chef",
  description:
    "Casa La Playa Puerto Vallarta is a fully staffed 8-bedroom beachfront villa on Playa Camarones, a 10-minute walk to the Malecón. Private chef, pools, sleeps 16.",
  path: "/",
})

export default function Home() {
  return (
    <main>
      <JsonLd data={vacationRentalSchema} />
      <Hero />
      <Features />
      <RentalOptions />
      <Amenities />
      <Footer />
    </main>
  )
}
