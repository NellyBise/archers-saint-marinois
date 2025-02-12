import Link from 'next/link'
import Image from 'next/image'
import logo from '../src/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white">
      {/* Section principale */}
      <section className="flex flex-col md:flex-row gap-8 justify-around p-8">
        {/* Logo et adresse */}
        <article className="flex items-center gap-4">
          <Image src={logo} alt="Logo" width={60} height={60} />
          <div>
            <Link href="/contact">
              <p className="font-bold text-sky-200">
                Les Archers Saint Marinois
              </p>
              <p>
                Avenue du stade
                <br /> 66470 Sainte-Marie-la-Mer
              </p>
            </Link>
          </div>
        </article>

        {/* Liens utiles */}
        <article className="flex flex-col">
          <p className="font-bold mb-2">Liens utiles</p>
          <Link href="https://www.ffta.fr/" target="_blank">
            FFTA
          </Link>
          <Link href="https://arc-occitanie.fr/" target="_blank">
            CRTAO
          </Link>
        </article>

        {/* Réseaux sociaux */}
        <article className="flex flex-col">
          <p className="font-bold mb-2">Retrouvez-nous sur Facebook</p>
          <a
            className="h-8 md:h-12 flex items-center"
            href="https://www.facebook.com/groups/158397114258530/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 250 250"
            >
              <path
                fill="#1877f2"
                d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
              />
              <path
                fill="#fff"
                d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
              />
            </svg>
          </a>
        </article>

        {/* Mentions légales */}
        <article className="flex flex-col">
          <p className="font-bold mb-2">Informations</p>
          <Link href="/mentions-legales">Mentions légales</Link>
        </article>
      </section>

      {/* Bas de page avec crédit */}
      <div className="text-center text-sm p-4">
        <p>
          © {new Date().getFullYear()} Les Archers Saint Marinois. Site conçu
          par{' '}
          <a
            href="https://www.nelly-bise.fr"
            target="_blank"
            className="text-sky-300"
          >
            Nelly Bise
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
