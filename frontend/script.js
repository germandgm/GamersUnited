//variables para los elementos del documento html

import { dataCollection } from "../services/servicesFirebase";

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

let carrito = [];
let total = 0;

function add(productId, price) {
    console.log(productId, price);
    carrito.push(productId);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

async function pay() {
    const productList = await (await fetch("/api/pay",{
        method:"post",
        body: JSON.stringify(carrito),
        headers: {
            "Content-Type": "application/json"
        }
    //window.alert(products.join(", \n"));
})).json();
}
//------Cargar de productos
function displayProducts(productList){
    let productHTML = '';
    productList.forEach(element => {
        productHTML +=
        `<div class="pro">
                <img src="${element.image}" alt="" />
                <div class="des">
                    <span>${element.span}</span>
                    <h5>${element.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>ARS${element.price}</h4>
                </div>    
            <button class="cart-prod" onclick="add(${element.id}, ${element.price})"><img src="imagenes/cart-prod.png" alt=""></button>
        </div>`
    });
    document.getElementById("product-container").innerHTML = productHTML;
}


window.onload = async() =>{
    //convierto la respuesta en .json de cada lista de productos

    const productList = await (await fetch("/api/products")).json();
    await dataCollection();

    //llamado de funciones

    displayProducts(productList);
    
}