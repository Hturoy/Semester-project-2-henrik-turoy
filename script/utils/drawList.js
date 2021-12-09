export function drawCard (i){
    const {id, title, price, image_url} = i;

    return `
        <div class='product-card'>
        <a href="productDetails.html?id=${id}"><img src='${image_url}' alt='${title}'>
            <h3>${title}</h3></a>
            <div class='inner-product-container'>
            <a href="productDetails.html?id=${id}"><p>${price}$</p></a>
            <img id='${id}' src="/media/icons/cart.svg" alt="cart icon">
            </div>
        </div>

    `
    

}