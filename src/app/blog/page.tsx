"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Heart, Play, Eye, Users, Search, ArrowRight, Tag, TrendingUp, Zap, Star } from "lucide-react"
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

export default function ContentCreation() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const featuredContent = {
    id: 1,
    title: "Mi TikTok más viral: Gaming Fail épico",
    excerpt: "Este clip de gaming se volvió viral con más de 2M de views y me trajo miles de nuevos seguidores.",
    content: "Un momento épico de fail en stream que se convirtió en mi contenido más exitoso...",
    category: "TikTok Viral",
    platform: "TikTok",
    date: "2024-12-15",
    duration: "0:45",
    image: "/img/content/tiktok-viral.jpg",
    featured: true,
    views: 2100000,
    likes: 450000,
    shares: 89000,
    tags: ["Gaming", "Viral", "Humor", "Fail"]
  }

  const contentPosts = [
    {
      id: 2,
      title: "Colaboración con marca de periféricos gaming",
      excerpt: "Partnership pagado con una marca reconocida de hardware gaming para promocionar sus productos.",
      content: "Campaña de marketing integrada incluyendo streams, TikToks y posts en redes...",
      category: "Colaboración Pagada",
      platform: "Multi-plataforma",
      date: "2024-12-10",
      duration: "Campaña",
      image: "/img/content/gaming-collab.jpg",
      featured: false,
      views: 580000,
      likes: 125000,
      shares: 23000,
      tags: ["Gaming", "Colaboración", "Hardware", "Patrocinio"]
    },
    {
      id: 3,
      title: "Sketch cómico: \"El programador en cuarentena\"",
      excerpt: "Video sketch sobre las realidades del trabajo remoto que resonó con miles de developers.",
      content: "Un video divertido sobre los challenges del trabajo remoto durante la pandemia...",
      category: "Sketch",
      platform: "YouTube",
      date: "2024-11-20",
      duration: "3:24",
      image: "/img/content/sketch-dev.jpg",
      featured: false,
      views: 1200000,
      likes: 98000,
      shares: 45000,
      tags: ["Humor", "Programación", "Sketch", "Relatable"]
    },
    {
      id: 4,
      title: "Stream destacado: 12 horas de programación en vivo",
      excerpt: "Una maratón de desarrollo donde programé un juego completo desde cero con la audiencia.",
      content: "Un stream épico donde desarrollé un juego web completo con participación activa de la chat...",
      category: "Stream",
      platform: "Twitch",
      date: "2024-11-05",
      duration: "12:15:00",
      image: "/img/content/coding-marathon.jpg",
      featured: false,
      views: 25000,
      likes: 8500,
      shares: 1200,
      tags: ["Programación", "Twitch", "Juego", "Educativo"]
    },
    {
      id: 5,
      title: "Colaboración con marca de bebidas energéticas",
      excerpt: "Partnership exclusivo para promocionar nueva línea gaming de bebida energética.",
      content: "Campaña integral incluyendo producto placement en streams y contenido dedicado...",
      category: "Colaboración Pagada",
      platform: "Multi-plataforma",
      date: "2024-10-15",
      duration: "Campaña",
      image: "/img/content/energy-drink-collab.jpg",
      featured: false,
      views: 890000,
      likes: 156000,
      shares: 34000,
      tags: ["Patrocinio", "Gaming", "Bebidas", "Lifestyle"]
    },
    {
      id: 6,
      title: "TikTok viral: \"Cómo reacciona un dev al código legacy\"",
      excerpt: "Mi reacción auténtica viendo código antiguo se volvió viral en toda la comunidad tech.",
      content: "Un momento genuino de shock al revisar código legacy que resonó con developers...",
      category: "TikTok Viral",
      platform: "TikTok",
      date: "2024-09-28",
      duration: "0:35",
      image: "/img/content/legacy-code-tiktok.jpg",
      featured: false,
      views: 1800000,
      likes: 320000,
      shares: 67000,
      tags: ["Programación", "Humor", "Developer", "Legacy"]
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
      title: "Collab con marca de sillas gaming",
      excerpt: "Partnership pagado con marca líder en mobiliario gaming para mostrar su nueva línea.",
      content: "Colaboración integral incluyendo review honesto, streams usando el producto y descuentos...",
      category: "Colaboración Pagada",
      platform: "Multi-plataforma",
      date: "2024-07-10",
      duration: "Campaña",
      image: "/img/content/gaming-chair-collab.jpg",
      featured: false,
      views: 720000,
      likes: 134000,
      shares: 28000,
      tags: ["Gaming", "Setup", "Review", "Ergonómico"]
    }
  ]

  const categories = ["Todos", "TikTok Viral", "Colaboración Pagada", "Stream", "Sketch", "Instagram Series"]
  
  const popularTags = [
    "Gaming", "Humor", "Viral", "Colaboración", "Patrocinio", "Twitch", 
    "TikTok", "Instagram", "Programación", "Sketch", "Stream", "Behind-scenes"
  ]

  const filteredPosts = contentPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const stats = [
    { label: "Contenidos creados", value: "500+" },
    { label: "Seguidores totales", value: "150K+" },
    { label: "Views mensuales", value: "2M+" },
    { label: "Colaboraciones realizadas", value: "25+" }
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
                <span className="gradient-text">Creación de Contenido</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                TikToks virales, colaboraciones pagadas con marcas y contenido de entretenimiento que conecta con miles de seguidores
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
                  placeholder="Buscar contenido, colaboraciones o plataformas..."
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
            <h2 className="text-3xl font-bold gradient-text">Contenido destacado</h2>
            <p className="text-muted-foreground mt-2">Lo más viral del mes</p>
          </motion.div>

          <motion.div variants={itemFadeIn} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto relative">
                  <Image
                    src={featuredContent.image}
                    alt={featuredContent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">Viral</Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <Eye className="inline h-4 w-4 mr-1" />
                    {(featuredContent.views / 1000000).toFixed(1)}M
                  </div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Badge variant="outline" className="border-red-200 dark:border-red-900/50">
                        {featuredContent.category}
                      </Badge>
                      <h3 className="text-2xl font-bold leading-tight">{featuredContent.title}</h3>
                      <p className="text-muted-foreground">{featuredContent.excerpt}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        {featuredContent.platform}
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        {(featuredContent.likes / 1000).toFixed(0)}K likes
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {(featuredContent.shares / 1000).toFixed(0)}K shares
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredContent.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-red-200 dark:border-red-900/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="bg-red-600 hover:bg-red-700 button-hover" asChild>
                      <Link href={`/blog/${featuredContent.id}`}>
                        Ver contenido completo <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl font-bold gradient-text">Último contenido</h2>
              <p className="text-muted-foreground mt-2">
                {filteredPosts.length} contenido{filteredPosts.length !== 1 ? 's' : ''} 
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
                      <Eye className="inline h-3 w-3 mr-1" />
                      {post.views >= 1000000 ? `${(post.views / 1000000).toFixed(1)}M` : `${(post.views / 1000).toFixed(0)}K`}
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
                          <Play className="h-3 w-3" />
                          {post.platform}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {(post.likes ?? 0) >= 1000000 ? `${((post.likes ?? 0) / 1000000).toFixed(1)}M` : `${((post.likes ?? 0) / 1000).toFixed(0)}K`}
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
                          Ver contenido <ArrowRight className="ml-2 h-3 w-3" />
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
              <h3 className="text-xl font-bold mb-2">No se encontró contenido</h3>
              <p className="text-muted-foreground mb-4">
                No hay contenido que coincida con tu búsqueda. Intenta con otros términos.
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
                  <h3 className="font-bold text-lg">Notificaciones de contenido</h3>
                  <p className="text-sm text-muted-foreground">
                    Sé el primero en ver mis nuevos TikToks, streams y colaboraciones
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="tu@email.com" className="border-red-200 focus-visible:ring-red-500 dark:border-red-900/50" />
                    <Button className="w-full bg-red-600 hover:bg-red-700 button-hover">
                      Activar notificaciones
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Solo el mejor contenido. Sin spam.
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
                    <Zap className="h-5 w-5 text-red-500" />
                    Contenido reciente
                  </h3>
                  <div className="space-y-3">
                    {contentPosts.slice(0, 3).map((post, i) => (
                      <div key={i} className="text-sm">
                        <Link
                          href={`/blog/${post.id}`}
                          className="font-medium hover:text-red-600 transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(post.date).toLocaleDateString('es-ES')} • {post.views >= 1000000 ? `${(post.views / 1000000).toFixed(1)}M` : `${(post.views / 1000).toFixed(0)}K`} views
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

      {/* Trusted Brands Section */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={itemFadeIn} className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Marcas que confían en mí</h2>
            <p className="text-muted-foreground mt-2">Colaboraciones exitosas con marcas reconocidas</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                name: "GameTech Pro",
                category: "Periféricos Gaming",
                collaboration: "Campaña de 6 meses",
                logo: "/img/brands/gametech.jpg"
              },
              {
                name: "Energy Boost",
                category: "Bebidas Energéticas",
                collaboration: "Partnership exclusivo",
                logo: "/img/brands/energyboost.jpg"
              },
              {
                name: "ErgoChair Plus",
                category: "Mobiliario Gaming",
                collaboration: "Embajador de marca",
                logo: "/img/brands/ergochair.jpg"
              },
              {
                name: "StreamGear",
                category: "Equipos de Streaming",
                collaboration: "Colaboración pagada",
                logo: "/img/brands/streamgear.jpg"
              }
            ].map((brand, i) => (
              <motion.div key={i} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="card-hover border-red-100 dark:border-red-900/50 text-center">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full inline-flex">
                        <Star className="h-8 w-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{brand.name}</h3>
                        <p className="text-sm text-muted-foreground">{brand.category}</p>
                        <Badge className="mt-2 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                          {brand.collaboration}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemFadeIn} className="text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Interesado en una colaboración? Contáctame para explorar cómo podemos crear contenido auténtico que conecte con mi audiencia y genere resultados reales para tu marca.
            </p>
            <Button className="mt-6 bg-red-600 hover:bg-red-700 button-hover" asChild>
              <Link href="/contacto">
                Colaborar conmigo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
      </div>
    </PageLayout>
  )
}