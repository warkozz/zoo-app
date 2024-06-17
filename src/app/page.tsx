"use client";
import React, { useEffect } from "react";
import Header from '../components/component/main-page/header';
import Home from '../components/component/main-page/home';
import Habitats from '../components/component/main-page/habitats';
import { CarouselleForm } from '../components/component/main-page/carouselle-form';
import Services from '../components/component/main-page/services';
import Avis from '../components/component/main-page/avis';
import Footer from '../components/component/main-page/footer';
import AOS from "aos";
import "aos/dist/aos.css"; // Importez les styles CSS d'AOS

export default function Component() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optionnel : durée de l'animation en millisecondes
      easing: "ease-in-out", // Optionnel : type d'animation
      once: true, // Optionnel : exécuter l'animation une seule fois
    });
  }, []); // Exécuter une seule fois lors du montage du composant

  return (
    <div className="bg-white flex flex-col min-h-[100vh]">
      <Header />
      <main className="flex-1">
        <Home />
        <Habitats />
        <CarouselleForm />
        <Services />
        <Avis />
      </main>
      <Footer />
    </div>
  );
}
