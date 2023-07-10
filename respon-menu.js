
addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('.btn-menu');
    if (boton){
        boton.addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('desplecable');
        })
    }
    const quitarMenu = document.querySelectorAll('.menu a');
    console.log(quitarMenu)
    if (quitarMenu){
        for (let i=1; i<7; i++) {
            quitarMenu[i].addEventListener('click', () => {
                const menu = document.querySelector('.menu');
                menu.classList.toggle('desplecable');
            }) 
        }
    }
    addEventListener('scroll', () => {
        const menu = document.querySelector('.menu');
            menu.classList.remove('desplecable');
    })
}) 
