import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Chef Wendy's Sample Menu | Casa La Playa Puerto Vallarta",
  description:
    "Sample breakfast, lunch, dinner and dessert menus from Chef Wendy Galeana at Casa La Playa: chilaquiles, ceviche, fish tacos, lobster enchiladas, paella and more.",
  path: "/sample-menu",
})

type Section = { heading: string; items: string[] }
type Menu = { meal: string; hours: string; note?: string; sections: Section[] }

const menus: Menu[] = [
  {
    meal: "Breakfast",
    hours: "7:30 to 11:00 AM",
    note: "Included with your stay",
    sections: [
      {
        heading: "Favorite Mexican Skillets",
        items: [
          "Huevos rancheros, red or green",
          "Traditional chilaquiles with chicken, eggs or skirt steak",
          "Breakfast burritos with Mexican eggs, bacon, cheese and beans, chorizo, or seasonal vegetables",
          "Eggs a la cazuela in red sauce with chorizo and Cotija cheese",
          "Mexican sopecitos with beans, cheese, beef, eggs or vegetables",
          "Breakfast tacos with eggs and bacon, chorizo and potatoes, or machaca",
        ],
      },
      {
        heading: "Breakfast Classics",
        items: [
          "Fried or scrambled eggs",
          "Banana or regular pancakes",
          "The chef's specialty French toast",
          "Avocado toast, or toast with cottage cheese and tomatoes",
          "Omelets: Mediterranean, Mexican or shrimp",
          "Eggs Benedict with ham, bacon, smoked salmon, crab or lobster",
        ],
      },
      {
        heading: "Sides, Juices and Coffee",
        items: [
          "Chorizo, beans, sausage, sautéed potatoes, hash browns, pan dulce",
          "Fresh orange juice, green juice and seasonal juices",
          "Espresso, café latte, vanilla latte, Americano and carajillo",
        ],
      },
    ],
  },
  {
    meal: "Lunch",
    hours: "12:00 to 3:00 PM",
    note: "Included with your stay",
    sections: [
      {
        heading: "Ceviches and Seafood",
        items: [
          "Traditional fish ceviche",
          "The chef's favorite mixed ceviche with octopus, shrimp and fish",
          "Traditional Mexican shrimp cocktail",
          "Tuna tartare or sashimi with crispy wontons",
          "Shrimp aguachile and seasonal fish crudo",
          "Pulpo enamorado octopus salad",
        ],
      },
      {
        heading: "Taco Bar",
        items: [
          "Fish tacos, grilled or Baja style",
          "Crispy chicken, octopus, carnitas, shrimp al pastor and skirt steak tacos",
        ],
      },
      {
        heading: "Mexican Dishes and Classics",
        items: [
          "Fajitas with beef, chicken, shrimp or mixed",
          "Seafood enchiladas, shrimp al ajillo, pescadillas and camaronillas",
          "Burritos, nachos, quesadillas and guacamole",
          "Pizzas: margherita, pepperoni, serrano ham with burrata, and seafood",
          "Beef, crispy chicken or shrimp and pineapple burgers",
          "Club sandwich with French fries",
        ],
      },
    ],
  },
  {
    meal: "Dinner",
    hours: "5:00 to 8:00 PM",
    note: "Available for an additional fee",
    sections: [
      {
        heading: "Appetizers and Soups",
        items: [
          "Sopecitos, empanaditas, crab cakes with chipotle dressing, spring rolls",
          "Tortilla soup, Tarascan soup, tlalpeño broth, poblano cream soup",
        ],
      },
      {
        heading: "Main Courses",
        items: [
          "Chiles rellenos with chicken, cheese, beef or seafood",
          "Skirt steak with mole sauce",
          "Grilled ribeye with hasselback potatoes",
          "Catch of the day, zarandeado or piccata",
          "Surf and turf with bay lobster or shrimp and filet mignon or ribeye",
          "Lobster enchiladas",
          "Short rib barbacoa, pork ribs in adobo, grilled octopus with risotto",
        ],
      },
      {
        heading: "The Chef's Favorites",
        items: ["Shrimp and pineapple skewers", "Seafood paella with clams, shrimp, scallops, octopus, mussels and calamari"],
      },
    ],
  },
  {
    meal: "Dessert",
    hours: "",
    sections: [
      {
        heading: "Desserts",
        items: [
          "Double chocolate cake with berry sauce",
          "Churros with chocolate and ice cream",
          "Tres leches cake, coconut flan, passion fruit mousse",
          "Apple streusel and Mexican bananas Foster",
        ],
      },
    ],
  },
]

export default function SampleMenuPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Sample Menu" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 min-w-0 space-y-10">
            <p className="text-lg leading-relaxed">
              These sample menus are from Chef Wendy Galeana, Casa La Playa&apos;s chef in Puerto Vallarta. Breakfast
              and lunch chef service is included with every stay, and dinner can be added for a fee. Guests cover the
              cost of groceries, which the staff shop for and receipt. Menus change with the season, and the chef can
              also cook Italian, Asian and Mediterranean dishes or work around dietary needs. See{" "}
              <Link href="/dining" className="underline">dining at Casa La Playa</Link> for details, or{" "}
              <a href="/casa-la-playa-chef-menus.pdf" className="underline">download the full menu (PDF)</a>.
            </p>

            {menus.map((menu) => (
              <section key={menu.meal}>
                <h2 className="text-3xl font-bold">{menu.meal}</h2>
                {(menu.hours || menu.note) && (
                  <p className="text-gray-600 mb-4">
                    {[menu.hours, menu.note].filter(Boolean).join(" · ")}
                  </p>
                )}
                <div className="space-y-4">
                  {menu.sections.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-xl font-semibold mb-2">{section.heading}</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
