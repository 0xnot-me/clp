import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function RatesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Rates & Availability" />
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Rates & Availability</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">6 Bedrooms</h2>
              <p className="text-gray-600 mb-2">(up to 12 guests)</p>
              <p className="text-lg font-semibold">Starting from $1,000/night</p>
            </div>
            <div className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">7 Bedrooms</h2>
              <p className="text-gray-600 mb-2">(12-14 guests)</p>
              <p className="text-lg font-semibold">Starting from $1,200/night</p>
            </div>
            <div className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Full House</h2>
              <p className="text-gray-600 mb-2">(16-18 guests)</p>
              <p className="text-lg font-semibold">Starting from $1,500/night</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 