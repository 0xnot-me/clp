import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function DiningPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Dining" />
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Dining Experience</h1>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              At Casa La Playa, we offer a range of dining options to suit your preferences. 
              From private chef services to recommendations for local restaurants, we ensure 
              your culinary experience is nothing short of exceptional.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 