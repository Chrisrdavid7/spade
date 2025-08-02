import { useHead } from '@vueuse/head'

interface SeoOptions {
  title: string
  description: string
  ogImage?: string
  canonical: string
}

export function useSeo({ title, description, ogImage, canonical }: SeoOptions) {
  useHead({
    title,
    meta: [
      { name: 'description', content: description },

      /* Open Graph (works for Facebook, LinkedIn, iMessage, etc.) */
      { property: 'og:type',  content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      ogImage && { property: 'og:image', content: ogImage }
    ].filter(Boolean),

    link: [
      { rel: 'canonical', href: canonical }
    ]
  })
}
