"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Download, ExternalLink, Code, ShieldCheck, Youtube, ChevronRight } from "lucide-react"
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

export default function SobreMi() {
  const timeline = [
    {
      year: "2025",
      title: "Líder de Proyectos y Desarrollador Frontend",
      company: "VitalMove",
      description: "Liderazgo técnico en coordinación de equipos, desarrollo con Next.js, React y TypeScript. Gestión de releases y implementación de VibeCoding sessions.",
      achievements: ["Implementación de arquitectura microfrontends", "Mejora del 40% en rendimiento", "Liderazgo de equipo de 5 desarrolladores"]
    },
    {
      year: "2024-2025",
      title: "Investigador y Consultor en Ciberseguridad",
      company: "Fundación Chile & UDP",
      description: "Auditoría de políticas según ISO 27001, evaluación de sistemas LiFi y fortalecimiento de infraestructura de seguridad.",
      achievements: ["Implementación ISO 27001", "Investigación en comunicaciones ópticas", "Mejora del 60% en detección de amenazas"]
    },
    {
      year: "2023",
      title: "Consultor en Ciberseguridad",
      company: "Fundación Chile",
      description: "Fortalecimiento de plataformas Microsoft Defender, Sophos Central, FortiCNP. Monitoreo de amenazas y elaboración de informes.",
      achievements: ["Reducción del 50% en incidentes de seguridad", "Implementación de SIEM", "Automatización de reportes"]
    }
  ]

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "API REST"] },
    { category: "Ciberseguridad", items: ["Pentesting", "OWASP", "ISO 27001", "SIEM", "Análisis de Malware"] },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
    { category: "Herramientas", items: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "Figma"] }
  ]

  const certifications = [
    { name: "Ingeniero Civil en Informática y Telecomunicaciones", issuer: "Universidad Diego Portales", year: "2024" },
    { name: "Ethical Hacking & Penetration Testing", issuer: "EC-Council", year: "2023" },
    { name: "AWS Solutions Architect Associate", issuer: "Amazon Web Services", year: "2023" },
    { name: "ISO 27001 Lead Auditor", issuer: "PECB", year: "2023" }
  ]

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white dark:from-red-950/10 dark:to-background">
      <section className="relative overflow-hidden py-24">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="flex-1 space-y-6">
              <motion.div variants={itemFadeIn}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="gradient-text">Sobre mí</span>
                </h1>
                <p className="text-xl text-muted-foreground mt-4">
                  Desarrollador apasionado por la tecnología, la seguridad y la educación digital
                </p>
              </motion.div>
              
              <motion.div variants={itemFadeIn} className="flex flex-wrap gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700 button-hover">
                  <Link href="/CV-Matias-Guzman.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar CV
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                  <Link href="/proyectos">
                    Ver proyectos <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              variants={itemFadeIn}
              className="lg:w-1/3 flex justify-center"
            >
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-red-200 dark:border-red-900/50 shadow-xl shadow-red-100 dark:shadow-red-900/20">
                <Image
                  src="/img/foto.jpg?height=400&width=400"
                  alt="Matías Guzmán - Bluxterz"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Biografía */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemFadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text">Mi historia</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy Matías Guzmán, conocido como <strong className="text-foreground">Bluxterz</strong> en el mundo digital. 
                Ingeniero Civil en Informática y Telecomunicaciones egresado de la Universidad Diego Portales con más de 3 años de experiencia en desarrollo de software y ciberseguridad.
              </p>
              <p>
                Mi pasión por la tecnología comenzó a temprana edad, y desde entonces he estado dedicado a crear soluciones innovadoras que combinen funcionalidad, seguridad y experiencia de usuario excepcional.
              </p>
              <p>
                Actualmente trabajo como Líder de Proyectos y Desarrollador Frontend en VitalMove, donde lidero equipos de desarrollo y gestiono la modernización de arquitecturas complejas hacia sistemas basados en microfrontends.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemFadeIn} className="space-y-6">
            <h3 className="text-2xl font-bold">Especialidades</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Code className="h-5 w-5" />, title: "Desarrollo Full-Stack", desc: "Aplicaciones modernas con React, Next.js y Node.js" },
                { icon: <ShieldCheck className="h-5 w-5" />, title: "Ciberseguridad", desc: "Auditorías, pentesting y implementación de controles" },
                { icon: <Youtube className="h-5 w-5" />, title: "Creación de Contenido", desc: "Tutoriales técnicos y recursos educativos" },
                { icon: <ExternalLink className="h-5 w-5" />, title: "Consultoría", desc: "Asesoría en transformación digital y seguridad" }
              ].map((specialty, i) => (
                <Card key={i} className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600">
                        {specialty.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{specialty.title}</h4>
                        <p className="text-xs text-muted-foreground">{specialty.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center gradient-text">Experiencia profesional</h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-red-300"></div>
            
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-red-600 rounded-full border-4 border-white dark:border-background shadow-lg"></div>
                  
                  <Card className={`ml-12 md:ml-0 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"} md:w-5/12 card-hover border-red-100 dark:border-red-900/50`}>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-red-600 text-white">{item.year}</Badge>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          <p className="text-red-600 font-medium">{item.company}</p>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Logros principales:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {item.achievements.map((achievement, j) => (
                              <li key={j} className="text-sm text-muted-foreground">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2 variants={itemFadeIn} className="text-3xl font-bold text-center gradient-text">
            Habilidades técnicas
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, i) => (
              <motion.div key={i} variants={itemFadeIn}>
                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 gradient-text">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, j) => (
                        <Badge key={j} variant="outline" className="border-red-200 dark:border-red-900/50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2 variants={itemFadeIn} className="text-3xl font-bold text-center gradient-text">
            Educación y certificaciones
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div key={i} variants={itemFadeIn}>
                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold">{cert.name}</h3>
                        <p className="text-red-600 font-medium">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                        {cert.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      </div>
    </PageLayout>
  )
}