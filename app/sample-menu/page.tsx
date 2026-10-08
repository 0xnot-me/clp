import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { sampleMenus } from "@/lib/menus"

export const metadata = pageMetadata({
  title: "Chef Wendy's Sample Menus | Casa La Playa Puerto Vallarta",
  description:
    "Sample lunch and vegetarian menus from Chef Wendy Galeana at Casa La Playa: ceviches, tuna tartare, taco bar, gourmet burgers, chile en nogada, mushroom enmoladas and more.",
  path: "/sample-menu",
})

type Section = { heading: string; items: { name: string; detail?: string }[] }

const menuText: Record<string, { note: string; sections: Section[] }> = {
  lunch: {
    note: "Lunch is served 12:00 to 3:00 PM. Service after 5:00 PM is considered dinner and has an extra cost.",
    sections: [
      {
        heading: "Ceviches",
        items: [
          { name: "Traditional fish ceviche", detail: "White fish cooked in lime with cucumber, onion, carrots, cilantro and tomato" },
          { name: "The chef's favorite", detail: "Mixed ceviche with octopus, shrimp and fish" },
          { name: "Peruvian style", detail: "Fish or shrimp with corn, avocado, sweet potato and bell peppers" },
        ],
      },
      {
        heading: "Specialties",
        items: [
          { name: "Tuna of the bay: tartare or sashimi", detail: "With special soy sauce and crispy wontons" },
          { name: "Shrimp in classic aguachile" },
          { name: "Seasonal fish tiradito", detail: "Slices of seasonal fish with special sauces" },
          { name: "Avocado stuffed with seafood and special dressing" },
          { name: "Seasonal salads and vinaigrettes" },
        ],
      },
      {
        heading: "Classic Lunch",
        items: [
          { name: "Fajitas with beef, chicken, shrimp or mixed", detail: "Served with rice, beans, flour or corn tortillas and toppings" },
          { name: "Club sandwich and French fries" },
        ],
      },
      {
        heading: "Pizzas",
        items: [
          { name: "Pizza margherita" },
          { name: "Pepperoni pizza" },
          { name: "Gorgonzola, nuts and pear" },
          { name: "Seafood and tuna pizza", detail: "A must!" },
        ],
      },
      {
        heading: "Taco Bar",
        items: [
          { name: "Classic fish tacos, grilled or Baja style", detail: "With mixed salad and chipotle dressing" },
          { name: "Crispy chicken tacos" },
          { name: "Shrimp al pastor tacos", detail: "Shrimp in special adobo" },
          { name: "Skirt steak tacos" },
          { name: "Grilled octopus tacos" },
        ],
      },
      {
        heading: "Mexican Dishes",
        items: [
          { name: "Seafood enchiladas" },
          { name: "Shrimp al ajillo with rice and vegetables" },
          { name: "Mexican bowl", detail: "Choose your favorite protein and the chef does the rest" },
          { name: "Burritos", detail: "Beef, chicken, seafood, pulled pork or vegetarian" },
          { name: "Traditional nachos", detail: "Beef or chicken" },
          { name: "Quesadillas and guacamole" },
        ],
      },
      {
        heading: "Gourmet Burgers",
        items: [
          { name: "Mexican combo", detail: "Beef, guacamole, cheese and onion rings" },
          { name: "Chef's favorite", detail: "Sirloin with blue cheese, mushrooms, caramelized onions, pickles, crispy bacon and arugula" },
          { name: "Tuna and marlin burger", detail: "With chipotle dressing, manchego cheese and crispy sweet potatoes" },
          { name: "Marinera burger", detail: "Shrimp and pineapple with jalapeño dressing" },
        ],
      },
    ],
  },
  vegetarian: {
    note: "Veggiésimo: cruelty-free Mexican cooking. Every dish can be adapted to your dietary restrictions.",
    sections: [
      {
        heading: "Starters",
        items: [
          { name: "Mexican gorditas", detail: "Plantain gorditas stuffed with cheese and vegetables" },
          { name: "Stuffed mushrooms", detail: "Filled with potatoes and spinach" },
          { name: "Huitlacoche croquettes", detail: "Crispy croquettes with poblano sauce" },
          { name: "Crispy empanadas", detail: "Corn empanadas with guacamole" },
          { name: "Mexican vegetarian sopecitos" },
        ],
      },
      {
        heading: "Salads and Soups",
        items: [
          { name: "Poblano soup" },
          { name: "Tarascan soup" },
          { name: "Tortilla soup" },
          { name: "Vallarta-style veggie ceviche" },
          { name: "Mushroom ceviche" },
          { name: "Garden beet salad" },
          { name: "Mexican salad" },
        ],
      },
      {
        heading: "Main Course",
        items: [
          { name: "Chile en nogada", detail: "Stuffed with vegetables, fruit and tofu, topped with walnut cream" },
          { name: "Mushroom enmoladas", detail: "Stuffed with wild mushrooms and topped with homemade Guerrero mole" },
          { name: "Eggplant milanese", detail: "Crispy and delightfully tasty" },
        ],
      },
      {
        heading: "Dessert",
        items: [
          { name: "Double chocolate vegan mousse" },
          { name: "Mango parfait" },
          { name: "Apple crumble" },
          { name: "Bananas Foster and ice cream" },
          { name: "Seasonal sorbet" },
        ],
      },
    ],
  },
}

export default function SampleMenuPage() {
  return (
    <main>
      <Navbar />
      <PageHeader title="Sample Menus" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 min-w-0 space-y-12">
            <p className="text-lg leading-relaxed">
              These sample menus are from Chef Wendy Galeana, Casa La Playa&apos;s private chef in Puerto Vallarta.
              Breakfast and lunch chef service is included with every stay, and dinner can be added for a fee. Guests
              cover the cost of groceries, which the staff shop for and receipt. Menus change with the season, and the
              chef is happy to cook to your requests and dietary needs. See{" "}
              <Link href="/dining" className="underline">dining at Casa La Playa</Link> for details.
            </p>

            {sampleMenus.map((menu) => {
              const text = menuText[menu.id]
              return (
                <section key={menu.id} id={menu.id} className="scroll-mt-28">
                  <h2 className="text-3xl font-bold">{menu.title}</h2>
                  <p className="text-gray-600 mt-1 mb-6">{text.note}</p>
                  <a href={menu.pdf} className="block" aria-label={`Open the ${menu.title} (PDF)`}>
                    <Image
                      src={menu.image}
                      alt={menu.alt}
                      width={menu.width}
                      height={menu.height}
                      sizes="(min-width: 768px) 66vw, 100vw"
                      className="w-full h-auto rounded-lg border shadow-sm"
                    />
                  </a>
                  <a href={menu.pdf} className="inline-block mt-4 border-2 border-black px-6 py-3 font-semibold">
                    Download the {menu.title} (PDF)
                  </a>
                  <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {text.sections.map((section) => (
                      <div key={section.heading}>
                        <h3 className="text-xl font-semibold mb-2">{section.heading}</h3>
                        <ul className="space-y-2 text-gray-700">
                          {section.items.map((item) => (
                            <li key={item.name}>
                              <span className="font-medium text-black">{item.name}</span>
                              {item.detail && <span className="block text-base text-gray-600">{item.detail}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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
