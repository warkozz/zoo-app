/* eslint-disable react/no-unescaped-entities */
"use client";

import { CardTitle, CardDescription, CardHeader, CardFooter, Card } from "@/components/ui/card";
import Image from 'next/image';
import { ButtonNotice } from "../event-page/button-avis";

export default function Notice() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f1f8e9]">
      <div data-aos="fade-up" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#e8f5e9] px-3 py-1 text-sm text-[#388e3c] dark:bg-[#1b5e20]">
              Avis de Visiteurs
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ce qu'en pensent nos visiteurs</h2>
            <p className="max-w-[900px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#c8e6c9]">
              Découvrez les avis de nos visiteurs sur leur expérience au Zoo Vert.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Une visite inoubliable</CardTitle>
                <CardDescription>
                  "J'ai passé une journée merveilleuse au Zoo Vert. Les habitats sont magnifiques et les animaux semblent épanouis. Le personnel est très accueillant et passionné."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center gap-2">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <div className="font-medium">Émilie D.</div>
                    <div className="text-sm text-[#388e3c] dark:text-[#c8e6c9]">Visiteur</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Une expérience unique</CardTitle>
                <CardDescription>
                  "Quel plaisir de découvrir ce zoo écologique ! Les habitats sont vraiment bien pensés et les animaux ont l'air épanouis. Je recommande vivement cette visite."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center gap-2">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div>
                    <div className="font-medium">Julien L.</div>
                    <div className="text-sm text-[#388e3c] dark:text-[#c8e6c9]">Visiteur</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <ButtonNotice />
          </div>
          <Image
            alt="Avis"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
