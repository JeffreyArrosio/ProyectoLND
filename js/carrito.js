
const carro = document.querySelector("#carro")
const borrar = document.querySelector("#borrar")
const descargar = document.querySelector("#descargar")
const cargarEquipo = document.querySelector("#cargarEquipo")
const producto = document.querySelector("#producto")
const borrarLinea = document.querySelector(".borrarLinea")
const cuerpoTabla = document.querySelector("#cuerpoTabla")
let carrito = []


eventos();
function eventos() {
    borrar.addEventListener('click', () => {
        carrito = [];
        localStorage.clear() // 
        carritoHTML()
    })
    producto.addEventListener('click', agregar)
    carro.addEventListener('click', borrarProducto)
    document.addEventListener('DOMContentLoaded', () => {
        carrito = JSON.parse(localStorage.getItem('carrito')) || []
        carritoHTML()
    })
    // descargar.addEventListener('click', compraJsonDown)
    // cargarEquipo.addEventListener('click', leerArchivo)
}

function agregar(evento) {
    if (evento.target.classList.contains("btn-success")) {
        const seleccion = evento.target.parentElement.parentElement
        verProducto(seleccion)
    }else{
        console.log("no manito")
    }
}

function verProducto(prod) {
    const infoProd = {
        Nombre: prod.querySelector("h4.card-title").textContent,
        precio: parseFloat(prod.querySelector("h4.card-title + p").textContent),
        cantidad: 1,
        id: prod.querySelector("button").getAttribute("data-id"),
    }
    if (carrito.some(prod => prod.id === infoProd.id)) {
        carrito.map(prod => {
            if (prod.id === infoProd.id) {
                prod.cantidad++
                return prod
            } else {
                return prod
            }
        })
    } else {
        carrito.push(infoProd)
    }
    carritoHTML()
}

function borrarProducto(evento) {
    if (evento.target.classList.contains("borrarLinea")) {
        const prodID = e.target.getAttribute("data-id")
        compra = compra.filter(prod => prod.id !== prodID)
        carritoHTML()
    }
}

function carritoHTML() {
    limpiarHTML();
    carrito.forEach(prod => {
        let tabla = document.createElement("tr")
        tabla.innerHTML =
            `
            <td class="h5"> ${prod.nombre} </td>
            <td class="h5"> ${prod.precio}€ </td>
            <td class="h5"> ${prod.cantidad} </td>
            <td class="h5"> ${prod.precio * prod.cantidad}€ </td>
            <td class="h5"> <a href="#" class="borrarLinea" data-id="${prod.id}">X</a> </td>  
        `
        cuerpoTabla.appendChild(tabla)
        guardarLocal(); 
    })
}

function guardarLocal() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function limpiarHTML() {
    cuerpoTabla.innerHTML = "";
}