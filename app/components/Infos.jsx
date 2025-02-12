'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Map from './Map'

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(2px)' },
}
const variantsleft = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: -100, opacity: 0, filter: 'blur(2px)' },
}
const variantsright = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: 100, opacity: 0, filter: 'blur(2px)' },
}

export default function Infos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <article className="mb-12">
      <motion.h2
        variants={variants}
        ref={ref}
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl text-center font-bold text-blue-800 py-12"
      >
        Informations pratiques
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-12 text-lg">
        <motion.div
          variants={variantsleft}
          ref={ref}
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-red-100 to-red-200 shadow-lg w-full rounded-xl text-center flex flex-col justify-center gap-8 p-4 md:p-8"
        >
          <h3 className="text-xl text-red-800 font-semibold mb-2">
            Les initiations
          </h3>
          <div className="flex flex-col gap-4 text-lg md:text-xl">
            <ul className="flex flex-col gap-2 list-disc list-inside ">
              <li>Tarif : 5€</li>
              <li>Durée : 2h</li>
              <li>Jours : du lundi au vendredi</li>
              <li>Horaires : 10h-12h ou 18h-20h</li>
              <li>Âge : 7 à 99 ans</li>
              <li>
                Téléphone :{' '}
                <a
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  href="tel:0642921989"
                >
                  06 42 92 19 89
                </a>
              </li>

              <li>
                Email :{' '}
                <a
                  href="mailto:lionel.leloir@orange.fr"
                  className="text-blue-600 hover:underline"
                >
                  lionel.leloir@orange.fr
                </a>
              </li>
            </ul>
            <p>
              Après vous être présentés à l’entrée du camping, prenez à droite
              puis à gauche après les sanitaires, c’est ensuite tout droit !
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={variantsright}
          ref={ref}
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-sky-100 to-sky-200 shadow-lg w-full rounded-xl text-center flex flex-col justify-center gap-8 p-4 md:p-8"
        >
          <h3 className="text-xl text-blue-800 font-semibold mb-2">Le plan</h3>
          <Map
            coordinates={[42.7412781, 3.0356046]}
            popup="<b>Les Archers Saint Marinois</b><br>Initiations au tir à l'arc"
          />
        </motion.div>
      </div>
    </article>
  )
}
