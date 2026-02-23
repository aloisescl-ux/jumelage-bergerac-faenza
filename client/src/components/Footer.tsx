import { CONTACT } from "@shared/constants";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-green-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:underline"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{CONTACT.phone}</span>
              </div>
            </div>
          </div>

          {/* Liens */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nous suivre</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Légal</h3>
            <div className="space-y-2">
              <a href="#" className="hover:underline block">
                Mentions légales
              </a>
              <a href="#" className="hover:underline block">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Association de Jumelage Bergerac-Faenza.
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
