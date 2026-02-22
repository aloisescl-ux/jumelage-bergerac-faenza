import { useLanguage } from "@/contexts/LanguageContext";
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

          {/* Maps */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Nos deux villes</h2>
            <p className="text-gray-700 mb-6">
              Bergerac, ville viticole en Dordogne, et Faenza, capitale de la céramique en Italie.
            </p>
            
            {/* Bergerac Map */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Bergerac, France</h3>
              <div className="rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90512.28304917409!2d0.3323925009163121!3d44.851934877346956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aad07c6048f55f%3A0xd23474adfc552221!2s24100%20Bergerac%2C%20France!5e0!3m2!1sfr!2snl!4v1771794929010!5m2!1sfr!2snl"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            
            {/* Faenza Map */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Faenza, Italie</h3>
              <div className="rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45685.74447770554!2d11.840696182552037!3d44.302569122889714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b4e04d55c961f%3A0xaf10d4b77a1618fa!2s48018%20Faenza%2C%20Ravenne%2C%20Italie!5e0!3m2!1sfr!2snl!4v1771796027846!5m2!1sfr!2snl"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
