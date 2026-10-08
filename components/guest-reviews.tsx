import Link from "next/link"
import { GoogleG, VrboLogo } from "@/components/review-source-logos"
import { reviewSheets } from "@/lib/reviews"

const vrboSheets = reviewSheets.filter((sheet) => sheet.id !== "google")
const googleSheet = reviewSheets.find((sheet) => sheet.id === "google")

export default function GuestReviews() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-black text-center">Guest reviews</h2>
        <p className="mt-2 text-base sm:text-lg text-gray-700 text-center">Read some of our reviews</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {vrboSheets.map((sheet) => (
            <Link
              key={sheet.id}
              href={`/reviews#${sheet.id}`}
              className="rounded-lg border bg-white p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              <VrboLogo className="text-[20px] sm:text-[22px]" />
              <h3 className="mt-3 text-sm sm:text-base font-bold leading-snug">{sheet.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">{sheet.blurb}</p>
              <span className="inline-block mt-2 text-sm font-semibold underline">Read the reviews</span>
            </Link>
          ))}
        </div>

        {googleSheet && (
          <Link
            href={`/reviews#${googleSheet.id}`}
            className="mt-3 flex items-center gap-3 rounded-lg border bg-white p-3 sm:p-4 hover:shadow-md transition-shadow"
          >
            <GoogleG className="h-7 w-7 shrink-0" />
            <span className="min-w-0">
              <span className="block text-sm sm:text-base font-bold">Google Reviews</span>
              <span className="text-xs sm:text-sm text-gray-600">{googleSheet.blurb}</span>
              <span className="block text-sm font-semibold underline">Read the reviews</span>
            </span>
          </Link>
        )}
      </div>
    </section>
  )
}
