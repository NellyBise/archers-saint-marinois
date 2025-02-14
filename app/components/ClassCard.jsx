'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import target from '../src/target.png'

const variants = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: 80, opacity: 0, filter: 'blur(2px)' },
}

export default function ClassCard({ cat }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  return (
    <motion.article
      ref={ref}
      variants={variants}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br ${cat.bgFrom} ${cat.bgTo} shadow-lg w-full rounded-xl text-center flex flex-col justify-center gap-8 p-8`}
    >
      <div>
        <h2 className={`text-xl md:text-2xl font-bold ${cat.textColor}`}>
          {cat.title}
        </h2>
        {cat.age && <p>{cat.age}</p>}
      </div>
      <ul className="flex flex-col items-center">
        {cat.times.map((time) => (
          <li key={time} className="flex gap-2">
            <Image
              src={target}
              alt=""
              width={18}
              height={18}
              style={{ objectFit: 'contain' }}
            />
            {time}
          </li>
        ))}
      </ul>
      {cat.extra && <p>{cat.extra}</p>}
      <p>Cotisation + licence : {cat.fee}</p>
    </motion.article>
  )
}
