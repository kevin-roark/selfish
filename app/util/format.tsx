export const slugify = (tag: string) => tag.replace(/ /g, '-')
export const deslug = (slug: string) => slug.replace(/-/g, ' ')

export const formatSortDate = (sortDate: string) => {
  const [year, month, day] = sortDate.split('-').map(Number)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return `${months[month - 1]} ${year}`
}
