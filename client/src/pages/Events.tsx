import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin, Clock, Download } from "lucide-react";
import { DOCUMENTS } from "@shared/constants";

export default function Events() {
  const { t } = useLanguage();

  // Événements exemple - à remplacer par des données de la base de données
  const upcomingEvents = [
    {
      id: 1,
      title: "Cours d'italien - Niveau débutant",
      date: "2026-03-15",
      time: "19:00",
      location: "Bergerac",
      description: "Commencez votre apprentissage de l'italien avec nos professeurs expérimentés.",
    },
    {
      id: 2,
      title: "Atelier de cuisine italienne",
      date: "2026-03-22",
      time: "14:00",
      location: "Bergerac",
      description: "Apprenez à préparer les pâtes fraîches et autres spécialités italiennes.",
    },
    {
      id: 3,
      title: "Voyage à Faenza",
      date: "2026-04-10",
      time: "08:00",
      location: "Départ de Bergerac",
      description: "Découvrez Faenza et ses trésors culturels lors d'un voyage de groupe.",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-green-900">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">{t("events.title")}</h1>
        </div>
      </section>

      {/* Events List */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-blue-900">
          {t("events.upcoming")}
        </h2>

        {upcomingEvents.length > 0 ? (
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {event.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">{t("events.noEvents")}</p>
          </div>
        )}

        {/* Documents telechargeables */}
        <div className="mt-20 bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-green-900">
            Documents et brochures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={DOCUMENTS.maiDesArts2018}
              download
              className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600"
            >
              <Download className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Mai des Arts 2018</h3>
                <p className="text-sm text-gray-600">Brochure de l'evenement culturel</p>
              </div>
              <span className="text-sm text-green-600 font-semibold">PDF</span>
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Restez informé
          </h2>
          <p className="text-gray-700 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir les annonces des prochains événements.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
