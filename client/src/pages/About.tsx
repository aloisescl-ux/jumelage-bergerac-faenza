import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@shared/constants";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroFaenza}
            alt="Faenza"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">{t("about.title")}</h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              {t("about.history")}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t("about.historyText")}
            </p>
            <p className="text-gray-600">
              Le jumelage a été signé en deux temps : le 29 août 1998 à Bergerac, puis le 12 novembre 1998 à Faenza dans le cadre du Prix EUROPA.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-900">
              {t("about.mission")}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t("about.missionText")}
            </p>
            <p className="text-gray-600">
              Ce rapprochement est lié à l'environnement agricole, viticole et agro-alimentaire des deux villes, ainsi qu'à leur patrimoine naturel et culturel.
            </p>
          </div>
        </div>

        {/* Charter Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            {t("about.charter")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">29 août 1998 - Bergerac</h3>
              <p className="text-gray-700">
                Signature en présence de Mr Enrico di GIOVANNI, Maire de FAENZA, et Mr Daniel GARRIGUE, Maire de BERGERAC.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">12 novembre 1998 - Faenza</h3>
              <p className="text-gray-700">
                Signature dans le cadre du Prix EUROPA en présence de Mr Emmanuel FARRUGIA, Consul d'Italie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
