"use client"
import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import RentalOptions from "@/components/rental-options"
import Amenities from "@/components/amenities"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Hero />
      <Features />
      <RentalOptions />
      <Amenities />
      <Footer />
    </main>
  )
}

