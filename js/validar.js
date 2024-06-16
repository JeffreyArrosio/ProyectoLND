const formulario = document.querySelector("form")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
function validarSign(event) {
    let usuario = document.getElementById("usuario")
    let cemail = document.getElementById("cemail")
    let cpass = document.getElementById("cpass")
    if (usuario.value.trim() == '') {
        event.preventDefault()
        limpiarCampo(usuario.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `CAMPO OBLIGATORIO`
        usuario.parentElement.appendChild(mensaje)
    } else if (usuario.value.trim().length < 3) {
        event.preventDefault()
        limpiarCampo(usuario.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `EL USUARIO DEBE TENER MINIMO 4 CARACTERES`
        usuario.parentElement.appendChild(mensaje)
    } else {
        limpiarCampo(usuario.parentElement)
    }
    if (email.value.trim() == '') {
        event.preventDefault()
        limpiarCampo(email.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `CAMPO OBLIGATORIO`
        email.parentElement.appendChild(mensaje)
    } else if (!validarEmail(email.value.trim())) {
        event.preventDefault()
        limpiarCampo(email.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `TIPO DE CORREO INVALIDO`
        email.parentElement.appendChild(mensaje)
    } else {
        limpiarCampo(email.parentElement)
    }
    if (cemail.value.trim() == '') {
        event.preventDefault()
        limpiarCampo(cemail.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `CAMPO OBLIGATORIO`
        cemail.parentElement.appendChild(mensaje)
    } else if (!validarEmail(cemail.value.trim())) {
        event.preventDefault()
        limpiarCampo(cemail.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `TIPO DE CORREO INVALIDO`
        cemail.parentElement.appendChild(mensaje)
    } else {
        limpiarCampo(cemail.parentElement)
    }
    if (pass.value.trim() == '') {
        event.preventDefault()
        limpiarCampo(pass.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `CAMPO OBLIGATORIO`
        pass.parentElement.appendChild(mensaje)
    } else if (!validarPass(pass.value.trim())) {
        event.preventDefault()
        limpiarCampo(pass.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `LA CONTRASÑA DEBE TENER UNA MAYUSCULA, UNA MINUSCULA, UN NUMERO Y UN CARACTER (.-_,) Y 10 CARACTERES MINIMO`
        pass.parentElement.appendChild(mensaje)
    } else {
        limpiarCampo(pass.parentElement)
    }
    if (cpass.value.trim() == '') {
        event.preventDefault()
        limpiarCampo(cpass.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `CAMPO OBLIGATORIO`
        cpass.parentElement.appendChild(mensaje)
    } else if (!validarPass(cpass.value.trim())) {
        event.preventDefault()
        limpiarCampo(cpass.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `LA CONTRASÑA DEBE TENER UNA MAYUSCULA, UNA MINUSCULA, UN NUMERO Y UN CARACTER (.-_,)  Y 10 CARACTERES MINIMO`
        cpass.parentElement.appendChild(mensaje)
    } else {
        limpiarCampo(cpass.parentElement)
    }
    if ((email.value != cemail.value)) {
        event.preventDefault()
        let existe = document.querySelector('.alert-danger')
        if (existe) {
            existe.remove()
        }
        let alert = document.createElement("div")
        alert.classList.add('alert', 'alert-danger', 'alert-dismissible', 'mt-3', 'mb-3')
        alert.innerHTML = `<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    Los correos deben ser iguales`
        formulario.appendChild(alert)
    } else if ((pass.value != cpass.value)) {
        event.preventDefault()
        let existe = document.querySelector('.alert-danger')
        if (existe) {
            existe.remove()
        }
        let alert = document.createElement("div")
        alert.classList.add('alert', 'alert-danger', 'alert-dismissible', 'mt-3', 'mb-3')
        alert.innerHTML = `<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    Las contraseñas deben ser iguales`
        formulario.appendChild(alert)
    }
}
function limpiarCampo(evento) {
    let limpiar = evento.querySelector(".bg-danger")
    if (limpiar) {
        limpiar.remove()
    }
}
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const resultado = regex.test(email);
    return resultado;
}

function validarPass(pass) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[.-_,])(?=.{10,}).*$/;
    return regex.test(pass);
}

function validarLogin(event) {
    if (email.value.trim() == '') {
        event.preventDefault()
        limpiarCampo(email.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `CAMPO OBLIGATORIO`
        email.parentElement.appendChild(mensaje)
    } else if (!validarEmail(email.value.trim())) {
        event.preventDefault()
        limpiarCampo(email.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `TIPO DE CORREO INVALIDO`
        email.parentElement.appendChild(mensaje)
    } else {
        limpiarCampo(email.parentElement)
    }
    if (pass.value.trim() == '') {
        event.preventDefault()
        limpiarCampo(pass.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `CAMPO OBLIGATORIO`
        pass.parentElement.appendChild(mensaje)
    } else if (!validarPass(pass.value.trim())) {
        event.preventDefault()
        limpiarCampo(pass.parentElement)
        let mensaje = document.createElement("div")
        mensaje.classList.add("bg-danger")
        mensaje.innerHTML = `LA CONTRASÑA DEBE TENER UNA MAYUSCULA, UNA MINUSCULA, UN NUMERO Y UN CARACTER (.-_,) Y 10 CARACTERES MINIMO`
        pass.parentElement.appendChild(mensaje)
    } else {
        limpiarCampo(pass.parentElement)
    }
}