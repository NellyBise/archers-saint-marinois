import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex flex-col md:justify-around gap-12 md:gap-6 pb-12 text-black">
      <div className="w-full h-72 md:h-96 bg-[url('/cover.jpg')] bg-cover bg-center text-2xl md:text-3xl">
        <p className="bg-sky-50/60 m-4 md:m-8 p-2 w-max">
          Un club où{' '}
          <span className="text-blue-800 font-bold">convivialité</span>
        </p>
        <p className="bg-sky-50/60 mx-12 p-2 w-max">
          rime avec <span className="text-blue-800 font-bold">passion</span>{' '}
          partagée
        </p>
      </div>
      <article className="flex flex-col gap-8 p-4 md:p-8">
        <h1 className="text-xl md:text-2xl text-blue-800 font-bold">
          {' '}
          Découvrez les Archers Saint-Marinois à Sainte-Marie-la-Mer !{' '}
        </h1>
        <p>
          Envie de tester un sport à la fois technique, accessible et
          passionnant ? Le tir à l’arc est une discipline qui allie
          concentration, maîtrise de soi et plaisir du jeu. Que vous soyez
          débutant ou confirmé, le club Les Archers Saint-Marinois vous
          accueille à Sainte-Marie-la-Mer pour partager cette passion dans une
          ambiance conviviale.
        </p>
        <h2 className="text-xl md:text-2xl text-blue-800 font-bold">
          Un club pour tous les niveaux
        </h2>
        <p>
          Que vous souhaitiez découvrir le tir à l’arc, vous entraîner
          régulièrement ou participer à des compétitions, notre club est fait
          pour vous ! Nous proposons :
        </p>
        <ul>
          <li>✅ Initiations pour les curieux et débutants</li>
          <li>✅ Entraînements encadrés pour progresser</li>
          <li>✅ Séances libres pour les archers confirmés</li>
          <li>✅ Concours pour les plus motivés</li>
        </ul>

        <h2 className="text-xl md:text-2xl text-blue-800 font-bold">
          Une discipline qui vous surprendra{' '}
        </h2>
        <p>
          Le tir à l’arc est bien plus qu’un simple sport : c’est un véritable
          défi personnel qui développe la précision, la gestion du stress et la
          concentration. Accessible dès le plus jeune âge, il permet aussi de se
          détendre, se surpasser et partager un moment unique entre amis ou en
          famille.{' '}
        </p>
        <Link
          className="bg-blue-800 text-white font-bold px-4 py-2 rounded w-max flex gap-4 items-center self-center duration-300 hover:bg-blue-700"
          href="/contact"
        >
          Contactez-nous !
        </Link>
      </article>
    </section>
  )
}
