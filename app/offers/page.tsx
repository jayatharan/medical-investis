import { Offers } from "@/components/offers"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function OffersPage() {
  return (
    <main className="min-h-screen">
      <Offers />
      <CallToAction />
      <Footer />
    </main>
  )
}
