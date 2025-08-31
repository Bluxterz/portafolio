import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matías Guzmán - Bluxterz | Desarrollador Full-Stack & Especialista en Ciberseguridad",
  description: "Desarrollador Full-Stack especializado en ciberseguridad, liderazgo técnico y creación de contenido. Soluciones modernas con React, Next.js y Node.js.",
  keywords: ["desarrollador", "ciberseguridad", "full-stack", "react", "next.js", "node.js", "chile"],
  authors: [{ name: "Matías Guzmán", url: "https://bluxterz.com" }],
  creator: "Matías Guzmán - Bluxterz",
  publisher: "Bluxterz",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://bluxterz.com",
    title: "Matías Guzmán - Bluxterz | Desarrollador Full-Stack",
    description: "Desarrollador Full-Stack especializado en ciberseguridad y soluciones tecnológicas modernas.",
    siteName: "Bluxterz Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Matías Guzmán - Bluxterz",
    description: "Desarrollador Full-Stack y especialista en ciberseguridad",
    creator: "@bluxterz"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="bluxterz-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
