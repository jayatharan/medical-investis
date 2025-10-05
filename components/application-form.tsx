"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    investmentLevel: "",
    objectives: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="application" className="py-32 md:py-40 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance leading-tight">
              Candidature d'adhésion
            </h2>
            <div className="h-px w-24 mx-auto bg-accent mb-8" />
            <p className="text-muted-foreground text-lg md:text-xl text-pretty leading-relaxed">
              Complétez ce formulaire pour demander l'accès à notre cercle exclusif. Notre équipe étudiera votre
              candidature et vous contactera rapidement.
            </p>
          </div>

          <Card className="border-border/50 shadow-xl">
            <CardHeader className="pb-8">
              <CardTitle className="font-serif text-2xl md:text-3xl">Vos informations</CardTitle>
              <CardDescription className="text-base">
                Tous les champs sont requis pour l'étude de votre dossier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="border-border/50 focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="border-border/50 focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border/50 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-border/50 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession">Profession</Label>
                  <Select
                    value={formData.profession}
                    onValueChange={(value) => setFormData({ ...formData, profession: value })}
                  >
                    <SelectTrigger className="border-border/50 focus:border-accent">
                      <SelectValue placeholder="Sélectionnez votre profession" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="doctor">Médecin</SelectItem>
                      <SelectItem value="dentist">Dentiste</SelectItem>
                      <SelectItem value="surgeon">Chirurgien</SelectItem>
                      <SelectItem value="specialist">Spécialiste Médical</SelectItem>
                      <SelectItem value="other">Autre Professionnel de Santé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investmentLevel">Niveau d'investissement prévu</Label>
                  <Select
                    value={formData.investmentLevel}
                    onValueChange={(value) => setFormData({ ...formData, investmentLevel: value })}
                  >
                    <SelectTrigger className="border-border/50 focus:border-accent">
                      <SelectValue placeholder="Sélectionnez une fourchette" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100k-500k">100k€ - 500k€</SelectItem>
                      <SelectItem value="500k-1m">500k€ - 1M€</SelectItem>
                      <SelectItem value="1m+">1M€+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="objectives">Objectifs d'investissement</Label>
                  <Textarea
                    id="objectives"
                    value={formData.objectives}
                    onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                    placeholder="Décrivez vos objectifs (ex: constitution de patrimoine, optimisation fiscale, diversification)"
                    rows={4}
                    required
                    className="border-border/50 focus:border-accent resize-none"
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg"
                  >
                    Soumettre ma candidature
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center text-pretty leading-relaxed">
                  En soumettant ce formulaire, vous reconnaissez que votre candidature sera étudiée par notre équipe.
                  Nous n'acceptons qu'un nombre limité de clients afin de garantir un service personnalisé.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
