import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Les Archers Saint Marinois',
  description: 'le site du club des archers de Sainte Marie la Mer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
