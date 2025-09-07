"use client"

import { motion } from "framer-motion"
import { ShimmerButton } from "@/src/components/ui/shimmer-button"
import Link from "next/link"
import { Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"
import { MobileNav } from "./MobileNav"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const shouldBeScrolled = scrollY > 50
          
          if (shouldBeScrolled !== scrolled) {
            setScrolled(shouldBeScrolled)
          }
          
          ticking = false
        })
        ticking = true
      }
    }
    
    // Set initial state
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navigationItems = [
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" }
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300 pointer-events-auto ${
        scrolled 
          ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" 
          : ""
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <Link href="/" className="font-bold text-xl gradient-text">
            Matias Guzman/Bluxterz
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 flex-1 justify-center">
          {navigationItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative z-10"
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-red-500 cursor-pointer relative z-10 ${
                  pathname === item.href 
                    ? "text-red-500 border-b-2 border-red-500 pb-1" 
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block"
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Link href="/contacto">
              <ShimmerButton className="text-sm font-medium">
                <Mail className="mr-2 h-4 w-4" />
                Contactar
              </ShimmerButton>
            </Link>
          </motion.div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}