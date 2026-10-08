import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

const pages = [
  { path: "", priority: 1 },
  { path: "/rates", priority: 0.9 },
  { path: "/gallery", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/faq", priority: 0.8 },
  { path: "/location", priority: 0.7 },
  { path: "/amenities", priority: 0.7 },
  { path: "/dining", priority: 0.7 },
  { path: "/sample-menu", priority: 0.5 },
  { path: "/activities", priority: 0.5 },
  { path: "/contact", priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }))
}
