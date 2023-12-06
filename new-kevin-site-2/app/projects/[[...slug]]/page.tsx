import type { Metadata } from 'next'
import { getOldProjectsData as getProjectsData } from './projectsData'
import { deslug } from '@/app/util/format'
import ProjectListItem from './projectListItem'
import TagListItem from './tagListItem'

export const metadata: Metadata = {
  title: 'Projects | Kevin Roark Monastary Website',
  description: 'Kevin Roark Projects List',
}

const projectsData = getProjectsData()

export default function Projects({ params }: { params: { slug?: string[] } }) {
  const tags = (params.slug || []).map(deslug)
  const visibleProjects = tags.length ? projectsData.filter((d) => (d.tags || []).some((t) => tags.includes(t))) : projectsData
  const countedTags = getAllTags()

  // group projects by year
  const byYear = visibleProjects.reduce((acc, project) => {
    const year = Number(project.sortDate.split('-')[0])
    return { ...acc, [year]: [...(acc[year] || []), project] }
  }, {} as Record<number, typeof projectsData>)
  const years = Object.keys(byYear).map(Number).sort().reverse()

  return (
    <div>
      <h1 className="text-6xl mb-12">
        Kevin's Projects <span className="text-xl">Now And Then</span>
      </h1>

      <div className="max-xl:mb-12 xl:fixed xl:top-[116px] xl:right-3">
        <h4 className="text-lg font-medium">Project Styles</h4>
        <ul className="flex flex-wrap [&>li]:m-1 border-2 border-white max-w-md">
          {countedTags.map((ct) => (
            <TagListItem key={ct.tag} {...ct} />
          ))}
        </ul>
      </div>

      {years.map((year) => {
        const projects = byYear[year]
        return (
          <div key={year} className="mb-48 max-w-4xl">
            <h2 className="text-9xl border-b-2 border-white mb-4">{year}</h2>
            <ul className="space-y-24">
              {projects.map((project) => (
                <ProjectListItem key={project.title} data={project} />
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export async function generateStaticParams() {
  return getAllTags().map((ct) => ({ slug: [ct.tag] }))
}

function getAllTags() {
  const countedTags: { tag: string; count: number }[] = []
  projectsData.forEach((d) => {
    (d.tags || []).forEach((t) => {
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
