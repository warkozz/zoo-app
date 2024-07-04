/* eslint-disable react/no-unescaped-entities */
"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AnimalsGestionForm() {
  return (
    <section className="w-full max-w-4xl mx-auto py-6 sm:py-8 md:py-10">
      <div className="flex flex-col gap-6 items-center">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Gestion des informations sur les animaux</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Mettez à jour les informations sur les animaux de votre zoo écologique.
          </p>
        </div>
        <Card className="w-full">
          <CardContent className="grid gap-6">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom de l'animal</Label>
                  <Input id="name" placeholder="Entrez le nom de l'animal" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="species">Espèce</Label>
                  <Input id="species" placeholder="Entrez l'espèce" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="habitat">Habitat</Label>
                  <Input id="habitat" placeholder="Entrez l'habitat" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="health">État de santé</Label>
                  <Input id="health" placeholder="Entrez l'état de santé" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="animal-image">Image de l'animal</Label>
                  <Input id="animal-image" type="file" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="habitat-image">Image de l'habitat</Label>
                  <Input id="habitat-image" type="file" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-end gap-2">
            <Button variant="outline" className="w-full sm:w-auto">
              Annuler
            </Button>
            <Button className="w-full sm:w-auto bg-[rgb(27,94,32)]">Enregistrer les modifications</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
