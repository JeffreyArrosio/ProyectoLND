if(sessionStorage.getItem("Cookies") != "true" ){
    sessionStorage.setItem("Cookies", "false")
}

if(sessionStorage.getItem("Cookies") == "false"){
    window.onload = setTimeout(function () {
        var openModalButton = document.getElementById('botonPop')
        openModalButton.click()
    }, 3000)
}

const aceptaCookie = document.querySelector("#galleta")
cookieEvent()
function cookieEvent(){
    aceptaCookie.addEventListener('click',setCookies)
}
function setCookies() {
    sessionStorage.setItem("Cookies", "true")
}