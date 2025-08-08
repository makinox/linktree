import type { Language } from './translations';

export const i18nConfig = {
  defaultLanguage: 'en' as Language,
  supportedLanguages: ['en', 'es'] as Language[],
  fallbackLanguage: 'en' as Language,
  cookieName: 'preferred-language',
  localStorageKey: 'preferred-language'
};

export function isValidLanguage(lang: string): lang is "es" | "en" {
  return i18nConfig.supportedLanguages.includes(lang as "es" | "en");
}
