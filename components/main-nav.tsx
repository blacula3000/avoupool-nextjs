import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
        Dashboard
      </Link>
      <Link href="/payments" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Payments
      </Link>
      <Link href="/schedule" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Schedule
      </Link>
      <Link href="/members" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Members
      </Link>
      <Link
        href="/announcements"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Announcements
      </Link>
    </nav>
  )
}
