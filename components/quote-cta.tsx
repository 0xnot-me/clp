import { rentalOptions, site, usd } from "@/lib/site"

export default function QuoteCta() {
  return (
    <section id="quote" className="not-prose scroll-mt-28 mb-12 rounded-xl border-2 border-black p-5 sm:p-8 text-center">
      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-600">Rates from</p>
      <p className="text-4xl sm:text-5xl font-black mt-1">
        {usd(rentalOptions[0].nightly)}
        <span className="text-xl sm:text-2xl font-semibold text-gray-600">/night</span>
      </p>
      <p className="mt-4 text-lg leading-relaxed max-w-xl mx-auto">
        Every group is different. Call or text us with your dates and group size and we&apos;ll give you an exact
        quote.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 max-w-md mx-auto">
        <a href={site.telHref} className="bg-black text-white px-6 py-4 text-lg font-semibold tracking-wide">
          Call {site.phoneDisplay}
        </a>
        <a href={site.smsHref} className="border-2 border-black px-6 py-4 text-lg font-semibold tracking-wide">
          Text Us
        </a>
      </div>
      <p className="mt-4 text-base">
        Prefer email? <a href="#inquiry" className="underline font-medium">Send us your dates</a>
      </p>
      <p className="mt-4 text-base text-gray-600">
        Chef and full staff included. Book direct and pay no booking-site service fees.
      </p>
    </section>
  )
}
