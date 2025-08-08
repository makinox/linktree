import { i18nConfig, isValidLanguage } from './config';

export function getLanguageFromRequest(request: Request): "es" | "en" {
  const acceptLanguage = request.headers.get('accept-language');
  
  if (!acceptLanguage) return i18nConfig.defaultLanguage;
  
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [language, quality = '1'] = lang.trim().split(';q=');
      return { language: language.split('-')[0], quality: parseFloat(quality) };
    })
    .sort((a, b) => b.quality - a.quality);
  
  for (const { language } of languages) {
    if (isValidLanguage(language)) {
      return language;
    } else {
      return i18nConfig.fallbackLanguage;
    }
  }
  
  return i18nConfig.fallbackLanguage;
}

export function getPreferredLanguage(request: Request): "es" | "en" {
  const cookie = request.headers.get('cookie');
  if (cookie) {
    const langMatch = cookie.match(new RegExp(`${i18nConfig.cookieName}=([^;]+)`));
    if (langMatch && isValidLanguage(langMatch[1])) {
      return langMatch[1];
    } else {
      return i18nConfig.fallbackLanguage;
    }
  }
  
  return getLanguageFromRequest(request);
}

export const getSupportedLanguages = () => i18nConfig.supportedLanguages
