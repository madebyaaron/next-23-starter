import "./globals.css"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: [`latin`] })

export const metadata: Metadata = {
  title: `Default page title`,
  description: ``,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
