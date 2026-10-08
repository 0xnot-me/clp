"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

type TabType = 'fullHouse' | 'sixBedroom' | 'sevenBedroom'

interface Tab {
  id: TabType;
  label: string;
}

const tabs: Tab[] = [
  { id: 'fullHouse', label: 'Full House (8 Bedrooms)' },
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

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [activeTab, setActiveTab] = useState<TabType>('fullHouse')

  const images = galleryImages[activeTab]

  const goTo = (index: number) => {
    const next = (index + images.length) % images.length
    setCurrentIndex(next)
    setSelectedImage(images[next])
  }

  useEffect(() => {
    if (!selectedImage) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(currentIndex - 1)
      if (e.key === "ArrowRight") goTo(currentIndex + 1)
      if (e.key === "Escape") {
        setSelectedImage(null)
        setCurrentIndex(0)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selectedImage, currentIndex, images])

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
    setCurrentIndex(images.indexOf(image))
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    goTo(currentIndex - 1)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    goTo(currentIndex + 1)
  }

  return (
    <>
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
                  alt={`Casa La Playa Puerto Vallarta, ${tabs.find((t) => t.id === activeTab)?.label} photo ${index + 1} of ${galleryImages[activeTab].length}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

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
            type="button"
            aria-label="Previous photo"
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 z-[60] -translate-y-1/2 text-white bg-black/70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black transition-all duration-200"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-[60] -translate-y-1/2 text-white bg-black/70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black transition-all duration-200"
          >
            →
          </button>
          <div
            className="relative z-10 pointer-events-none flex items-center justify-center w-[96vw] h-[92vh]"
            style={{ animation: "scaleIn 0.1s ease-out" }}
          >
            <img
              src={selectedImage}
              alt={`Casa La Playa Puerto Vallarta, enlarged photo ${currentIndex + 1}`}
              className="pointer-events-auto rounded-2xl h-[92vh] w-auto max-w-[96vw] object-contain"
            />
            <button
              type="button"
              aria-label="Close photo"
              className="pointer-events-auto absolute top-4 right-4 text-white bg-black/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition-all duration-200"
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
    </>
  )
} 