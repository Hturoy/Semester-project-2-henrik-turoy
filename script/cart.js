import {findIndex} from './utils/findIndex.js'
const container = document.querySelector('.cartContainer')
const infoBox = document.querySelector('.cartInfo')

let cartList = JSON.parse(localStorage.getItem('cart'))
console.log(cartList)


function drawCart() {

        container.innerHTML=''

    cartList.forEach(item => {
        container.innerHTML+=`
        <div class='product-card'>
        <a href="productDetails.html?id=${item.id}"><img src='${item.image_url}' alt='${item.title}'>
            <h3>${item.title}</h3></a>
            <div class='inner-product-container'>
            <a href="productDetails.html?id=${item.id}"><p>${item.price}$</p></a>
            <button id='${item.id}' class='removeBtn'>Remove</button>
            </div>
        </div>
`
        
    });

    infoBox.innerHTML=`Total price: ` + getSumTotal()

    if(container.innerHTML===''){
        container.innerHTML='<h2>Cart is empty</h2>'
    }
    

    removeItem()
}


function removeItem() {
    cartList.forEach(item => {
        const removeBtn= document.getElementById(item.id)
        console.log(removeBtn)
        removeBtn.addEventListener('click', ()=>{
            cartList.splice(findIndex(cartList, item), 1)
            localStorage.setItem('cart', JSON.stringify(cartList))
            drawCart()
            getSumTotal()
            console.log(getSumTotal())
            console.log(cartList)
        })
    });
}


drawCart()




function getSumTotal() {
    const sumList = cartList.map((item)=>{
        return item.price
    })
    console.log(sumList)

    if(sumList.length===0){
        return ``
    }

    const reducer = (x, y) => x + y;

    return sumList.reduce(reducer)
}

getSumTotal()
console.log(getSumTotal())
