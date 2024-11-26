import { Metadata } from 'next'
import { ResourceCard } from '@/components/resource-card'

import { resources } from '@/data'

export const metadata: Metadata = {
  title: 'All Resources',
}

export default function Home() {
  resources.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="w-full space-y-8 lg:px-20">
      <div className="text-2xl font-bold uppercase">{`All Resources (${resources.length})`}</div>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource, index) => {
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
