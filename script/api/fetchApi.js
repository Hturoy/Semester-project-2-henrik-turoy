
//API base url
const apiUrl = 'http://localhost:1337/'
//Reusable function for fetching the API, change target to the part of the api you need as a"string"
export async function fetchApi (target) {
    

    try {
        const response = await fetch (apiUrl + `${target}`);
        const json = await response.json();
        console.log(json)


    }


    catch(error) {
        console.log(error)
    }

};

