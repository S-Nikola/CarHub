import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Book Hub',
  description: 'Discover new books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}