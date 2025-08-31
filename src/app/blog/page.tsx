"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, Search, ArrowRight, Tag, TrendingUp } from "lucide-react"
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

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const featuredPost = {
    id: 1,
    title: "Implementando autenticación segura en aplicaciones modernas",
    excerpt: "Una guía completa sobre cómo implementar sistemas de autenticación robustos utilizando JWT, OAuth 2.0 y mejores prácticas de seguridad.",
    content: "En el desarrollo de aplicaciones modernas, la seguridad de la autenticación es fundamental...",
    category: "Ciberseguridad",
    author: "Matías Guzmán",
    date: "2025-01-15",
    readTime: "12 min",
    image: "/img/blog/auth-security.jpg",
    featured: true,
    views: 1250,
    tags: ["Seguridad", "JWT", "OAuth", "Autenticación"]
  }

  const blogPosts = [
    {
      id: 2,
      title: "Mejores prácticas para el desarrollo de APIs REST",
      excerpt: "Explora las técnicas esenciales para crear APIs REST escalables, seguras y mantenibles.",
      content: "Las APIs REST son el backbone de las aplicaciones modernas...",
      category: "Desarrollo",
      author: "Matías Guzmán",
      date: "2025-01-10",
      readTime: "8 min",
      image: "/img/blog/api-best-practices.jpg",
      featured: false,
      views: 850,
      tags: ["API", "REST", "Backend", "Node.js"]
    },
    {
      id: 3,
      title: "Pentesting de aplicaciones web: Guía para principiantes",
      excerpt: "Introducción al pentesting web con herramientas como Burp Suite y metodologías OWASP.",
      content: "El pentesting es una práctica esencial para identificar vulnerabilidades...",
      category: "Ciberseguridad",
      author: "Matías Guzmán",
      date: "2025-01-05",
      readTime: "15 min",
      image: "/img/blog/web-pentesting.jpg",
      featured: false,
      views: 1100,
      tags: ["Pentesting", "OWASP", "Seguridad Web", "Burp Suite"]
    },
    {
      id: 4,
      title: "React Server Components: El futuro del desarrollo frontend",
      excerpt: "Descubre cómo los React Server Components están revolucionando el desarrollo web.",
      content: "Los React Server Components representan un cambio paradigmático...",
      category: "Frontend",
      author: "Matías Guzmán",
      date: "2024-12-28",
      readTime: "10 min",
      image: "/img/blog/react-server-components.jpg",
      featured: false,
      views: 950,
      tags: ["React", "Next.js", "SSR", "Performance"]
    },
    {
      id: 5,
      title: "Implementando CI/CD con Docker y GitHub Actions",
      excerpt: "Automatiza tu flujo de desarrollo con pipelines de CI/CD robustos y escalables.",
      content: "La integración continua y el despliegue continuo son fundamentales...",
      category: "DevOps",
      author: "Matías Guzmán",
      date: "2024-12-20",
      readTime: "12 min",
      image: "/img/blog/cicd-docker.jpg",
      featured: false,
      views: 750,
      tags: ["CI/CD", "Docker", "GitHub Actions", "DevOps"]
    },
    {
      id: 6,
      title: "Análisis de malware: Técnicas y herramientas avanzadas",
      excerpt: "Aprende las técnicas fundamentales para el análisis estático y dinámico de malware.",
      content: "El análisis de malware es una disciplina crítica en ciberseguridad...",
      category: "Ciberseguridad",
      author: "Matías Guzmán",
      date: "2024-12-15",
      readTime: "18 min",
      image: "/img/blog/malware-analysis.jpg",
      featured: false,
      views: 1300,
      tags: ["Malware", "Reverse Engineering", "IDA Pro", "Wireshark"]
    },
    {
      id: 7,
      title: "Optimización de performance en aplicaciones Next.js",
      excerpt: "Técnicas avanzadas para mejorar la velocidad y experiencia de usuario en Next.js.",
      content: "La performance web es crucial para el éxito de cualquier aplicación...",
      category: "Frontend",
      author: "Matías Guzmán",
      date: "2024-12-10",
      readTime: "14 min",
      image: "/img/blog/nextjs-performance.jpg",
      featured: false,
      views: 680,
      tags: ["Next.js", "Performance", "Optimization", "Core Web Vitals"]
    },
    {
      id: 8,
      title: "Microservicios con Node.js: Arquitectura y mejores prácticas",
      excerpt: "Diseña y implementa arquitecturas de microservicios escalables con Node.js.",
      content: "Los microservicios han revolucionado la forma de desarrollar aplicaciones...",
      category: "Backend",
      author: "Matías Guzmán",
      date: "2024-12-05",
      readTime: "16 min",
      image: "/img/blog/microservices-nodejs.jpg",
      featured: false,
      views: 920,
      tags: ["Microservicios", "Node.js", "Docker", "Kubernetes"]
    }
  ]

  const categories = ["Todos", "Ciberseguridad", "Desarrollo", "Frontend", "Backend", "DevOps"]
  
  const popularTags = [
    "React", "Node.js", "Ciberseguridad", "Next.js", "API", "Docker", 
    "JavaScript", "TypeScript", "Python", "AWS", "DevOps", "Pentesting"
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const stats = [
    { label: "Artículos publicados", value: "50+" },
    { label: "Lectores mensuales", value: "10K+" },
    { label: "Países alcanzados", value: "25+" },
    { label: "Tiempo promedio de lectura", value: "12 min" }
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
                <span className="gradient-text">Blog Técnico</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                Artículos, tutoriales y reflexiones sobre desarrollo de software, ciberseguridad y tecnologías emergentes
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
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={itemFadeIn} className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar artículos, tecnologías o temas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-red-200 focus-visible:ring-red-500 dark:border-red-900/50"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-red-600 hover:bg-red-700" 
                      : "border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={itemFadeIn} className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Artículo destacado</h2>
            <p className="text-muted-foreground mt-2">Lo más leído de la semana</p>
          </motion.div>

          <motion.div variants={itemFadeIn} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto relative">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">Destacado</Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                        {featuredPost.category}
                      </Badge>
                      <h3 className="text-2xl font-bold leading-tight">{featuredPost.title}</h3>
                      <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString('es-ES')}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-red-200 dark:border-red-900/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="bg-red-600 hover:bg-red-700 button-hover" asChild>
                      <Link href={`/blog/${featuredPost.id}`}>
                        Leer artículo completo <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={itemFadeIn} className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold gradient-text">Últimos artículos</h2>
              <p className="text-muted-foreground mt-2">
                {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''} 
                {selectedCategory !== "Todos" && ` en ${selectedCategory}`}
                {searchTerm && ` que coinciden con "${searchTerm}"`}
              </p>
            </div>
            <Button variant="outline" asChild className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
              <Link href="/blog/rss">
                RSS Feed
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50 h-full">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-600 text-white text-xs">{post.category}</Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-xs">
                      {post.views} vistas
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div>
                        <h3 className="font-bold text-lg mb-2 leading-tight">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('es-ES')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag, j) => (
                          <Badge key={j} variant="outline" className="text-xs border-red-200 dark:border-red-900/50">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs border-red-200 dark:border-red-900/50">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-red-100 dark:border-red-900/50 mt-4">
                      <Button variant="outline" size="sm" className="w-full border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Leer más <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div variants={itemFadeIn} className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">No se encontraron artículos</h3>
              <p className="text-muted-foreground mb-4">
                No hay artículos que coincidan con tu búsqueda. Intenta con otros términos.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("")
                setSelectedCategory("Todos")
              }} className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                Limpiar filtros
              </Button>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Sidebar - Popular Tags */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Newsletter Signup */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="card-hover border-red-100 dark:border-red-900/50">
              <CardContent className="p-6">
                <div className="space-y-4 text-center">
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full inline-flex text-red-600">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">Newsletter Técnico</h3>
                  <p className="text-sm text-muted-foreground">
                    Recibe los mejores artículos y tutoriales directamente en tu inbox
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="tu@email.com" className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50" />
                    <Button className="w-full bg-red-600 hover:bg-red-700 button-hover">
                      Suscribirse
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Sin spam. Solo contenido de calidad.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Popular Tags */}
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
                    <Tag className="h-5 w-5 text-red-500" />
                    <h3 className="font-bold">Tags populares</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="cursor-pointer border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50"
                        onClick={() => setSearchTerm(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="card-hover border-red-100 dark:border-red-900/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="font-bold flex items-center gap-2">
                    <Clock className="h-5 w-5 text-red-500" />
                    Actividad reciente
                  </h3>
                  <div className="space-y-3">
                    {blogPosts.slice(0, 3).map((post, i) => (
                      <div key={i} className="text-sm">
                        <Link
                          href={`/blog/${post.id}`}
                          className="font-medium hover:text-red-600 transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(post.date).toLocaleDateString('es-ES')} • {post.views} vistas
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      </div>
    </PageLayout>
  )
}