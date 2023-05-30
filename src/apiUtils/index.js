import { handleResponse, handleError } from './apiOutputHandle';

const baseUrl = "https://fakestoreapi.com"

export const routes = {
    category: `${baseUrl}/products/category`,
}

export const fetchCategoriesProduct = async (url) => {
    const apiUrl = routes.category + url;
    return await fetch(apiUrl).then(handleResponse).catch(handleError);
}

export const fetchAllProducts = async (url) => {
    return await fetch(baseUrl + url).then(handleResponse).catch(handleError);
}