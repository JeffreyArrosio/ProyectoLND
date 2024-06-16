const sBody = document.querySelector("body")
const sMain = document.querySelector("main")
const sGalleta = document.querySelector("#cookie")
const sCanvas = document.querySelector(".offcanvas")
const sCard = document.querySelectorAll(".card")
const sNav = document.querySelector(".navbar")
const oscuro = document.querySelector("#oscuro")

if (sessionStorage.getItem("dark") === null) {
    sessionStorage.setItem("dark", "true")
}
lightTheme()
eventsDarkMode()
function eventsDarkMode() {
    oscuro.addEventListener('click', setLight)
}
function setLight(){
    if(sessionStorage.getItem("dark") == "true"){
        sessionStorage.setItem("dark","false")
    }else{
        sessionStorage.setItem("dark","true")
    }
    lightTheme()
}
function lightTheme(){
    if (sessionStorage.getItem("dark") == "false") {
        sBody.style.backgroundColor = 'rgb(191, 168, 197)'
        sMain.style.backgroundColor = 'rgb(191, 168, 197)'
        sMain.style.color = "black"
        if (sGalleta != undefined) {
            sGalleta.style.backgroundColor = 'rgb(191, 168, 197)'
        }
        if (sCanvas != undefined) {
            sCanvas.style.backgroundColor = 'rgb(191, 168, 197)'
            sCanvas.style.color = "black"
        }
        if (sCard != undefined) {
            sCard.forEach(function (cards) {
                cards.style.backgroundColor = 'rgb(191, 168, 197)'
                cards.style.color = "black"
                cards.style.border = "2px solid gray !important"
            })
        }
        oscuro.src = "../imagenes/sol.png"
        if (sNav != undefined) {
            sNav.style.backgroundColor = ""
        }
    }else{
        sBody.style.backgroundColor = ""
        sMain.style.backgroundColor = ""
        sMain.style.color = ""
        if (sGalleta != undefined) {
            sGalleta.style.backgroundColor = ""
        }
        if (sCanvas != undefined) {
            sCanvas.style.backgroundColor = ""
            sCanvas.style.color = ""
        }
        if (sCard != undefined) {
            sCard.forEach(function (cards) {
                cards.style.backgroundColor = ""
                cards.style.color = ""
                cards.style.border = ""
            })
        }
        oscuro.src = "../imagenes/luna.png"
        if (sNav != undefined) {
            sNav.style.backgroundColor = ""
        }
    }
}



