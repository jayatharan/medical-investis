const stats = [
  {
    number: "98%",
    label: "des médecins veulent investir mais manquent de temps",
  },
  {
    number: "20+",
    label: "années d'expertise immobilière cumulée",
  },
  {
    number: "100%",
    label: "clé en main : vous signez, on livre",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-32 md:py-40 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">Pourquoi nous choisir ?</h2>
            <div className="h-px w-24 mx-auto bg-accent" />
          </div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-12 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="font-serif text-6xl md:text-7xl text-accent font-bold">{stat.number}</div>
                <p className="text-xl text-secondary-foreground/90 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative py-16 px-8 md:px-16 border-l-4 border-accent bg-secondary-foreground/5 rounded-r-lg">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-balance leading-relaxed">
                Médical Investis est le pont entre votre réussite professionnelle et votre patrimoine immobilier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
