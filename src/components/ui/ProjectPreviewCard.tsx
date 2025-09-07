/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface ProjectPreviewCardProps {
  title: string
  description: string
  url: string
  category: string
  tech: string[]
  githubUrl?: string
  variant?: any
  previewType: 'deshline' | 'electromecanica' | 'vitalmove'
}

export function ProjectPreviewCard({ 
  title, 
  description, 
  url, 
  category, 
  tech, 
  githubUrl,
  variant,
  previewType
}: ProjectPreviewCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    const { width, height } = canvas

    // Generar preview específico según el tipo
    switch (previewType) {
      case 'deshline':
        generateDeshlinePreview(ctx, width, height)
        break
      case 'electromecanica':
        generateElectromecanicaPreview(ctx, width, height)
        break
      case 'vitalmove':
        generateVitalmovePreview(ctx, width, height)
        break
    }
  }, [previewType])

  const domain = new URL(url).hostname.replace('www.', '')

  return (
    <motion.div variants={variant} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50">
        <Link href={url} target="_blank" className="block">
          <div className="relative aspect-[640/400] bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <canvas
              ref={canvasRef}
              width={640}
              height={400}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: "100%", height: "100%" }}
            />
            
            {/* Overlay hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <h4 className="font-bold text-lg">{title}</h4>
                <p className="text-sm opacity-90">{domain}</p>
              </div>
            </div>
          </div>
        </Link>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl">{title}</h3>
                <Badge className="bg-red-600 text-white">{category}</Badge>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {tech.map((technology) => (
                <Badge 
                  key={technology}
                  variant="outline" 
                  className="border-red-200 text-red-700 hover:bg-red-50 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-900/20 text-xs"
                >
                  {technology}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-between items-center pt-2">
              {githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="button-hover border-red-200 hover:border-red-300 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20"
                >
                  <Link href={githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Link>
                </Button>
              )}
              <Button size="sm" asChild className="bg-red-600 hover:bg-red-700 text-white button-hover shadow-md">
                <Link href={url} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver sitio
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Funciones para generar previews específicos
function generateDeshlinePreview(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Fondo negro como en la imagen
  ctx.fillStyle = '#1a1a1a'
  ctx.fillRect(0, 0, width, height)

  // Header oscuro
  ctx.fillStyle = '#2a2a2a'
  ctx.fillRect(0, 0, width, 60)

  // Logo/título
  ctx.fillStyle = '#dc2626'
  ctx.font = 'bold 18px system-ui'
  ctx.fillText('🏆 AUTÉNTICAS • OFICIALES • PREMIUM', 50, 35)

  // Título principal grande
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 48px system-ui'
  ctx.textAlign = 'center'
  ctx.fillText('CAMISETAS', width / 2, height / 2 - 30)
  
  ctx.fillStyle = '#dc2626'
  ctx.fillText('DE FÚTBOL', width / 2, height / 2 + 30)

  // Texto descriptivo
  ctx.fillStyle = '#cccccc'
  ctx.font = '16px system-ui'
  ctx.fillText('🔥 Las mejores camisetas de fútbol de Europa y América', width / 2, height / 2 + 70)
  ctx.fillText('✨ Calidad premium • Envío rápido • Mejor precio garantizado', width / 2, height / 2 + 95)

  // Botones simulados
  ctx.fillStyle = '#dc2626'
  ctx.fillRect(width / 2 - 100, height - 80, 200, 40)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 14px system-ui'
  ctx.fillText('COMPRAR AHORA -20% OFF', width / 2, height - 55)
}

function generateElectromecanicaPreview(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Fondo con imagen industrial simulada
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#2d3748')
  gradient.addColorStop(1, '#1a202c')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  // Header
  ctx.fillStyle = 'rgba(0,0,0,0.3)'
  ctx.fillRect(0, 0, width, 70)

  // Logo simulado
  ctx.fillStyle = '#f59e0b'
  ctx.fillRect(40, 15, 40, 40)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 14px system-ui'
  ctx.fillText('Hermanos Díaz', 90, 30)
  ctx.font = '12px system-ui'
  ctx.fillText('Tableros Eléctricos', 90, 45)

  // Título principal
  ctx.fillStyle = '#f59e0b'
  ctx.font = 'bold 36px system-ui'
  ctx.textAlign = 'center'
  ctx.fillText('Tableros Eléctricos - Electromecánica Hermanos Díaz', width / 2, height / 2 - 40)

  // Descripción
  ctx.fillStyle = '#e2e8f0'
  ctx.font = '16px system-ui'
  ctx.fillText('Fabricación de tableros eléctricos industriales en Chile. Especialistas en', width / 2, height / 2)
  ctx.fillText('tableros eléctricos personalizados, electromecánica, pintura electrostática,', width / 2, height / 2 + 25)
  ctx.fillText('collar de arranque para riego, corte y plegado, cilindrado y tornería.', width / 2, height / 2 + 50)

  // Certificaciones
  ctx.fillStyle = '#10b981'
  ctx.fillRect(50, height - 100, 20, 20)
  ctx.fillRect(250, height - 100, 20, 20)
  ctx.fillRect(450, height - 100, 20, 20)
  
  ctx.fillStyle = '#ffffff'
  ctx.font = '12px system-ui'
  ctx.textAlign = 'left'
  ctx.fillText('Normas Eléctricas RIC, SEC, ISO - Calidad Certificada', 80, height - 85)
  ctx.fillText('Diseño Profesional de Tableros Eléctricos Industriales', 280, height - 85)
  ctx.fillText('Programación PLC, HMI y SCADA - Automatización Industrial', 480, height - 85)
}

function generateVitalmovePreview(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Fondo blanco limpio
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height)

  // Header
  ctx.fillStyle = '#f8fafc'
  ctx.fillRect(0, 0, width, 60)

  // Logo/nombre
  ctx.fillStyle = '#dc2626'
  ctx.font = '18px system-ui'
  ctx.fillText('Matías Guzmán/Bluxterz', 40, 35)

  // Menú simulado
  ctx.fillStyle = '#64748b'
  ctx.font = '14px system-ui'
  ctx.fillText('Sobre mí    Proyectos    Servicios    Blog    Contacto', 300, 35)

  // Botón contactar
  ctx.fillStyle = '#dc2626'
  ctx.fillRect(550, 20, 80, 30)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 12px system-ui'
  ctx.fillText('Contactar', 565, 38)

  // Contenido principal
  ctx.fillStyle = '#dc2626'
  ctx.font = 'bold 42px system-ui'
  ctx.textAlign = 'left'
  ctx.fillText('Desarrollador,', 80, 160)
  
  ctx.fillStyle = '#1e293b'
  ctx.fillText(' Especialista en', 320, 160)

  ctx.fillStyle = '#dc2626'
  ctx.fillText('Ciberseguridad', 80, 210)
  
  ctx.fillStyle = '#1e293b'
  ctx.fillText(' & Creador de Contenido', 320, 210)

  // Descripción
  ctx.fillStyle = '#64748b'
  ctx.font = '16px system-ui'
  ctx.fillText('Construyendo soluciones seguras y compartiendo conocimiento en el mundo digital.', 80, 250)

  // Foto de perfil simulada (círculo)
  ctx.fillStyle = '#e2e8f0'
  ctx.beginPath()
  ctx.arc(500, 280, 60, 0, 2 * Math.PI)
  ctx.fill()
  
  // Botones
  ctx.fillStyle = '#dc2626'
  ctx.fillRect(80, 280, 120, 40)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 14px system-ui'
  ctx.fillText('Ver proyectos', 105, 303)

  ctx.strokeStyle = '#dc2626'
  ctx.strokeRect(220, 280, 100, 40)
  ctx.fillStyle = '#dc2626'
  ctx.fillText('Contactar', 240, 303)
}