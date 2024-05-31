"use Client"
import { DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ConnexionButton() {
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connexion Adminstrateur</DialogTitle>
          <DialogDescription>
            Entrez votre email et votre mot de passe pour accéder au tableau de bord administrateur.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <Input className="col-span-3" id="email" placeholder="admin@example.com" type="email" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label className="text-right" htmlFor="password">
              Mot de passe
            </Label>
            <Input className="col-span-3" id="password" placeholder="••••••••" type="password" />
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-white text-gray-500 hover:bg-gray-100 focus:ring-gray-500" variant="outline">
            Annuler
          </Button>
          <Button
            className="bg-[rgb(27,94,32)] text-white hover:bg-[rgb(27,94,32,0.8)] focus:ring-[rgb(27,94,32)]"
            type="submit"
          >
            Connexion
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
