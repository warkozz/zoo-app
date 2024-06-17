"use client";

import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactModal } from "../../store/use-contact-modal";
import { useEffect, useState } from "react";

export function ContactForm() {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useContactModal();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[rgb(27,94,32)]">Formulaire de contact</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[rgb(27,94,32)]" htmlFor="first-name">
                Prénom
              </Label>
              <Input
                className="border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)]"
                id="first-name"
                placeholder="Entrez votre prénom"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[rgb(27,94,32)]" htmlFor="last-name">
                Nom
              </Label>
              <Input
                className="border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)]"
                id="last-name"
                placeholder="Entrez votre nom"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-[rgb(27,94,32)]" htmlFor="email">
              Email
            </Label>
            <Input
              className="border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)]"
              id="email"
              placeholder="Entrez votre email"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[rgb(27,94,32)]" htmlFor="message">
              Message
            </Label>
            <Textarea
              className="min-h-[100px] border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)]"
              id="message"
              placeholder="Entrez votre message"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-[rgb(27,94,32)] text-white hover:bg-[rgb(20,70,24)] focus:ring-[rgb(27,94,32)]"
            type="submit"
            onClick={close}
          >
            Envoyer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
