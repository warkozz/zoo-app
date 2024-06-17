
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export function ButtonModifRole() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 border border-gray-200 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 h-9 rounded-md px-3 bg-[#4caf50] text-white hover:bg-[#43a047]"
          variant="outline"
        >
          Modifier
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Administrateur</DropdownMenuItem>
        <DropdownMenuItem>Vétérinaire</DropdownMenuItem>
        <DropdownMenuItem>Employés</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
