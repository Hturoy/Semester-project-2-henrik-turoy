export function drawCard (i){
    const {id, title, price, image_url} = i;

    return `
        <div class='product-card'>
            <img src='${image_url}' alt='${title}'>
            <h3>${title}</h3>
            <div class='inner-product-container'>
            <p>${price}$</p>
            <img id='${id}' src="/media/icons/cart.svg" alt="cart icon">
            </div>
        </div>

    `


}