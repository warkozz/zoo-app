/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
