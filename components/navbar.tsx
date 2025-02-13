"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { label: "About", href: "/about" },
  { label: "Location", href: "/location" },
  { label: "Blueprints", href: "/blueprints" },
  { label: "Gallery", href: "/gallery" },
  { label: "Dining", href: "/dining" },
  { label: "Weddings", href: "/weddings" },
  { label: "Rates", href: "/rates" },
  { label: "Amenities", href: "/amenities" },
  { label: "Activities", href: "/activities" },
  { label: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A1A1A] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-6">
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
        </div>
      </div>
    </nav>
  )
} 