import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './translations/en/common.json';
import esTranslations from './translations/es/common.json';

const isDevelopment = import.meta.env.MODE === 'development';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslations
      }
    },
    fallbackLng: 'en',
    debug: isDevelopment, 
    
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
