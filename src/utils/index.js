export const isEmptyObj = obj => {
    for(const [, value] of Object.entries(obj)) {
        if (value) return false;
    }

    return true;
};

export const getRandomId = () => (Date.now() + Math.random()).toString();

export const objectToArray = (obj, addKey, keyName = 'key') => {
    let arr = [];

    for (const [key, value] of Object.entries(obj)) {
        const val = addKey && typeof value === 'object' ? {...value, [keyName]: key} : value;

        arr.push(val);
    }

    return arr;
};

