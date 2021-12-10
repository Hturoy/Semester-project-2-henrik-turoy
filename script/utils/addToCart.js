
export const addItem = function (array) {

    const containsObject = (object, array) =>{
        for(const item of array){
            if(item.id === object.id){
                return true
            }
        }
                return false
    }

    let cart = JSON.parse(window.localStorage.getItem('cart'))
    if(!cart){localStorage.setItem('cart', JSON.stringify([]))}
    
    for (const item of array){
    const addBtn = document.getElementById(item.id)
    addBtn.addEventListener('click', () =>{ 
                cart.push(item)
                localStorage.setItem('cart', JSON.stringify(cart))
    })
    }
}
