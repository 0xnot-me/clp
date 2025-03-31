import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000) // 2 seconds loading screen

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 bg-[#1a1a1a] z-[9999] flex items-center justify-center"
      style={{
        animation: 'fadeOut 0.5s ease-in-out forwards',
        animationDelay: '1.5s',
        pointerEvents: 'none'
      }}
    >
      <div className="relative w-60 h-60 animate-pulse">
        <Image
          src="/logoclp.svg"
          alt="Casa La Playa Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <style jsx global>{`
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
} 