import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ContactForm } from "@/components/component/event-page/contact-form"
// import PanelAdmin from "@/components/component/panel-admin";

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
        {}
        <ContactForm />
        {children}
       {/* <PanelAdmin/> */}
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Zoo Arcadia Website",
  description: "Bienvenue sur le Site du Zoo D'Arcadia",
};

export default RootLayout;
