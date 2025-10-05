export function Footer() {
  return (
    <footer className="py-16 bg-secondary text-secondary-foreground border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">MEDIC INVEST</h3>
              <p className="text-secondary-foreground/70 leading-relaxed">
                Investissement immobilier d'exception pour professionnels de santé
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-secondary-foreground/70">
                <p>Email: contact@medical-investis.com</p>
                <p>Tél: +33 (0)1 XX XX XX XX</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Légal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-secondary-foreground/70 hover:text-accent transition-colors">
                  Mentions Légales
                </a>
                <a href="#" className="block text-secondary-foreground/70 hover:text-accent transition-colors">
                  Politique de Confidentialité
                </a>
                <a href="#" className="block text-secondary-foreground/70 hover:text-accent transition-colors">
                  Conditions Générales
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
            <p>© {new Date().getFullYear()} Médical Investis. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
