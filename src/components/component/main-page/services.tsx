/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div data-aos="fade-up" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#e8f5e9] px-3 py-1 text-sm text-[#388e3c] dark:bg-[#1b5e20]">
              Nos Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Profitez de notre offre complète</h2>
            <p className="max-w-[900px] text-[#388e3c] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#c8e6c9]">
              Que vous soyez en famille, entre amis ou en groupe, découvrez tous nos services pour une visite inoubliable.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            alt="Service"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Restauration</h3>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">
                    Profitez de nos restaurants et snacks pour vous restaurer, avec une cuisine saine et locale.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Visites Guidées</h3>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">
                    Laissez-vous guider par nos experts pour découvrir tous les secrets de nos habitats et de nos animaux.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Train Panoramique</h3>
                  <p className="text-[#388e3c] dark:text-[#c8e6c9]">
                    Profitez d'une vue imprenable à bord de notre train panoramique pour une visite unique.
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
