'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Search } from '../search'
import { categories } from '@/data/categories'
import { MenuIcon, CloseIcon } from '@/lib/icons'

export function MenuBar() {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.body.classList[isOpen ? 'add' : 'remove']('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div>
      <button onClick={toggleMenu} className="block lg:hidden">
        {!isOpen && <MenuIcon className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div className="fixed left-0 top-0 h-screen w-full space-y-8 rounded-lg border border-border bg-background p-8 shadow">
          <button onClick={toggleMenu} className="absolute right-8 top-8">
            {isOpen && <CloseIcon className="h-5 w-5" />}
          </button>
          <Search />
          <div className="space-y-2">
            <Link
              href={`/`}
              className={`${path === '/' && 'text-primary'} flex w-full py-1 text-muted-foreground transition-colors duration-200 hover:text-primary`}
              onClick={toggleMenu}
            >
              All Resources
            </Link>
            <div className="font-bold uppercase">Categories</div>
            <div className="text-muted-foreground">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/${category.slug}`}
                  className={`${path.includes(category.slug) && 'text-primary'} flex w-full py-1 transition-colors duration-200 hover:text-primary`}
                  onClick={toggleMenu}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
