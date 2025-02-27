import Image from "next/image"

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/footer-bg.jpg"
        alt="Header background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
      </div>
      
      {/* Contact Info Box */}
      <div className="absolute bottom-0 right-0 bg-black/80 p-6 text-white">
        <p className="text-sm mb-1">To speak with us:</p>
        <p className="text-xl font-bold">310-986-2299</p>
        <button className="mt-2 px-4 py-2 border border-white text-sm hover:bg-white hover:text-black transition-colors">
          CONTACT US
        </button>
      </div>
    </div>
  )
} 