"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-modern-building-skyline-at-dusk-with-golden.jpg"
          alt="Immobilier de luxe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto space-y-10 bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-accent drop-shadow-lg" />
              <span className="text-sm font-medium drop-shadow-lg">Investissement Sécurisé</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Award className="w-5 h-5 text-accent drop-shadow-lg" />
              <span className="text-sm font-medium drop-shadow-lg">Expertise Médicale</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <TrendingUp className="w-5 h-5 text-accent drop-shadow-lg" />
              <span className="text-sm font-medium drop-shadow-lg">Rendement Optimisé</span>
            </div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight text-balance leading-tight drop-shadow-2xl">
            Médical Investis
          </h1>
          <div className="h-px w-32 mx-auto bg-accent shadow-lg shadow-accent/50" />
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-wide text-balance leading-relaxed drop-shadow-xl">
            L'investissement immobilier d'exception
            <br />
            pour professionnels de santé
          </p>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto text-pretty leading-relaxed drop-shadow-lg">
            Créé par des médecins, pour des médecins. Votre patrimoine, notre expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-10 py-7 text-lg group shadow-xl"
            >
              <Link href="/contact">
                Rejoindre le Cercle Privé
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/20 font-medium px-10 py-7 text-lg backdrop-blur-sm bg-white/10 shadow-lg"
            >
              <Link href="/offers">Découvrir nos offres</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
