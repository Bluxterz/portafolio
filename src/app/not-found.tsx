"use client"

import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import Link from "next/link"
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const bounce = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1, 
    transition: { 
      type: "spring" as const, 
      stiffness: 260, 
      damping: 20,
      delay: 0.3 
    } 
  },
}

export default function NotFound() {
  const suggestions = [
    { href: "/", label: "Página principal", icon: <Home className="h-4 w-4" /> },
    { href: "/sobre-mi", label: "Sobre mí", icon: <FileQuestion className="h-4 w-4" /> },
    { href: "/proyectos", label: "Proyectos", icon: <Search className="h-4 w-4" /> },
    { href: "/blog", label: "Blog", icon: <FileQuestion className="h-4 w-4" /> },
    { href: "/contacto", label: "Contacto", icon: <FileQuestion className="h-4 w-4" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white dark:from-red-950/10 dark:to-background flex items-center justify-center">
      <div className="container max-w-2xl mx-auto text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            variants={bounce}
            className="relative"
          >
            <div className="text-9xl font-bold gradient-text opacity-20 absolute inset-0 flex items-center justify-center">
              404
            </div>
            <div className="relative z-10 py-16">
              <div className="bg-red-100 dark:bg-red-900/30 p-8 rounded-full inline-flex text-red-600 mb-6">
                <FileQuestion className="h-16 w-16" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <Card className="card-hover border-red-100 dark:border-red-900/50">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold gradient-text">
                  Página no encontrada
                </h1>
                <p className="text-lg text-muted-foreground">
                  La página que buscas no existe o ha sido movida a otra ubicación.
                </p>
                <p className="text-sm text-muted-foreground">
                  No te preocupes, aquí tienes algunas opciones para continuar navegando:
                </p>
              </div>

              {/* Navigation Options */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {suggestions.map((suggestion, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        asChild
                        className="w-full justify-start border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50"
                      >
                        <Link href={suggestion.href}>
                          {suggestion.icon}
                          <span className="ml-2">{suggestion.label}</span>
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Primary Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-red-100 dark:border-red-900/50">
                  <Button asChild className="bg-red-600 hover:bg-red-700 button-hover flex-1">
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Ir al inicio
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.history.back()}
                    className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50 flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver atrás
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-muted-foreground"
          >
            <p>
              ¿Necesitas ayuda? {" "}
              <Link href="/contacto" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                Contáctame
              </Link>
              {" "} si crees que esto es un error.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}