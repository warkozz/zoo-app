/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from 'react';
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { useContactModal } from "../../../store/use-contact-modal";
import { ConnexionButtonV2 } from './connexion-button-v2';

export default function HeaderPage() {
  const { open: openContactModal } = useContactModal();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
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
        <button className="text-sm font-medium hover:underline underline-offset-4" onClick={handleModalOpen}>
          Connexion
        </button>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={openContactModal}>
          Contact
        </Link>
      </nav>
      <ConnexionButtonV2 isOpen={isModalOpen} onClose={handleModalClose} /> {/* Passez isOpen et onClose à ConnexionButtonV2 */}
    </header>
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
