import Header from '../components/Header'
import concours from '../src/data/concours.json'

export default function Concours() {
  return (
    <>
      <Header />
      <div className="w-full h-48 md:h-96 bg-[url('/image2.jpg')] bg-cover bg-center text-3xl flex justify-center items-center">
        <p className="bg-sky-50/60 m-8 p-2 w-max text-2xl md:text-3xl">
          Les concours
        </p>
      </div>

      <section className="gap-8 p-8">
        <h1 className="text-3xl font-bold text-center my-8">
          Les Concours saison 2024-2025
        </h1>
        <article className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Concours pour les enfants
          </h2>
          <p className="text-lg">
            Les <strong>Poussins</strong> participent à des concours composés de{' '}
            <strong>deux séries de 5 volées</strong>. Cela leur permet de se
            familiariser avec le format du concours et d'apprendre à gérer leur
            temps.
          </p>
          <p className="text-lg">
            Les <strong>Jeunes Archers, niveau 3, niveau 2 et niveau 1</strong>{' '}
            doivent réaliser <strong>deux séries de 7 volées</strong>.
          </p>
        </article>

        <article className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Changement de niveau des jeunes
          </h2>
          <p className="text-lg">
            Pour passer au niveau supérieur, un archer doit atteindre l’un des
            critères suivants lors d’un concours :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>340 points</strong> en 1 concours
            </li>
            <li>
              <strong>190 points</strong> sur une série
            </li>
            <li>
              <strong>175 points</strong> sur 2 séries de 2 concours différents
            </li>
          </ul>
          <p className="text-lg">
            Cela garantit que les archers sont prêts à relever des défis plus
            importants et à s'améliorer.
          </p>
        </article>

        <article className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Tenue pour les Concours
          </h2>
          <p className="text-lg">
            Lors des concours, tous les archers doivent porter :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Le tee-shirt du club</li>
            <li>Un pantalon de sport blanc de préférence</li>
            <li>Des tennis fermés pour garantir confort et sécurité</li>
          </ul>
        </article>

        <article className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Dates et Lieux des Concours
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            Concours pour les Jeunes Archers
          </h3>
          <ul className="list-disc ml-6 mb-4">
            {concours.jeunes &&
              concours.jeunes.map((concoursj) => (
                <li key={concoursj.id}>
                  {concoursj.date} – {concoursj.location}
                </li>
              ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            Concours pour les Adultes
          </h3>
          <ul className="list-disc ml-6">
            {concours.adultes &&
              concours.adultes.map((concoursa) => (
                <li key={concoursa.id}>
                  {concoursa.date} – {concoursa.location}
                </li>
              ))}
          </ul>
        </article>
      </section>
    </>
  )
}
