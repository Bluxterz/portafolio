"use client"

import { Header } from "@/src/components/custom/Header"

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  )
}