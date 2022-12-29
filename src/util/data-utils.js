
export const encode = (data) => {
    if(data) {
        return window.btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    } else {
        return null;
    }
}

export const decode = (data) => {
    if(data) {
        return JSON.parse(decodeURIComponent(escape(window.atob(data))));
    } else {
        return null;
    }
}