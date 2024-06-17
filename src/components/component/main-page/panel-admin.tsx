/* eslint-disable react/no-unescaped-entities */
"use Client"
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { JSX, SVGProps } from "react";
import Image from "next/image";
import CustomImage from "../event-page/CustomImage";
import { ButtonModifRole } from "../event-page/button-modif-role";

export default function PanelAdmin() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f0f4f8] dark:bg-[#1a1b1e]">
      <header className="bg-[#4caf50] text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <LeafIcon className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Arcadia Zoo Admin</h1>
        </div>
        <nav className="flex items-center gap-4 md:flex">
          <Link href="#" className="hover:underline" prefetch={false}>
            Visiteurs
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Employés
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Vétérinaires
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Administrateurs
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border">
            <CustomImage src="/placeholder.svg" alt="@username" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="font-medium hidden md:inline">John Doe</span>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 p-8">
        <div className="bg-white dark:bg-[#2b2c30] rounded-lg shadow-md p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Gestion</h2>
            <ul className="space-y-2 p-6">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-[#4caf50]" prefetch={false}>
                  <UserIcon className="w-5 h-5" />
                  Utilisateurs
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-[#4caf50]" prefetch={false}>
                  <DatabaseIcon className="w-5 h-5" />
                  Base de données
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-[#4caf50]" prefetch={false}>
                  <StarIcon className="w-5 h-5" />
                  Avis clients
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Rôles</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-[#4caf50]" prefetch={false}>
                  <UserIcon className="w-5 h-5" />
                  Visiteurs
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-[#4caf50]" prefetch={false}>
                  <UserIcon className="w-5 h-5" />
                  Employés
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-[#4caf50]" prefetch={false}>
                  <UserIcon className="w-5 h-5" />
                  Vétérinaires
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-[#4caf50]" prefetch={false}>
                  <UserIcon className="w-5 h-5" />
                  Administrateurs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white dark:bg-[#2b2c30] rounded-lg shadow-md p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Avis clients</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="pt-6">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border">
                      <CustomImage src="/placeholder.svg" alt="@username" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <div className="flex items-center gap-1 text-sm text-[#4caf50]">
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    J'ai adoré ma visite au zoo ! Le personnel était très accueillant et les animaux étaient en bonne
                    santé. Je recommande vivement cet endroit.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" className="bg-[#4caf50] text-white hover:bg-[#43a047] mr-2">
                      Approuver
                    </Button>
                    <Button variant="outline" size="sm" className="bg-[#f44336] text-white hover:bg-[#e53935]">
                      Rejeter
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border">
                      <CustomImage src="/placeholder.svg" alt="@username" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                    <h3 className="font-semibold">Jane Smith</h3>
                      <div className="flex items-center gap-1 text-sm text-[#4caf50]">
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    J'ai été déçue de voir que certains enclos n'étaient pas très bien entretenus. Cependant, le
                    personnel a été très serviable et m'a aidé à profiter de ma visite.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" className="bg-[#4caf50] text-white hover:bg-[#43a047] mr-2">
                      Approuver
                    </Button>
                    <Button variant="outline" size="sm" className="bg-[#f44336] text-white hover:bg-[#e53935]">
                      Rejeter
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border">
                      <CustomImage src="/placeholder.svg" alt="@username" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Michael Johnson</h3>
                      <div className="flex items-center gap-1 text-sm text-[#4caf50]">
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    J'ai été impressionné par la diversité des animaux et l'engagement du zoo pour la conservation. Le
                    personnel a été très informatif et passionné.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" className="bg-[#4caf50] text-white hover:bg-[#43a047] mr-2">
                      Approuver
                    </Button>
                    <Button variant="outline" size="sm" className="bg-[#f44336] text-white hover:bg-[#e53935]">
                      Rejeter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Gestion des utilisateurs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border">
                      <CustomImage src="/placeholder.svg" alt="@username" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Employé</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                  <ButtonModifRole/>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border">
                      <CustomImage src="/placeholder.svg" alt="@username" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Jane Smith</h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Vétérinaire</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                  <ButtonModifRole/>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border">
                      <CustomImage src="/placeholder.svg" alt="@username" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Michael Johnson</h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Administrateur</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <ButtonModifRole/>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Ajouter un utilisateur</h2>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" placeholder="********" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Rôle</Label>
                <Select value="role">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un rôle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visitor">Visiteur</SelectItem>
                    <SelectItem value="employee">Employé</SelectItem>
                    <SelectItem value="veterinarian">Vétérinaire</SelectItem>
                    <SelectItem value="admin">Administrateur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="bg-[#4caf50] text-white hover:bg-[#43a047]">
                Ajouter l'utilisateur
              </Button>
              </form>
          </div>
        </div>
      </main>
    </div>
  );
}

function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
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

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

