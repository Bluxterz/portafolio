"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Code, Star, Users, Calendar } from "lucide-react"
import { PageLayout } from "@/src/components/layout/PageLayout"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Proyectos() {
  const featuredProjects = [
    {
      id: 1,
      title: "VitalMove Platform Modernization",
      description: "Reestructuración completa de la plataforma hacia microfrontends y microservicios con mejoras significativas en rendimiento y escalabilidad.",
      image: "/img/projects/vitalmove.jpg",
      category: "Desarrollo",
      tech: ["Next.js", "React", "TypeScript", "AWS", "Docker", "Kubernetes"],
      highlights: ["Mejora del 40% en rendimiento", "Arquitectura microfrontends", "Equipo de 5 desarrolladores"],
      github: "https://github.com/bluxterz/vitalmove",
      demo: "https://vitalmoveglobal.com",
      featured: true,
      date: "2025"
    },
    {
      id: 2,
      title: "Escáner de Vulnerabilidades Web",
      description: "Herramienta automatizada para detectar vulnerabilidades en aplicaciones web basada en OWASP Top 10 con reportes detallados.",
      image: "/img/projects/vulnerability-scanner.jpg",
      category: "Ciberseguridad",
      tech: ["Python", "Flask", "SQLite", "OWASP", "Docker"],
      highlights: ["Detección automática OWASP Top 10", "Reportes PDF detallados", "API REST completa"],
      github: "https://github.com/bluxterz/web-vulnerability-scanner",
      demo: "https://demo-scanner.bluxterz.com",
      featured: true,
      date: "2024"
    },
    {
      id: 3,
      title: "Plataforma E-learning Segura",
      description: "Sistema completo de gestión de aprendizaje con autenticación multi-factor y cifrado end-to-end.",
      image: "/img/projects/elearning.jpg",
      category: "Desarrollo",
      tech: ["React", "Node.js", "PostgreSQL", "JWT", "WebRTC"],
      highlights: ["Autenticación multi-factor", "Video conferencias integradas", "+1000 usuarios activos"],
      github: "https://github.com/bluxterz/secure-elearning",
      demo: "https://learn.bluxterz.com",
      featured: true,
      date: "2024"
    }
  ]

  const allProjects = [
    ...featuredProjects,
    {
      id: 4,
      title: "App de Análisis de Seguridad WiFi",
      description: "Aplicación móvil para analizar la seguridad de redes WiFi y dispositivos conectados en tiempo real.",
      image: "/img/projects/wifi-analyzer.jpg",
      category: "Móvil",
      tech: ["React Native", "Firebase", "Python", "Nmap"],
      highlights: ["Análisis en tiempo real", "Detección de dispositivos", "Informes de seguridad"],
      github: "https://github.com/bluxterz/wifi-security-analyzer",
      demo: "https://play.google.com/store/apps/wifi-analyzer",
      featured: false,
      date: "2023"
    },
    {
      id: 5,
      title: "Sistema de Monitoreo SIEM",
      description: "Implementación personalizada de SIEM para Fundación Chile con dashboards interactivos y alertas automatizadas.",
      image: "/img/projects/siem.jpg",
      category: "Ciberseguridad",
      tech: ["Elasticsearch", "Kibana", "Python", "Docker"],
      highlights: ["Reducción 60% tiempo respuesta", "Alertas automatizadas", "Dashboard ejecutivo"],
      github: "https://github.com/bluxterz/custom-siem",
      demo: null,
      featured: false,
      date: "2023"
    },
    {
      id: 6,
      title: "API Gateway Microservicios",
      description: "Gateway centralizado para manejo de microservicios con autenticación, rate limiting y monitoreo.",
      image: "/img/projects/api-gateway.jpg",
      category: "Backend",
      tech: ["Node.js", "Express", "Redis", "MongoDB", "Docker"],
      highlights: ["Rate limiting avanzado", "Autenticación JWT", "Monitoreo en tiempo real"],
      github: "https://github.com/bluxterz/microservices-gateway",
      demo: "https://api.bluxterz.com",
      featured: false,
      date: "2024"
    },
    {
      id: 7,
      title: "Dashboard de Criptomonedas",
      description: "Panel interactivo para seguimiento de criptomonedas con análisis técnico y alertas de precios.",
      image: "/img/projects/crypto-dashboard.jpg",
      category: "Frontend",
      tech: ["Vue.js", "Chart.js", "WebSocket", "TailwindCSS"],
      highlights: ["Datos en tiempo real", "Análisis técnico", "Alertas personalizadas"],
      github: "https://github.com/bluxterz/crypto-dashboard",
      demo: "https://crypto.bluxterz.com",
      featured: false,
      date: "2023"
    },
    {
      id: 8,
      title: "Bot de Trading Automatizado",
      description: "Sistema de trading automatizado con estrategias personalizables y gestión de riesgos.",
      image: "/img/projects/trading-bot.jpg",
      category: "Fintech",
      tech: ["Python", "pandas", "ccxt", "PostgreSQL"],
      highlights: ["Estrategias personalizables", "Gestión de riesgos", "Backtesting histórico"],
      github: "https://github.com/bluxterz/trading-bot",
      demo: null,
      featured: false,
      date: "2024"
    }
  ]

  const categories = ["Todos", "Desarrollo", "Ciberseguridad", "Móvil", "Backend", "Frontend", "Fintech"]

  const stats = [
    { icon: <Code className="h-6 w-6" />, label: "Proyectos completados", value: "25+" },
    { icon: <Users className="h-6 w-6" />, label: "Clientes satisfechos", value: "15+" },
    { icon: <Star className="h-6 w-6" />, label: "Estrellas en GitHub", value: "500+" },
    { icon: <Calendar className="h-6 w-6" />, label: "Años de experiencia", value: "3+" }
  ]

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white dark:from-red-950/10 dark:to-background">
      {/* Header */}
      <section className="relative overflow-hidden py-24">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.div variants={itemFadeIn}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="gradient-text">Mis Proyectos</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                Una selección de proyectos que demuestran mi experiencia en desarrollo, ciberseguridad y soluciones tecnológicas innovadoras
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={itemFadeIn}>
                  <Card className="card-hover border-red-100 dark:border-red-900/50">
                    <CardContent className="p-6 text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full inline-flex mb-3 text-red-600">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2 variants={itemFadeIn} className="text-3xl font-bold text-center gradient-text">
            Proyectos destacados
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemFadeIn} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50 h-full">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600 text-white">{project.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-black">
                        {project.date}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div>
                        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Tecnologías:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs border-red-200 dark:border-red-900/50">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Destacados:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {project.highlights.map((highlight, j) => (
                              <li key={j} className="text-sm text-muted-foreground">{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-red-100 dark:border-red-900/50">
                      <Button variant="outline" size="sm" asChild className="border-red-200 dark:border-red-900/50">
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Link>
                      </Button>
                      {project.demo && (
                        <Button size="sm" asChild className="bg-red-600 hover:bg-red-700">
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* All Projects with Filters */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2 variants={itemFadeIn} className="text-3xl font-bold text-center gradient-text">
            Todos los proyectos
          </motion.h2>
          
          <Tabs defaultValue="Todos" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 bg-red-50 dark:bg-red-950/20 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs md:text-sm"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {allProjects
                    .filter(project => category === "Todos" || project.category === category)
                    .map((project) => (
                      <motion.div key={project.id} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                        <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50 h-full">
                          <div className="aspect-video relative">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-red-600 text-white text-xs">{project.category}</Badge>
                            </div>
                            {project.featured && (
                              <div className="absolute top-3 right-3">
                                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                              </div>
                            )}
                          </div>
                          
                          <CardContent className="p-4 flex-1 flex flex-col">
                            <div className="space-y-3 flex-1">
                              <div>
                                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                              </div>
                              
                              <div className="flex flex-wrap gap-1">
                                {project.tech.slice(0, 3).map((tech) => (
                                  <Badge key={tech} variant="outline" className="text-xs border-red-200 dark:border-red-900/50">
                                    {tech}
                                  </Badge>
                                ))}
                                {project.tech.length > 3 && (
                                  <Badge variant="outline" className="text-xs border-red-200 dark:border-red-900/50">
                                    +{project.tech.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-4 pt-3 border-t border-red-100 dark:border-red-900/50">
                              <Button variant="outline" size="sm" asChild className="border-red-200 dark:border-red-900/50">
                                <Link href={project.github} target="_blank">
                                  <Github className="mr-1 h-3 w-3" />
                                  Código
                                </Link>
                              </Button>
                              {project.demo && (
                                <Button size="sm" asChild className="bg-red-600 hover:bg-red-700">
                                  <Link href={project.demo} target="_blank">
                                    <ExternalLink className="mr-1 h-3 w-3" />
                                    Demo
                                  </Link>
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center space-y-6"
        >
          <Card className="max-w-2xl mx-auto card-hover border-red-100 dark:border-red-900/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">¿Tienes un proyecto en mente?</h3>
              <p className="text-muted-foreground mb-6">
                Estoy disponible para colaborar en proyectos desafiantes que requieran experiencia en desarrollo y ciberseguridad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-red-600 hover:bg-red-700 button-hover">
                  <Link href="/contacto">
                    Hablemos de tu proyecto
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                  <Link href="https://github.com/bluxterz" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Ver más en GitHub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
      </div>
    </PageLayout>
  )
}