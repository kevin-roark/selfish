'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { slugify } from '@/app/util/format'

export function TagListItem({ tag, count }: { tag: string, count?: number }) {
  const pathname = usePathname()
  const tagLink = `/projects/${slugify(tag)}`
  const active = pathname === tagLink

  const styles = [
    'p-0.5 text-xs rounded font-semibold cursor-pointer transition-all',
    active ? `bg-[#f00] hover:bg-white hover:text-[#f00]` : 'bg-white text-[#00f] hover:bg-[#00f] hover:text-white',
  ].join(' ')

  return (
    <li className={styles}>
      <Link className="no-underline hover:bg-inherit" href={active ? '/projects' : tagLink}>
        {tag} {!!count && <span style={{ fontSize: '0.6rem' }}>{`(${count})`}</span>}      
      </Link>
    </li>
  )
}