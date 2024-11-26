import type { Metadata } from 'next'

import { resources } from '@/data'
import { ResourceCard } from '@/components/resource-card'

interface IResourceSearchPage {
  searchParams: Promise<{ q: string }>
}

export async function generateMetadata({
  searchParams,
}: IResourceSearchPage): Promise<Metadata> {
  const { q } = await searchParams

  const query = q.toUpperCase()

  return {
    title: query,
  }
}

export default async function ResourceSearchPage({
  searchParams,
}: IResourceSearchPage) {
  resources.sort((a, b) => a.name.localeCompare(b.name))

  const { q } = await searchParams

  const query = q.toLowerCase()

  const filterdResources = resources.filter(
    (resource) =>
      resource.name.toLowerCase().includes(query) ||
      resource.categories.some((category) =>
        category.toLowerCase().includes(query),
      ) ||
      resource.description.toLowerCase().includes(query),
  )

  return (
    <div className="w-full space-y-8 lg:px-20">
      <div className="text-2xl font-bold uppercase">{`${query} (${filterdResources.length})`}</div>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {filterdResources.map((resource, index) => {
          return (
            <div key={index}>
              <ResourceCard
                name={resource.name}
                description={resource.description}
                url={resource.url}
                cat={resource.categories}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
