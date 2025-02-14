import Hero from './components/Hero'
import Sponsors from './components/Sponsors'

export const metadata = {
  title:
    'Les Archers Saint Marinois – Club de Tir à l’Arc à Sainte-Marie-la-Mer',
  description:
    'Rejoignez notre club pour découvrir le tir à l’arc à Sainte-Marie-la-Mer. Activités pour tous les niveaux, du débutant à l’expert.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Sponsors />
    </main>
  )
}
