import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Heavysudo | Portfolio',
    template: 'Heavysudo | Portfolio',
  },
  description: 'The Collective works of the Individual known as Heavy.',
  keywords: [
    'portfolio',
    'web development',
    'software engineering',
    'photography',
    'blog',
  ],
  authors: [{ name: 'Christopher-Lee Santos' }],
  creator: 'Heavysudo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heavysudo.com/',
    siteName: 'Heavysudo Portfolio',
    title: 'Heavysudo | Portfolio',
    description: 'The Collective works of the Individual known as Heavy.',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} w-screen h-screen`}>
          <Navigation />
          <main className='p-2 h-full w-full'>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
