"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye, ThumbsUp, MessageCircle } from "lucide-react"
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

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  featured: boolean
  views: number
  likes: number
  comments: number
  tags: string[]
}

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const relatedPosts = [
    {
      id: 2,
      title: "Mejores prácticas para el desarrollo de APIs REST",
      category: "Desarrollo",
      readTime: "8 min",
      image: "/img/blog/api-best-practices.jpg"
    },
    {
      id: 3,
      title: "Pentesting de aplicaciones web: Guía para principiantes",
      category: "Ciberseguridad", 
      readTime: "15 min",
      image: "/img/blog/web-pentesting.jpg"
    }
  ]

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white dark:from-red-950/10 dark:to-background">
      {/* Header */}
      <section className="py-8 container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Button variant="outline" asChild className="mb-6 border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Article Header */}
      <section className="py-8 container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div variants={itemFadeIn} className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-red-600 text-white">{post.category}</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            </div>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-red-100 dark:border-red-900/50 pb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {post.views} vistas
              </div>
            </div>

            {/* Social actions */}
            <div className="flex items-center gap-4">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 button-hover">
                <ThumbsUp className="mr-2 h-4 w-4" />
                {post.likes} Me gusta
              </Button>
              <Button variant="outline" size="sm" className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                <MessageCircle className="mr-2 h-4 w-4" />
                {post.comments} Comentarios
              </Button>
              <Button variant="outline" size="sm" className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                <Share2 className="mr-2 h-4 w-4" />
                Compartir
              </Button>
              <Button variant="outline" size="sm" className="border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div variants={itemFadeIn} className="relative aspect-[2/1] rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="border-red-100 dark:border-red-900/50">
                <CardContent className="p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:gradient-text prose-a:text-red-600 hover:prose-a:text-red-700 prose-code:bg-red-50 dark:prose-code:bg-red-950/20 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-red-50 dark:prose-pre:bg-red-950/20 prose-pre:border prose-pre:border-red-100 dark:prose-pre:border-red-900/50">
                    <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
                  </div>
                  
                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-red-100 dark:border-red-900/50">
                    <h4 className="font-bold mb-4">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="border-red-200 dark:border-red-900/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Table of Contents */}
              <Card className="card-hover border-red-100 dark:border-red-900/50">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Contenido</h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#fundamentos-jwt" className="block text-muted-foreground hover:text-red-600 transition-colors">
                      Fundamentos de JWT
                    </a>
                    <a href="#implementacion-practica" className="block text-muted-foreground hover:text-red-600 transition-colors">
                      Implementación práctica
                    </a>
                    <a href="#oauth-2" className="block text-muted-foreground hover:text-red-600 transition-colors">
                      OAuth 2.0
                    </a>
                    <a href="#mejores-practicas" className="block text-muted-foreground hover:text-red-600 transition-colors">
                      Mejores prácticas
                    </a>
                    <a href="#consideraciones" className="block text-muted-foreground hover:text-red-600 transition-colors">
                      Consideraciones adicionales
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Author Info */}
              <Card className="card-hover border-red-100 dark:border-red-900/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src="/img/foto.jpg"
                          alt="Matías Guzmán"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Matías Guzmán</h4>
                        <p className="text-sm text-muted-foreground">Autor</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ingeniero en Informática especializado en ciberseguridad y desarrollo full-stack.
                    </p>
                    <Button size="sm" className="w-full bg-red-600 hover:bg-red-700" asChild>
                      <Link href="/sobre-mi">Ver perfil completo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Share */}
              <Card className="card-hover border-red-100 dark:border-red-900/50">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Compartir artículo</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start border-red-200 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/50">
                      Facebook
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Posts */}
      <section className="py-16 container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div variants={itemFadeIn}>
            <h2 className="text-3xl font-bold gradient-text">Artículos relacionados</h2>
            <p className="text-muted-foreground mt-2">Te pueden interesar estos otros artículos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <motion.div key={relatedPost.id} variants={itemFadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden card-hover border-red-100 dark:border-red-900/50">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-600 text-white text-xs">{relatedPost.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg leading-tight">{relatedPost.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {relatedPost.readTime}
                      </div>
                      <Button size="sm" className="w-full bg-red-600 hover:bg-red-700" asChild>
                        <Link href={`/blog/${relatedPost.id}`}>
                          Leer artículo
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
      </div>
    </PageLayout>
  )
}