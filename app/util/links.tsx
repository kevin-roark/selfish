import Link from 'next/link'

export const link = (link: string, text: string) => <Link href={link}>{text}</Link>

export const extlink = (link: string, text: string) => (
  <a href={link} target="_blank">
    {text}
  </a>
)
