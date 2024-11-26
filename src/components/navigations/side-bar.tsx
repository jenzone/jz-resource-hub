'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { categories } from '@/data/categories'
import { Search } from '@/components/search'

export function SideBar() {
  const path = usePathname()

  return (
    <div className="fixed hidden space-y-8 lg:block">
      <Search />
      <div className="space-y-2">
        <Link
          href={`/`}
          className={`${path === '/' && 'text-primary'} flex w-full py-1 text-muted-foreground transition-colors duration-200 hover:text-primary`}
        >
          All Resources
        </Link>
        <div className="font-bold uppercase">Categories</div>
        <div
          className="max-h-screen overflow-y-auto text-muted-foreground"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/${category.slug}`}
              className={`${path.includes(category.slug) && 'text-primary'} flex w-full py-1 transition-colors duration-200 hover:text-primary`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
