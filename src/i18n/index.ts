import FR from '@/i18n/fr.json'
import EN from '@/i18n/en.json'

const LANGUAGES = {
    FRENCH: 'fr',
    ENGLISH: 'en'
}

export const useI18n = (
    {
        current = 'fr'
    }: {
        current: string | undefined
    }) => {
    if (current === LANGUAGES.FRENCH)
        return FR
    if (current === LANGUAGES.ENGLISH)
        return EN
}