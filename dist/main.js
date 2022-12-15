// import { productsList } from "./products";
import { getProductsFromFireStore } from "./services/servicesFirebase";
import { addDoc, collection } from "firebase/firestore";



//carrito
const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')
/*
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})*/

/*

*/



//------renderizado de productos
function displayProducts(products){
    let productHTML = '';
    products.forEach(element => {
        productHTML +=
       `<div class="pro">
                <img class="shop-item-image" src="${element.image}" alt="" />
                <div class="des">
                    <span>${element.span}</span>
                    <h5 class="shop-item-title">${element.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4 class="shop-item-price">ARS${element.price}</h4>
                </div>
                <button class="cart-prod"type="button">Añadir</button>
        </div>`
        
        
    });
    document.getElementById("product-container").innerHTML = productHTML;
    
}
/*<button class="cart-prod" onclick="${add}(${element.id}, ${element.price})"><img src="imagenes/cart-prod.png" alt=""></button>*/

window.onload = async() =>{
    //convierto la respuesta en .json de cada lista de productos
    const products = await getProductsFromFireStore();
    displayProducts(products);
    
}