const sBody = document.querySelector("body")
const sMain = document.querySelector("main")
const sGalleta = document.querySelector("#cookie")
const sCanvas = document.querySelector(".offcanvas")
const darkTable = document.querySelector("#lista")
const sCard = document.querySelectorAll(".card")
const oscuro = document.querySelector("#oscuro")
const intro = document.querySelector("#autoClose")
const filtro = document.querySelectorAll("div.nav-item button.dropdown-toggle")

if (localStorage.getItem("dark") === null) {
    localStorage.setItem("dark", "true")
}
lightTheme()
eventsDarkMode()
function eventsDarkMode() {
    oscuro.addEventListener('click', setLight)
    oscuro.addEventListener('mouseover', () => {
        const origen = oscuro.src.split('/').pop();
        if (origen === "luna.png") {
            oscuro.src = "../imagenes/luna.gif"
        } else if (origen === "sol.png") {
            oscuro.src = "../imagenes/sol.gif"
        }
    })
    oscuro.addEventListener('mouseout', () => {
        const origen = oscuro.src.split('/').pop();
        if (origen === "luna.gif") {
            oscuro.src = "../imagenes/luna.png"
        } else if (origen === "sol.gif") {
            oscuro.src = "../imagenes/sol.png"
        }
    })
}
function setLight() {
    if (localStorage.getItem("dark") == "true") {
        localStorage.setItem("dark", "false")
    } else {
        localStorage.setItem("dark", "true")
    }
    lightTheme()
}
function lightTheme() {
    if (localStorage.getItem("dark") == "false") {
        sBody.style.backgroundColor = 'rgb(211, 255, 223)'
        sBody.style.transition = '0.3s ease'
        sMain.style.backgroundColor = 'rgb(211, 255, 223)'
        sMain.style.color = "black"
        sMain.style.transition = '0.3s ease'
        if (sGalleta != undefined) {
            sGalleta.style.backgroundColor = 'rgb(211, 255, 223)'
            sGalleta.style.color = "white"
            sGalleta.style.transition = '0.3s ease'
        }
        if (sCanvas != undefined) {
            sCanvas.style.backgroundColor = 'rgb(211, 255, 223)'
            sCanvas.style.color = "black"
            darkTable.classList.remove("table-dark")
            sCanvas.style.transition = '0.3s ease'
        }
        if (sCard != undefined) {
            sCard.forEach(function (cards) {
                cards.style.backgroundColor = 'rgb(211, 255, 223)'
                cards.style.color = "black"
                cards.style.border = "2px solid gray !important"
                cards.style.transition = '0.3s ease'
            })
        }
        oscuro.src = "../imagenes/sol.png"
        if (filtro != undefined) {
            filtro.forEach(function (filtros) {
                filtros.classList.add("text-dark")
                sBody.style.transition = '0.3s ease'
            })
        }
        if(intro != undefined){
            intro.style.color = "white"
        }
    } else {
        sBody.style.backgroundColor = ""
        sBody.style.transition = '0.3s ease'
        sMain.style.backgroundColor = ""
        sMain.style.color = ""
        sMain.style.transition = '0.3s ease'
        if (sGalleta != undefined) {
            sGalleta.style.backgroundColor = ""
            sGalleta.style.color = ""
            sGalleta.style.transition = '0.3s ease'
        }
        if (sCanvas != undefined) {
            sCanvas.style.backgroundColor = ""
            sCanvas.style.color = ""
            darkTable.classList.add("table-dark")
        }
        if (sCard != undefined) {
            sCard.forEach(function (cards) {
                cards.style.backgroundColor = ""
                cards.style.color = ""
                cards.style.border = ""
                cards.style.transition = '0.3s ease'
            })
        }
        oscuro.src = "../imagenes/luna.png"
        if (filtro != undefined) {
            filtro.forEach(function (filtros) {
                filtros.classList.remove("text-dark")
                filtros.style.transition = '0.3s ease'
            })
        }
        if(intro != undefined){
            intro.style.color = ""
        }
    }
}

function solLuneToGif() {
    console.log("encima")
    if (oscuro.src == "../imagenes/luna.png") {
        oscuro.src = "../imagenes/luna.gif"
    } else if (oscuro.src === "../imagenes/sol.png") {
        oscuro.src = "../imagenes/sol.gif"
    }
}
function solLuneToPNG() {
    if (oscuro.src == "../imagenes/luna.gif") {
        oscuro.src = "../imagenes/luna.png"
    } else if (oscuro.src == "../imagenes/sol.gif") {
        oscuro.src = "../imagenes/sol.png"
    }
}


