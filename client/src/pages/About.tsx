
import { IMAGES } from "@shared/constants";

export default function About() {
  

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroBergerac}
            alt="Bergerac"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">À propos de nous</h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Historique */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-blue-900">Historique du jumelage</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Les chartes ont été signées en deux temps :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-blue-900">29 août 1998 - Bergerac</h3>
              <p className="text-gray-700 mb-3">En présence de :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mr Enrico di GIOVANNI, Maire de FAENZA</li>
                <li>Mr Daniel GARRIGUE, Maire de BERGERAC</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-green-900">12 novembre 1998 - Faenza (Prix EUROPA)</h3>
              <p className="text-gray-700 mb-3">En présence de :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mr Emmanuel FARRUGIA, Consul d'Italie</li>
                <li>Mr Enea PLAZZI, ancien Vice-Consul d'Italie à Bordeaux, fondateur de l'association</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Ce rapprochement est lié à l'environnement agricole (maraichage), viticole et agro-alimentaire (fabrication de produits locaux) respectifs des deux villes. Le goût de la tradition et le patrimoine naturel et culturel symbolisent cette union et permettent le développement et l'enrichissement de ces échanges au travers de projets multiples autant que diversifiés.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Le jumelage bénéficie de l'aide et du soutien de la Ville de Bergerac pour œuvrer à la promotion d'échanges dans tous les domaines : culturels, sportifs, économiques et sociaux.
          </p>

          {/* Panneau des jumelages */}
          <div className="mt-12 flex justify-center">
            <img
              src={IMAGES.twinningSign}
              alt="Panneau des jumelages de Bergerac"
              className="max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* 20 ans */}
        <section className="mb-20 bg-gradient-to-r from-blue-100 to-green-100 p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">1998-2018 : 20 ans de coopération</h2>
          <p className="text-lg text-gray-700">
            Entretenue avec dynamisme et enthousiasme pour fédérer une multitude de rencontres et d'échanges conviviaux et chaleureux.
          </p>
        </section>

        {/* Qui sommes-nous */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-blue-900">Qui sommes-nous aujourd'hui ?</h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Nous sommes une <strong>Association à but non lucratif</strong> régie par la Loi 1901 créée en 1998.
            </p>

            <p className="text-lg text-gray-700">
              L'association est administrée par un <strong>Conseil d'Administration de 12 membres</strong> élus par l'Assemblée Générale. Le Conseil d'Administration élit parmi ses membres un Bureau composé de la Présidente, du Vice Président, de la Secrétaire et du Trésorier. Le Bureau est complété par une secrétaire adjointe et un trésorier adjoint.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-blue-900">Notre mission</h3>
              <p className="text-gray-700">
                L'Association a pour but de développer les échanges dans les domaines scolaires, sportifs, culturels, d'organiser et favoriser des rencontres, séjours, visites. Elle contribue par ses actions au soutien et à la promotion de la culture italienne dans différents secteurs.
              </p>
            </div>
          </div>
        </section>

        {/* Adhésion */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-blue-900">Adhésion à l'association</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-blue-900">Tarifs d'adhésion</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>20 €</strong> pour une personne seule</li>
                <li><strong>30 €</strong> pour un couple</li>
                <li className="text-sm text-gray-600">Validité : 1 an</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-green-900">Avantages</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Information régulière sur les événements</li>
                <li>Accès aux échanges culturels</li>
                <li>Opportunités de voyages de groupe</li>
                <li>Carte d'adhérent</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Modalités de paiement</h3>
            <p className="text-gray-700 mb-2">
              <strong>Paiement par chèque</strong> à l'ordre de : Association de Jumelage Bergerac-Faenza
            </p>
            <p className="text-gray-700">
              À retourner à : Association de Jumelage Bergerac-Faenza, 21 rue Fernand Faure, 24100 BERGERAC
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Nous contacter</h2>
          <p className="text-lg mb-4">
            Pour toute information complémentaire :
          </p>
          <p className="text-lg mb-2">
            <strong>Email :</strong> assojumelage.bergerac.faenza@gmail.com
          </p>
          <p className="text-lg">
            <strong>Secrétariat :</strong> Martine MARGONTIER - Tél. 06 71 60 11 21
          </p>
        </section>
      </div>
    </div>
  );
}
