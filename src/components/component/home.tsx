/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f1f8e9]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Zoo Vert"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/placeholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Bienvenue au Zoo D'Arcadia
              </h1>
              <p className="max-w-[600px] text-[#388e3c] md:text-xl dark:text-[#c8e6c9]">
                Découvrez notre zoo indépendant en énergie, où la nature et l'écologie sont au cœur de notre mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
