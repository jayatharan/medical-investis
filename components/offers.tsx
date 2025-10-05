import { Building2, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const offers = [
  {
    icon: Building2,
    title: "Investissement Locatif Clé en Main",
    description: "Appartements, immeubles, gestion complète",
  },
  {
    icon: TrendingUp,
    title: "Marchand de Biens & Opérations Ciblées",
    description: "Achat-revente, plus-values sécurisées",
  },
  {
    icon: Users,
    title: "Co-investissement & Club Deal",
    description: "Construisons ensemble un patrimoine partagé",
  },
]

export function Offers() {
  return (
    <section className="py-32 md:py-40 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
              Des solutions adaptées
              <br />à vos ambitions
            </h2>
            <div className="h-px w-24 mx-auto bg-accent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card hover:border-accent/50 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="space-y-6 pb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/20">
                    <offer.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="font-serif text-2xl md:text-3xl text-balance leading-tight">
                    {offer.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base md:text-lg leading-relaxed">
                    {offer.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
