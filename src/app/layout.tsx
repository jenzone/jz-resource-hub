import type { Metadata } from 'next'
import './globals.css'

import { Container } from '@/components/container'
import { NavBar } from '@/components/navigations/nav-bar'
import { SideBar } from '@/components/navigations/side-bar'

import { ThemeProvider } from '@/providers/theme-provider'
import { fontSans } from '@/lib/fonts'
import { Footer } from '@/components/navigations/footer'

export const metadata: Metadata = {
  title: {
    template: '%s | JZ Resource Hub',
    default: 'JZ Resource Hub',
  },
  description:
    "Resource Hub by @Jenzone. A personal collection of tools, resources, guides and links to enhance productivity and streamline workflows. It's a one-stop hub for everything I use to stay organized, efficient, and continuously learning.",
  keywords: ['jzrh', 'resource', 'jenzone'],
  icons: {
    icon: '/jzrh-logo-filled.svg',
    apple: '/jzrh-logo-filled.svg',
  },
  metadataBase: new URL('https://jz-resource-hub.vercel.app'),
  openGraph: {
    title: 'JZ Resource Hub',
    description:
      "Resource Hub by @Jenzone. A personal collection of tools, resources, guides and links to enhance productivity and streamline workflows. It's a one-stop hub for everything I use to stay organized, efficient, and continuously learning.",
    type: 'website',
    url: 'https://jz-resource-hub.vercel.app',
    images: [
      {
        url: '/jzrh-meta.png',
        width: 800,
        height: 600,
        alt: 'JZ Resouce Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JZ Resource Hub',
    description:
      "Resource Hub by @Jenzone. A personal collection of tools, resources, guides and links to enhance productivity and streamline workflows. It's a one-stop hub for everything I use to stay organized, efficient, and continuously learning.",
    images: ['/jzrh-meta.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/jzrh-logo-filled.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </head>
      <body className={`${fontSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <main>
              <NavBar />
              <div className="relative flex py-4 pt-[40px]">
                <SideBar />
                <div className="space-y-40 lg:ml-[200px]">
                  <div>{children}</div>
                  <Footer />
                </div>
              </div>
            </main>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
