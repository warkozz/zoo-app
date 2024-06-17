import React from 'react';
import { Button } from "@/components/ui/button";
import { DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { JSX, SVGProps } from "react";

export function ConnexionButtonV2({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[rgb(27,94,32)]">Connexion Administrateur</DialogTitle>
          <DialogDescription>Entrez vos informations administrateur de connexion ci-dessous.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <Input
              className="col-span-3 border border-[rgb(27,94,32)] --tw-border-opacity: 1; text-gray-900 placeholder:text-gray-500 focus:border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)] dark:border-gray-800"
              id="email"
              placeholder="example@email.com"
              type="email"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label className="text-right" htmlFor="password">
              Mot de passe
            </Label>
            <div className="col-span-3 relative">
              <Input
                className="border border-[rgb(27,94,32)] --tw-border-opacity: 1; text-gray-900 placeholder:text-gray-500 focus:border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)] pr-10"
                id="password"
                placeholder="••••••••"
                type="password"
              />
              <Button className="absolute bottom-1 right-1 h-7 w-7" size="icon" variant="ghost">
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">Toggle password visibility</span>
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-[rgb(27,94,32)] text-white hover:bg-[rgb(20,70,24)] focus:ring-[rgb(27,94,32)]"
            type="submit"
            onClick={onClose} // Close modal when clicking this button
          >
            <span className="text-sm font-medium">Connexion</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EyeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
