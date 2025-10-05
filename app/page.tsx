import { Hero } from "@/components/hero"
import { Concept } from "@/components/concept"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Concept />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </main>
  )
}
