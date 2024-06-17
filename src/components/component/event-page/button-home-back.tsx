
import Link from "next/link"
import { JSX, SVGProps } from "react"

export function ButtonHome() {
  return (
    <div className="fixed bottom-6 right-6">
      <Link
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1b5e20] text-gray-50 shadow transition-colors hover:bg-[#1b5e20]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="#"
      >
        <ArrowUpIcon className="h-6 w-6" />
        <span className="sr-only">Scroll to top</span>
      </Link>
    </div>
  )
}

function ArrowUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}
