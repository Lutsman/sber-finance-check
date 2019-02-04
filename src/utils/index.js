export const isEmptyObj = obj => {
    for (const [, value] of Object.entries(obj)) {
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

export const objectToArrayOfObjects = (obj, keyName = 'name', keyValue = 'value') => {
    let arr = [];

    for (const [key, value] of Object.entries(obj)) {
        arr.push({[keyName]: key, [keyValue]: value});
    }

    return arr;
};

export const getLevel = percentage => {
    if (percentage > 65) return 'high';

    if (percentage > 35) return 'medium';

    return 'low';
};
