/* eslint-disable react/no-unescaped-entities */
"use client"

import { Textarea } from "@/src/components/ui/textarea"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import {
  Code,
  ShieldCheck,
  Youtube,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  ExternalLink,
  Terminal,
  Database,
  Globe,
  Lock,
  FileCode,
  MonitorSmartphone,
  ChevronDown,
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Animación para elementos que aparecen al hacer scroll
function useScrollAnimation() {
  const [elements, setElements] = useState<Element[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => {
      observer.observe(el)
    })
    setElements(Array.from(animateElements))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [elements])
}

// Variantes para animaciones
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

export default function Home() {
  useScrollAnimation()
  const [scrolled, setScrolled] = useState(false)
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0)

  const experiences = [
    {
      title: "Líder de Proyectos y Desarrollador Frontend",
      company: "VitalMove",
      period: "Agosto 2025 - Presente",
      description:
        "Liderazgo técnico en coordinación de equipos, desarrollo con Next.js, React y TypeScript. Gestión de releases y implementación de VibeCoding sessions.",
    },
    {
      title: "Tesis: Innovación Tecnológica y Modernización",
      company: "VitalMove",
      period: "Marzo 2025 - Julio 2025",
      description:
        "Reestructuración hacia microfrontends y microservicios. Rediseño de vitalmoveglobal.com con enfoque B2B e integración de servicios AWS.",
    },
    {
      title: "Practicante en Ciberseguridad y Gobernanza de TI",
      company: "Fundación Chile",
      period: "Diciembre 2024 - Enero 2025",
      description:
        "Auditoría de políticas según ISO 27001, modernización de infraestructura y evaluación de cumplimiento normativo.",
    },
    {
      title: "Investigador en Comunicaciones Ópticas (LiFi)",
      company: "Universidad Diego Portales",
      period: "2024",
      description:
        "Evaluación experimental de sistemas LiFiMAX® y colaboración en proyecto FONDECYT sobre comunicaciones ópticas en minería.",
    },
    {
      title: "Consultor en Ciberseguridad",
      company: "Fundación Chile",
      period: "Junio - Diciembre 2023",
      description:
        "Fortalecimiento de plataformas Microsoft Defender, Sophos Central, FortiCNP. Monitoreo de amenazas y elaboración de informes.",
    },
    {
      title: "Tutor de Robótica Educativa",
      company: "Universidad Diego Portales",
      period: "Mayo - Junio 2023",
      description:
        "Tutorías de robótica para estudiantes de enseñanza media. Desarrollo de habilidades en comunicación y liderazgo.",
    },
  ]

  // Group experiences into chunks of 3
  const experienceGroups: { title: string; company: string; period: string; description: string }[][] = []
  for (let i = 0; i < experiences.length; i += 3) {
    experienceGroups.push(experiences.slice(i, i + 3))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperienceIndex((prev) => (prev + 1) % experienceGroups.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [experienceGroups.length])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Header/Navigation */}
      <header
        className={`sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300 ${scrolled ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : ""
          }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between">
          {/* Izquierda: logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <Link href="#" className="font-bold text-xl gradient-text">
              Matias Guzman/Bluxterz
            </Link>
          </motion.div>

          {/* Centro: navegación */}
          <nav className="hidden md:flex gap-6 flex-1 justify-center">
            {["sobre-mí", "habilidades", "proyectos", "contenido", "contacto"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link
                  href={`#${item}`}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-red-500"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Derecha: CTA */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 button-hover">
                <Link href="#contacto">
                  <Mail className="mr-2 h-4 w-4" />
                  Contactar
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>


      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-background -z-10"></div>
          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="space-y-6 md:w-2/3">
                <motion.div variants={itemFadeIn} className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    <span className="gradient-text">Desarrollador</span>, Especialista en{" "}
                    <span className="gradient-text">Ciberseguridad</span> & Creador de Contenido
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Construyendo soluciones seguras y compartiendo conocimiento en el mundo digital.
                  </p>
                </motion.div>
                <motion.div variants={itemFadeIn} className="flex flex-wrap gap-4">
                  <Button asChild className="bg-red-600 hover:bg-red-700 button-hover">
                    <Link href="#proyectos">
                      Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50 button-hover"
                  >
                    <Link href="#contacto">Contactar</Link>
                  </Button>
                </motion.div>
                <motion.div variants={itemFadeIn} className="flex gap-4">
                  {[
                    { icon: <Github className="h-5 w-5" />, href: "https://github.com/tunombre", label: "GitHub" },
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      href: "https://linkedin.com/in/tunombre",
                      label: "LinkedIn",
                    },
                    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/tunombre", label: "Twitter" },
                    {
                      icon: <Youtube className="h-5 w-5" />,
                      href: "https://youtube.com/@tunombre",
                      label: "YouTube",
                    },
                  ].map((social) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-600"
                        >
                          {social.icon}
                          <span className="sr-only">{social.label}</span>
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <motion.div
                variants={itemFadeIn}
                className="md:w-1/3 flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-red-200 dark:border-red-900/50 shadow-lg shadow-red-100 dark:shadow-red-900/20">
                  <Image
                    src="/img/foto.jpg?height=500&width=500"
                    alt="Tu foto de perfil"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 bg-white/80 dark:bg-background/80 shadow-md"
                onClick={() => {
                  document.getElementById("sobre-mí")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <ChevronDown className="h-5 w-5 text-red-500" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-mí" className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white/50 dark:from-red-950/10 dark:to-background/50 -z-10"></div>
          <div className="container space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="space-y-2 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Sobre mí</h2>
              <p className="text-muted-foreground">Mi trayectoria profesional y experiencia</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div variants={itemFadeIn} className="space-y-4">
                <h3 className="text-2xl font-bold">Mi historia</h3>
                <p className="text-muted-foreground">
                  Soy Matías Guzmán, Ingeniero Civil en Informática y Telecomunicaciones egresado de la Universidad
                  Diego Portales. Mi trayectoria profesional se ha enfocado en el desarrollo de software, ciberseguridad
                  y liderazgo de proyectos tecnológicos.
                </p>
                <p className="text-muted-foreground">
                  He trabajado en proyectos de modernización de arquitecturas, implementando soluciones basadas en
                  microfrontends y microservicios. Mi experiencia incluye consultoría en ciberseguridad, auditorías
                  según ISO 27001, y desarrollo de aplicaciones web con tecnologías modernas como Next.js, React y
                  TypeScript.
                </p>
                <p className="text-muted-foreground">
                  Complemento mi perfil técnico como creador de contenido digital bajo la marca "Bluxterz", donde he
                  construido una comunidad de más de 15,000 seguidores en múltiples plataformas, desarrollando
                  habilidades de comunicación, liderazgo e innovación.
                </p>
              </motion.div>
              <motion.div variants={itemFadeIn} className="space-y-4">
                <h3 className="text-2xl font-bold">Experiencia profesional</h3>
                <div className="relative overflow-hidden">
                  <motion.div
                    className="flex transition-transform duration-500 ease-in-out"
                    animate={{
                      x: `${-currentExperienceIndex * 100}%`,
                    }}
                  >
                    {experienceGroups.map((group, groupIndex) => (
                      <div key={groupIndex} className="w-full flex-shrink-0 space-y-4">
                        {group.map((job, i) => (
                          <motion.div
                            key={i}
                            className="border-l-4 border-red-500 pl-4 space-y-1"
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <h4 className="font-bold">{job.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {job.company} • {job.period}
                            </p>
                            <p className="text-muted-foreground">{job.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    ))}
                  </motion.div>

                  {/* Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {experienceGroups.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentExperienceIndex ? "bg-red-500" : "bg-red-200"
                          }`}
                        onClick={() => setCurrentExperienceIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-16 container">
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="space-y-2 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Mis habilidades
              </h2>
              <p className="text-muted-foreground">
                Competencias en desarrollo, ciberseguridad y creación de contenido
              </p>
            </motion.div>

            <Tabs defaultValue="development" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-red-50 dark:bg-red-950/20">
                <TabsTrigger
                  value="development"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <Code className="mr-2 h-4 w-4" />
                  Desarrollo
                </TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Ciberseguridad
                </TabsTrigger>
                <TabsTrigger value="content" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  <Youtube className="mr-2 h-4 w-4" />
                  Contenido
                </TabsTrigger>
              </TabsList>
              <TabsContent value="development" className="mt-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {[
                    {
                      icon: <Globe className="h-6 w-6 text-red-600" />,
                      title: "Desarrollo Web",
                      subtitle: "Frontend & Backend",
                      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Next.js", "TypeScript"],
                    },
                    {
                      icon: <MonitorSmartphone className="h-6 w-6 text-red-600" />,
                      title: "Desarrollo Móvil",
                      subtitle: "Apps nativas e híbridas",
                      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
                    },
                    {
                      icon: <Database className="h-6 w-6 text-red-600" />,
                      title: "Bases de Datos",
                      subtitle: "SQL & NoSQL",
                      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
                    },
                  ].map((category, i) => (
                    <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <Card className="card-hover border-red-100 dark:border-red-900/50">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-4">
                            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">{category.icon}</div>
                            <div>
                              <h3 className="font-bold">{category.title}</h3>
                              <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                            </div>
                          </div>
                          <div className="mt-4 space-y-2">
                            {category.skills.map((skill) => (
                              <Badge
                                key={skill}
                                className="mr-1 bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="security" className="mt-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {[
                    {
                      icon: <Lock className="h-6 w-6 text-red-600" />,
                      title: "Seguridad Ofensiva",
                      subtitle: "Pentesting & Ethical Hacking",
                      skills: ["Pentesting Web", "OWASP Top 10", "Burp Suite", "Metasploit"],
                    },
                    {
                      icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
                      title: "Seguridad Defensiva",
                      subtitle: "Protección & Monitoreo",
                      skills: ["Firewall", "IDS/IPS", "SIEM", "Análisis de Malware"],
                    },
                    {
                      icon: <FileCode className="h-6 w-6 text-red-600" />,
                      title: "DevSecOps",
                      subtitle: "Seguridad en CI/CD",
                      skills: ["SAST/DAST", "Análisis de Dependencias", "Contenedores Seguros", "IaC"],
                    },
                  ].map((category, i) => (
                    <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <Card className="card-hover border-red-100 dark:border-red-900/50">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-4">
                            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">{category.icon}</div>
                            <div>
                              <h3 className="font-bold">{category.title}</h3>
                              <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                            </div>
                          </div>
                          <div className="mt-4 space-y-2">
                            {category.skills.map((skill) => (
                              <Badge
                                key={skill}
                                className="mr-1 bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="content" className="mt-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {[
                    {
                      icon: <Youtube className="h-6 w-6 text-red-600" />,
                      title: "Producción de Video",
                      subtitle: "Tutoriales & Cursos",
                      skills: ["Guionización", "Edición de Video", "Animación", "Presentación"],
                    },
                    {
                      icon: <Terminal className="h-6 w-6 text-red-600" />,
                      title: "Escritura Técnica",
                      subtitle: "Artículos & Tutoriales",
                      skills: ["Blogs Técnicos", "Documentación", "Guías Paso a Paso", "Investigación"],
                    },
                    {
                      icon: <Globe className="h-6 w-6 text-red-600" />,
                      title: "Marketing Digital",
                      subtitle: "Promoción & Engagement",
                      skills: ["SEO", "Redes Sociales", "Email Marketing", "Análisis de Audiencia"],
                    },
                  ].map((category, i) => (
                    <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <Card className="card-hover border-red-100 dark:border-red-900/50">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-4">
                            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">{category.icon}</div>
                            <div>
                              <h3 className="font-bold">{category.title}</h3>
                              <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                            </div>
                          </div>
                          <div className="mt-4 space-y-2">
                            {category.skills.map((skill) => (
                              <Badge
                                key={skill}
                                className="mr-1 bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white/50 dark:from-red-950/10 dark:to-background/50 -z-10"></div>
          <div className="container space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="space-y-2 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Proyectos destacados
              </h2>
              <p className="text-muted-foreground">Una selección de mis trabajos más relevantes</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Project 1 */}
              <motion.div variants={itemFadeIn} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Proyecto de seguridad web"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="font-bold">Escáner de Vulnerabilidades</h4>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">Escáner de Vulnerabilidades</h3>
                          <Badge className="bg-red-600">Ciberseguridad</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          Herramienta automatizada para detectar vulnerabilidades en aplicaciones web basada en OWASP
                          Top 10.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                          Python
                        </Badge>
                        <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                          OWASP
                        </Badge>
                        <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                          API REST
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="button-hover border-red-200 dark:border-red-900/50"
                        >
                          <Link href="#" target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Código
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="bg-red-600 hover:bg-red-700 button-hover">
                          <Link href="#" target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project 2 */}
              <motion.div variants={itemFadeIn} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Aplicación web segura"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="font-bold">Plataforma E-learning</h4>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">Plataforma E-learning</h3>
                          <Badge className="bg-red-600">Desarrollo</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          Plataforma educativa para cursos de programación y ciberseguridad con autenticación segura.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                          React
                        </Badge>
                        <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                          Node.js
                        </Badge>
                        <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                          PostgreSQL
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="button-hover border-red-200 dark:border-red-900/50"
                        >
                          <Link href="#" target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Código
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="bg-red-600 hover:bg-red-700 button-hover">
                          <Link href="#" target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project 3 */}
              <motion.div variants={itemFadeIn} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Canal de YouTube"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="font-bold">App de Análisis de Seguridad</h4>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">App de Análisis de Seguridad</h3>
                          <Badge className="bg-red-600">Móvil</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          Aplicación móvil para analizar la seguridad de redes WiFi y dispositivos conectados.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                          React Native
                        </Badge>
                        <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                          Firebase
                        </Badge>
                        <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                          Análisis de Red
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="button-hover border-red-200 dark:border-red-900/50"
                        >
                          <Link href="#" target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Código
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="bg-red-600 hover:bg-red-700 button-hover">
                          <Link href="#" target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mt-8"
            >
              <Button
                variant="outline"
                asChild
                className="button-hover border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/50"
              >
                <Link href="https://github.com/Bluxterz" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Ver más proyectos en GitHub
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Content Creation Section */}
        <section id="contenido" className="py-16 container">
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="space-y-2 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Creación de contenido
              </h2>
              <p className="text-muted-foreground">Tutoriales, artículos y recursos educativos</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* YouTube Channel */}
              <motion.div variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                          <Youtube className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">Canal de YouTube</h3>
                          <p className="text-sm text-muted-foreground">Tutoriales y demostraciones técnicas</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2 }}
                          className="border rounded-lg overflow-hidden border-red-100 dark:border-red-900/50"
                        >
                          <div className="aspect-video relative">
                            <Image
                              src="/placeholder.svg?height=200&width=400"
                              alt="Video tutorial"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-red-600/90 p-4 rounded-full">
                                <Youtube className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium">Cómo proteger tu aplicación web contra ataques XSS</h4>
                            <p className="text-sm text-muted-foreground mt-1">15K visualizaciones • hace 2 meses</p>
                          </div>
                        </motion.div>
                        <Button className="w-full bg-red-600 hover:bg-red-700 button-hover" asChild>
                          <Link href="https://youtube.com/@tunombre" target="_blank">
                            <Youtube className="mr-2 h-4 w-4" />
                            Visitar canal
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Blog */}
              <motion.div variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                          <FileCode className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">Blog Técnico</h3>
                          <p className="text-sm text-muted-foreground">Artículos y guías detalladas</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-4">
                          {[
                            {
                              category: "Ciberseguridad",
                              title: "Implementando autenticación segura en aplicaciones modernas",
                              date: "15 de marzo, 2023",
                            },
                            {
                              category: "Desarrollo",
                              title: "Mejores prácticas para el desarrollo de APIs seguras",
                              date: "2 de febrero, 2023",
                            },
                          ].map((article, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                              className="border rounded-lg p-4 border-red-100 dark:border-red-900/50"
                            >
                              <Badge className="mb-2 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                {article.category}
                              </Badge>
                              <h4 className="font-medium">{article.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">Publicado el {article.date}</p>
                            </motion.div>
                          ))}
                        </div>
                        <Button className="w-full bg-red-600 hover:bg-red-700 button-hover" asChild>
                          <Link href="https://blog.tunombre.com" target="_blank">
                            <FileCode className="mr-2 h-4 w-4" />
                            Leer artículos
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white/50 dark:from-red-950/10 dark:to-background/50 -z-10"></div>
          <div className="container space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="space-y-2 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Contacto</h2>
              <p className="text-muted-foreground">¿Interesado en trabajar juntos? ¡Hablemos!</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <motion.div variants={itemFadeIn}>
                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre</Label>
                          <Input
                            id="name"
                            placeholder="Tu nombre"
                            className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input
                          id="subject"
                          placeholder="¿En qué puedo ayudarte?"
                          className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                          id="message"
                          placeholder="Escribe tu mensaje aquí..."
                          rows={4}
                          className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                        />
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 button-hover">
                          Enviar mensaje
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemFadeIn} className="space-y-6">
                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-bold text-xl">Información de contacto</h3>
                      <div className="space-y-3">
                        {[
                          { icon: <Mail className="h-5 w-5 text-red-500" />, text: "contacto@tunombre.com" },
                          { icon: <Linkedin className="h-5 w-5 text-red-500" />, text: "linkedin.com/in/tunombre" },
                          { icon: <Twitter className="h-5 w-5 text-red-500" />, text: "@tunombre" },
                        ].map((contact, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-3"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {contact.icon}
                            <p>{contact.text}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-bold text-xl">Disponibilidad</h3>
                      <p className="text-muted-foreground">
                        Actualmente estoy disponible para proyectos freelance, consultoría en ciberseguridad y
                        colaboraciones para creación de contenido.
                      </p>
                      <div className="flex gap-2">
                        <Badge
                          variant="outline"
                          className="bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300"
                        >
                          Freelance
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300"
                        >
                          Consultoría
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300"
                        >
                          Contenido
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-100 dark:border-red-900/50 py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TuNombre. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <Github className="h-4 w-4" />, href: "https://github.com/tunombre", label: "GitHub" },
              { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/in/tunombre", label: "LinkedIn" },
              { icon: <Twitter className="h-4 w-4" />, href: "https://twitter.com/tunombre", label: "Twitter" },
              { icon: <Youtube className="h-4 w-4" />, href: "https://youtube.com/@tunombre", label: "YouTube" },
            ].map((social) => (
              <motion.div key={social.label} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-600"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
