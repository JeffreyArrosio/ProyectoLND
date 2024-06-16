document.addEventListener('DOMContentLoaded', (event) => {
    const p1 = document.getElementById("p1")
    const p2 = document.getElementById("p2")
    const p3 = document.getElementById("p3")
    const p4 = document.getElementById("p4")
    const p5 = document.getElementById("p5")
    const p6 = document.getElementById("p6")
    const p7 = document.getElementById("p7")
    const p8 = document.getElementById("p8")
    const p9 = document.getElementById("p9")
    const modal = new bootstrap.Modal(document.getElementById('autoClose'), {
        keyboard: false
    });
    modal.show();
    setTimeout(() => {
        p1.classList.remove("d-none")
    },200)
    setTimeout(() => {
        p2.classList.remove("d-none")
    },450)
    setTimeout(() => {
        p3.classList.remove("d-none")
    },700)
    setTimeout(() => {
        p4.classList.remove("d-none")
    },950)
    setTimeout(() => {
        p5.classList.remove("d-none")
    },1200)
    setTimeout(() => {
        p6.classList.remove("d-none")
    },1550)
    setTimeout(() => {
        p7.classList.remove("d-none")
    },1700)
    setTimeout(() => {
        p8.classList.remove("d-none")
    },1950)
    setTimeout(() => {
        p9.classList.remove("d-none")
    },2200)
    setTimeout(() => {
        modal.hide();
    }, 3000);
});