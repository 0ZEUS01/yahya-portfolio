import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'fr') => {
  // Fallback to English if something goes wrong
  return dictionaries[locale]?.() ?? dictionaries.en();
};