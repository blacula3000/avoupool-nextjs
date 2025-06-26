import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  variant?: "default" | "white" | "black"
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative h-8 w-8">
        <Image src="/images/avou-logo.png" alt="Avou Logo" fill className="object-contain" priority />
      </div>
      <span
        className={`hidden font-bold sm:inline-block ${
          variant === "white" ? "text-white" : variant === "black" ? "text-black" : "text-black"
        }`}
      >
        Community Pool
      </span>
    </Link>
  )
}
