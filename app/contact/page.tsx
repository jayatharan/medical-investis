import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
              Rejoignez le Cercle Exclusif
            </h1>
            <div className="h-px w-24 mx-auto bg-accent mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              L'accès à Médical Investis est réservé aux professionnels de santé sélectionnés. Soumettez votre
              candidature pour rejoindre notre cercle privé d'investisseurs.
            </p>
          </div>
        </div>
      </div>
      <ApplicationForm />
      <Footer />
    </main>
  )
}
