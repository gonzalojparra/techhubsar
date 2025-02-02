import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { DarkModeToggle } from "@/components/DarkModeToggle"
import GitHubLink from "@/components/GitHubLink"
import Footer from "@/components/Footer"
import Link from "next/link"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TechHubsAr",
  description: "Tech Communities in Argentina",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <header className="border-b border-border">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tech-gradient">
                  TechHubsAr
                </Link>
                <nav className="space-x-4">
                  <Link href="/communities" className="hover:text-primary transition-colors">
                    Communities
                  </Link>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center space-x-2">
                  <GitHubLink />
                  {/* <DarkModeToggle /> */}
                </div>
              </div>
            </header>
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

