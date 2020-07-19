export const setLocalStorage = (key, arr) =>
    window.localStorage.setItem(key, JSON.stringify(arr));

export const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key));

export const itemsPerPage = 12;
export const apiUrl = 'https://api.punkapi.com/v2/beers';