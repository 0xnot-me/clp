"use client"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import PageHeader from "@/components/page-header"

type TabType = 'fullHouse' | 'fourBedroom' | 'sixBedroom' | 'sevenBedroom'

interface Tab {
  id: TabType;
  label: string;
}

const tabs: Tab[] = [
  { id: 'fullHouse', label: 'Full House' },
  { id: 'fourBedroom', label: '4 Bedroom Option' },
  { id: 'sixBedroom', label: '6 Bedroom Option' },
  { id: 'sevenBedroom', label: '7 Bedroom Option' }
]

type GalleryImages = {
  [K in TabType]: string[];
}

const galleryImages: GalleryImages = {
  fullHouse: [
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0000_1.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0001_2.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0002_4.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0003_5.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0004_6.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0005_7.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0006_8.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0007_9.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0008_10.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0009_11.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0010_12.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0011_13.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0012_14.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0013_15.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0014_16.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0015_17.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0016_18.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0017_19.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0018_20.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0019_21.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0020_22.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0021_23.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0022_24.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0023_25.png",
    "/gallery/full/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0000s_0024_26.png"
  ],
  fourBedroom: [
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0000_1a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0001_2a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0002_3a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0003_4a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0004_5a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0005_6a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0006_7a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0007_8a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0008_9a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0009_10a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0010_11a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0011_12a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0012_13a.png",
    "/gallery/clp-4-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0003s_0013_14a.png"
  ],
  sixBedroom: [
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0000_1b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0001_2b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0002_3b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0003_4b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0004_5b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0005_6b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0006_7b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0007_8b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0008_9b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0009_10b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0010_11b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0011_12b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0012_13b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0013_14b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0014_15b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0015_16b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0016_17b.png",
    "/gallery/clp-6-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0002s_0017_18b.png"
  ],
  sevenBedroom: [
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0000_1c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0001_2c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0002_3c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0003_4c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0004_5c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0005_6c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0006_7c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0007_8c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0008_9c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0009_10c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0010_11c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0011_12c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0012_13c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0013_14c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0014_15c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0015_16c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0016_17c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0017_18c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0018_19c.png",
    "/gallery/clp-7-img/casa-la-playa-puerto-vallarta-vacation-house-for-rent_0001s_0019_20c.png"
  ]
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [activeTab, setActiveTab] = useState<TabType>('fullHouse')

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
    setCurrentIndex(galleryImages[activeTab].indexOf(image))
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    const images = galleryImages[activeTab]
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setSelectedImage(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1])
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    const images = galleryImages[activeTab]
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setSelectedImage(images[currentIndex === images.length - 1 ? 0 : currentIndex + 1])
  }

  return (
    <main>
      <Navbar />
      <PageHeader title="Gallery" />
      <div className="pt-2 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
            Available for vacations, honeymoons, weddings, and special events, the villa's unique design includes a penthouse, 2 living areas and dining areas, 2 kitchens, 8 bedroom suites, 8 bathrooms, 3 half baths, swimming pools and reflecting pools, a jacuzzi, and a plunge pool. Providing both the luxury of a 5-star resort and the privacy of a home, this floorplan allows guests plenty of space for both entertaining and relaxing.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-2 md:space-y-0 mb-8 px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-6 py-4 md:py-3 text-lg font-semibold rounded-lg transition-colors w-full md:w-auto
                  ${activeTab === tab.id 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages[activeTab].map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image}
                  alt={`Casa La Playa Gallery Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {galleryImages[activeTab].length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Images coming soon...</p>
            </div>
          )}
        </div>
      </div>
      <Footer />

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedImage(null)
            setCurrentIndex(0)
          }}
          style={{
            animation: 'fadeIn 0.1s ease-out'
          }}
        >
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
          >
            →
          </button>
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