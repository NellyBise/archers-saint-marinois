import Header from '../components/Header'

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <div className="w-full h-48 md:h-96 bg-[url('/arrows2.jpg')] bg-cover bg-center text-3xl flex justify-center items-center">
          <h1 className="bg-sky-50/60 m-8 p-2 w-max text-2xl md:text-3xl">
            Venez nous rendre visite !
          </h1>
        </div>
        <div className="flex flex-col items-center gap-8 p-8">
          <h2 className="text-xl md:text-2xl">
            <span className="text-blue-500 font-bold">
              Les Archers Saint-Marinois
            </span>{' '}
            vous accueillent à Sainte-Marie-la-Mer.
          </h2>
          <p>
            Retrouvez-nous au stade municipal Louis Carrère les mardis soirs de
            18h à 21h, les samedis matin de 10h à 12h.
          </p>
          <iframe
            title="Carte du club"
            className="w-full max-w-3xl h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.9728254692405!2d3.025159343269681!3d42.72994716026104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b063f2446b2539%3A0x8575b06cf8686446!2s66470%20Av.%20du%20Stade%2C%2066470%20Sainte-Marie-la-Mer!5e1!3m2!1sfr!2sfr!4v1738163903811!5m2!1sfr!2sfr"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="text-center">
            <p>📍 Adresse : Avenue du stade 66470 Sainte-Marie-la-Mer</p>
            <p>📞 Téléphone : [Ton numéro]</p>
            <p>📧 Email : [Ton email]</p>
          </div>
        </div>
      </main>
    </>
  )
}
