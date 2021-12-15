import { addItem } from "./utils/addToCart.js"
import { apiUrl } from "./utils/api.js"
import { drawCard } from "./utils/drawList.js"

import { getToken } from "./utils/loginStorage.js";


const inputNameEdit = document.querySelector('#nameEdit');
const inputPriceEdit = document.querySelector('#priceEdit');
const inputDescEdit = document.querySelector('#descriptionEdit');
const inputFeaturedEdit = document.querySelector('#featuredEdit');
const inputImgEdit = document.querySelector('#imgEdit');
const editBtn = document.querySelector('#edit');
const deleteBtn = document.querySelector('#delete')
const editMsg = document.querySelector('.adminMsgContainerEdit')

const getUrl = document.location.search
const para = new URLSearchParams(getUrl)
const id = para.get('id')
const url = apiUrl + `products/${id}`

const token = getToken()

const container = document.querySelector('.editProductContainer')


console.log(url)

let productList = []

async function fetchApi () {
    const response = await fetch (url);
    const json = await response.json();

    inputNameEdit.value = json.title;
    inputPriceEdit.value = json.price;
    inputDescEdit.value = json.description;
    inputImgEdit.value = json.image_url;
    inputFeaturedEdit.checked = json.featured;

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

editBtn.addEventListener('click', ()=>{
    editForm()
})

deleteBtn.addEventListener('click', ()=>{
    deleteItem()
})

function editForm () {
    const name = inputNameEdit.value.trim();
    const price = inputPriceEdit.value.trim();
    const description = inputDescEdit.value.trim();
    const featured = inputFeaturedEdit.checked;
    const img = inputImgEdit.value.trim();

    if(name.length === 0 || price.length === 0 || description.length === 0){
        displayMsg('warning', 'Please add values', '.adminMsgContainerAdd')
    }
    console.log(name, price, description, featured, img)

   updateItem(name, price, description, img, featured)

}

async function updateItem(name, price, description, image_url, featured){
    
    const data = JSON.stringify({title: name, price: price, description: description, image_url: image_url, featured: featured})

    const options = {
        method: 'PUT',
        body: data,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        }

    }

    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
}

async function deleteItem(name, price, description, image_url, featured){
    
    const data = JSON.stringify({title: name, price: price, description: description, image_url: image_url, featured: featured})

    const options = {
        method: 'DELETE',
        body: data,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        }

    }

    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
    window.location.href='edit.html'

}

