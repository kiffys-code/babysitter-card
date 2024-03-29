import { DIRECTION } from "components/FilterSortBar/SortButton";

export const STORAGE_KEY = 'consentPreferences';
export const ADULT_KEY = 'isAdult';
export const GYR_SORT_KEY = 'gyrSort';

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

export const getIsAdult = () => {
    try{
        const val = localStorage.getItem(ADULT_KEY);
        return val === 'true';
    } catch (e) {
        console.error('could not parse adult consent 18+ data', e);
        return {};
    }
}

export const setIsAdult = (val) => {
    try{
        localStorage.setItem(ADULT_KEY, val);
    } catch (e) {
        console.error('could not overwrite adult consent 18+ data', e);
    }
}

export const getGyrSort = () => {
    try{
        const val = localStorage.getItem(GYR_SORT_KEY);
        return val;
    } catch (e) {
        console.error('could not parse green-yellow-red sort data', e);
        return DIRECTION.ASC;
    }
}

export const setGyrSort = (val) => {
    try{
        localStorage.setItem(GYR_SORT_KEY, val);
    } catch (e) {
        console.error('could not set green-yellow-red sort data', e);
    }
}

export const revokeAllData = () => {
    localStorage.clear();
}