/* eslint-disable react/no-unescaped-entities */
import { JSX, SVGProps, useState } from 'react';
import Link from 'next/link';
import { useContactModal } from '../../../store/use-contact-modal';
import { ConnexionButtonV2 } from '../login/connexion-button-v2';

export default function HeaderPage() {
  const { open: openContactModal } = useContactModal();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1b5e20] text-white">
      <Link className="flex items-center justify-center" href="#">
        <LeafIcon className="h-6 w-6" />
        <span className="sr-only">Zoo D'Arcadia</span>
      </Link>

      {/* Menu principal sur desktop */}
      <nav className="hidden ml-auto lg:flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
          Services
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#habitats">
          Habitats
        </Link>
        <button className="text-sm font-medium hover:underline underline-offset-4" onClick={handleModalOpen}>
          Connexion
        </button>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={openContactModal}>
          Contact
        </Link>
      </nav>

      {/* Menu hamburger pour mobile */}
      <div className="ml-auto lg:hidden">
        <button
          className="text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden top-14 left-0 right-0 bg-[#1b5e20] text-white py-4 z-10 absolute ">
          <div className="flex flex-col gap-4 sm:gap-6 items-center">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#habitats"
            >
              Habitats
            </Link>
            <button
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => {
                toggleMobileMenu();
                handleModalOpen();
              }}
            >
              Connexion
            </button>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
              onClick={() => {
                toggleMobileMenu();
                openContactModal();
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Modal Connexion */}
      <ConnexionButtonV2 isOpen={isModalOpen} onClose={handleModalClose} />
    </header>
  );
}

function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
