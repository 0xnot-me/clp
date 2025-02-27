import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
export default function ActivitiesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Activities" />
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Activities</h1>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Puerto Vallarta offers a wide range of activities for all interests. 
              From water sports and beach activities to cultural tours and nightlife, 
              there's something for everyone.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 