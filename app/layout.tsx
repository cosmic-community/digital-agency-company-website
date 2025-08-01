import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Agency - Web Development, Design & Marketing',
  description: 'Professional digital agency offering web development, UI/UX design, and digital marketing services. Transform your business with our expert team.',
  keywords: 'digital agency, web development, UI/UX design, digital marketing, web design',
  openGraph: {
    title: 'Digital Agency - Web Development, Design & Marketing',
    description: 'Professional digital agency offering web development, UI/UX design, and digital marketing services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}