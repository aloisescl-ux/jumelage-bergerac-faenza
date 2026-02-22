import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@shared/constants";
import { BookOpen, ChefHat, Plane, Users, Trophy, Music } from "lucide-react";

export default function Activities() {
  const { t } = useLanguage();

  const activities = [
    {
      icon: BookOpen,
      title: "Cours de langue italienne",
      description: "Apprenez l'italien avec des professeurs expérimentés",
      details: "Cours hebdomadaires pour tous les niveaux, du débutant au avancé.",
    },
    {
      icon: ChefHat,
      title: "Ateliers de cuisine italienne",
      description: "Découvrez la gastronomie italienne authentique",
      details: "Préparation de pâtes fraîches, risotto et autres spécialités régionales.",
    },
    {
      icon: Plane,
      title: "Voyages de groupe",
      description: "Explorez Faenza et l'Émilie-Romagne",
      details: "Visites guidées, dégustations de vins et découvertes culturelles.",
    },
  ];

  const exchanges = [
    {
      icon: Users,
      title: "Échanges scolaires",
      items: [
        "Accueil de stagiaires italiens en restauration à Bergerac",
        "Accueil d'élèves français par une école hôtelière à Faenza",
      ]
    },
    {
      icon: Music,
      title: "Échanges culturels et artistiques",
      items: [
        "Participation de sculpteurs et potiers aux salons",
        "Stages de céramique au Musée International de la Céramique",
        "Participation de musiciens italiens aux festivals",
        "Échanges photographiques et littéraires",
      ]
    },
    {
      icon: Trophy,
      title: "Rencontres sportives",
      items: [
        "Compétitions d'escrime à Bergerac",
        "Cyclotourisme à Faenza avec séjours organisés",
        "Échanges sportifs réguliers",
      ]
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.vignoble}
            alt="Vignoble"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Nos Activités</h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Main Activities */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-blue-900 text-center">Activités principales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-700 mb-4">{activity.description}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Exchanges */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-blue-900 text-center">Glossaire des actions réalisées</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exchanges.map((exchange, idx) => {
              const Icon = exchange.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
                  <Icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{exchange.title}</h3>
                  <ul className="space-y-3">
                    {exchange.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Temps forts */}
        <section className="mb-20 bg-blue-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">Temps forts du jumelage</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Réception de la Délégation Officielle de Faenza</h3>
                <p className="text-gray-700">À l'occasion de la FELIBREE de Bergerac</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Participation de l'orchestre « le Trèfle Gardonnais »</h3>
                <p className="text-gray-700">À la fête de l'Europe de Faenza</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Célébration du 20ème anniversaire</h3>
                <p className="text-gray-700">Avec les représentants officiels des mairies de Bergerac et Faenza</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez notre association !</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Participez à nos activités, découvrez la culture italienne et nouez des liens durables avec nos amis de Faenza.
          </p>
          <a href="/join" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Devenir adhérent
          </a>
        </section>
      </div>
    </div>
  );
}
