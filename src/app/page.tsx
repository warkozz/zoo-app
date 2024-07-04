"use client"
import React, { useEffect } from "react";
import Header from '../components/component/main-page/header';
import Home from '../components/component/main-page/home';
import Habitats from '../components/component/main-page/habitats';
import { CarouselleForm } from '../components/component/main-page/carouselle-form';
import Services from '../components/component/main-page/services';
import Notice from '../components/component/main-page/notice';
import Footer from '../components/component/main-page/footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { ButtonHome } from "@/components/component/event-page/button-home-back";

export default function MainPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []); 

  return (
    <div className="bg-white flex flex-col min-h-[100vh]">
      <Header />
      <main className="flex-1">
        <Home />
        <Habitats />
        <CarouselleForm />
        <Services />
        <Notice />
        <ButtonHome/>
      </main>
      <Footer />
    </div>
  );
}
