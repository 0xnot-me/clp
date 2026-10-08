import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: { absolute: "Page Not Found | Casa La Playa Puerto Vallarta" },
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Page Not Found" />
      <div className="container mx-auto px-4 py-16 text-center space-y-6">
        <p className="text-lg">That page isn&apos;t here anymore. Here are some places to start:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-gray-900 text-white px-6 py-3">Home</Link>
          <Link href="/rates" className="bg-gray-900 text-white px-6 py-3">Rates</Link>
          <Link href="/gallery" className="bg-gray-900 text-white px-6 py-3">Gallery</Link>
          <Link href="/contact" className="bg-gray-900 text-white px-6 py-3">Contact</Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
