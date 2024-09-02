'use client';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// utils
import { localStorageGetItem } from 'src/utils/storage-available';
//
import { defaultLang } from './config-lang';
//
import translationEn from './langs/en.json';
import translationEs from './langs/es.json';
import translationPt from './langs/pt.json';

// ----------------------------------------------------------------------

// for latter use
// const lng = localStorageGetItem('i18nextLng', defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: translationEn },
      es: { translations: translationEs },
      pt: { translations: translationPt },
    },
    // possible for later use
    // lng,
    // fallbackLng: lng,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });
  localStorage.removeItem('i18nextLng');

export default i18n;
