"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Church } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/quem-somos",
      label: "Quem Somos",
    },
    {
      href: "/programacao",
      label: "Programação",
    },
    {
      href: "/eventos",
      label: "Eventos",
    },
    {
      href: "/galeria",
      label: "Galeria",
    },
    {
      href: "/contato",
      label: "Contato",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full px-5 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-10">
        <Link href="/" className="flex items-center space-x-2">
          <Church className="h-6 w-6" />
          <span className="font-bold">IBM Angelim</span>
        </Link>
        <nav className="flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="secondary" asChild>
            <Link href="/contato">Venha nos Visitar</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}