export const postData = (url, data, resolveData) => new Promise(resolve => {
    setTimeout(() => resolve(resolveData), 2000);
});
