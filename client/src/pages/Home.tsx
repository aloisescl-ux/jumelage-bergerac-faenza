import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { IMAGES } from "@shared/constants";
import { ArrowRight, BookOpen, UtensilsCrossed, Plane } from "lucide-react";

export default function Home() {
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
            L'amitié sans frontières
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-light">
            Entre Bergerac et Faenza
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Découvrez les échanges culturels franco-italiens
          </p>
          <Link href="/about">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
            >
              Découvrir
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
                À propos du jumelage
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le jumelage entre Bergerac et Faenza a été signé en 1998, marquant le début d'une belle amitié entre la Dordogne et l'Émilie-Romagne.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Promouvoir les échanges culturels, sportifs, économiques et sociaux entre les deux villes et leurs habitants.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  À propos
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
            Nos activités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              title: "Cours d'italien",
              icon: BookOpen,
            },
            {
              title: "Ateliers de cuisine",
              icon: UtensilsCrossed,
            },
            {
              title: "Voyages de groupe",
              icon: Plane,
            },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <activity.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {activity.title}
                </h3>
                <p className="text-gray-600">
                  Participez à nos diverses activités pour découvrir la culture italienne
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/activities">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
              >
                Voir toutes les activités
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
