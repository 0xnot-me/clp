"use client"

import Link from "next/link"
import Image from "next/image"

const navItems = [
  { label: "About", href: "/about" },
  { label: "Location", href: "/location" },
  { label: "Gallery", href: "/gallery" },
  { label: "Rates", href: "/rates" },
  { label: "Dining", href: "/dining" },
  { label: "Amenities", href: "/amenities" },
  { label: "Activities", href: "/activities" },
  { label: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#201c1c]/90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={160} 
            height={60} 
            className="h-auto w-40"
          />
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-white/80 hover:text-white text-sm tracking-wider transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="tel:310-986-2299"
            className="border border-white bg-white px-6 py-2 text-sm font-medium text-black tracking-wider hover:bg-white flex items-center gap-2"
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
    </nav>
  )
} 