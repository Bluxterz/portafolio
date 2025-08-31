"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-50/30 to-white dark:from-red-950/10 dark:to-background flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-6"
      >
        {/* Logo */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-white font-bold text-2xl"
          >
            B
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-2"
        >
          <h2 className="text-xl font-bold gradient-text">Cargando...</h2>
          <p className="text-muted-foreground text-sm">Preparando el contenido</p>
        </motion.div>

        {/* Loading bar */}
        <motion.div className="w-64 h-1 bg-red-100 dark:bg-red-900/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
            animate={{ 
              x: [-256, 256, -256] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ width: "50%" }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}