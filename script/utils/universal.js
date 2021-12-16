
const token = JSON.parse(localStorage.getItem('token'));
const link = document.querySelector('.swapLink');
const linkTxt = document.querySelector('.swapText')
const logOutBtn = document.querySelector('.logout')

if(token != null){
    link.href='admin.html'
    linkTxt.innerHTML='<p>Admin</p>'
}

logOutBtn.addEventListener('click', ()=>{
    localStorage.removeItem('token')
    window.location.href='index.html'
})