"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AirVent, Menu, Phone } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/diensten" },
  { name: "Producten", href: "/producten" },
  { name: "Steden", href: "/steden" },
  { name: "Merken", href: "/merken" },
  { name: "Kennisbank", href: "/kennisbank" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60" role="banner">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600">
        Skip to main content
      </a>
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-gray-900 hover:text-orange-500 transition-colors"
          aria-label="StayCool Airco Kerkrade - Home"
        >
          <AirVent className="h-6 w-6 text-orange-500" aria-hidden="true" />
          <span className="font-bold text-lg">StayCool Airco</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList role="menubar" aria-label="Main Navigation">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.href} role="none">
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                      pathname === item.href && "bg-orange-50 text-orange-600 font-semibold"
                    )}
                    role="menuitem"
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link href="tel:0462021430">
            <Button size="icon" variant="ghost">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Bel ons</span>
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 rounded-md",
                      pathname === item.href && "bg-orange-50 text-orange-600 font-semibold"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/offerte" onClick={() => setIsOpen(false)}>
                  <Button className="w-full btn-primary">
                    Gratis Offerte
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/offerte">
            <Button 
              className="btn-primary"
              aria-label="Vraag een gratis offerte aan"
            >
              Gratis Offerte
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
