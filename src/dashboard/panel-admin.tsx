/* eslint-disable react/no-unescaped-entities */
"use Client"
import { AnimalsGestionForm } from "@/components/component/dashboard/animals-gestion-form";
import { NavbarDashboardLeft } from "@/components/component/dashboard/navbar-dashboard-left";
import Link from "next/link";
import { JSX, SVGProps } from "react";

// src/dashboard/panel-admin.tsx
export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard Page',
};

export default function PanelAdmin() {
  return (
    <div>
    <NavbarDashboardLeft/>
    {/* <AnimalsGestionForm/> */}
    </div>
  );
}