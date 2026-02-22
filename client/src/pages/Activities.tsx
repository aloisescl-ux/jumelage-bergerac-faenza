import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@shared/constants";
import { BookOpen, ChefHat, Plane } from "lucide-react";

export default function Activities() {
  const { t } = useLanguage();

  const activities = [
    {
      icon: BookOpen,
      title: t("activities.italianCourses"),
      description: "Apprenez l'italien avec des professeurs expérimentés dans une ambiance conviviale.",
      details: "Cours hebdomadaires pour tous les niveaux, du débutant au avancé.",
    },
    {
      icon: ChefHat,
      title: t("activities.cookingWorkshops"),
      description: "Découvrez la gastronomie italienne authentique à travers des ateliers pratiques.",
      details: "Préparation de pâtes fraîches, risotto et autres spécialités régionales.",
    },
    {
      icon: Plane,
      title: t("activities.groupTrips"),
      description: "Explorez Faenza et la région de l'Émilie-Romagne lors de voyages organisés.",
      details: "Visites guidées, dégustations de vins et découvertes culturelles.",
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
          <h1 className="text-5xl font-bold">{t("activities.title")}</h1>
        </div>
      </section>

      {/* Activities Grid */}
      <div className="container mx-auto px-4 py-20">
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          {t("activities.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {activity.title}
                </h3>
                <p className="text-gray-700 mb-4">{activity.description}</p>
                <p className="text-sm text-gray-600 italic">{activity.details}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Rejoignez notre communauté
          </h2>
          <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
            Que vous soyez passionné par la culture italienne, la langue, la gastronomie ou simplement curieux de découvrir une belle région d'Italie, nous vous accueillons chaleureusement dans notre association.
          </p>
        </div>
      </div>
    </div>
  );
}
