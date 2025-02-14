'use client'

import Link from 'next/link'
import ClassCard from '../components/ClassCard'

export default function Cours() {
  const categories = [
    {
      title: 'Les poussins',
      age: 'de 7 à 10 ans',
      times: ['Le mardi de 18h à 19h', 'Le samedi de 10h à 11h'],
      fee: '100€',
      bgFrom: 'from-sky-100',
      bgTo: 'to-sky-200',
      textColor: 'text-blue-800',
    },
    {
      title: 'Les jeunes archers',
      age: 'de 11 à 20 ans',
      times: ['Le mardi de 19h à 20h', 'Le samedi de 11h à 12h'],
      fee: '100€',
      bgFrom: 'from-amber-100',
      bgTo: 'to-amber-200',
      textColor: 'text-amber-900',
    },
    {
      title: 'Les adultes',
      age: '',
      times: [
        'Le mardi de 20h à 21h',
        'Le mercredi de 20h à 21h',
        'Le vendredi de 20h15 à 22h',
      ],
      extra: 'La salle est également disponible le samedi à partir de 16h',
      fee: '130€',
      bgFrom: 'from-red-100',
      bgTo: 'to-red-200',
      textColor: 'text-red-900',
    },
  ]

  return (
    <main>
      <div className="w-full h-40 md:h-64 bg-[url('/target3.jpg')] bg-cover bg-center text-3xl flex justify-center items-center">
        <p className="bg-sky-50/80 m-8 py-2 px-4 w-max text-xl md:text-3xl">
          Les cours
        </p>
      </div>
      <section className="flex flex-col gap-8 px-4 md:px-8 py-12 md:py-16 max-w-[1440px] mx-auto">
        <h1 className="text-2xl md:text-3xl text-blue-800 font-bold flex justify-center text-center">
          Apprenez le tir à l’arc avec nous !
        </h1>
        <p>
          Que vous soyez débutant curieux ou archer en quête de
          perfectionnement, nos cours de tir à l’arc sont faits pour vous !
          Encadrés par des passionnés, nous vous accompagnons dans
          l’apprentissage des bases, la progression technique et même la
          préparation aux compétitions. Grâce à un enseignement adapté à tous
          les âges et niveaux, vous découvrirez un sport qui allie
          concentration, précision et maîtrise de soi, le tout dans une ambiance
          conviviale.
        </p>
      </section>
      <section className="flex flex-col md:flex-row gap-12 p-4 md:p-12 text-base md:text-lg max-w-[1440px] mx-auto">
        {categories.map((cat) => (
          <ClassCard cat={cat} key={cat.title} />
        ))}
      </section>
      <section className="flex flex-col gap-8 md:gap-12 px-8 py-12 md:py-16 mb-12 max-w-[1440px] mx-auto">
        <h2 className="text-xl md:text-2xl text-blue-800 font-bold flex justify-center text-center">
          Rejoignez-nous et faites votre premier pas vers la cible !
        </h2>
        <Link
          className="bg-blue-800 text-white font-bold px-4 py-2 rounded w-max flex items-center self-center duration-300 hover:bg-blue-700"
          href="/contact"
        >
          Contactez-nous !
        </Link>
      </section>
    </main>
  )
}
