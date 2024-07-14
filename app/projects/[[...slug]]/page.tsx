import { deslug } from '@/app/util/format'
import { cn } from '@/app/util/style'
import ProjectHighlights from '@/components/ProjectHighlights'
import Link from 'next/link'
import { ProjectContent } from '../ProjectContent'
import { TagListItem } from '../TagListItem'
import { projects as _projects, processProjectData } from '../projectsData'

export const metadata = {
  title: 'Projects',
  description: 'Kevin Roark Projects List',
}

const projects = _projects.map(processProjectData)

export default function Projects({ params }: { params: { slug?: string[] } }) {
  const slugs = params.slug || []
  const tags = slugs.map(deslug)
  const visibleProjects = slugs.length
    ? projects.filter((d) => (d.tags && d.tags.some((t) => tags.includes(t))) || (d.slug && slugs.includes(d.slug)))
    : projects
  const mode = visibleProjects.length > 1 ? 'list' : ('solo' as const)

  // group projects by year
  const byYear = visibleProjects.reduce((acc, project) => {
    const year = Number(project.sortDate.split('-')[0])
    return { ...acc, [year]: [...(acc[year] || []), project] }
  }, {} as Record<number, typeof projects>)
  const years = Object.keys(byYear).map(Number).sort().reverse()

  return (
    <div className="pb-8 pt-4 lg:pb-24">
      <h1 className="mb-4 pr-24 text-6xl md:mb-12">
        <Link href="/projects" className="no-underline">
          Kevin's Projects <div className="mt-2 text-xl md:mt-0 md:inline">Now And Then</div>
        </Link>
      </h1>

      {/* in solo mode, the content goes above the panel */}
      <div className={cn('flex flex-col gap-8', mode === 'solo' && 'flex-col-reverse')}>
        {/* highlights show wide next to fixed panel only in lg viewport */}
        <WideHighlights className="hidden pr-[148px] lg:block xl:hidden" />

        {/* panel */}
        <div
          className="flex flex-col gap-3 overflow-y-auto lg:fixed lg:right-1 lg:top-[116px] xl:right-3 2xl:flex-row-reverse"
          style={{ maxHeight: 'calc(100vh - 124px)' }}
        >
          <ProjectStyles />
          <ProjectHighlights
            className={cn(
              'xl:block xl:max-w-[330px] 2xl:max-w-[280px]',
              mode === 'solo' ? 'lg:hidden' : 'hidden md:block lg:hidden' // in list mode, we show highlights above content on medium screens
            )}
            listClassName="max-lg:flex-wrap max-lg:flex-row max-lg:text-base max-lg:leading-none max-lg:gap-2"
          />
        </div>

        <div className="space-y-12">
          {years.map((year) => {
            const projects = byYear[year]
            return (
              <div key={year} className="max-w-4xl">
                {mode === 'list' && <h2 className="border-b-1 mb-4 border-white text-6xl">{year}</h2>}
                <ul className="space-y-14">
                  {projects.map((project) => (
                    <li key={project.title}>
                      <ProjectContent {...project} mode={mode} />
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* in list mode on small screen, show wide highlights beneath the projects */}
        {mode !== 'solo' && <WideHighlights className="md:hidden" />}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return getAllTags().map((ct) => ({ slug: [ct.tag] }))
}

function getAllTags() {
  const countedTags: { tag: string; count: number }[] = []
  projects.forEach((d) => {
    d.tags?.forEach((t) => {
      const existing = countedTags.find((ct) => ct.tag === t)
      if (existing) {
        existing.count += 1
      } else {
        countedTags.push({ tag: t, count: 1 })
      }
    })
  })
  return countedTags.sort((a, b) => a.tag.localeCompare(b.tag))
}

function ProjectStyles() {
  return (
    <div>
      <h4 className="text-xl font-medium">Project Styles</h4>
      <ul className="flex flex-wrap gap-2 border-2 border-white p-1.5 lg:max-w-[132px] xl:max-w-[330px]">
        <TagListItem tag="All" count={projects.length} />
        {getAllTags().map((ct) => (
          <TagListItem key={ct.tag} {...ct} />
        ))}
      </ul>
    </div>
  )
}

function WideHighlights({ className }: { className?: string }) {
  return <ProjectHighlights className={className} listClassName="flex-wrap flex-row text-base leading-none gap-2" />
}
