
//API base url
const apiUrl = 'http://localhost:1337/'

export let featuredList = []
export let productList = []


export async function fetchApi () {

    

    try {
        const response = await fetch (apiUrl + `products`);
        const json = await response.json();

        json.forEach(element => {
            productList.push(element)
            if(element.featured){
            featuredList.push(element)}
        });

        
    }




    catch(error) {
        console.log(error)
    }

};

