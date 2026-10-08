import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"
import { pageMetadata } from "@/lib/metadata"
import { GoogleG, VrboLogo } from "@/components/review-source-logos"
import { reviewSets, reviewSheets } from "@/lib/reviews"

export const metadata = pageMetadata({
  title: "Guest Reviews | Casa La Playa Puerto Vallarta",
  description:
    "Read guest reviews of Casa La Playa in Puerto Vallarta: 10/10 on the 6- and 8-bedroom listings and 4.8 stars on Google. Book direct.",
  path: "/reviews",
})

export default function ReviewsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema("Reviews", "/reviews")} />
      <Navbar />
      <PageHeader title="Guest Reviews" />
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          <div className="md:col-span-2 min-w-0 space-y-10">
            <p className="text-lg">Read some of our reviews</p>

            {reviewSheets.map((sheet) => {
              const set = reviewSets.find((item) => item.id === sheet.id)
              const isGoogle = sheet.id === "google"
              return (
                <section key={sheet.id} id={sheet.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-2">
                    {isGoogle ? <GoogleG className="h-6 w-6 shrink-0" /> : <VrboLogo />}
                    <p className="text-sm text-gray-600">{sheet.blurb}</p>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">{sheet.title}</h2>
                  {set && set.reviews.length > 0 && (
                    <div className="mt-5 space-y-5">
                      {set.reviews.map((review) => (
                        <article key={`${review.name ?? "guest"}-${review.stay}-${review.body.slice(0, 24)}`}>
                          <h3 className="text-base sm:text-lg font-semibold">
                            {review.score}
                            {review.title ? ` · ${review.title}` : ""}
                          </h3>
                          <p className="mt-1.5 text-gray-700 leading-relaxed">{review.body}</p>
                          <p className="mt-1.5 text-sm text-gray-600">
                            {review.name ? `${review.name} · ${review.stay}` : review.stay}
                          </p>
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              )
            })}
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
