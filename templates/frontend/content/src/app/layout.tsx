import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PFL ',
  description: 'meta data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // throw new Error('Error')
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
