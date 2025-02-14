import { Poppins, Pirata_One } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const poppins = Poppins({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const pirata = Pirata_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  authors: [{ name: 'Nelly Bise', url: 'https://www.nelly-bise.fr' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Les Archers Saint Marinois',
    description: 'Le site du club des archers de Sainte Marie la Mer',
    url: 'https://www.archers-saintmarinois.fr',
    image: 'https://www.archers-saintmarinois.fr/image.webp',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
