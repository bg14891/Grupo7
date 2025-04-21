// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from '../Components/Traduccion/es/translation.json';
import translationEN from '../Components/Traduccion/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationES },
      en: { translation: translationEN },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Idioma de reserva
    interpolation: {
      escapeValue: false, // No es necesario para React
    },
  });

export default i18n;
