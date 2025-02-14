'use client'

import Link from 'next/link'
import Image from 'next/image'
import cours from '../src/cours.jpg'
import cible from '../src/cible-paillon.jpg'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: 50, opacity: 0, filter: 'blur(2px)' },
}

export default function Hero() {
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const isInView2 = useInView(ref2, { once: true })
  const isInView3 = useInView(ref3, { once: true })

  return (
    <>
      <section className="flex flex-col md:justify-around gap-12 md:gap-6 text-black">
        <div className="w-full h-40 md:h-64 bg-[url('/adult.jpg')] bg-cover bg-center text-xl md:text-3xl flex flex-col items-center justify-center gap-4">
          <p className="bg-sky-50/80 py-1 md:py-2 px-2 md:px-4 w-max">
            Un club où{' '}
            <span className="text-blue-800 font-bold">convivialité</span>
          </p>
          <p className="bg-sky-50/80 mx-24 py-1 md:py-2 px-2 md:px-4 w-max">
            rime avec <span className="text-blue-800 font-bold">passion</span>{' '}
            partagée
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-8 p-4 pt-16 md:p-8 md:pt-20 max-w-[1440px] overflow-hidden mx-auto">
        <article className="relative flex flex-col gap-8 w-full h-full">
          <div className="absolute inset-0 -z-10 ">
            <div className="absolute -right-10 -top-20 w-40 h-40 bg-red-100 rounded-full opacity-25" />
            <div className="absolute right-40 -top-0 w-20 h-20 bg-amber-100 rounded-full opacity-35" />
            <div className="absolute left-10 bottom-0 w-32 h-32 bg-sky-100 rounded-full opacity-25" />
          </div>
          <h1 className=" text-2xl md:text-3xl text-blue-800 font-bold flex justify-center text-center">
            Découvrez les Archers Saint-Marinois à Sainte-Marie-la-Mer !
          </h1>

          <p>
            Envie de tester un sport à la fois technique, accessible et
            passionnant&nbsp;? Le tir à l’arc est une discipline qui allie
            concentration, maîtrise de soi et plaisir du jeu. Que vous soyez
            débutant ou confirmé, le club des Archers Saint-Marinois vous
            accueille à Sainte-Marie-la-Mer pour partager cette passion dans une
            ambiance conviviale.
          </p>
        </article>

        <motion.article
          ref={ref2}
          initial="hidden"
          animate={isInView2 ? 'visible' : 'hidden'}
          variants={variants}
          className="flex flex-col md:flex-row gap-8 py-12"
        >
          <Image
            className="w-full md:w-2/5 object-contain rounded-lg"
            src={cours}
            alt="photo d'un jeune archer"
          />
          <div className="w-full md:w-3/5 flex flex-col justify-center gap-8">
            <h2 className="text-xl md:text-2xl text-blue-800 font-bold text-center md:text-left">
              Un club pour tous les niveaux
            </h2>
            <p>
              Que vous souhaitiez découvrir le tir à l’arc, vous entraîner
              régulièrement ou participer à des compétitions, notre club est
              fait pour vous ! Nous proposons&nbsp;:
            </p>

            <ul className="flex flex-col gap-2 pl-4">
              <li>✅ Initiations pour les curieux et débutants</li>
              <li>✅ Entraînements encadrés pour progresser</li>
              <li>✅ Séances libres pour les archers confirmés</li>
              <li>✅ Concours pour les plus motivés</li>
            </ul>
          </div>
        </motion.article>
        <motion.article
          ref={ref3}
          initial="hidden"
          animate={isInView3 ? 'visible' : 'hidden'}
          variants={variants}
          className="flex flex-col-reverse md:flex-row gap-8 py-12"
        >
          <div className="w-full md:w-3/5 flex flex-col justify-center gap-8">
            <h2 className="text-xl md:text-2xl text-blue-800 font-bold text-center md:text-left">
              Une discipline qui vous surprendra{' '}
            </h2>
            <p>
              Le tir à l’arc est bien plus qu’un simple sport&nbsp;: c’est un
              véritable défi personnel qui développe la précision, la gestion du
              stress et la concentration. Accessible dès le plus jeune âge, il
              permet aussi de se détendre, se surpasser et partager un moment
              unique entre amis ou en famille.{' '}
            </p>

            <Link
              className="bg-blue-800 text-white font-bold px-4 py-2 rounded w-max flex gap-4 items-center self-center duration-150 hover:scale-105"
              href="/contact"
            >
              Contactez-nous&nbsp;!
            </Link>
          </div>
          <Image
            className="w-full md:w-2/5 object-contain rounded-lg"
            src={cible}
            alt="photo d'un jeune archer"
          />
        </motion.article>
      </section>
    </>
  )
}
