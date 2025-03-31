'use client'

import Link from "next/link"
import Image from "next/image"
import Navbar from "./navbar"

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Video background contained within hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/358145420?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&preload=auto"
          className="absolute top-1/2 left-1/2 md:h-[120%] md:w-[120%] h-auto w-auto min-w-[250%] min-h-[250%] md:min-w-full md:min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 md:scale-100 scale-[1.75]"
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navigation */}
      <Navbar />
      
      <div className="relative z-10 flex items-center justify-between p-6">
        <div className="w-40">
          <Image src="/logo.png" alt="Logo" width={160} height={60} className="h-auto w-full" />
        </div>
      </div>

      <div 
        onClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 md:left-[48%] left-[38%] -translate-x-1/2 z-10 text-white flex flex-col items-center justify-center gap-2 cursor-pointer animate-bounce hover:text-gray-200 transition-colors text-center"
      >
        <span className="text-lg font-medium">Learn More</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 mx-auto" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  )
}

