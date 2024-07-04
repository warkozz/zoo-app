"use client"

import { JSX, SVGProps, SetStateAction, useState } from "react"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavbarDashboardLeft() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };
  const handleMenuToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex min-h-screen w-full">
      <aside
        className={`fixed inset-y-0 left-0 z-10 flex flex-col border-r bg-white sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-[rgb(27,94,32)] text-lg font-semibold text-gray-50 md:h-8 md:w-8 md:text-base dark:bg-gray-50 dark:text-gray-900"
              prefetch={false}
            >
              <DatabaseIcon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Zoo Arcadia</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <DatabaseIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion de la base de données</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion de la base de données</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <UsersIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion des utilisateurs</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion des utilisateurs</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion des services</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion des services</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <PawPrintIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion des animaux</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion des animaux</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <MessageCircleIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion des avis</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion des avis</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-950 md:h-8 md:w-8 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Paramètres</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Paramètres</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => console.log("D\u00E9connexion")}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-950 md:h-8 md:w-8 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <LogOutIcon className="h-5 w-5" />
                  <span className="sr-only">Déconnexion</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Déconnexion</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <aside className="hidden w-14 flex-col border-r bg-white sm:fixed sm:inset-y-0 sm:left-0 sm:z-10 sm:flex sm:flex-col dark:bg-gray-950">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-[rgb(27,94,32)] text-lg font-semibold text-gray-50 md:h-8 md:w-8 md:text-base dark:bg-gray-50 dark:text-gray-900"
              prefetch={false}
            >
              <DatabaseIcon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Zoo Arcadia</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <DatabaseIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion de la base de données</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion de la base de données</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <UsersIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion des utilisateurs</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion des utilisateurs</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion des services</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion des services</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <PawPrintIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion des animaux</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion des animaux</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("#")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeLink === "#"
                      ? "text-gray-900 dark:text-gray-50"
                      : "text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                  } md:h-8 md:w-8 active:scale-95 transition-transform duration-100`}
                  prefetch={false}
                >
                  <MessageCircleIcon className="h-5 w-5" />
                  <span className="sr-only">Gestion des avis</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestion des avis</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-950 md:h-8 md:w-8 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Paramètres</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Paramètres</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => console.log("D\u00E9connexion")}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-950 md:h-8 md:w-8 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <LogOutIcon className="h-5 w-5" />
                  <span className="sr-only">Déconnexion</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Déconnexion</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="flex items-center justify-between bg-white px-4 py-2 sm:hidden dark:bg-gray-950">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-[rgb(27,94,32)] text-lg font-semibold text-gray-50 md:h-8 md:w-8 md:text-base dark:bg-gray-50 dark:text-gray-900"
            prefetch={false}
          >
            <DatabaseIcon className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Zoo Arcadia</span>
          </Link>
          <Button variant="outline" size="icon" className="rounded-full" onClick={handleMenuToggle}>
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </header>
      </div>
    </div>
  )
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
  )
}


function LogOutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function PawPrintIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  )
}


function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
