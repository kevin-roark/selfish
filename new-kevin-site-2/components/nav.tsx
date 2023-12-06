'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
  const pathname = usePathname()
  console.log(pathname, pathname.split('/')[1])

  const navLinks = [
    { title: 'About', to: '/' },
    { title: 'Projects', to: '/projects' },
    // { title: 'Link Knots', to: '/links' },
    { title: 'Photos', to: '/photos' },
  ]

  return (
    <nav className="fixed top-0 right-0 z-10 py-2 px-4">
      <ol className="text-right">
        {navLinks.map((link) => {
          const active = (link.to === '/' && pathname === '/') || (link.to === '/' + pathname.split('/')[1])
          return (
            <li key={link.title} className={"font-bold text-xl " + (active ? 'text-[#f00] hover:text-red-900' : '')}>
              <Link href={link.to} className="no-underline">
                {link.title}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}