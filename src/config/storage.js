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

export const setConsentPreferences = (data) => {
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('could not overwrite preferences data', e);
    }
}