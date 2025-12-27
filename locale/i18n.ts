import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import * as Localization from 'expo-localization';
import en from './en.json'
import zhTW from './zh-TW.json';
import zhHK from './zh-HK.json';


function getDeviceLocale() {
const locale = Localization.getLocales()[0].languageCode; 
    const languageTag = Localization.getLocales()[0].languageTag;

    if (!languageTag ) return 'en';

    switch(languageTag.toLowerCase()) {
        case 'zh-hant-tw':
            return 'zh-TW';
        case 'zh-hant-hk':
            return 'zh-HK';
        case 'zh-hant-mo':
            return 'zh-HK';
        default:
            return 'en';
    }
}

//get device locale, default to 'en' if not available
const deviceLocale = getDeviceLocale();

i18n
  .use(initReactI18next)
  .init({
  fallbackLng: 'en',
  resources: {
      en: { translation: en },
      'zh-TW': { translation: zhTW },
      'zh-HK': { translation: zhHK },
  },
    lng: deviceLocale, // default language is device locale
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n