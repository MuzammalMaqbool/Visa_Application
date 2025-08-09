import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trusted Visa Help',
  description: 'Your Trusted Partner for a Smooth Visa Journey',
  generator: 'Trusted Visa Help',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
