'use client'

import { cn } from '@/app/util/style'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const navLinks = [
    { title: 'About', to: '/' },
    { title: 'Projects', to: '/projects' },
    // { title: 'Link Knots', to: '/links' },
    // { title: 'Photos', to: '/photos' },
    { title: 'Contact', to: '/contact' },
  ]

  return (
    <nav className="fixed right-0 top-0 z-10 px-4 py-2">
      <ol className="text-right">
        {navLinks.map((link) => {
          const active = (link.to === '/' && pathname === '/') || link.to === '/' + pathname.split('/')[1]
          return (
            <li key={link.title} className={cn('text-xl font-bold transition-all')}>
              <Link
                href={link.to}
                className={cn('px-1 no-underline', active && 'bg-white text-black hover:bg-black hover:text-white')}
              >
                {link.title}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
