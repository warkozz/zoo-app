"use client";

import Header from '../components/component/header';
import Home from '../components/component/home';
import Habitats from '../components/component/habitats';
import { CarouselleForm } from '../components/component/carouselle-form';
import Services from '../components/component/services';
import Avis from '../components/component/avis';
import Footer from '../components/component/footer';

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
