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
        className="object-cover object-left-top"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
      </div>
     
    </div>
  )
} 