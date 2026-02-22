/**
 * Constantes partagées entre client et serveur
 */

// Images CDN
export const IMAGES = {
  heroBergerac: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/EmMVjcLRMikOFikI.webp",
  heroFaenza: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/fxkkMoBTMlLuiaFM.jpg",
  vignoble: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/ZvfaFclRxoHMeuBS.jpg",
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663375081020/TjaqCIsOPniugEet.webp",
};

// Coordonnées géographiques
export const LOCATIONS = {
  bergerac: { lat: 44.8548, lng: -0.5058, name: "Bergerac, France" },
  faenza: { lat: 44.2831, lng: 11.8744, name: "Faenza, Italy" },
};

// Contacts
export const CONTACT = {
  email: "assojumelage.bergerac.faenza@gmail.com",
  phone: "+33 (0)5 53 57 03 11", // À confirmer
};

// Langues supportées
export const LANGUAGES = {
  FR: "fr",
  IT: "it",
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
