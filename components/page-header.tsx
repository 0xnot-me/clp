import Image from "next/image"

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="relative h-[32vh] min-h-[240px] md:h-[40vh] md:min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/footer-bg.jpg"
        alt=""
        sizes="100vw"
        fill
        className="object-cover object-left-top"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">{title}</h1>
      </div>
     
    </div>
  )
} 