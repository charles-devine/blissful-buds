import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/fr/en.json'; // English translations
import frTranslation from './locales/fr/fr.json'; // French translations

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language in case the current language translation is not available
  interpolation: {
    escapeValue: false, // React already escapes the values, so no need for extra handling
  },
});

export default i18n;
