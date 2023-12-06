
export const slugify = (tag: string) => tag.replace(/ /g, '-')
export const deslug = (slug: string) => slug.replace(/-/g, ' ')