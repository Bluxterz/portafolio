"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Mail, Home } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { href: "/", label: "Inicio", icon: <Home className="h-4 w-4" /> },
    { href: "/sobre-mi", label: "Sobre mí", icon: null },
    { href: "/proyectos", label: "Proyectos", icon: null },
    { href: "/servicios", label: "Servicios", icon: null },
    { href: "/blog", label: "Blog", icon: null },
    { href: "/contacto", label: "Contacto", icon: <Mail className="h-4 w-4" /> }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={toggleMenu}
        className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-background border-l border-red-100 dark:border-red-900/50 shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={closeMenu} className="font-bold text-xl gradient-text">
                  Bluxterz
                </Link>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={closeMenu}
                    className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4">
                {navigationItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        pathname === item.href
                          ? "bg-red-50 dark:bg-red-950/50 text-red-600 border-l-4 border-red-500"
                          : "text-muted-foreground hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600"
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 button-hover">
                  <Link href="/contacto" onClick={closeMenu}>
                    <Mail className="mr-2 h-4 w-4" />
                    Contactar
                  </Link>
                </Button>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-6 border-t border-red-100 dark:border-red-900/50 text-center text-sm text-muted-foreground"
              >
                <p>Desarrollador Full-Stack</p>
                <p>& Especialista en Ciberseguridad</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}