import {findIndex} from './utils/findIndex.js'
const container = document.querySelector('.cartContainer')
const infoBox = document.querySelector('.cartInfo')

let cartList = JSON.parse(localStorage.getItem('cart'))





function drawCart() {

    container.innerHTML=''

    filteredArray.forEach(item => {
        const qty = cartList.filter(object => object.id===item.id).length;

        container.innerHTML+=`
        <div class='product-card'>
        <a href="productDetails.html?id=${item.id}"><img src='${item.image_url}' alt='${item.title}'>
            <h3>${item.title}</h3></a>
            <div class='inner-product-container'>
            <a href="productDetails.html?id=${item.id}"><p>${item.price * qty}$</p></a>
            <p>Quantity: ${qty}</p>
            <button id='${item.id}' class='removeBtn'>Remove</button>
            </div>
        </div>
        `
    infoBox.innerHTML=`<h3>Total price: </h3>` + getSumTotal();

        
    });

    removeItem()


    if(container.innerHTML===''){
        container.innerHTML='<h2>Cart is empty</h2>'
    }
    

}


function removeItem() {
    filteredArray.forEach(item => {
        const removeBtn= document.getElementById(item.id)
        removeBtn.addEventListener('click', ()=>{
            filteredArray.splice(findIndex(filteredArray, item), 1)
            localStorage.setItem('cart', JSON.stringify(filteredArray))

            drawCart()
            getSumTotal();


        })
    });
}







function getSumTotal() {
    const sumList = JSON.parse(localStorage.getItem('cart')).map((item)=>{
        return item.price
    })

    if(sumList.length===0){
        infoBox.innerHTML=`<p>No products in cart</p>`
    }else{    
        const reducer = (x, y) => x + y;
        return sumList.reduce(reducer)
    }


}

const filteredArray = cartList.filter((item, index) => {
    const product = JSON.stringify(item);
    return index === cartList.findIndex(object => {
      return JSON.stringify (object) === product;
    });
  });


drawCart()


