import type { Project } from './projectsData'
import TagListItem from './tagListItem'

export default function ProjectListItem({ data }: { data: Project }) {
  return (
    <li>
      <h3 className="text-4xl">
        {data.link ? <a href={data.link} target='_blank'>{data.title}</a> : data.title}
      </h3>
      {data.subtitle && <h4 className="text-xl">{data.subtitle}</h4>}
      <h5 className="text-lg mb-1">{data.date || data.formattedDate}</h5>

      {!!data.tags?.length && (
        <ul className="flex mb-2 space-x-2">
          {data.tags.map((tag) => <TagListItem key={tag} tag={tag} />)}
        </ul>
      )}
      
      <p dangerouslySetInnerHTML={{ __html: data.text }} />

      {!!data.images?.length && (
        <p className="flex flex-wrap">
          {data.images.map((src) => (
          <a key={src} target="_blank" href={src}>
            <img src={`/${src}`} className="mb-2 mr-2 w-16 origin-top-left hover:scale-[10] hover:shadow-lg" />
          </a>
        ))}
        </p>
      )}
    </li>
  )
}