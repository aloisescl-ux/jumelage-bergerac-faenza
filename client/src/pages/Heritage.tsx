import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@shared/constants";

export default function Heritage() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroFaenza}
            alt="Patrimoine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Patrimoine et Culture</h1>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        {/* FAENZA Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-green-900">FAENZA - Ville d'art et d'histoire</h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Appelée "la FAVENTINA" à l'époque romaine, FAENZA se situe au carrefour de la Voie Emilia et de l'ancienne route qui relie le port de Ravenne à la Toscane et à la Mer Tyrrhénienne. Elle fait partie de la région Emilia Romagna (province de RAVENNE), dans le nord est de l'Italie.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Sa population actuelle est de 57 000 habitants appelés « faentini ». Durant les périodes du Moyen Age, de la Renaissance et du néo-classicisme, la ville a prospéré en raison de ses prédominances agricoles, viticoles et la production de la poterie.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Aujourd'hui Faenza est reconnue comme <strong>ville d'Art</strong> ; elle a acquis une identité culturelle et artistique, influencée par les différents styles architecturaux : cathédrales, palais, imposants édifices aux façades remarquables, aux différentes formes d'art de la Renaissance et du Néo-Classicisme. (Piazza del Popolo, Piazza della Libertà, Musée National Palazzo Milzetti, théâtre Masini).
          </p>

          {/* Céramique */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">La tradition de la céramique</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La naissance de la céramique à Faenza est liée à l'abondance des sols argileux trouvés près du fleuve Lamone. Sa spécificité céramique travaillée avec une technique particulière, celle de l'émaillage artistique. Appréciée au niveau international, elle est plus connue sous le nom de <strong>faïence</strong>.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Les premiers ateliers de céramistes se sont établis à Faenza dès les premiers siècles, après l'an 1000, avec des techniques, des décorations et des choix stylistiques de plus en plus raffinés.
              </p>
              <p className="text-gray-700 leading-relaxed">
                De nos jours de nombreux ateliers d'artisanat « botteghe » (boutiques) sont installées en ville ; les maîtres potiers ont un savoir-faire des différentes étapes du traitement de la faïence majolique.
              </p>
            </div>
            <div>
              <img
                src={IMAGES.heroFaenza}
                alt="Céramique de Faenza"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Musées */}
          <div className="bg-green-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Musées et institutions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">MIC – Museo Internazionale della Ceramiche</h4>
                <p className="text-gray-700">
                  Fondé en 1908 par Gaetano Ballardini, c'est un lieu consacré à l'art de la céramique avec plus de 15 000 œuvres de toutes les époques. C'est un centre culturel important pour la recherche et la documentation de la céramique.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Museo Carlo Zauli</h4>
                <p className="text-gray-700">
                  Consacré aux œuvres et à l'histoire du célèbre potier et sculpteur de Faenza.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Événements céramiques</h4>
                <p className="text-gray-700">
                  La Foire Argillà-Italie attire des artistes, des collectionneurs et des amateurs de majolique du monde entier. Le Concours International de Céramique d'Art contemporain sont tous deux organisés tous les deux ans.
                </p>
              </div>
            </div>
          </div>

          {/* Vignoble */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src={IMAGES.vignoble}
                alt="Vignoble"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Le Vignoble</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Le Vignoble, considéré comme l'un des plus riches d'Italie, se situe sur deux régions historiques l'EMILIA et la ROMAGNA.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>En Emilie</strong>, le vin principal est le Lambrusco, un vin pétillant.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>En Romagne</strong>, les vins sont surtout issus de Sangiovese, Trebbiano et Albana le cépage qui contribue à la première DOCG de blanc d'Italie. Le cépage préféré des Romagnols est le Sangiovese, habituellement un rouge robuste aux arômes fruités.
              </p>
            </div>
          </div>

          {/* Palio del Niballo */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Le Palio del Niballo</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le <strong>Palio del Niballo</strong> est un événement culturel incontournable. Il s'agit d'un tournoi d'inspiration médiévale opposant les représentants des cinq quartiers historiques (« rioni ») de la ville : « Borgo Durbecco », « Rione Giallo », « Rione Nero », « Rione Rosso » et « Rione Verde ».
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Rapidité, précision, tenacité, habilité sont indispensables pour les concurrents ! Le défi consiste en une rencontre entre deux chevaliers au galop qui se mesurent dans un jeu d'adresse pour atteindre avec leur lance (« bigorde ») la cible placée sur le bras tendu de Niballo, figure aux traits d'un guerrier représentant l'ancien ennemi sarrasin.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Selon la tradition chaque course du Niballo est précédée d'un long défilé historique. Les figurants des cinq quartiers de la ville sont habillés en costumes d'époque renaissance : chevaliers, soldats en armures, dames en costumes d'amazone, joueurs de « chiarine » et de tambourins, lanceurs d'étendards. Plus de 400 participants composent le cortège particulièrement folklorique.
            </p>
          </div>
        </section>

        {/* BERGERAC Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-blue-900">BERGERAC - Ville d'art et d'histoire</h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Cité médiévale située sur les bords de la Dordogne, Bergerac est mise en valeur par la richesse de son patrimoine historique et culturel concentrant sites et monuments emblématiques. Ses musées et édifices, restaurés dans le respect des styles architecturaux, représentent davantage les siècles passés du Moyen Age et de la Renaissance.
          </p>

          {/* Cyrano */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Cyrano de Bergerac</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Cyrano de Bergerac a bien existé !</strong> Edmond Rostand s'est largement inspiré du personnage de Savinien de Cyrano, son vrai nom, une figure à la vie romanesque, soldat et philosophe, savant et poète mais aussi un intellectuel complexe et libre. Il le fait Gascon originaire de Bergerac, alors que Savinien de Cyrano est originaire de la région parisienne...
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                En 1897 Edmond Rostand créa l'une des pièces les plus populaires du théâtre français « Cyrano de Bergerac ». Le succès de la pièce ne s'est jamais démenti, Elle fera le tour du monde, jouée en plusieurs langues, adaptée au cinéma et figurant désormais dans les programmes scolaires.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Même si une statue honorifique trône sur une place de Bergerac, la ville doit beaucoup de sa notoriété fondée sur l'œuvre de fiction de Cyrano.
              </p>
            </div>
            <div>
              <img
                src={IMAGES.heroBergerac}
                alt="Bergerac"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Patrimoine */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Patrimoine et monuments</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Musée d'intérêt national du Tabac</h4>
                <p className="text-gray-700">
                  Unique en Europe, installé dans la Maison Peyrarède, il présente l'histoire sociale et culturelle du tabac à travers les âges et les civilisations.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Place de la Myrpe</h4>
                <p className="text-gray-700">
                  Avec ses pittoresques maisons à colombages, elle forme le cœur touristique de Bergerac.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Place Pélissière et église Saint-Jacques</h4>
                <p className="text-gray-700">
                  Autrefois halte sur le chemin de Compostelle.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Cloître des Récollets</h4>
                <p className="text-gray-700">
                  Lié à l'histoire du vignoble bergeracois.
                </p>
              </div>
            </div>
          </div>

          {/* La Dordogne */}
          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">La Dordogne</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Bergerac est traversée par l'une des plus belles rivières de France : <strong>la Dordogne</strong>. Présente au cours des différentes époques de l'histoire de Bergerac, elle a d'abord aidé l'économie – activité batelière importante jusqu'au siècle dernier – pour se mettre ensuite au service du tourisme : promenades en gabarre, pêche, randonnées pédestres le long de la Dordogne.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les grands quais de pierre qui bordent la façade fluviale de la ville rappellent de manière monumentale son passé portuaire. C'est dans ce cadre privilégié que Bergerac affiche son dynamisme touristique !
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
