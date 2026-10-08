'use client'

import Link from "next/link"
import Image from "next/image"
import Navbar from "./navbar"
import { rentalOptions, usd } from "@/lib/site"

export default function Hero() {
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
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navigation */}
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
