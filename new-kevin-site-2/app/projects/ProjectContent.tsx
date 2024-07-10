import { TagListItem } from './TagListItem'

export interface ProjectData {
  title: string
  date?: string
  subtitle?: string
  sortDate?: string
  text?: string
  link?: string
  tags?: string[]
  images?: string[]
}

export function ProjectContent({ children, ...data }: ProjectData & { children?: React.ReactNode }) {
  let sortDate = data.sortDate;
    if (!sortDate) {
      const year = Number(data.date?.split(" ")[1]);
      sortDate = `${year}-01-01`;
    }

    const [year, month, day] = sortDate.split("-").map(Number);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${months[month - 1]} ${year}`;

  return (
    <div>
      <h3 className="text-4xl">
        {data.link ? <a href={data.link} target='_blank'>{data.title}</a> : data.title}
      </h3>
      {data.subtitle && <h4 className="text-xl">{data.subtitle}</h4>}
      <h5 className="text-lg mb-1">{data.date || formattedDate}</h5>

      {!!data.tags?.length && (
        <ul className="flex mb-2 space-x-2">
          {data.tags.map((tag) => <TagListItem key={tag} tag={tag} />)}
        </ul>
      )}
      
      {data.text && <p dangerouslySetInnerHTML={{ __html: data.text }} />}
      {children}

      {!!data.images?.length && (
        <p className="flex flex-wrap">
          {data.images.map((src) => (
          <a key={src} target="_blank" href={src}>
            <img src={`/${src}`} className="mb-2 mr-2 w-16 origin-top-left hover:scale-[10] hover:shadow-lg" />
          </a>
        ))}
        </p>
      )}
    </div>
  )
}