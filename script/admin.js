import { getToken } from "./utils/loginStorage.js";
import { apiUrl } from "./utils/api.js";
import { displayMsg } from "./utils/displayMsg.js";

const inputNameAdd = document.querySelector('#nameAdd');
const inputPriceAdd = document.querySelector('#priceAdd');
const inputDescAdd = document.querySelector('#descriptionAdd');
const inputFeaturedAdd = document.querySelector('#featuredAdd');
const inputImgAdd = document.querySelector('#imgAdd');
const addBtn = document.querySelector('#add');
const addMsg = document.querySelector('.adminMsgContainerAdd')


addBtn.addEventListener('click', () =>{

    submit()
});

function submit () {
    const name = inputNameAdd.value.trim();
    const price = inputPriceAdd.value.trim();
    const description = inputDescAdd.value.trim();
    const featured = inputFeaturedAdd.checked;
    const img = inputImgAdd.value.trim();

    if(name.length === 0 || price.length === 0 || description.length === 0){
        displayMsg('warning', 'Please add values', '.adminMsgContainerAdd')
    }
    console.log(name, price, description, featured, img)

    addItem(name, price, description, img, featured)
}

async function addItem (name, price, description, image_url, featured) {
    const url = apiUrl + 'products';
    const data = JSON.stringify({title: name, price: price, description: description, image_url: image_url, featured: featured})
    const token = getToken()
    console.log(token)
    const options = {
        method: 'post',
        body: data,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        }

    }

    const response = await fetch(url, options)
    const json = await response.json
}
