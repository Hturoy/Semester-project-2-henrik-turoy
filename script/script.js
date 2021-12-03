import { apiUrl } from './utils/api.js'
import { drawCard } from './utils/drawList.js'

const container = document.querySelector('.home-bottom-container')
const url = apiUrl



    let productList = []

    async function fetchApi () {
        const response = await fetch (url + `products`);
        const json = await response.json();

        json.forEach(product => {
            productList.push(product)
        });
        drawCards()
    }



    function drawCards () {
        container.innerHTML=''
        productList.forEach(product => {
            if (product.featured){
                container.innerHTML += drawCard(product)
            }
        });
    }


fetchApi()