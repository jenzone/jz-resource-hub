import Link from 'next/link'
import Image from 'next/image'

import { MenuBar } from './menu-bar'
import { ModeToggle } from './mode-toggle'
import { GithubIcon } from '@/lib/icons'

export function NavBar() {
  return (
    <div className="sticky left-0 top-0 z-10 flex h-[60px] w-full flex-row items-center justify-between backdrop-blur-sm">
      <Link href="/" className="text-lg font-bold">
        <Image
          src="/jzrh-logo-name.png"
          width={1290}
          height={720}
          alt="logo-name"
          className="h-[20px] w-auto invert dark:invert-0"
        />
      </Link>
      <div className="flex items-center justify-center space-x-4">
        <Link href="https://jz-resource-hub.vercel.app" target="_blank">
          <GithubIcon className="h-5 w-5" />
        </Link>
        <ModeToggle />
        <MenuBar />
      </div>
    </div>
  )
}
