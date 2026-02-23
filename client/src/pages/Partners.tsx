import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";
import { IMAGES } from "@shared/constants";

export default function Partners() {
  const { t } = useLanguage();

  const partners = [
    {
      id: 1,
      name: "RVB : Radio Vallée Bergerac",
      description: "Radio Vallée Bergerac est une radio associative de proximité diffusant un programme généraliste centré sur Bergerac et sa proche région.",
      website: "https://www.radiovallee.fr",
      category: "Médias",
      logo: IMAGES.rvbLogo
    },
    {
      id: 2,
      name: "Crédit Agricole Charente-Périgord",
      description: "Le Crédit agricole Charente-Périgord, officiellement Caisse régionale Crédit agricole mutuel de Charente-Périgord, est l'une des 39 caisses régionales du groupe Crédit agricole. Il est implanté dans les départements de la Charente et de la Dordogne.",
      website: "https://www.credit-agricole.fr",
      category: "Finance",
      logo: IMAGES.creditAgricoleLogo
    },
    {
      id: 3,
      name: "UTL Bergerac",
      description: "L'Université du Temps Libre de Bergerac est une association culturelle de proximité proposant un programme riche de conférences et d'ateliers thématiques centré sur Bergerac et sa région. Elle offre une large gamme d'activités pédagogiques et de loisirs visant à favoriser le partage des connaissances et le lien social.",
      website: "https://www.utlbergerac.fr/page/2888267-programme-2025-2026-home",
      category: "Culture",
      logo: IMAGES.utlLogo
    },
    {
      id: 4,
      name: "MMA",
      description: "Avec 1 600 agences réparties dans toute la France, nos conseillers vous accompagnent au quotidien pour trouver des solutions adaptées à vos besoins. Chaque jour, plus de 3 millions d'assurés nous font confiance pour protéger leur famille, leur entreprise, leurs projets.",
      website: "https://www.mma.fr/",
      category: "Finance",
      logo: IMAGES.mmaLogo
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-green-900">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Nos partenaires</h1>
          <p className="text-xl mt-4 text-blue-100">Découvrez les organisations qui nous soutiennent</p>
        </div>
      </section>

      {/* Partners Grid */}
      <div className="container mx-auto px-4 py-20">
        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
          L'Association de Jumelage Bergerac-Faenza est fière de collaborer avec des partenaires de qualité qui nous aident à promouvoir les échanges culturels franco-italiens.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-t-4 border-blue-600"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Logo */}
                <div className="mb-6 h-24 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {partner.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {partner.name}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow text-sm">
                  {partner.description}
                </p>
                
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                >
                  Visiter le site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Section */}
        <section className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Devenir partenaire</h2>
          <p className="text-lg text-gray-700 mb-6">
            Vous souhaitez soutenir l'Association de Jumelage Bergerac-Faenza et devenir partenaire ? 
            Nous serions ravis de collaborer avec vous pour promouvoir les échanges culturels franco-italiens.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Contactez-nous :</strong> assojumelage.bergerac.faenza@gmail.com
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Nous contacter
          </button>
        </section>
      </div>
    </div>
  );
}
