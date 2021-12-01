import {fetchApi, featuredList} from './api/fetchApi.js'

const container = document.querySelector('.home-bottom-container')
console.log(featuredList)
function drawFeatured () {
    fetchApi()
    console.log(featuredList)
    container.innerHTML =`
`
    for(const element of featuredList){
        container.innerHTML += `<div class="featured-product">
                                <img src='${element.image_url}'> 
                                <p>${element.price}</p>
                                </div> `                    
   
    };
}



drawFeatured()


