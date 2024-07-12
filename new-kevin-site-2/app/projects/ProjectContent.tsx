'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { formatSortDate } from '../util/format'
import { extlink } from '../util/links'
import { cn } from '../util/style'
import { TagListItem } from './TagListItem'
import { ProjectData, processProjectData } from './projectsData'

export function ProjectContent({
  children,
  mode = 'list',
  ...rawData
}: ProjectData & { children?: React.ReactNode; mode?: 'solo' | 'list' }) {
  const pathname = usePathname()
  const data = processProjectData(rawData)
  const formattedDate = formatSortDate(data.sortDate)
  const peramlink = data.slug ? `/projects/${data.slug}` : null

  return (
    <div>
      <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center md:gap-4">
        <h3 className="text-4xl">{data.link ? extlink(data.link, data.title) : data.title}</h3>

        <div className="flex flex-none flex-wrap items-center gap-2">
          {peramlink && pathname !== peramlink && (
            <Link href={peramlink} className="text-sm font-bold no-underline">
              Permalink
            </Link>
          )}
          <div className="text-base">{data.date || formattedDate}</div>

          {!!data.tags?.length && (
            <ul className="flex gap-2">
              {data.tags.map((tag) => (
                <TagListItem key={tag} tag={tag} />
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="max-w-4xl text-base [&_p]:mb-3">
        {data.content}
        {data.text && <p dangerouslySetInnerHTML={{ __html: data.text }} />}
        {children}
      </div>

      {!!data.images?.length && (
        <p className="flex flex-wrap gap-2">
          {data.images.map((src) => (
            <a key={src} target="_blank" href={`/${src}`}>
              <img
                src={`/${src}`}
                className={cn(
                  'origin-top-left hover:shadow-lg',
                  mode === 'list' ? 'w-16 hover:scale-[8]' : 'w-64 hover:scale-[2]'
                )}
              />
            </a>
          ))}
        </p>
      )}
    </div>
  )
}
