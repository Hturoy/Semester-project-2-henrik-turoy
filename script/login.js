import { displayMsg } from './utils/displayMsg.js'
import { saveToken, saveUser } from './utils/loginStorage.js'
import { apiUrl } from './utils/api.js'

const form = document.querySelector(".loginForm");
const password = document.querySelector("#password");
const username = document.querySelector("#username");
const msg = document.querySelector(".msgContainer");

form.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault();

    msg.innerHTML=''
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue.length === 0 || passwordValue.length === 0) {
        displayMsg('warning', 'invalid values', '.msgContainer')
    }
    

    doLogin(usernameValue, passwordValue)
}


async function doLogin(username, password) {
    const url = apiUrl + 'auth/local';
    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json'
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.user) {
            displayMsg('success', 'Successfully logged in', '.msgContainer')
            saveToken(json.jwt);
            saveUser(json.user)

            window.location.href='admin.html'
        }

        if(json.error) {
            displayMsg('warning', 'Invalid login details', '.msgContainer')
        }

        console.log(json);
    }catch(error) {
        console.log(error)
    }
}