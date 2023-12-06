import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin Roark Monastary Website',
  description: 'Kevin Roark Jr is a Basketball Professional, Software Developer, Stupid Intellectual.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />

        <main className="layout-main-content">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
