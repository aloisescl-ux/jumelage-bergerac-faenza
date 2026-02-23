/**
 * Constantes partagées entre client et serveur
 */

// Images CDN
export const IMAGES = {
  heroBergerac: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/QroJEfndaqbBbPrt.webp",
  heroFaenza: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/AsDdVJSXGFqvYObG.jpg",
  vignoble: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/iREzaUsgyBjVHNBD.jpg",
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/TjaqCIsOPniugEet.webp",
  bergeracMedieval: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/jqHTBXJMDhtZkwDt.jpg",
  bergeracVillage: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/ocoqslguFgrrcgYy.jpg",
  faenzaArchitecture: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/mjQiPQZHrijCcRyK.jpg",
  faenzaCeramics: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/HYrPIxitUBAIrQwZ.webp",
  ceramicsDetail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/SNThLdfDEGGzvxDD.jpg",
  faenzaCity: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/F3RRG6v5Xie7.jpg",
  twinningSign: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/QpQDBfuRIzyPGSwq.png",
  palioDelNiballo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/mHvfkvpsRYWTLRIp.png",
  // Logos partenaires
  rvbLogo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/QblyAlKUxmlNsFar.png",
  creditAgricoleLogo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/zNXVNjfSgScLgigu.png",
  utlLogo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/rIbXlTTYlrSJZiwN.jpg",
  mmaLogo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/lWwGiSZRlHNnykho.jpg",
  // Photos supplémentaires
  bergeracRiver: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/lkzwAUCRZEfRjjHf.jpg",
  bergeracArchitecture: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/fBoesmhqLDRoImFX.jpg",
  faenzaStreet: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/WIPuXxYlVvvnbMXg.jpg",
  faenzaSquare: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/lAdFjZcRegbopChH.jpg",
  cyranoStatue: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/nsrkBmJdPIarTZEi.jpg",
  cyranoStatues: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/UQgPsgQzFIZbdQzH.jpg",
  // Photos Dordogne
  dordogneRiver1: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/xxKfeVJqHfnNrtSO.jpg",
  dordogneRiver2: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/DbhBCccCjNLxciZi.jpg",
  dordogneRiver3: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/JSYZEFgGFKYlyYMZ.jpg",
  // Logo RVB bleu
  rvbLogoBlue: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/sgYqbFLoZbYqsATa.png",
  // Photos Dordogne (corrigées)
  dordogneRiver: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/xxKfeVJqHfnNrtSO.jpg",
  dordogneLandscape: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/DbhBCccCjNLxciZi.jpg",
  dordogneValley: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/JSYZEFgGFKYlyYMZ.jpg",
};

// Coordonnées géographiques
export const LOCATIONS = {
  bergerac: { lat: 44.8548, lng: -0.5058, name: "Bergerac, France" },
  faenza: { lat: 44.3022, lng: 11.8744, name: "Faenza, Italy" },
};

// Contacts
export const CONTACT = {
  email: "assojumelage.bergerac.faenza@gmail.com",
  phone: "+33 (0)5 53 57 03 11",
  website: "www.jumelage-franco-italien.com",
  bergeracAddresses: [
    {
      name: "Association de Jumelage Bergerac-Faenza",
      street: "53, rue des 3 Frères Cassadou",
      city: "24100 BERGERAC",
      phone: "+33 (0)5 53 57 06 30",
      phoneSecretariat: "+33 (0)6 71 60 11 21",
      email: "assojumelage.bergerac.faenza@gmail.com"
    },
    {
      name: "Mairie de Bergerac",
      street: "19, rue Neuve d'Argenson",
      city: "24100-BERGERAC",
      phone: "+33 (0)5 53 74 66 66",
      website: "www.bergerac.fr"
    },
    {
      name: "OFFICE DE TOURISME",
      street: "Quai Cyrano 1, rue des Récollets",
      city: "24100-BERGERAC",
      phone: "+33 (0)5 53 57 03 11",
      website: "www.quai-cyrano.com"
    },
    {
      name: "CAB",
      street: "Communauté d'Agglomération des Communes, Domaine de la Tour",
      city: "24112 - BERGERAC CEDEX",
      phone: "+33 (0)5 53 23 43 95",
      website: "www.la-cab.fr"
    }
  ],
  faenzaAddresses: [
    {
      name: "ASSOCIAZIONE PER I GEMELLAGGI FAENZA",
      street: "Via Laderchi 3",
      city: "48018 Faenza (RA)",
      phone: "+39 0546 28092",
      website: "www.gemellaggifaenza.it"
    },
    {
      name: "MUSEO INTERNAZIONALE DELLE CERAMICHE M.I.C.",
      street: "Viale Baccarini n. 19",
      city: "48018 Faenza (RA)",
      phone: "+39 0546 69 73 11",
      website: "www.micfaenza.org"
    },
    {
      name: "Pro Loco Faenza",
      street: "Bureaux d'informations FAENZA, Voltone della Molinella, 2",
      city: "48018 Faenza (RA)",
      phone: "+39 0546-25231",
      website: "www.prolocofaenza.it"
    }
  ]
};

// Documents téléchargeables
export const DOCUMENTS = {
  maiDesArts2018: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/ifBSexNAdVlpYEKA.pdf",
};

// Documents PDF
export const PDF_DOCUMENTS = {
  maiDesArts2018: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/ifBSexNAdVlpYEKA.pdf",
};

// Langues supportées
export const LANGUAGES = {
  FR: "fr",
  IT: "it",
} as const;

// Noms des langues
export const LANGUAGE_NAMES = {
  fr: "Français",
  it: "Italiano",
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
export type LanguageName = typeof LANGUAGE_NAMES[keyof typeof LANGUAGE_NAMES];
