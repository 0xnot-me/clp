import Image from "next/image"
import Link from "next/link"
import { site } from "@/lib/site"

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
          <p><a href={site.telHref} className="hover:text-white">{site.phoneDisplay}</a></p>
          <p><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
          <div className="pt-2">
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

interface IconProps {
  className?: string;
}

const InstagramIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
) 