'use client'

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

      <div 
        onClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2 cursor-pointer animate-bounce hover:text-gray-200 transition-colors"
      >
        <span className="text-lg font-medium">Learn More</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
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

