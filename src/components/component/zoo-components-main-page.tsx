/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { CardTitle, CardDescription, CardHeader, CardFooter, Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import Image from 'next/image';


export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1b5e20] text-white">
        <Link className="flex items-center justify-center" href="#">
          <LeafIcon className="h-6 w-6" />
          <span className="sr-only">Zoo D'Arcadia</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Habitats
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Connexion
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f1f8e9]">
          <div className="container px-4 md:px-6">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
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
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#1b5e20] text-white">
        <p className="text-xs">© 2024 Zoo D'Arcadia. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Mentions Légales
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Politique de Confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
