'use client'

import Link from 'next/link'

export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
        Mentions Légales
      </h1>

      {/* Identification de l'association */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          1. Identification
        </h2>
        <p>
          <strong>Nom :</strong> Les Archers Saint-Marinois
        </p>
        <p>
          <strong>Siège social :</strong> Camping municipal de la plage - Avenue
          de las Illas - 66470 Sainte-Marie-la-Mer
        </p>
        <p>
          <strong>Email :</strong>{' '}
          <a
            href="mailto:lionel.leloir@orange.fr"
            className="text-blue-600 hover:underline"
          >
            lionel.leloir@orange.fr
          </a>
        </p>
        <p>
          <strong>Responsable de la publication :</strong> Lionel Leloir
        </p>
      </section>

      {/* Hébergement */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          2. Hébergement
        </h2>
        <p>
          <strong>Hébergeur :</strong> Vercel
        </p>
        <p>
          <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723,
          USA
        </p>
        <p>
          <strong>Site web :</strong>{' '}
          <a
            href="https://vercel.com"
            className="text-blue-600 hover:underline"
          >
            vercel.com
          </a>
        </p>
      </section>

      {/* Propriété intellectuelle */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          3. Propriété intellectuelle
        </h2>
        <p>
          Tous les contenus présents sur ce site (textes, images, logos, etc.)
          sont la propriété exclusive de l’Association Les Archers
          Saint-Marinois, sauf mention contraire. Toute reproduction,
          distribution ou modification sans autorisation est interdite.
        </p>
      </section>

      {/* Responsabilité */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          4. Responsabilité
        </h2>
        <p>
          L’association s’efforce de fournir des informations exactes et mises à
          jour, mais ne peut garantir l’exactitude ou l’exhaustivité des
          contenus publiés. L’utilisation des informations présentes sur ce site
          se fait sous la responsabilité de l’utilisateur.
        </p>
      </section>

      {/* Activité payante */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          5. Activité payante
        </h2>
        <p>
          Les Archers Saint-Marinois propose des activités payantes.
          Conformément aux réglementations en vigueur, l’association est
          exonérée de TVA.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          6. Crédits et sources des images
        </h2>
        <p>
          Certaines images utilisées sur ce site proviennent de sources externes
          et sont utilisées avec autorisation ou sous licence libre. Les crédits
          sont les suivants :
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <strong>Nom de l’image 1 :</strong> Photographe / Source -{' '}
            <a href="URL_source_1" className="text-blue-600 hover:underline">
              Lien
            </a>
          </li>
          <li>
            <strong>Nom de l’image 2 :</strong> Photographe / Source -{' '}
            <a href="URL_source_2" className="text-blue-600 hover:underline">
              Lien
            </a>
          </li>
          {/* Ajoute d'autres images si nécessaire */}
        </ul>
        <p className="mt-2">
          Si vous êtes l’auteur d’une image et que vous souhaitez qu’elle soit
          retirée ou modifiée, veuillez nous contacter à
          <a
            href="mailto:lionel.leloir@orange.fr"
            className="text-blue-600 hover:underline"
          >
            {' '}
            lionel.leloir@orange.fr
          </a>
          .
        </p>
      </section>

      {/* Lien retour */}
      <div className="mt-8">
        <Link href="/" className="text-blue-600 font-semibold hover:underline">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  )
}
