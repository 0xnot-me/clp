"use client"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import PageHeader from "@/components/page-header"

const galleryImages = [
  "/Penthouse-night-view.jpg",
  "/Penthouse-Master-Suite_3rd_floor1.jpg",
  "/Penthouse-view1.jpg",
  "/Penthouse-reflecting-pool-3rd-floor.jpg",
  "/Penthouse-pool-3rd-floor.jpg",
  "/Penthouse-Master-Suite_3rd_floor.jpg",
  "/View-from-the-Penthouse.jpg",
  "/Penthouse-view.jpg",
  "/Tower-3rd-Floor-Suite.jpg",
  "/Tower-3rd-Floor-Bathroom.jpg",
  "/Main-Building-Double-Queen-Suite.jpg",
  "/Main-Building-Suite.jpg",
  "/1st-Floor-Kitchen-Lounge.jpg",
  "/Tower-First-Floor-Suite-Patio-Looking-in.jpg",
  "/Tower-3rd-Floor-Suite.jpg",
  "/2nd-Floor-Living-Room.jpg",
  "/2nd-Floor-Bedroom.jpg",
  "/2nd-Floor-Indoor-Outdoor.jpg",
  "/2nd-Floor-Living-Bedroom-open.jpg",
  "/2nd-Floor-Kitchen.jpg"
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main>
      <Navbar />
      <PageHeader title="Gallery" />
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Gallery</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              Casa La Playa is a 20,000 square foot luxury villa located in the heart of Puerto Vallarta, Mexico. 
              This property is available for countless private bookings, vacations, honeymoons, weddings, other events, and much more. 
              The villa's unique architecture and layout includes a penthouse, 2 living areas and dining areas, 2 kitchens and kitchenettes, 
              8 bedroom suites, 8 bathrooms, 3 half baths, swimming pools and reflecting pools, a plunge pool, and beautiful gardens on every floor. 
              This floorplan allows guests plenty of space for both entertaining and relaxing. The gallery below showcases the beautiful 
              architecture and design of this one-of-a-kind Puerto Vallarta getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          style={{
            animation: 'fadeIn 0.1s ease-out'
          }}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] bg-white"
            style={{
              animation: 'scaleIn 0.1s ease-out'
            }}
          >
            <img
              src={selectedImage}
              alt="Enlarged gallery image"
              className="rounded-2xl max-h-[85vh] w-auto"
              style={{ 
                objectFit: 'contain',
              }}
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </main>
  )
} 