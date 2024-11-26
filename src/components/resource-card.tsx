import Link from 'next/link'
import Image from 'next/image'
import { useMemo } from 'react'

import { categories } from '@/data/categories'

interface IResourceCard {
  name: string
  description: string
  cat: string[]
  url: string
}

export function ResourceCard({ name, description, cat, url }: IResourceCard) {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${url}&sz=256`

  // map of slugs to names for quick lookup
  const slugToNameMap = useMemo(
    () => new Map(categories.map((cat) => [cat.slug, cat.name])),
    [],
  )

  // filter and map the categories
  const filteredCategories = cat
    .filter((cat) => slugToNameMap.has(cat))
    .map((cat) => slugToNameMap.get(cat))
    .join(' / ')

  return (
    <Link href={url} target="_blank">
      <div className="max-w-[350px] cursor-pointer space-y-2 rounded-lg border border-border p-4 shadow transition-colors duration-300 ease-in-out hover:bg-accent dark:border-border">
        <div className="space-y-2">
          <div className="flex flex-row items-center justify-between space-x-4">
            <div>
              <div className="text-lg font-semibold">{name}</div>
              <div className="text-xs uppercase text-muted-foreground">
                {filteredCategories || 'No Categories'}
              </div>
            </div>
            <Image
              src={faviconUrl}
              alt={`${name} favicon`}
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {description.length > 60
            ? `${description.substring(0, 60)}...`
            : description}
        </div>
      </div>
    </Link>
  )
}
