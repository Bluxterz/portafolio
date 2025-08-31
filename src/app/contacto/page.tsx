"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Label } from "@/src/components/ui/label"
import Link from "next/link"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Award,
  Users,
  Zap
} from "lucide-react"
import { useState } from "react"
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

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    service: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "contacto@bluxterz.com",
      description: "Respuesta en 24 horas",
      href: "mailto:contacto@bluxterz.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      value: "+56 9 1234 5678",
      description: "Lun - Vie 9:00 - 18:00",
      href: "tel:+56912345678"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      value: "Santiago, Chile",
      description: "Disponible para trabajo remoto",
      href: null
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Agenda una reunión",
      value: "Consulta gratuita",
      description: "30 minutos para conocer tu proyecto",
      href: "https://calendly.com/bluxterz"
    }
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/bluxterz", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/matias-guzman-bluxterz", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/bluxterz", label: "Twitter" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com/@bluxterz", label: "YouTube" }
  ]

  const services = [
    "Desarrollo Full-Stack",
    "Consultoría en Ciberseguridad",
    "Auditoría de Seguridad",
    "Liderazgo Técnico",
    "Creación de Contenido",
    "Mentoring/Capacitación",
    "Otro (especificar en mensaje)"
  ]

  const faqs = [
    {
      question: "¿Cuál es tu disponibilidad actual?",
      answer: "Actualmente tengo disponibilidad para nuevos proyectos. Mi horario preferido es de 9:00 a 18:00 CLP, pero puedo adaptarme según las necesidades del proyecto."
    },
    {
      question: "¿Trabajas con equipos remotos?",
      answer: "Sí, tengo amplia experiencia trabajando de forma remota con equipos distribuidos. Utilizo herramientas como Slack, Discord, Zoom y metodologías ágiles para mantener una comunicación efectiva."
    },
    {
      question: "¿Qué tipo de proyectos prefieres?",
      answer: "Me especializo en proyectos que involucren desarrollo web moderno, ciberseguridad, arquitecturas escalables y liderazgo técnico. Prefiero proyectos desafiantes que requieran soluciones innovadoras."
    },
    {
      question: "¿Ofreces contratos de mantenimiento?",
      answer: "Sí, ofrezco planes de mantenimiento y soporte continuo para los proyectos que desarrollo. Incluyo monitoreo, actualizaciones de seguridad y mejoras incrementales."
    }
  ]

  const testimonials = [
    {
      name: "María González",
      company: "Tech Startup",
      content: "Matías entregó nuestro proyecto a tiempo y superó nuestras expectativas. Su expertise técnico es excepcional.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez", 
      company: "Fundación Chile",
      content: "La implementación de nuestro sistema de seguridad fue impecable. Altamente recomendado.",
      rating: 5
    }
  ]

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white dark:from-red-950/10 dark:to-background flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container max-w-2xl mx-auto text-center"
        >
          <Card className="card-hover border-red-100 dark:border-red-900/50">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full inline-flex text-green-600">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold gradient-text mb-4">¡Mensaje enviado!</h1>
                  <p className="text-muted-foreground text-lg">
                    Gracias por contactarme. He recibido tu mensaje y te responderé dentro de las próximas 24 horas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link href="/">Volver al inicio</Link>
                  </Button>
                  <Button variant="outline" asChild className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                    <Link href="/blog">Leer artículos</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

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
                <span className="gradient-text">Hablemos</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo podemos trabajar juntos.
              </p>
            </motion.div>

            <motion.div variants={itemFadeIn} className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-red-600 hover:bg-red-700 button-hover">
                <Link href="https://calendly.com/bluxterz" target="_blank">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar reunión
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                <Link href="mailto:contacto@bluxterz.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar email
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, i) => (
            <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="card-hover border-red-100 dark:border-red-900/50 h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full inline-flex mb-4 text-red-600">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-muted-foreground mb-2">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                  {info.href && (
                    <Button size="sm" className="mt-4 bg-red-600 hover:bg-red-700" asChild>
                      <Link href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined}>
                        Contactar
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Card className="card-hover border-red-100 dark:border-red-900/50">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold gradient-text mb-2">Envíame un mensaje</h2>
                      <p className="text-muted-foreground">
                        Completa el formulario y te responderé lo antes posible
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Tu nombre completo"
                            className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="tu@email.com"
                            className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa/Organización</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            placeholder="Nombre de tu empresa"
                            className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Servicio de interés</Label>
                          <select
                            id="service"
                            value={formData.service}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                            className="w-full px-3 py-2 border border-red-200 dark:border-red-900/50 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          >
                            <option value="">Seleccionar servicio</option>
                            {services.map((service, i) => (
                              <option key={i} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto *</Label>
                        <Input
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          placeholder="¿En qué puedo ayudarte?"
                          className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Cuéntame más sobre tu proyecto, objetivos, presupuesto y timeline..."
                          className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-red-600 hover:bg-red-700 button-hover"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar mensaje
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-8">
            {/* Why Choose Me */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Card className="card-hover border-red-100 dark:border-red-900/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 gradient-text">¿Por qué trabajar conmigo?</h3>
                  <div className="space-y-4">
                    {[
                      { icon: <Zap className="h-5 w-5" />, title: "Respuesta rápida", desc: "Contacto en menos de 24h" },
                      { icon: <Award className="h-5 w-5" />, title: "Calidad garantizada", desc: "3+ años de experiencia" },
                      { icon: <Users className="h-5 w-5" />, title: "Enfoque colaborativo", desc: "Comunicación transparente" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Card className="card-hover border-red-100 dark:border-red-900/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Sígueme en redes</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        asChild
                        className="justify-start border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50"
                      >
                        <Link href={social.href} target="_blank">
                          {social.icon}
                          <span className="ml-2">{social.label}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Card className="card-hover border-red-100 dark:border-red-900/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h3 className="font-bold text-lg">Disponible para proyectos</h3>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="outline" className="mr-2 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                        Freelance
                      </Badge>
                      <Badge variant="outline" className="mr-2 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                        Consultoría
                      </Badge>
                      <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                        Tiempo completo
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Actualmente acepto nuevos proyectos con inicio en febrero 2025.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={itemFadeIn} className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Lo que dicen mis clientes</h2>
            <p className="text-muted-foreground mt-2">Testimonios reales de proyectos exitosos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} variants={itemFadeIn}>
                <Card className="card-hover border-red-100 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <div key={j} className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                      <div className="border-t border-red-100 dark:border-red-900/50 pt-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
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
          className="max-w-4xl mx-auto space-y-8"
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
      </div>
    </PageLayout>
  )
}