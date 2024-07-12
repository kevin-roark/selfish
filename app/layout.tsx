import { cn } from '@/app/util/style'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import type { Metadata } from 'next'
import './globals.css'
import { fontMono, fontSans } from './util/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | Kevin Roark Monastic Website',
    default: 'Kevin Roark Monastic Website',
  },
  description: 'Kevin Roark is an NYC-based computer user.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable, fontMono.variable)}>
        <Nav />
        <main className="min-h-[calc(100vh-140px)] px-4 md:min-h-[calc(100vh-72px)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
