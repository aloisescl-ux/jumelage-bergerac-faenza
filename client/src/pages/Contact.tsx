import { useLanguage } from "@/contexts/LanguageContext";
import { MapComponent } from "@/components/MapComponent";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT } from "@shared/constants";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-green-900">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Nous contacter</h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-blue-900">
              Informations de contact
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-700">{CONTACT.phone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-700">
                    Association de Jumelage<br />
                    Bergerac-Faenza<br />
                    Bergerac, France
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Message rapide
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Votre message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div>
            <MapComponent
              title="Nos deux villes"
              description="Cliquez sur les marqueurs pour en savoir plus sur Bergerac et Faenza."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
