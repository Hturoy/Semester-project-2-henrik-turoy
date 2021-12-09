import { addItem } from './utils/addToCart.js'
import { apiUrl } from './utils/api.js'
import { drawCard } from './utils/drawList.js'

const container = document.querySelector('.products-container')
const input = document.getElementById('searchInput')

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
           
                container.innerHTML += drawCard(product)

        });
    }


fetchApi()




input.addEventListener('keyup', async () => {
    const filterValue = input.value.toLowerCase().trim()

    container.innerHTML=''

 
    
    const filtered = productList
        .filter(item =>
            item.title.toLowerCase()
                .trim()
                    .includes(filterValue))

    filtered.forEach(product => {
        container.innerHTML+=`
                <div class='product-card'>
                <a href="productDetails.html?id=${product.id}"><img src='${product.image_url}' alt='${product.title}'>
                    <h3>${product.title}</h3></a>
                    <div class='inner-product-container'>
                    <a href="productDetails.html?id=${product.id}"><p>${product.price}$</p></a>
                    <img id='${product.id}' src="/media/icons/cart.svg" alt="cart icon">
                    </div>
                </div>
    `        
    });

        if(filterValue == ''){
            drawCards()
        }

})


