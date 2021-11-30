const apiUrl = 'http://localhost:1337/'

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

