export const postData = (url, data, resolveData) => new Promise(resolve => {
    setTimeout(() => resolve(resolveData), 2000);
});

export const baseUrl = 'https://scanapi.likebot.app/api/scan';
