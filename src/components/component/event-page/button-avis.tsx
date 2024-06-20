"use client"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ButtonNotice() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // ou un simple bouton qui n'ouvre pas de dialogue
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-[rgb(27,94,32)] text-white hover:bg-[rgb(22,77,26)] focus:ring-[rgb(27,94,32)]"
          variant="outline"
        >
          Laissez un commentaire
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[rgb(27,94,32)]">Partagez votre expérience</DialogTitle>
          <DialogDescription>Nous aimerions avoir votre avis sur votre visite au zoo écologique.</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label className="text-[rgb(27,94,32)]" htmlFor="firstName">
                Prénom
              </Label>
              <Input
                className="border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)]"
                id="firstName"
                placeholder="Entrez votre prénom"
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-[rgb(27,94,32)]" htmlFor="lastName">
                Nom
              </Label>
              <Input
                className="border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)]"
                id="lastName"
                placeholder="Entrez votre nom"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label className="text-[rgb(27,94,32)]" htmlFor="avatar">
              Avatar
            </Label>
            <Input className="border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)]" id="avatar" type="file" />
          </div>
          <div className="grid gap-2">
            <Label className="text-[rgb(27,94,32)]" htmlFor="message">
              Message
            </Label>
            <Textarea
              className="min-h-[100px] border-[rgb(27,94,32)] focus:ring-[rgb(27,94,32)]"
              id="message"
              placeholder="Partagez votre expérience"
            />
          </div>
        </form>
        <DialogFooter>
          <Button
            className="bg-[rgb(27,94,32)] text-white hover:bg-[rgb(22,77,26)] focus:ring-[rgb(27,94,32)]"
            type="submit"
          >
            Envoyer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
