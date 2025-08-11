import React from 'react'
import { REM } from 'next/font/google'
import './styles.css'

const rem = REM({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  description: 'Capital Real Estate',
  title: 'Capital Real Estate',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={rem.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
