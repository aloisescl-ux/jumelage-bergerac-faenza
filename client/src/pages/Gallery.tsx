import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery items - en production, ceux-ci seraient chargés depuis la base de données
  const galleryItems = [
    {
      id: 1,
      title: "Échange culturel 2023",
      category: "Événements",
      image: "https://via.placeholder.com/400x300?text=Echange+2023",
    },
    {
      id: 2,
      title: "Cours d'italien",
      category: "Activités",
      image: "https://via.placeholder.com/400x300?text=Cours+Italien",
    },
    {
      id: 3,
      title: "Atelier cuisine italienne",
      category: "Ateliers",
      image: "https://via.placeholder.com/400x300?text=Cuisine",
    },
    {
      id: 4,
      title: "Visite à Faenza",
      category: "Voyages",
      image: "https://via.placeholder.com/400x300?text=Faenza",
    },
    {
      id: 5,
      title: "Rencontre à Bergerac",
      category: "Événements",
      image: "https://via.placeholder.com/400x300?text=Bergerac",
    },
    {
      id: 6,
      title: "Festival culturel",
      category: "Événements",
      image: "https://via.placeholder.com/400x300?text=Festival",
    },
  ];

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-green-900">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{t("gallery.title")}</h1>
          <p className="text-xl text-gray-100">{t("gallery.subtitle")}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(idx)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />

            {/* Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Info */}
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-bold">{galleryItems[selectedImage].title}</h3>
              <p className="text-gray-300">{galleryItems[selectedImage].category}</p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
