import Map from '../components/Map'

export default function Contact() {
  return (
    <main>
      <div className="w-full h-40 md:h-64 bg-[url('/arrows2.jpg')] bg-cover bg-center text-3xl flex justify-center items-center">
        <p className="bg-sky-50/80 m-8 py-2 px-4 w-max text-xl md:text-3xl text-center">
          Venez nous rendre visite !
        </p>
      </div>
      <div className="z-10 relative flex flex-col items-center gap-8 px-4 md:px-8 py-12 md:py-16">
        <h1 className="text-2xl md:text-3xl text-blue-800 font-bold flex justify-center text-center">
          Les Archers Saint-Marinois vous accueillent à Sainte-Marie-la-Mer
        </h1>
        <p className="text-center">
          Retrouvez-nous au stade municipal Louis Carrère les mardis soirs de
          18h à 21h, les samedis matin de 10h à 12h.
        </p>
        <Map
          coordinates={[42.72958, 3.0259]}
          popup="<b>Les Archers Saint Marinois</b><br>Club de tir à l'arc"
        />

        <div className="flex flex-col gap-2 text-center">
          <p>📍 Adresse : Avenue du stade 66470 Sainte-Marie-la-Mer</p>
          <p>
            📞 Téléphone :{' '}
            <a
              className="text-blue-600 hover:underline"
              target="_blank"
              href="tel:0642921989"
            >
              06 42 92 19 89
            </a>
          </p>
          <p>
            📧 Email :{' '}
            <a
              href="mailto:lionel.leloir@orange.fr"
              className="text-blue-600 hover:underline"
            >
              lionel.leloir@orange.fr
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
