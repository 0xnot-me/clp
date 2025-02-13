import Link from "next/link"
import Image from "next/image"
import Navbar from "./navbar"

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <iframe
        src="https://player.vimeo.com/video/358145420?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
        <Link
          href="tel:310-986-2299"
          className="border border-white bg-[#333333] px-6 py-2 text-sm font-medium text-white tracking-wider hover:bg-gray-800 flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-4 h-4"
          >
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          310-986-2299
        </Link>
      </div>
    </div>
  )
}

