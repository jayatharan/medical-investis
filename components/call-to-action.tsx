"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-32 md:py-40 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-tight">
            Rejoignez le cercle privé
            <br />
             MEDIC INVEST
          </h2>
          <div className="h-px w-24 mx-auto bg-accent" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Nous ne travaillons qu'avec une clientèle restreinte et exigeante. Chaque candidature est étudiée avec soin.
          </p>
          <div className="pt-6">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-7 text-lg group shadow-xl"
            >
              <Link href="/contact">
                Demander votre accès
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
