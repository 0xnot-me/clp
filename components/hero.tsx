'use client'

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "./navbar"
import { rentalOptions, usd } from "@/lib/site"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    const play = () => {
      void video.play().catch(() => {})
    }
    play()
    video.addEventListener("canplay", play)
    document.addEventListener("touchstart", play, { once: true })
    return () => {
      video.removeEventListener("canplay", play)
    }
  }, [])

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <Image
          src="/hero-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <iframe
          src="https://player.vimeo.com/video/358145420?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1"
          className="hidden md:block absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Video tour of Casa La Playa beachfront villa in Puerto Vallarta"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-black/30" />
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
