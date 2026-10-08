import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { site } from "@/lib/site"
import InstagramIcon from "./instagram-icon"

const REEL_URL = "https://www.instagram.com/reel/C8pXy1IM-zt/"
const REEL_CREATOR = "adventures_bysky"

export default function VibeReel() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-600">See the vibe</p>
          <h2 className="text-3xl md:text-5xl font-black mt-2">What a Stay Feels Like</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            &ldquo;The ultimate beachfront vacation home.&rdquo; &mdash; @{REEL_CREATOR}
          </p>
          <p className="text-lg font-semibold mt-4">Want to see what the house is really like? Check out our Instagram.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <InstagramButton />
            <Link href="/rates#quote" className="inline-block border border-gray-900 px-8 py-3 font-medium tracking-wide">
              GET YOUR QUOTE
            </Link>
          </div>
        </div>

        <ReelCard />
      </div>
    </section>
  )
}

export function ReelCard() {
  return (
    <a
      href={REEL_URL}
      target="_blank"
      rel="noopener"
      aria-label={`Watch @${REEL_CREATOR}'s Instagram reel of Casa La Playa`}
      className="group relative block w-full max-w-[420px] mx-auto aspect-[4/5] overflow-hidden rounded-xl"
    >
      <Image
        src="/Penthouse-view.jpg"
        alt="Sunset from the Casa La Playa penthouse terrace over Banderas Bay"
        fill
        sizes="(min-width: 1024px) 420px, 100vw"
        className="object-cover group-hover:scale-105 transition-transform"
      />
      <span className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white gap-3">
        <span className="w-20 h-20 rounded-full bg-white/90 text-black flex items-center justify-center">
          <Play className="w-9 h-9 ml-1" fill="currentColor" aria-hidden="true" />
        </span>
        <span className="text-lg font-semibold">Watch on Instagram</span>
      </span>
    </a>
  )
}

export function InstagramButton() {
  return (
    <a
      href={site.instagram}
      target="_blank"
      rel="noopener"
      aria-label="See @casalaplaya on Instagram"
      className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 font-medium tracking-wide whitespace-nowrap"
    >
      <InstagramIcon className="w-5 h-5" />
      SEE OUR INSTAGRAM
    </a>
  )
}
