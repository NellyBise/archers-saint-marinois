'use client'

import Image from 'next/image'
import young from '../src/young.jpg'
import Number from '../components/Number'
import Infos from '../components/infos'
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

export default function Initiations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <main>
      <div className="w-full h-40 md:h-64 bg-[url('/training.jpg')] bg-cover bg-center text-3xl flex justify-center items-center">
        <p className="bg-sky-50/80 m-8 py-2 px-4 w-max text-xl md:text-3xl">
          Initiations
        </p>
      </div>

      <section className="gap-8 px-4 md:px-8 py-12 md:py-16 max-w-[1440px] mx-auto">
        <article>
          <h1 className="text-2xl md:text-3xl text-blue-800 font-bold flex justify-center text-center">
            Initiations estivales au tir à l’arc à Sainte Marie la Mer
          </h1>
          <p className="text-lg md:text-xl text-center py-8">
            Venez découvrir le tir à l’arc dans un cadre agréable au Camping
            Municipal Le Palais de la Mer à Sainte-Marie-la-Mer ! Chaque été,
            nous proposons des initiations accessibles à tous.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-8 md:my-12">
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 shadow-lg rounded-full size-36 md:size-48">
              <Number count="30" className="text-amber-800" />
              ans d’expérience
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-red-200 shadow-lg rounded-full size-36 md:size-48">
              <Number count="8" />
              cibles
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-sky-200 shadow-lg rounded-full size-36 md:size-48">
              <Number count="40" />
              arcs
            </div>
          </div>
        </article>
        <article className="flex flex-col-reverse md:flex-row gap-8 py-12">
          <motion.div
            className="w-full md:w-1/2"
            variants={variantsleft}
            ref={ref}
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5 }}
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
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 text-center md:text-left">
              Une activité familiale et accessible à tous
            </h2>
            <div className="text-lg md:text-xl mb-4 flex flex-col gap-4">
              <p>
                Que vous soyez résident du camping ou non, profitez de cette
                activité en plein air pour tester votre précision et votre
                concentration. Accessible dès 7 ans, ce sport peut être pratiqué
                en famille ou entre amis.
              </p>
              <p>
                Les séances se déroulent en extérieur, dans une ambiance
                conviviale, tous les jours de 10h à 12h ou de 18h à 20h. Pour
                seulement 5€ les 2 heures, vous bénéficiez d’un matériel adapté
                et de l’accompagnement de nos entraîneurs passionnés.
              </p>
              <p>
                La réservation est conseillée, mais vous pouvez également venir
                directement et participer à l’une des sessions.
              </p>
              <p>
                Venez passer un moment ludique et sportif, seul, en famille ou
                entre amis !
              </p>
            </div>
          </motion.div>
        </article>
        <Infos />
      </section>
    </main>
  )
}
