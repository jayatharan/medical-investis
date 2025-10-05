export function Difference() {
  return (
    <section className="py-32 md:py-40 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance leading-tight">
              Pourquoi Médical Investis est unique ?
            </h2>
            <div className="h-px w-24 mx-auto bg-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-lg md:text-xl leading-relaxed">
                    Fondé par un <span className="text-accent font-semibold">dentiste en exercice</span> et un{" "}
                    <span className="text-accent font-semibold">expert immobilier</span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-lg md:text-xl leading-relaxed">
                    Une double expertise rare : comprendre les besoins médicaux + maîtriser l'investissement
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-lg md:text-xl leading-relaxed">
                    Un <span className="text-accent font-semibold">cercle fermé</span> : nous sélectionnons nos clients
                    pour garantir un accompagnement sur-mesure
                  </p>
                </div>
              </div>

              <div className="pt-10 border-t border-primary-foreground/20">
                <p className="text-2xl md:text-3xl font-serif italic text-balance leading-relaxed">
                  "Médical Investis est le pont entre votre réussite professionnelle et votre patrimoine immobilier."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img src="/two-professional-business-partners-in-elegant-offi.jpg" alt="Fondateurs" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-accent/30 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
