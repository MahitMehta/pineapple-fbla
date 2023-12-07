import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import StyledComponentsRegistry from './regirstry'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PineApple Book 11',
  description: 'PineApple Book 11 Landing Page for FBLA. This website was made for a FBLA try-outs presentation and is not real.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
