import Image from "next/image"
import Link from "next/link"
import { site } from "@/lib/site"
import InstagramIcon from "./instagram-icon"

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Location", href: "/location" },
  { label: "Gallery", href: "/gallery" },
  { label: "Rates", href: "/rates" },
  { label: "Dining", href: "/dining" },
  { label: "Sample Menu", href: "/sample-menu" },
  { label: "Amenities", href: "/amenities" },
  { label: "Activities", href: "/activities" },
  { label: "FAQ", href: "/faq" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-8 text-white/80">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3 items-start">
        <div className="space-y-3">
          <Image 
            src="/logo.png" 
            alt="Casa La Playa Puerto Vallarta"
            width={160}
            height={64}
          />
          <p className="text-sm">
            8-bedroom beachfront villa on {site.beach}, {site.address.neighborhood}, {site.address.city}, {site.address.region}, Mexico
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-sm">
          <p className="text-xl font-medium text-white">Book Your Dream Vacation Today</p>
          <p><a href={site.telHref} className="hover:text-white">{site.phoneDisplay}</a> · <a href={site.smsHref} className="hover:text-white underline">Text us</a></p>
          <p><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
          <div className="pt-2 flex items-center gap-4">
            <a href={site.instagram} className="hover:text-white" aria-label="Casa La Playa on Instagram" target="_blank" rel="noopener">
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <p className="container mx-auto px-4 mt-8 text-sm text-white/60">
        © {new Date().getFullYear()} {site.brand}. All rights reserved.
      </p>
    </footer>
  )
}
