import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ResourceCard } from '@/components/resource-card'

import { categories, resources } from '@/data'

interface IGenerateMetadata {
  params: { category: string }
}

export async function generateMetadata({
  params,
}: IGenerateMetadata): Promise<Metadata> {
  const { category } = await params

  const categoryName = categories.find((cat) => cat.slug === category)?.name

  return {
    title: categoryName,
  }
}

export default async function ResourcePage({
  params,
}: {
  params: { category: string }
}) {
  resources.sort((a, b) => a.name.localeCompare(b.name))

  const { category } = await params

  const resourcesList = resources.filter((resource) =>
    resource.categories.includes(category),
  )

  if (!resourcesList) {
    notFound()
  }

  const categoryName = categories.find((cat) => cat.slug === category)?.name

  return (
    <div className="w-full space-y-8 lg:px-20">
      <div className="text-2xl font-bold uppercase">{`${categoryName} (${resourcesList.length})`}</div>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {resourcesList.map((resource, index) => {
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
