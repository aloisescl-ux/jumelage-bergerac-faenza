import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@shared/constants";

export default function Heritage() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-green-900">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">{t("heritage.title")}</h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Faenza Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-green-900">
            {t("heritage.faenza")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("heritage.ceramics")}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La céramique de Faenza est une tradition millénaire qui remonte aux premiers siècles après l'an 1000. La spécificité de la céramique faentine réside dans sa technique particulière d'émaillage artistique, appréciée au niveau international et connue sous le nom de faïence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le MIC (Museo Internazionale della Ceramiche), fondé en 1908, est un centre culturel important avec plus de 15 000 œuvres de toutes les époques. De nombreux ateliers d'artisanat (botteghe) sont installés en ville, où les maîtres potiers perpétuent le savoir-faire des différentes étapes du traitement de la faïence majolique.
              </p>
            </div>
            <div>
              <img
                src={IMAGES.heroFaenza}
                alt="Faenza"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t("heritage.palio")}
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le Palio del Niballo est un événement culturel incontournable de Faenza. Il s'agit d'un tournoi d'inspiration médiévale opposant les représentants des cinq quartiers historiques (rioni) de la ville. Le défi consiste en une rencontre entre deux chevaliers au galop qui se mesurent dans un jeu d'adresse pour atteindre avec leur lance la cible placée sur le bras tendu de Niballo, figure représentant l'ancien ennemi sarrasin.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Selon la tradition, chaque course du Niballo est précédée d'un long défilé historique avec plus de 400 participants en costumes d'époque renaissance.
            </p>
          </div>
        </div>

        {/* Bergerac Section */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-blue-900">
            {t("heritage.bergerac")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src={IMAGES.vignoble}
                alt="Vignoble"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("heritage.vineyard")}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le vignoble de Bergerac est l'un des plus riches de France, avec une histoire viticole remontant à plusieurs siècles. Situé sur les bords de la Dordogne, ce vignoble produit des vins de grande qualité, notamment des rouges robustes et des blancs élégants.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La région est également célèbre pour ses produits locaux : truffes, foie gras, et autres spécialités gastronomiques qui font la richesse du patrimoine culinaire périgordin.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t("heritage.cyrano")}
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cyrano de Bergerac a bien existé ! Édmond Rostand s'est largement inspiré du personnage de Savinien de Cyrano, une figure à la vie romanesque, soldat et philosophe, savant et poète. En 1897, Édmond Rostand créa l'une des pièces les plus populaires du théâtre français « Cyrano de Bergerac ». Le succès de la pièce ne s'est jamais démenti et elle figure désormais dans les programmes scolaires.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Même si une statue honorifique trône sur une place de Bergerac, la ville doit beaucoup de sa notoriété à cette œuvre de fiction qui a fait connaître Bergerac dans le monde entier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
