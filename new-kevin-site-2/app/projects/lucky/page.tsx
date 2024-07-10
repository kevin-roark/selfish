import { ProjectContent, ProjectData } from '../ProjectContent'

export const projectData = {
  link: "https://mistershane.bandcamp.com/album/lucky",
  title: "Lucky",
  date: "April 2018",
  sortDate: "2018-04-15",
  tags: ['Mister Shane', 'Sound'],
  images: ["images/mister-shane-lucky.jpg"],
} satisfies ProjectData

export default function Page() {
  return (
    <ProjectContent {...projectData}>
      <p>"How could it happen to me?"</p>
      <p>Mister Shane 4 song EP, 4/20/18.</p>
      <p>"The Dig" video available <a href="https://www.youtube.com/watch?v=vRqmYh3MJWI" target="_blank">here</a>.`</p>
    </ProjectContent>
  )
}