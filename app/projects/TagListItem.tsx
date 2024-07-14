'use client'

import { slugify } from '@/app/util/format'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../util/style'

export function TagListItem({ tag, count }: { tag: string; count?: number }) {
  const pathname = usePathname()
  const tagLink = tag === 'All' ? '/projects' : `/projects/${slugify(tag)}`
  const active = tag !== 'All' && pathname === tagLink

  return (
    <li>
      <Link
        className={cn(
          'flex items-center rounded p-0.5 text-xs font-semibold no-underline transition-all',
          active
            ? 'bg-black text-[#f00] hover:bg-[#f00] hover:text-black'
            : 'bg-white text-[#00f] hover:bg-[#00f] hover:text-white'
        )}
        href={active ? '/projects' : tagLink}
      >
        {tag} {!!count && <span className="ml-1" style={{ fontSize: '0.6rem' }}>{`(${count})`}</span>}
      </Link>
    </li>
  )
}
