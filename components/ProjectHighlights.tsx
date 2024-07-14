import { link } from '@/app/util/links'
import { cn } from '@/app/util/style'

export default function ProjectHighlights({
  className,
  listClassName,
}: {
  className?: string
  listClassName?: string
}) {
  return (
    <div className={className}>
      <h2 className="text-xl font-medium">Project Highlights</h2>
      <ul className={cn('flex flex-col gap-1.5 border-2 border-white p-1.5 text-lg leading-6', listClassName)}>
        <li>{link('/projects/wendy', "Wendy's Wok World Karaoke")}</li>
        <li>{link('/projects/cajun-hooper', 'Cajun Hooper')}</li>
        <li>{link('/projects/rodeo-hollywood', "Cory Arcangel's /roʊˈdeɪoʊ/ Let's Play: HOLLYWOOD")}</li>
        <li>
          {link('/projects/Mister-Shane', 'Mister Shane')}: {link('/projects/second-shane', 'Second Shane')} |{' '}
          {link('/projects/content-volume-one', 'Content: Volume One')} | {link('/projects/Dog-Shadow', 'Dog Shadow')} |{' '}
          {link('/projects/mister-shane-thought-blog', 'Thought Blog')}
        </li>
        <li>
          {link('/projects/Pleasure-Seeker', 'Pleasure Seeker')}:{' '}
          {link('/projects/from-tony-rontinos', "From Tony Rontino's")} | {link('/projects/clap', 'Clap')}
        </li>
        <li>{link('/projects/its-coming-a-storm', "It's Coming a Storm Show @ Harvestworks")}</li>
        <li>{link('/projects/nextjs', 'Very Early Next.js')}</li>
        <li>{link('/projects/socketio', 'Socket.IO 1.0')}</li>
        <li>{link('/projects/artguide', 'Artforum Artguide')}</li>
        <li>{link('/projects/vsco', 'VSCO')}</li>
        <li>{link('/projects/nasa', 'Stennis Space Center')}</li>
      </ul>
    </div>
  )
}
