"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { useTheme } from "@/src/components/providers/ThemeProvider"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      case 'system':
        return <Monitor className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Modo claro'
      case 'dark':
        return 'Modo oscuro'
      case 'system':
        return 'Modo sistema'
      default:
        return 'Modo claro'
    }
  }

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50"
        disabled
      >
        <Monitor className="h-4 w-4" />
        <span className="sr-only">Cargando tema...</span>
      </Button>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50"
        title={getLabel()}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {getIcon()}
        </motion.div>
        <span className="sr-only">{getLabel()}</span>
      </Button>
    </motion.div>
  )
}