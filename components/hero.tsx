'use client'

import { useEffect, useRef } from "react"
import Link from "next/link"
import Navbar from "./navbar"
import { rentalOptions, usd } from "@/lib/site"

const HERO_VIDEO_HTML = `<video autoplay muted loop playsinline webkit-playsinline preload="auto" poster="/hero-poster.jpg" src="/hero-tour.mp4" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></video>`

export default function Hero() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = boxRef.current?.querySelector("video")
    if (!video) return
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    const play = () => {
      video.muted = true
      void video.play().catch(() => {})
    }
    play()
    video.addEventListener("canplay", play)
    const kick = () => play()
    window.addEventListener("touchstart", kick, { passive: true })
    window.addEventListener("scroll", kick, { passive: true })
    return () => {
      video.removeEventListener("canplay", play)
      window.removeEventListener("touchstart", kick)
      window.removeEventListener("scroll", kick)
    }
  }, [])

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <div
          ref={boxRef}
          className="absolute inset-0"
          dangerouslySetInnerHTML={{ __html: HERO_VIDEO_HTML }}
        />
      </div>

      <Navbar />

      <Link
        href="/rates"
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 bg-white/90 hover:bg-white text-black px-6 py-3 text-center whitespace-nowrap"
      >
        <span className="block text-sm font-semibold tracking-[0.15em] uppercase">
          Rates from {usd(rentalOptions[0].nightly)}/night
        </span>
        <span className="block text-sm tracking-wide">Book direct, no booking-site fees</span>
      </Link>

      <div
        onClick={() => {
          document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
        }}
        className="absolute bottom-8 inset-x-0 mx-auto w-fit z-10 text-white flex flex-col items-center justify-center gap-2 cursor-pointer animate-bounce hover:text-gray-200 transition-colors text-center"
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
