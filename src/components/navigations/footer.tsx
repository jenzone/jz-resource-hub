import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex w-full flex-col items-end py-8 text-sm">
      <div>JZ RESOURCES HUB</div>
      <div>
        <span className="text-muted-foreground">Website and Resources by</span>{' '}
        <Link href="https://github.com/jenzone" target="_blank">
          @Jenzone
        </Link>
      </div>
    </div>
  )
}
