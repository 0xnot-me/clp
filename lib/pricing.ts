import { holidayRates, rentalOptions, type Bedrooms } from "./site"

const DAY = 86_400_000

function easterSunday(year: number) {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return Date.UTC(year, month - 1, day)
}

type NightType = "regular" | "christmas" | "easter"

function nightType(night: number): NightType {
  const d = new Date(night)
  const month = d.getUTCMonth()
  const date = d.getUTCDate()
  if (month === 11 && date >= 24) return "christmas"
  const easter = easterSunday(d.getUTCFullYear())
  if (night >= easter - 7 * DAY && night < easter) return "easter"
  return "regular"
}

export function parseDate(value: string) {
  const [y, m, d] = value.split("-").map(Number)
  return y && m && d ? Date.UTC(y, m - 1, d) : null
}

export function suggestedBedrooms(guests: number): Bedrooms | null {
  return rentalOptions.find((o) => guests <= o.maxGuests)?.bedrooms ?? null
}

export type Quote = {
  nights: number
  bedrooms: Bedrooms
  lines: { label: string; nights: number; rate: number; total: number }[]
  subtotal: number
  averageNightly: number
  notices: string[]
}

export function quoteStay(checkIn: number, checkOut: number, requested: Bedrooms): Quote | null {
  const nights = Math.round((checkOut - checkIn) / DAY)
  if (nights < 1) return null

  const counts: Record<NightType, number> = { regular: 0, christmas: 0, easter: 0 }
  for (let n = checkIn; n < checkOut; n += DAY) counts[nightType(n)]++

  const notices: string[] = []
  let bedrooms = requested
  const holiday = counts.christmas > 0 || counts.easter > 0
  if (holiday && bedrooms !== 8) {
    bedrooms = 8
    notices.push("Christmas, New Year's and Easter week are booked as the full 8-bedroom house only, so this quote uses 8 bedrooms.")
  }
  if (counts.christmas > 0 && nights < holidayRates.christmasMinNights) {
    notices.push(`Christmas and New Year's stays require a ${holidayRates.christmasMinNights}-night minimum.`)
  }

  const regularRate = rentalOptions.find((o) => o.bedrooms === bedrooms)!.nightly
  const lines = [
    { label: `${bedrooms} bedrooms`, nights: counts.regular, rate: regularRate },
    { label: "Christmas week (8 bedrooms)", nights: counts.christmas, rate: holidayRates.christmas },
    { label: "Easter week (8 bedrooms)", nights: counts.easter, rate: holidayRates.easter },
  ]
    .filter((l) => l.nights > 0)
    .map((l) => ({ ...l, total: l.nights * l.rate }))

  const subtotal = lines.reduce((sum, l) => sum + l.total, 0)
  return { nights, bedrooms, lines, subtotal, averageNightly: subtotal / nights, notices }
}
