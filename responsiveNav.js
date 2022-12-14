const close = document.getElementById('close');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

//Abrir la navbar desde el telefono usando el boton hamburguesa
if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

//cerrar la barra de navegacion con el boton seleccionado

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

