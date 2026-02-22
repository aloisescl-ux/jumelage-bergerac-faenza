import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { IMAGES } from "@shared/constants";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroBergerac}
            alt="Bergerac"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-light">
            {t("hero.subtitle")}
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            {t("hero.description")}
          </p>
          <Link href="/about">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-blue-900">
                {t("about.title")}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t("about.historyText")}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {t("about.missionText")}
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  {t("nav.about")}
                </Button>
              </Link>
            </div>
            <div className="relative h-80">
              <img
                src={IMAGES.heroFaenza}
                alt="Faenza"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            {t("activities.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("activities.italianCourses"),
                icon: "🇮🇹",
              },
              {
                title: t("activities.cookingWorkshops"),
                icon: "🍝",
              },
              {
                title: t("activities.groupTrips"),
                icon: "✈️",
              },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4 flex justify-center">{activity.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {activity.title}
                </h3>
                <p className="text-gray-600">
                  {t("activities.description")}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/activities">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                {t("nav.activities")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("form.subtitle")}
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            {t("form.title")}
          </p>
          <Link href="/join">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              {t("nav.join")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
