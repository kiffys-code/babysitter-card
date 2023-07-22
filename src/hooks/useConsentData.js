const useConsentData = () => {
    const data = getConsentPreferences() || {};
    return {data};
}

export default useConsentData;