import Header from '../components/Header'
import target from '../src/target.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="w-full h-48 md:h-96 bg-[url('/target2.jpg')] bg-cover bg-center text-3xl flex justify-center items-center">
          <h1 className="bg-sky-50/60 m-8 p-2 w-max text-xl md:text-3xl">
            Les cours
          </h1>
        </div>
        <section className="flex flex-col gap-8 p-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-800">
            {' '}
            Apprenez le tir à l’arc avec nous !
          </h2>
          <p>
            Que vous soyez débutant curieux ou archer en quête de
            perfectionnement, nos cours de tir à l’arc sont faits pour vous !
            Encadrés par des passionnés, nous vous accompagnons dans
            l’apprentissage des bases, la progression technique et même la
            préparation aux compétitions. Grâce à un enseignement adapté à tous
            les âges et niveaux, vous découvrirez un sport qui allie
            concentration, précision et maîtrise de soi, le tout dans une
            ambiance conviviale.
          </p>
          <p className="text-xl md:text-2xl text-blue-800 font-bold">
            Rejoignez-nous et faites votre premier pas vers la cible !
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-12 p-12 text-lg">
          <article className="bg-gradient-to-br from-sky-100 to-blue-100 shadow-lg w-full rounded-xl text-center flex flex-col justify-center gap-8 p-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-800">
                Les poussins
              </h2>
              <p>de 7 à 10 ans</p>
            </div>
            <ul className="flex flex-col items-center">
              <li className="flex gap-2">
                <Image
                  src={target}
                  alt=""
                  width={18}
                  height={18}
                  style={{ objectFit: 'contain' }}
                />
                Le mardi de 18h à 19h
              </li>
              <li className="flex gap-2">
                <Image
                  src={target}
                  alt=""
                  width={18}
                  height={18}
                  style={{ objectFit: 'contain' }}
                />
                Le samedi de 10h à 11h
              </li>
            </ul>
            <p>Cotisation + licence : 100€</p>
          </article>
          <article className="bg-gradient-to-br from-sky-200 to-blue-200 shadow-lg w-full rounded-xl text-center flex flex-col justify-center gap-8 p-8">
            <div>
              {' '}
              <h2 className="text-xl font-bold text-blue-800">
                Les jeunes archers
              </h2>
              <p>de 11 à 20 ans</p>
            </div>
            <ul className="flex flex-col items-center">
              <li className="flex gap-2">
                <Image
                  src={target}
                  alt=""
                  width={18}
                  height={18}
                  style={{ objectFit: 'contain' }}
                />
                Le mardi de 19h à 20h
              </li>
              <li className="flex gap-2">
                <Image
                  src={target}
                  alt=""
                  width={18}
                  height={18}
                  style={{ objectFit: 'contain' }}
                />
                Le samedi de 11h à 12h
              </li>
            </ul>
            <p>Cotisation + licence : 100€</p>
          </article>
          <article className="bg-gradient-to-br from-sky-300 to-blue-300 shadow-lg w-full rounded-xl text-center flex flex-col justify-center gap-8 p-8">
            <div>
              <h2 className="text-xl font-bold text-blue-800">Les adultes</h2>
            </div>
            <ul className="flex flex-col items-center">
              <li className="flex gap-2">
                <Image
                  src={target}
                  alt=""
                  width={18}
                  height={18}
                  style={{ objectFit: 'contain' }}
                />
                Le mardi de 20h à 21h
              </li>
              <li className="flex gap-2">
                <Image
                  src={target}
                  alt=""
                  width={18}
                  height={18}
                  style={{ objectFit: 'contain' }}
                />
                Le .......
              </li>
            </ul>
            <p>Cotisation + licence : 130€</p>
          </article>
        </section>
      </main>
    </>
  )
}
