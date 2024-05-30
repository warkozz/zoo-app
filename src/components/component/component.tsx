"use client";

import Header from './header';
import Home from './home';
import Habitats from './habitats';
import { CarouselleForm } from './carouselle-form';
import Services from './services';
import Avis from './avis';
import Footer from './footer';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
