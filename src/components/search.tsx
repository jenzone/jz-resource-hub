'use client'

import { useState } from 'react'

import { SearchIcon } from '@/lib/icons'

export function Search() {
  const [query, setQuery] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (query.trim() === '') {
        window.location.href = '/'
      } else {
        window.location.href = `/search?q=${query}`
      }
    }
  }

  return (
    <div className="relative">
      <input
        placeholder="Search"
        className="max-w-[220px] rounded-md border border-input p-2 pl-8 outline-none ring-ring focus:ring-1"
        value={query}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon className="absolute left-0 top-0 ml-2 mt-2.5 h-5 w-5 text-muted-foreground" />
    </div>
  )
}
