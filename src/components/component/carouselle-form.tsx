/* eslint-disable react/no-unescaped-entities */
"use Client"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import Image from 'next/image';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export function CarouselleForm() {
  return (
    <>
    <section className="bg-[#f1f8e9]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:px-6 lg:py-16 ">
          <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10">
            <div className="inline-block rounded-lg bg-[#e8f5e9] px-3 py-1 text-sm text-[#388e3c] dark:bg-[#1b5e20]">
              Nos Animaux
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Découvrez Notre Royaume Animal</h1>
            <p className="max-w-3xl text-center text-[#388e3c] dark:text-[#c8e6c9] md:text-xl lg:text-base/relaxed">
              Explorez les habitats divers et l'état de santé de nos résidents animaux. Notre panneau d'administration vous permet de mettre à jour facilement les informations.
            </p>
          </div>
          <div className="mt-10 md:mt-12 lg:mt-14">
            <Carousel className="w-full max-w-6xl">
              <CarouselContent>
                <CarouselItem>
                  <Card className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="flex-1">
                      <Image
                        alt="Animal"
                        className="rounded-lg object-cover w-full aspect-square"
                        height={400}
                        src="/placeholder.svg"
                        width={400}
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">Éléphant d'Afrique</h3>
                        <p className="text-[#388e3c] dark:text-[#c8e6c9]">Loxodonta africana</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">Habitat</h4>
                        <p className="text-[#388e3c] dark:text-[#c8e6c9]">Savannes, prairies, et forêts d'Afrique</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">État de Santé</h4>
                        <p className="text-[#388e3c] dark:text-[#c8e6c9]">Vulnérable</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="flex-1">
                      <Image
                        alt="Animal"
                        className="rounded-lg object-cover w-full aspect-square"
                        height={400}
                        src="/placeholder.svg"
                        width={400}
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">Ours Polaire</h3>
                        <p className="text-[#388e3c] dark:text-[#c8e6c9]text-[#388e3c] dark:text-[#c8e6c9]">Ursus maritimus</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">Habitat</h4>
                        <p className="text-[#388e3c] dark:text-[#c8e6c9]text-[#388e3c] dark:text-[#c8e6c9]">Banquise et zones côtières de l'Arctique</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">État de Santé</h4>
                        <p className="text-[#388e3c] dark:text-[#c8e6c9]text-[#388e3c] dark:text-[#c8e6c9]">Vulnérable</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className="flex-1">
                      <Image
                        alt="Animal"
                        className="rounded-lg object-cover w-full aspect-square"
                        height={400}
                        src="/placeholder.svg"
                        width={400}
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">Panda Géant</h3>
                        <p className="text-[#388e3c] dark:text-[#c8e6c9]">Ailuropoda melanoleuca</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">Habitat</h4>
                        <p className="text-[#388e3c] dark:text-[#c8e6c9]">Forêts de bambous du centre de la Chine</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">État de Santé</h4>
                        <p className="text-[#388e3c] dark:text-[#c8e6c9]">Vulnérable</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Panneau d'Administration</h2>
              <p className="max-w-3xl text-center text-gray-500 dark:text-gray-400 md:text-xl lg:text-base/relaxed">
                Gérez en toute sécurité les informations et les médias des animaux dans notre base de données.
              </p>
            </div>
            <div className="mt-10 md:mt-12 lg:mt-14">
              <Card>
                <CardHeader>
                  <CardTitle>Informations sur les Animaux</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <Label htmlFor="animal-name">Nom de l'Animal</Label>
                        <Input defaultValue="Éléphant d'Afrique" id="animal-name" />
                      </div>
                      <div>
                        <Label htmlFor="animal-species">Espèce de l'Animal</Label>
                        <Input defaultValue="Loxodonta africana" id="animal-species" />
                      </div>
                      <div>
                        <Label htmlFor="animal-habitat">Habitat</Label>
                        <Input defaultValue="Savannes, prairies, et forêts d'Afrique" id="animal-habitat" />
                      </div>
                      <div>
                        <Label htmlFor="animal-health">État de Santé</Label>
                        <Input defaultValue="Vulnérable" id="animal-health" />
                      </div>
                      <div>
                        <Label htmlFor="animal-image">Image de l'Animal</Label>
                      </div>
                      <div>
                        <Label htmlFor="habitat-image">Image de l'Habitat</Label>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end gap-2">
                      <Button variant="outline">Annuler</Button>
                      <Button>Enregistrer les Modifications</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}