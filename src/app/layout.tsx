"use Client"
import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ContactForm } from "@/components/component/contact-form";
import PanelAdmin from "@/components/component/panel-admin";
import { ConnexionButton } from "@/components/component/connexion-button";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="fr">
      <Head>
        <title>Zoo Arcadia Website</title>
        <meta name="description" content="Bienvenue sur le Site du Zoo D'Arcadia" />
      </Head>
      <body className={inter.className}>
        {/* Tous les composants doivent être à l'intérieur du body */}
        <ContactForm />
        {children}
        <PanelAdmin/>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Zoo Arcadia Website",
  description: "Bienvenue sur le Site du Zoo D'Arcadia",
};

export default RootLayout;
