import { Key, Hammer, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Key,
    title: "Sourcing",
    description: "Sélection d'actifs rares et rentables",
  },
  {
    icon: Hammer,
    title: "Travaux & Optimisation",
    description: "Rénovation, mise aux normes, ameublement",
  },
  {
    icon: TrendingUp,
    title: "Gestion & Suivi",
    description: "Location, fiscalité, rendement mesuré",
  },
]

export function Concept() {
  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
              Un accompagnement clé en main,
              <br />
              pensé pour les professionnels de santé
            </h2>
            <div className="h-px w-24 mx-auto bg-accent mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vous soignez, nous investissons. Concentrez-vous sur votre métier pendant que nous bâtissons votre
              patrimoine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/5 border-2 border-primary/10 group-hover:border-accent/30 transition-colors duration-300">
                  <feature.icon className="w-12 h-12 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
