export const STORAGE_KEY = 'consentPreferences';

export const getConsentPreferences = () => {
    try{
        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || {};
    } catch (e) {
        console.error('could not parse consent preferences data', e);
        return {};
    }
}