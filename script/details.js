import { addItem } from "./utils/addToCart.js"
import { apiUrl } from "./utils/api.js"
import { drawCard } from "./utils/drawList.js"

const getUrl = document.location.search
const para = new URLSearchParams(getUrl)
const id = para.get('id')
const url = apiUrl + `products/${id}`

const container = document.querySelector('.details-container')



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
       
            container.innerHTML += `
            <div class='product-card'>
            <a href="productDetails.html?id=${product.id}"><img src='${product.image_url}' alt='${product.title}'>
                <h3>${product.title}</h3></a>
                <div class='inner-product-container'>
                <a href="productDetails.html?id=${product.id}"><p>${product.price}$</p></a>
                <img id='${product.id}' src="/media/icons/cart.svg" alt="cart icon">
                </div>
            </div>

            <div class='detailsInfo'>
                <h3>Description</h3>
                <p>${product.description}</p>
             </div>  
    
        `
        
    });
}


fetchApi()