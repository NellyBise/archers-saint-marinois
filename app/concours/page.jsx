'use client'

import concours from '../src/data/concours.json'
import Image from 'next/image'
import young from '../src/c1.jpg'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variantsleft = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: -100, opacity: 0, filter: 'blur(2px)' },
}
const variantsright = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: 100, opacity: 0, filter: 'blur(2px)' },
}

export default function Concours() {
  const ref = useRef(null)
  const ref2 = useRef(null)

  const isInView = useInView(ref, { once: true })
  const isInView2 = useInView(ref2, { once: true })

  return (
    <main>
      <div className="w-full h-40 md:h-64 bg-[url('/concours.jpg')] bg-center bg-center text-3xl flex justify-center items-center">
        <p className="bg-sky-50/80 m-8 py-2 px-4 w-max text-xl md:text-3xl">
          Les concours
        </p>
      </div>

      <section className="gap-8 px-8 py-12 md:py-16 max-w-[1440px] mx-auto">
        <h1 className="text-2xl md:text-3xl text-blue-800 font-bold flex justify-center text-center">
          Retrouvez les informations sur les concours
        </h1>
        <p className="text-lg md:text-xl text-left md:text-center py-8">
          Si vous vous sentez l’âme d’un compétiteur, si vous voulez visualiser
          vos progrès ou tout simplement pour passer un bon moment entre
          archers, des concours sont organisés tout le long de l’année.
        </p>
        <article className="flex flex-col md:flex-row gap-8 py-12">
          <motion.div
            className="w-full md:w-1/2"
            variants={variantsleft}
            ref={ref}
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6 }}
          >
            <Image
              className="w-full object-contain rounded-lg"
              src={young}
              alt="photo d'un jeune archer"
            />
          </motion.div>
          <motion.div
            variants={variantsright}
            ref={ref}
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 text-center md:text-left">
                Concours pour les enfants
              </h2>
              <p className="text-lg mb-4">
                Les <strong>Poussins</strong> participent à des concours
                composés de <strong>deux séries de 5 volées</strong>. Cela leur
                permet de se familiariser avec le format du concours et
                d’apprendre à gérer leur temps.
              </p>
              <p className="text-lg">
                Les{' '}
                <strong>
                  Jeunes Archers (1ère année de licence), niveau 3, niveau 2 et
                  niveau 1
                </strong>{' '}
                doivent réaliser <strong>deux séries de 7 volées</strong>.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 text-center md:text-left">
                Tenue pour les Concours
              </h2>
              <p className="text-lg">
                Lors des concours, tous les archers doivent porter :
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Le tee-shirt du club</li>
                <li>Un pantalon de sport bleu ou blanc</li>
                <li>Des tennis fermés pour garantir confort et sécurité</li>
              </ul>
            </div>
          </motion.div>
        </article>
        <article className="mb-12">
          <h2 className="text-xl md:text-2xl text-center font-bold text-blue-800 py-12">
            Dates et Lieux des Concours saison 2024-2025
          </h2>
          <div className="flex flex-col md:flex-row gap-12 text-lg">
            <motion.div
              variants={variantsleft}
              ref={ref2}
              animate={isInView2 ? 'visible' : 'hidden'}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-sky-100 to-sky-200 shadow-lg w-full rounded-xl text-center flex flex-col justify-center gap-8 py-8 px-2 md:px-8"
            >
              <h3 className="text-xl text-blue-800 font-semibold mb-2">
                Concours pour les Jeunes Archers
              </h3>
              <ul className="list-disc list-inside flex flex-col gap-1 text-base md:text-lg">
                {concours.jeunes &&
                  concours.jeunes.map((concoursj) => (
                    <li key={concoursj._id} className="mb-1">
                      {concoursj.date} – {concoursj.location}
                    </li>
                  ))}
              </ul>
            </motion.div>
            <motion.div
              variants={variantsright}
              ref={ref2}
              animate={isInView2 ? 'visible' : 'hidden'}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-100 to-red-200 shadow-lg w-full rounded-xl text-center flex flex-col justify-center gap-8 py-8 px-2 md:px-8"
            >
              <h3 className="text-xl text-red-900 font-semibold mb-2">
                Concours pour les Adultes
              </h3>
              <ul className="list-disc list-inside flex flex-col gap-1 text-base md:text-lg">
                {concours.adultes &&
                  concours.adultes.map((concoursa) => (
                    <li key={concoursa._id} className="mb-1">
                      {concoursa.date} – {concoursa.location}
                    </li>
                  ))}
              </ul>
            </motion.div>
          </div>
        </article>
      </section>
    </main>
  )
}
