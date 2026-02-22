/**
 * Traductions FR/IT pour l'application
 */

export const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      activities: "Activités",
      gallery: "Galerie",
      events: "Agenda",
      heritage: "Patrimoine",
      contact: "Contact",
      join: "Adhérer",
    },

    // Hero Section
    hero: {
      title: "L'amitié sans frontières",
      subtitle: "Entre Bergerac et Faenza",
      description: "Découvrez les échanges culturels franco-italiens",
      cta: "Découvrir",
    },

    // À propos
    about: {
      title: "À propos du jumelage",
      subtitle: "Une histoire de 25 ans d'amitié",
      history: "Historique",
      mission: "Notre mission",
      charter: "Les chartes signées",
      historyText:
        "Le jumelage entre Bergerac et Faenza a été signé en 1998, marquant le début d'une belle amitié entre la Dordogne et l'Émilie-Romagne.",
      missionText:
        "Promouvoir les échanges culturels, sportifs, économiques et sociaux entre les deux villes et leurs habitants.",
    },

    // Activités
    activities: {
      title: "Nos activités",
      italianCourses: "Cours d'italien",
      cookingWorkshops: "Ateliers de cuisine",
      groupTrips: "Voyages de groupe",
      description:
        "Participez à nos diverses activités pour découvrir la culture italienne",
    },

    // Galerie
    gallery: {
      title: "Galerie photos",
      subtitle: "Les moments forts de nos échanges",
    },

    // Agenda
    events: {
      title: "Agenda des événements",
      upcoming: "À venir",
      past: "Passés",
      noEvents: "Aucun événement prévu",
    },

    // Patrimoine
    heritage: {
      title: "Patrimoine",
      bergerac: "Bergerac",
      faenza: "Faenza",
      ceramics: "La céramique de Faenza",
      vineyard: "Le vignoble",
      palio: "Le Palio del Niballo",
      cyrano: "Cyrano de Bergerac",
    },

    // Formulaire d'adhésion
    form: {
      title: "Adhérer à l'association",
      subtitle: "Rejoignez notre communauté",
      civility: "Civilité",
      firstName: "Prénom",
      lastName: "Nom",
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      italianOrigin: "Êtes-vous d'origine italienne ?",
      yes: "Oui",
      no: "Non",
      submit: "Envoyer",
      reset: "Réinitialiser",
      required: "Champ obligatoire",
      success: "Votre demande a été envoyée avec succès !",
      error: "Une erreur est survenue. Veuillez réessayer.",
    },

    // Footer
    footer: {
      contact: "Contact",
      address: "Bergerac, Dordogne, France",
      followUs: "Nous suivre",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
    },
  },

  it: {
    // Navigazione
    nav: {
      home: "Home",
      about: "Chi siamo",
      activities: "Attività",
      gallery: "Galleria",
      events: "Calendario",
      heritage: "Patrimonio",
      contact: "Contatti",
      join: "Iscriviti",
    },

    // Hero Section
    hero: {
      title: "L'amicizia senza confini",
      subtitle: "Tra Bergerac e Faenza",
      description: "Scopri gli scambi culturali franco-italiani",
      cta: "Scopri",
    },

    // Chi siamo
    about: {
      title: "Chi siamo",
      subtitle: "Una storia di 25 anni di amicizia",
      history: "Storia",
      mission: "La nostra missione",
      charter: "Le carte firmate",
      historyText:
        "Il gemellaggio tra Bergerac e Faenza è stato firmato nel 1998, segnando l'inizio di una bella amicizia tra la Dordogna e l'Emilia-Romagna.",
      missionText:
        "Promuovere gli scambi culturali, sportivi, economici e sociali tra le due città e i loro abitanti.",
    },

    // Attività
    activities: {
      title: "Le nostre attività",
      italianCourses: "Corsi di italiano",
      cookingWorkshops: "Laboratori di cucina",
      groupTrips: "Viaggi di gruppo",
      description:
        "Partecipa alle nostre varie attività per scoprire la cultura italiana",
    },

    // Galleria
    gallery: {
      title: "Galleria fotografica",
      subtitle: "I momenti salienti dei nostri scambi",
    },

    // Calendario
    events: {
      title: "Calendario degli eventi",
      upcoming: "Prossimi",
      past: "Passati",
      noEvents: "Nessun evento previsto",
    },

    // Patrimonio
    heritage: {
      title: "Patrimonio",
      bergerac: "Bergerac",
      faenza: "Faenza",
      ceramics: "La ceramica di Faenza",
      vineyard: "Il vigneto",
      palio: "Il Palio del Niballo",
      cyrano: "Cyrano di Bergerac",
    },

    // Modulo di iscrizione
    form: {
      title: "Iscriviti all'associazione",
      subtitle: "Unisciti alla nostra comunità",
      civility: "Titolo",
      firstName: "Nome",
      lastName: "Cognome",
      address: "Indirizzo",
      phone: "Telefono",
      email: "Email",
      italianOrigin: "Sei di origine italiana?",
      yes: "Sì",
      no: "No",
      submit: "Invia",
      reset: "Ripristina",
      required: "Campo obbligatorio",
      success: "La tua richiesta è stata inviata con successo!",
      error: "Si è verificato un errore. Riprova.",
    },

    // Footer
    footer: {
      contact: "Contatti",
      address: "Bergerac, Dordogna, Francia",
      followUs: "Seguici",
      legal: "Avviso legale",
      privacy: "Politica sulla privacy",
    },
  },
};

export type TranslationKey = keyof typeof translations.fr;
