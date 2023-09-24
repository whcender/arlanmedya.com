import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/page'
import { Providers } from '@/providers/nextui'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arlan Medya',
  description: 'Arlan Medya Ajansı Resmi Web Sitesi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-cabin `}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
