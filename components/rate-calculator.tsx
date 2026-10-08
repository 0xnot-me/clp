"use client"

import { useMemo, useState } from "react"
import { rentalOptions, site, usd, type Bedrooms } from "@/lib/site"
import { parseDate, quoteStay, suggestedBedrooms } from "@/lib/pricing"
import { PREFILL_EVENT } from "./contact-form"

const today = () => new Date().toISOString().slice(0, 10)

export default function RateCalculator() {
  const [guests, setGuests] = useState(12)
  const [bedrooms, setBedrooms] = useState<Bedrooms>(6)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  const tooMany = guests > site.maxGuests
  const option = rentalOptions.find((o) => o.bedrooms === bedrooms)!

  const quote = useMemo(() => {
    const start = parseDate(checkIn)
    const end = parseDate(checkOut)
    return start && end ? quoteStay(start, end, bedrooms) : null
  }, [checkIn, checkOut, bedrooms])

  const nightly = quote ? quote.averageNightly : option.nightly
  const perGuest = guests > 0 ? nightly / guests : null

  function changeGuests(value: number) {
    setGuests(value)
    setBedrooms(suggestedBedrooms(value) ?? 8)
  }

  function requestDates() {
    const message = [
      `I'd like to check availability for the ${quote?.bedrooms ?? bedrooms}-bedroom option.`,
      `Guests: ${guests}`,
      checkIn && checkOut ? `Dates: ${checkIn} to ${checkOut} (${quote?.nights ?? "?"} nights)` : "Dates: flexible",
      quote ? `Estimated subtotal from the website: ${usd(quote.subtotal)} before taxes` : "",
    ]
      .filter(Boolean)
      .join("\n")
    window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: message }))
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="calculator" aria-labelledby="calculator-heading" className="not-prose border rounded-lg p-6 mb-10 scroll-mt-28">
      <h2 id="calculator-heading" className="text-2xl font-bold mb-1">What Will My Stay Cost?</h2>
      <p className="text-gray-600 mb-6">Enter your group size and dates for an instant estimate.</p>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <label className="block">
          <span className="text-sm font-semibold">Guests</span>
          <input
            type="number"
            min={1}
            max={30}
            value={guests}
            onChange={(e) => changeGuests(Math.max(1, Number(e.target.value) || 1))}
            className="mt-1 w-full px-3 py-2 border rounded"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Check-in</span>
          <input
            type="date"
            min={today()}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Check-out</span>
          <input
            type="date"
            min={checkIn || today()}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded"
          />
        </label>
      </div>

      <fieldset className="mb-6">
        <legend className="text-sm font-semibold mb-2">Bedrooms</legend>
        <div className="grid grid-cols-3 gap-3">
          {rentalOptions.map((o) => (
            <button
              key={o.bedrooms}
              type="button"
              onClick={() => setBedrooms(o.bedrooms)}
              aria-pressed={bedrooms === o.bedrooms}
              disabled={guests > o.maxGuests && !tooMany}
              className={`rounded-lg border px-3 py-3 text-left transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                bedrooms === o.bedrooms ? "bg-black text-white border-black" : "bg-white hover:bg-gray-50"
              }`}
            >
              <span className="block font-semibold">{o.bedrooms === 8 ? "Full house (8)" : `${o.bedrooms} bedrooms`}</span>
              <span className="block text-sm opacity-80">Up to {o.maxGuests} guests · {usd(o.nightly)}/night</span>
            </button>
          ))}
        </div>
      </fieldset>

      {tooMany && (
        <p className="mb-4 rounded bg-amber-50 border border-amber-200 p-3 text-sm">
          The villa is set up for {site.maxGuests} guests. For larger groups, please{" "}
          <a href={site.telHref} className="underline">call us</a> and we&apos;ll see what we can do.
        </p>
      )}

      <div className="rounded-lg bg-gray-50 p-5" aria-live="polite">
        {quote ? (
          <>
            <dl className="space-y-1 text-sm">
              {quote.lines.map((l) => (
                <div key={l.label} className="flex justify-between gap-4">
                  <dt>{l.label}: {l.nights} {l.nights === 1 ? "night" : "nights"} × {usd(l.rate)}</dt>
                  <dd>{usd(l.total)}</dd>
                </div>
              ))}
            </dl>
            <div className="flex justify-between items-baseline border-t mt-3 pt-3">
              <span className="font-semibold">Estimated total for {quote.nights} {quote.nights === 1 ? "night" : "nights"}</span>
              <span className="text-3xl font-bold">{usd(quote.subtotal)}</span>
            </div>
            {quote.notices.map((n) => (
              <p key={n} className="mt-3 text-sm text-amber-800">{n}</p>
            ))}
          </>
        ) : (
          <div className="flex justify-between items-baseline">
            <span className="font-semibold">{option.bedrooms === 8 ? "Full house" : `${option.bedrooms} bedrooms`}, per night</span>
            <span className="text-3xl font-bold">{usd(option.nightly)}</span>
          </div>
        )}
        {perGuest && !tooMany && (
          <p className="mt-2 text-sm text-gray-600">
            That&apos;s about <strong>{usd(perGuest)} per guest per night</strong> for {guests} guests, including the
            chef, maids, night watchman and concierge.
          </p>
        )}
        <p className="mt-3 text-xs text-gray-500">
          Before Mexican federal and local hotel taxes. Groceries and optional dinner service are extra. Rates are
          subject to change until your booking is confirmed.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button type="button" onClick={requestDates} className="bg-black text-white px-6 py-3 font-semibold tracking-wide">
          Request These Dates
        </button>
        <a href={site.telHref} className="border border-black px-6 py-3 font-semibold tracking-wide text-center">
          Call {site.phoneDisplay}
        </a>
      </div>
    </section>
  )
}
