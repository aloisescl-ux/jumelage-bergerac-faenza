import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { IMAGES } from "@shared/constants";

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Galerie avec les images réelles des deux villes
  const galleryItems = [
    {
      id: 1,
      title: "Bergerac - Vue aérienne",
      category: "Bergerac",
      image: IMAGES.bergeracMedieval,
      description: "La ville médiévale de Bergerac avec la Dordogne"
    },
    {
      id: 2,
      title: "Rues pittoresques de Bergerac",
      category: "Bergerac",
      image: IMAGES.bergeracVillage,
      description: "Les charmantes ruelles médiévales de Bergerac"
    },
    {
      id: 3,
      title: "Bergerac et la Dordogne",
      category: "Bergerac",
      image: IMAGES.heroBergerac,
      description: "Bergerac surplombant la rivière Dordogne"
    },
    {
      id: 4,
      title: "Faenza - Piazza del Popolo",
      category: "Faenza",
      image: IMAGES.faenzaArchitecture,
      description: "La magnifique place centrale de Faenza"
    },
    {
      id: 5,
      title: "Céramique traditionnelle",
      category: "Patrimoine",
      image: IMAGES.faenzaCeramics,
      description: "Les célèbres céramiques et faïences de Faenza"
    },
    {
      id: 6,
      title: "Détail de céramique",
      category: "Patrimoine",
      image: IMAGES.ceramicsDetail,
      description: "Détail des motifs traditionnels de la céramique faentine"
    },
    {
      id: 7,
      title: "Vignoble d'Émilie-Romagne",
      category: "Patrimoine",
      image: IMAGES.vignoble,
      description: "Les vignobles de la région d'Émilie-Romagne"
    },
    {
      id: 8,
      title: "Panneau des jumelages",
      category: "Bergerac",
      image: IMAGES.twinningSign,
      description: "Le panneau des villes jumelees avec Bergerac : Faenza, Kenitra, Ostrow Wielkopolski, Repentigny"
    },
    {
      id: 9,
      title: "Palio del Niballo",
      category: "Patrimoine",
      image: IMAGES.palioDelNiballo,
      description: "Le Palio del Niballo, la course equestre traditionnelle de Faenza, un evenement culturel majeur"
    },
    {
      id: 10,
      title: "Bergerac et la Dordogne",
      category: "Bergerac",
      image: IMAGES.bergeracRiver,
      description: "Vue magnifique de Bergerac reflechie dans la Dordogne"
    },
    {
      id: 11,
      title: "Architecture de Bergerac",
      category: "Bergerac",
      image: IMAGES.bergeracArchitecture,
      description: "Les facades colorees et historiques de Bergerac"
    },
    {
      id: 12,
      title: "Rue de Faenza",
      category: "Faenza",
      image: IMAGES.faenzaStreet,
      description: "Une rue pittoresque du centre historique de Faenza"
    },
    {
      id: 13,
      title: "Piazza de Faenza",
      category: "Faenza",
      image: IMAGES.faenzaSquare,
      description: "La belle place centrale avec ses arcades typiques"
    },
    {
      id: 14,
      title: "Statue de Cyrano",
      category: "Bergerac",
      image: IMAGES.cyranoStatue,
      description: "La celebre statue de Cyrano de Bergerac dans sa ville natale"
    },
    {
      id: 15,
      title: "Statues de Cyrano",
      category: "Patrimoine",
      image: IMAGES.cyranoStatues,
      description: "Les differentes statues de Cyrano de Bergerac a travers la ville"
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

  const categories = ["Tous", "Bergerac", "Faenza", "Patrimoine"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredItems = selectedCategory === "Tous" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroBergerac}
            alt="Galerie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Galerie Photos</h1>
          <p className="text-xl text-gray-100">Découvrez les beautés de Bergerac et Faenza</p>
        </div>
      </section>

      {/* Gallery */}
      <div className="container mx-auto px-4 py-20">
        {/* Filtres */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(galleryItems.indexOf(item))}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 text-white hover:text-gray-300"
            >
              <ChevronLeft size={48} />
            </button>

            <div className="max-w-4xl max-h-96 flex flex-col items-center">
              <img
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].title}
                className="max-w-full max-h-96 object-contain rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-2xl font-bold">{galleryItems[selectedImage].title}</h3>
                <p className="text-gray-300">{galleryItems[selectedImage].description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {selectedImage + 1} / {galleryItems.length}
                </p>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 text-white hover:text-gray-300"
            >
              <ChevronRight size={48} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
