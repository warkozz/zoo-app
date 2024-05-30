import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Contact } from "lucide-react";
import { ContactForm } from "@/components/component/contact-form";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoo Arcadia Website",
  description: "Bienvenue sur le Site du Zoo D'Arcadia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
      <ContactForm />
    </html>
  );
}
