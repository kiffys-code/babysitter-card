import jurl from 'json-url';
const codec = jurl('lzw');

export const encode = async (data) => {
    if(data) {
        return await codec.compress(data);
    } else {
        return null;
    }
}

export const decode = async (data) => {
    if(data) {
        return await codec.decompress(data);
    } else {
        return null;
    }
}