
//NOTA: PARA PODER HACER USO DEL CARRITO, ES NECESARIO USAR EL CONTENIDO DE LA BASE DE DATOS videowebos.sql, SI
// NO, NO SE MOSTRARÁ

const carro = document.querySelector("#carro")      //donde se mostrará el carrito
const borrar = document.querySelector("#borrar")    //borra el carrito por completo
const descargar = document.querySelector("#descargar")  //descargar el json
const cargarEquipo = document.querySelector("#cargarEquipo")//para cargar el json
const producto = document.querySelector("#producto") //donde esta el producto a añadir
const borrarLinea = document.querySelector(".borrarLinea")  //borrar un producto
const borrarCantidad = document.querySelector(".borrarCantidad")    //borrar unidad
const cuerpoTabla = document.querySelector("#cuerpoTabla")  //la tabla que condendrá el carrido
const numero = document.querySelector("#numero")    //para el carrito, aparece el número de elementos en el
const total = document.querySelector("#total")      //donde se incluirá el total
const factura = document.querySelector("#factura")  //página donde se muestra la factura con el monto total
let carrito = []    //el array que contendrá el carrito
let valor = 0  //para el badge del carrito
let cantTotal = 0 //para mostrar el precio total del carrito

eventos();
function eventos() {
    if (factura != null) { //para la factura en sí, solo se necesita su estructura y su borrado
        document.addEventListener('DOMContentLoaded', () => {
            carrito = JSON.parse(localStorage.getItem('carrito')) || []
            creaFactura()
        })
        borrar.addEventListener('click', () => {
            carrito = [];
            localStorage.clear() // 
            actualizaCarrito()
        })
    } else { //el carrito en si
        document.addEventListener('DOMContentLoaded', () => {
            carrito = JSON.parse(localStorage.getItem('carrito')) || []
            actualizaCarrito()
        })
        borrar.addEventListener('click', () => {
            carrito = [];
            localStorage.clear() // 
            actualizaCarrito()
        })
        carro.addEventListener('click', borrarProducto)
        carro.addEventListener('click', agregarUnidad)
        carro.addEventListener('click', borrarUnidad)
        descargar.addEventListener('click', descargaCompra)
        cargarEquipo.addEventListener('click', archivo)
        if (producto != undefined) {  //para poder mostrala en toda la página donde no esté el producto
            producto.addEventListener('click', agregar)
        }
    }
}
//agrega el elemento, el boton del producto
function agregar(evento) {
    if (evento.target.classList.contains("btn-success")) {
        const seleccion = evento.target.parentElement.parentElement.parentElement
        verProducto(seleccion)
    }
}
//el objeto que contiene los productos, si no está, se añade, si está se suma
function verProducto(prod) {
    const infoProd = {
        nombre: prod.querySelector("h4").textContent,
        precio: parseFloat(prod.querySelector("h4 + p").textContent),
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
        carrito.unshift(infoProd)
    }
    actualizaCarrito()
}
//borra un producto del carrito
function borrarProducto(evento) {
    if (evento.target.classList.contains("borrarLinea")) {
        const prodID = evento.target.getAttribute("data-id")
        carrito = carrito.filter(prod => prod.id !== prodID)
        actualizaCarrito()

    }
}
//suma 1 a la cantidad de un producto
function agregarUnidad(evento) {
    if (evento.target.classList.contains("agregarCantidad")) {
        const prodID = evento.target.getAttribute("data-id")
        carrito.map(prod => {
            if (prod.id === prodID) {
                prod.cantidad++
                return prod
            }
        })
        actualizaCarrito()
    }
}
//resta 1 a la cantidad de un producto
function borrarUnidad(evento) {
    if (evento.target.classList.contains("borrarCantidad")) {
        const prodID = evento.target.getAttribute("data-id")
        carrito.map(prod => {
            if (prod.id === prodID) {
                if (prod.cantidad != 1) {
                    prod.cantidad--
                    return prod
                }
            }
        })
        actualizaCarrito()
    }
}
//muestra y actualiza el carrito cuando se hace un CRUD, ademas de inidcar el número de elementos del mismo
function actualizaCarrito() {
    cuerpoTabla.innerHTML = "";
    valor = 0
    cantTotal = 0
    carrito.forEach(prod => {
        let tabla = document.createElement("tr")
        tabla.innerHTML =
            `
            <td class="h6"> ${prod.nombre} </td>
            <td class="h6"> ${prod.precio}€ </td>
            <td class="h6"> ${prod.cantidad} </td>
            <td class="h6"> ${prod.precio * prod.cantidad}€ </td>
            <td class="h6"> <a href="#" class="agregarCantidad text-decoration-none btn btn-success" data-id="${prod.id}">+</a> </td>  
            <td class="h6"> <a href="#" class="borrarCantidad text-decoration-none btn btn-danger" data-id="${prod.id}">-</a> </td>  
            <td class="h6"> <a href="#" class="borrarLinea text-decoration-none btn btn-danger" data-id="${prod.id}">X</a> </td>  
        `
        cuerpoTabla.appendChild(tabla)
        valor++
        numero.innerHTML = valor
        guardarLocal();
    })
}
//Muestra un carrito adaptado como factura, con el precio final
function creaFactura() {
    factura.innerHTML = "";
    let cantTotal = 0
    if (carrito.length === 0) {
        let div = document.createElement("div")
        div.innerHTML = `<img class="img-fluid" src="../imagenes/carritoVacio.png" alt="carroTriste">`
        factura.appendChild(div)
    } else {
        carrito.forEach(prod => {
            let div = document.createElement("div")
            div.classList.add("mb-5")
            div.innerHTML =
                `
                <h1 class="display-4">${prod.nombre}</h1>
                <p class="h5"> ${prod.precio}€ X ${prod.cantidad} =  ${prod.precio * prod.cantidad}€</p>
            `
            cantTotal += prod.precio * prod.cantidad
            factura.appendChild(div)
            total.innerHTML = `Precio Final: ${cantTotal}€`
            guardarLocal();
        })
    }

}
//localstorage, guardar el carrito
function guardarLocal() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
//descargar carrito como json y añadirle las funciones al elemento
function descargaCompra() {
    const carritoJSON = JSON.stringify(carrito);
    const blob = new Blob([carritoJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'carrito.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
//carga un json desde el equipo y actualiza el carrito
function archivo() {
    const input = document.getElementById('archivo');
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function (evento) {
            const contenido = evento.target.result;
            try {
                const cadenaJSON = JSON.parse(contenido);
                localStorage.setItem('carrito', JSON.stringify(cadenaJSON));
                location.reload();
            } catch (error) {
                console.error('Error al parsear el archivo JSON:', error);
                alert('El archivo seleccionado no es un JSON válido.');
            }
        };
        reader.readAsText(file);
    } else {
        alert("Por favor selecciona un archivo primero.");
    }
}