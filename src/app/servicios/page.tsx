"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { 
  Code, 
  ShieldCheck, 
  Youtube, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Phone,
  Clock,
  Star,
  Target,
  TrendingUp,
  Award
} from "lucide-react"
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

export default function Servicios() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desarrollo Full-Stack",
      description: "Desarrollo de aplicaciones web completas con tecnologías modernas y mejores prácticas.",
      features: [
        "Aplicaciones React/Next.js",
        "APIs REST y GraphQL",
        "Bases de datos optimizadas",
        "Arquitectura escalable",
        "Testing automatizado",
        "Despliegue en la nube"
      ],
      pricing: "Desde $2,000 USD",
      timeframe: "4-12 semanas",
      category: "Desarrollo"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Consultoría en Ciberseguridad",
      description: "Auditorías de seguridad, implementación de controles y mejora de la postura de seguridad.",
      features: [
        "Auditorías ISO 27001",
        "Pentesting aplicaciones web",
        "Análisis de vulnerabilidades",
        "Implementación SIEM",
        "Políticas de seguridad",
        "Capacitación del equipo"
      ],
      pricing: "Desde $1,500 USD",
      timeframe: "2-8 semanas",
      category: "Ciberseguridad"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Liderazgo Técnico",
      description: "Liderazgo de equipos de desarrollo, gestión de proyectos y mentorías técnicas.",
      features: [
        "Gestión de equipos DevOps",
        "Code reviews y mentoring",
        "Arquitectura de sistemas",
        "Metodologías ágiles",
        "Planificación técnica",
        "Optimización de procesos"
      ],
      pricing: "Desde $3,000 USD",
      timeframe: "Ongoing",
      category: "Consultoría"
    },
    {
      icon: <Youtube className="h-8 w-8" />,
      title: "Creación de Contenido Técnico",
      description: "Desarrollo de contenido educativo, tutoriales y documentación técnica.",
      features: [
        "Videos tutoriales",
        "Documentación técnica",
        "Cursos especializados",
        "Webinars y workshops",
        "Artículos técnicos",
        "Guías de implementación"
      ],
      pricing: "Desde $800 USD",
      timeframe: "1-4 semanas",
      category: "Contenido"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Consulta inicial",
      description: "Analizamos tus necesidades y objetivos para diseñar la solución perfecta.",
      icon: <Phone className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Propuesta detallada",
      description: "Desarrollo una propuesta técnica completa con cronograma y presupuesto.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Desarrollo e implementación",
      description: "Ejecuto el proyecto con actualizaciones regulares y comunicación constante.",
      icon: <Code className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Entrega y soporte",
      description: "Entrego el proyecto completo con documentación y soporte post-implementación.",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Entrega rápida",
      description: "Metodologías ágiles para resultados en tiempo récord"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Calidad garantizada",
      description: "Código limpio, documentado y siguiendo mejores prácticas"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Escalabilidad",
      description: "Soluciones diseñadas para crecer con tu negocio"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Experiencia comprobada",
      description: "3+ años desarrollando soluciones para diversos clientes"
    }
  ]

  const testimonials = [
    {
      name: "María González",
      company: "Tech Startup",
      role: "CTO",
      content: "Matías desarrolló nuestra plataforma desde cero. Su expertise técnico y capacidad de liderazgo fueron fundamentales para el éxito del proyecto.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      company: "Fundación Chile",
      role: "Director de TI",
      content: "La implementación de nuestro sistema SIEM fue impecable. Redujo significativamente nuestros tiempos de respuesta ante incidentes de seguridad.",
      rating: 5
    },
    {
      name: "Ana López",
      company: "E-commerce Company",
      role: "Product Manager",
      content: "Su enfoque en la seguridad y experiencia de usuario resultó en una aplicación robusta que nuestros clientes adoran.",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "¿Cuál es tu proceso de trabajo?",
      answer: "Sigo una metodología ágil con entregas incrementales, manteniendo comunicación constante y transparencia total en el progreso del proyecto."
    },
    {
      question: "¿Ofreces soporte post-entrega?",
      answer: "Sí, incluyo 30 días de soporte gratuito post-entrega y ofrezco planes de mantenimiento a largo plazo según las necesidades del cliente."
    },
    {
      question: "¿Trabajas con equipos existentes?",
      answer: "Absolutamente. Tengo experiencia integrándome con equipos de desarrollo existentes y liderando iniciativas de modernización tecnológica."
    },
    {
      question: "¿Qué garantías ofreces?",
      answer: "Garantizo la calidad del código entregado y me comprometo a resolver cualquier bug o problema durante el período de garantía acordado."
    }
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
                <span className="gradient-text">Mis Servicios</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                Soluciones tecnológicas integrales para impulsar tu negocio con seguridad, calidad y resultados medibles
              </p>
            </motion.div>

            <motion.div variants={itemFadeIn} className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-red-600 hover:bg-red-700 button-hover">
                <Link href="/contacto">
                  Solicitar consulta gratuita
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                <Link href="/proyectos">
                  Ver portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={itemFadeIn} className="text-center">
            <h2 className="text-3xl font-bold gradient-text">¿Cómo puedo ayudarte?</h2>
            <p className="text-muted-foreground mt-2">Servicios especializados para cada etapa de tu proyecto</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="card-hover border-red-100 dark:border-red-900/50 h-full">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-red-600 flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-xl">{service.title}</h3>
                            <Badge className="bg-red-600 text-white text-xs">{service.category}</Badge>
                          </div>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Clock className="h-4 w-4 text-red-500" />
                            Tiempo estimado
                          </div>
                          <p className="text-sm text-muted-foreground">{service.timeframe}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <TrendingUp className="h-4 w-4 text-red-500" />
                            Inversión
                          </div>
                          <p className="text-sm text-muted-foreground">{service.pricing}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">¿Qué incluye?</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, j) => (
                            <div key={j} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-red-600 hover:bg-red-700 button-hover" asChild>
                        <Link href="/contacto">
                          Solicitar más información
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={itemFadeIn} className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Mi proceso de trabajo</h2>
            <p className="text-muted-foreground mt-2">Un enfoque estructurado para garantizar el éxito de tu proyecto</p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-red-300"></div>
            
            <div className="space-y-12">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  className={`relative flex items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white dark:border-background shadow-lg z-10">
                    {step.step}
                  </div>
                  
                  <Card className={`ml-20 md:ml-0 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"} md:w-5/12 card-hover border-red-100 dark:border-red-900/50`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
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

      {/* Benefits */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={itemFadeIn} className="text-center">
            <h2 className="text-3xl font-bold gradient-text">¿Por qué elegir mis servicios?</h2>
            <p className="text-muted-foreground mt-2">Ventajas competitivas que marcan la diferencia</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="card-hover border-red-100 dark:border-red-900/50 text-center">
                  <CardContent className="p-6">
                    <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full inline-flex mb-4 text-red-600">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={itemFadeIn} className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Lo que dicen mis clientes</h2>
            <p className="text-muted-foreground mt-2">Testimonios reales de proyectos exitosos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                      <div className="border-t border-red-100 dark:border-red-900/50 pt-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12 max-w-4xl mx-auto"
        >
          <motion.div variants={itemFadeIn} className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Preguntas frecuentes</h2>
            <p className="text-muted-foreground mt-2">Respuestas a las dudas más comunes</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemFadeIn}>
                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center space-y-6"
        >
          <Card className="max-w-3xl mx-auto card-hover border-red-100 dark:border-red-900/50">
            <CardContent className="p-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold gradient-text">¿Listo para comenzar tu proyecto?</h3>
                <p className="text-muted-foreground text-lg">
                  Agenda una consulta gratuita de 30 minutos para discutir tus necesidades y cómo puedo ayudarte a alcanzar tus objetivos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-red-600 hover:bg-red-700 button-hover">
                    <Link href="/contacto">
                      <Phone className="mr-2 h-4 w-4" />
                      Agendar consulta gratuita
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                    <Link href="https://calendly.com/bluxterz" target="_blank">
                      Ver calendario disponible
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sin compromiso
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Respuesta en 24h
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Propuesta personalizada
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
      </div>
    </PageLayout>
  )
}