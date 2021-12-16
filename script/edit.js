import { addItem } from './utils/addToCart.js'
import { apiUrl } from './utils/api.js'

const container = document.querySelector('.editProducts')

const url = apiUrl




    let productList = []

    async function fetchApi () {
        const response = await fetch (url + `products`);
        const json = await response.json();

        json.forEach(product => {
            productList.push(product)
        });
        drawCards()
        addItem(productList)

    }



    function drawCards () {
        container.innerHTML=''
        productList.forEach(product => {
           
                container.innerHTML +=     `   <div class='product-card-admin'>
                <a href="editProduct.html?id=${product.id}"><img src='${product.image_url}' alt='${product.title}'></a>
                <a href="editProduct.html?id=${product.id}"> <h3>${product.title}</h3></a>
                    <div class='inner-product-container'>
                    <a href="editProduct.html?id=${product.id}"><p>${product.price}$</p></a>
                    </div>
                </div>`

        });
    }


fetchApi()