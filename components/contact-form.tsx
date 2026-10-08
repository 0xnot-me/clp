"use client"

import { FormEvent, useEffect, useRef, useState } from "react"

export const PREFILL_EVENT = "clp:prefill-inquiry"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const prefill = (e: Event) => {
      const field = messageRef.current
      if (!field) return
      field.value = (e as CustomEvent<string>).detail
      field.focus({ preventScroll: true })
    }
    window.addEventListener(PREFILL_EVENT, prefill)
    return () => window.removeEventListener(PREFILL_EVENT, prefill)
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.target as HTMLFormElement
    const formData = {
      access_key: "61d32c5c-4a35-4819-9c40-cceb88a902c9",
      first_name: form.firstName.value,
      last_name: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="inquiry" className="bg-gray-100 p-6 rounded-lg h-fit scroll-mt-28">
      <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 text-base border rounded bg-white"
            required
          />
        </div>
        <div>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 text-base border rounded bg-white"
            required
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 text-base border rounded bg-white"
            required
          />
        </div>
        <div>
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-3 text-base border rounded bg-white"
            required
          />
        </div>
        <div>
          <textarea
            ref={messageRef}
            name="message"
            placeholder="Message: Dates and Reservation Details"
            rows={4}
            className="w-full px-4 py-3 text-base border rounded bg-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors disabled:bg-gray-400"
        >
          {isSubmitting ? "Sending..." : "INQUIRE"}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-600 text-center">Thank you for your message. We'll get back to you soon!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-center">Something went wrong. Please try again later.</p>
        )}
      </form>
    </div>
  )
} 