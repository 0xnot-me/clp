import { site } from "@/lib/site"

export default function QuoteCta() {
  return (
    <section id="quote" className="not-prose scroll-mt-28 rounded-xl border-2 border-black p-5 sm:p-8 text-center">
      <h2 className="text-3xl font-black">Get Your Exact Quote</h2>
      <p className="mt-4 text-lg leading-relaxed max-w-xl mx-auto">
        Call or text with your dates and group size.
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
      <p className="mt-4 text-base text-gray-600">Book direct: no booking-site fees, and airport pickup is included.</p>
    </section>
  )
}
