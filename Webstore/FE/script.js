let products = [];
let total = 0;
let counter = 0;

function add(product, price){
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML= `Total $${total}`
}

function displayProducts (productList) {
    let productHTML = "";
    productList.forEach(element => {
        productHTML +=
         `<div class="product-container">
                <div>
                    <img src=${element.image} class="foto-burger" alt="ComboSimpleFatCheddar">
                    <div class="text">
                        <h3>${element.name}</h3>
                        <p class="description">${element.description}</p>
                        <div class="precio">
                             <span>$${element.price}</span>
                            <button class="shape"onclick="add(${element.id},${element.price})">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
    });
    document.getElementById("page-content").innerHTML = productHTML;

}

window.onload = async() => {
    const productList = await(await fetch("/api/products")).json();
    console.log(productList);
    displayProducts(productList);
    // window.location.href = 'https://api.whatsapp.com/send?phone=5491127716150&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + productList
}


// function show(productList)

const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");


btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})
btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})

// let cart = [];

// // Selección de elementos clave
// const cartIconCount = document.querySelector("#btn-abrir-modal span"); // Cantidad en el icono
// const listCart = document.getElementById("list-cart"); // Lista de productos en el carrito
// const modalElement = document.getElementById("modal"); // Ventana del carrito
// const subtotalElement = document.querySelector(".white-space"); // Subtotal y envío
// const totalCarrito = document.querySelector("#checkout")

// // Función para agregar un producto al carrito
// function addCart(productName, productPrice, productImage) {
//   // Verificar si el producto ya está en el carrito
//     const existingProduct = cart.find(item => item.name === productName);
//     const image = cart.find(item => item.image === productImage);
// if (existingProduct) {
//     // Incrementar cantidad si ya está
//     existingProduct.quantity += 1;
//     existingProduct.totalPrice += productPrice;
// } else {
//     // Agregar nuevo producto
//     cart.push({
//         image: productImage,
//         name: productName,
//         price: productPrice,
//         quantity: 1,
//         totalPrice: productPrice
//     });
// }

//   // Actualizar UI
//     updateCartUI();
// }

// // Función para actualizar el carrito
// function updateCartUI() {
//   // Mostrar número de productos en el icono del carrito
// const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
// cartIconCount.textContent = totalItems;

//   // Renderizar productos en la ventana del carrito
//   listCart.innerHTML = ""; // Limpiar la lista
// cart.forEach(item => {
//     const itemElement = document.createElement("div");
//     itemElement.classList.addCart("item");
//     itemElement.innerHTML = `
//     <div class="image"><img src="${item.image}" alt="foto-burger"></div>
//     <div class="name">${item.name}</div>
//     <div class="totalPrice">$${item.totalPrice}</div>
//     <div class="quantity">
//         <span class="minus" onclick="remove('${item.name}')">-</span>
//         <span>${item.quantity}</span>
//         <span class="plus" onclick="addCart('${item.name}', ${item.price})">+</span>
//     </div>
//     `;
//     listCart.appendChild(itemElement);
// });

//   // Calcular y mostrar subtotal y total
//     const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
//     subtotalElement.innerHTML = `
//     Subtotal: $${subtotal.toFixed(2)}<br>
//     Envío: $0
//     `;
// }

// // Función para eliminar un producto o disminuir la cantidad
// function remove(productName) {
//     const productIndex = cart.findIndex(item => item.name === productName);
//     if (productIndex !== -1) {
//         const product = cart[productIndex];

//     // Reducir cantidad o eliminar si llega a 0
//     product.quantity -= 1;
//     product.totalPrice -= product.price;
//     if (product.quantity <= 0) {
//         cart.splice(productIndex, 1);
//     }
// }

//   // Actualizar UI
//     updateCartUI();
// }

// function pay(){
//     // window.alert(products.join(", \n"))
//     // const productList = await(await fetch("/api/products")).json();}
//     console.log(products);
//     window.location.href = 'https://api.whatsapp.com/send?phone=5491127716150&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + products;
// }
function pay(){
    // window.alert(products.join(", \n"))
    // const productList = await(await fetch("/api/products")).json();}
    console.log(products);
    window.location.href = 'https://api.whatsapp.com/send?phone=5491127716150&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + products;
}