
eventAnimation()
function eventAnimation() {
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('.animacion a img')
        images.forEach((image) => {
            image.addEventListener('mouseover', () => {
                image.classList.add('agrandar')
            })
            image.addEventListener('mouseout', () => {
                image.classList.remove('agrandar')
            })
        })
    })
}

