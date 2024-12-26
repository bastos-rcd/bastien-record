import FR from '../i18n/fr.json'
import EN from '../i18n/en.json'

const LANGUAGES = {
    FRENCH: 'fr',
    ENGLISH: 'en'
}

export const useI18n = (
    {
        currentLocale = 'fr'
    }: {
        currentLocale: string | undefined
    }) => {
    if (currentLocale === LANGUAGES.FRENCH) return FR
    if (currentLocale === LANGUAGES.ENGLISH) return EN

    return FR
}