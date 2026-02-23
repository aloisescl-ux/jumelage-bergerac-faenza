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
};

// Coordonnées géographiques
export const LOCATIONS = {
  bergerac: { lat: 44.8548, lng: -0.5058, name: "Bergerac, France" },
  faenza: { lat: 44.2831, lng: 11.8744, name: "Faenza, Italy" },
};

// Contacts
export const CONTACT = {
  email: "assojumelage.bergerac.faenza@gmail.com",
  phone: "+33 (0)5 53 57 03 11",
};

// Documents téléchargeables
export const DOCUMENTS = {
  maiDesArts2018: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/QBRaHynxeoYajUbf.pdf",
};

// Langues supportées
export const LANGUAGES = {
  FR: "fr",
  IT: "it",
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
