import Link from "next/link"
import Image from "next/image"
import Navbar from "./navbar"

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <iframe
        src="https://player.vimeo.com/video/358145420?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&preload=auto"
        className="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 object-cover"
        allow="autoplay; fullscreen"
        frameBorder="0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation */}
      <Navbar />
      
      <div className="relative z-10 flex items-center justify-between p-6">
        <div className="w-40">
          <Image src="/logo.png" alt="Logo" width={160} height={60} className="h-auto w-full" />
        </div>
       
      </div>
    </div>
  )
}

