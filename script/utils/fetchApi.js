import { apiUrl } from "./api.js";

const url = apiUrl

//API base url
export let productList = []

export async function fetchApi () {
        const response = await fetch (url + `products`);
        const json = await response.json();

        json.forEach(product => {
            productList.push(product)
        });
    }
