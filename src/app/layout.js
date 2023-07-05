import './globals.css'
import { Ubuntu_Mono } from 'next/font/google'

const ubuntu_mono = Ubuntu_Mono({ 
  subsets: ['latin'],
  weight: '400'
});

export const metadata = {
  title: 'Jeb Wilfred Panganiban',
  description: 'Software Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu_mono.className}>{children}</body>
    </html>
  )
}
