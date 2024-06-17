/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from 'next/image';

export default function Habitats() {
  return (
    <section data-aos="fade-up" id='habitats' className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#e8f5e9] px-3 py-1 text-sm text-[#388e3c] dark:bg-[#1b5e20]">
              Nos Habitats
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Des espaces de vie adaptés</h2>
            <p className="max-w-[900px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#c8e6c9]">
              Nos habitats sont conçus pour offrir le meilleur confort et l'épanouissement de nos animaux, dans le respect de l'environnement.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            alt="Habitat"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Forêt Tropicale</h3>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">
                    Découvrez notre habitat recréant une forêt tropicale luxuriante, avec une faune et une flore diversifiées.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Savane Africaine</h3>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">
                    Plongez dans l'ambiance de la savane africaine, avec ses animaux emblématiques comme les lions, les zèbres et les girafes.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Océan Pacifique</h3>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">
                    Explorez les profondeurs de l'océan Pacifique et découvrez sa faune marine fascinante.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
