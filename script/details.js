import { addItem } from "./utils/addToCart.js"
import { apiUrl } from "./utils/api.js"
import { drawCard } from "./utils/drawList.js"

const getUrl = document.location.search
const para = new URLSearchParams(getUrl)
const id = para.get('id')
const url = apiUrl + `products/${id}`

const container = document.querySelector('.details-container')


console.log(url)

let productList = []

async function fetchApi () {
    const response = await fetch (url);
    const json = await response.json();

    productList.push(json)
    drawCards()
    addItem(productList)
}



function drawCards () {
    container.innerHTML=''
    productList.forEach(product => {
       
            container.innerHTML += drawCard(product)
        
    });
}


fetchApi()