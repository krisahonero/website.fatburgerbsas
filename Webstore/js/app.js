// Estado del carrito
let cart = [];

// Selección de elementos clave
const cartIconCount = document.querySelector("#btn-abrir-modal span"); // Cantidad en el icono
const listCart = document.getElementById("list-cart"); // Lista de productos en el carrito
const modalElement = document.getElementById("modal"); // Ventana del carrito
const subtotalElement = document.querySelector(".white-space"); // Subtotal y envío

// Función para agregar un producto al carrito
function add(productName, productPrice) {
  // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.name === productName);

if (existingProduct) {
    // Incrementar cantidad si ya está
    existingProduct.quantity += 1;
    existingProduct.totalPrice += productPrice;
} else {
    // Agregar nuevo producto
    cart.push({
        name: productName,
        price: productPrice,
        quantity: 1,
        totalPrice: productPrice
    });
}

  // Actualizar UI
    updateCartUI();
}

// Función para actualizar el carrito
function updateCartUI() {
  // Mostrar número de productos en el icono del carrito
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
cartIconCount.textContent = totalItems;

  // Renderizar productos en la ventana del carrito
  listCart.innerHTML = ""; // Limpiar la lista
cart.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
    <div class="name">${item.name}</div>
    <div class="totalPrice">$${item.totalPrice}</div>
    <div class="quantity">
        <span class="minus" onclick="remove('${item.name}')">-</span>
        <span>${item.quantity}</span>
        <span class="plus" onclick="add('${item.name}', ${item.price})">+</span>
    </div>
    `;
    listCart.appendChild(itemElement);
    document.getElementById("checkout").innerHTML= `Total $${total}`
});

  // Calcular y mostrar subtotal y total
    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    subtotalElement.innerHTML = `
    Subtotal: $${subtotal.toFixed(2)}<br>
    Envío: $0
`;
}

// Función para eliminar un producto o disminuir la cantidad
function remove(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        const product = cart[productIndex];

    // Reducir cantidad o eliminar si llega a 0
    product.quantity -= 1;
    product.totalPrice -= product.price;
    if (product.quantity <= 0) {
        cart.splice(productIndex, 1);
    }
}

  // Actualizar UI
    updateCartUI();
}

// Abrir y cerrar el modal
// const btnAbrirModalElement = document.getElementById("#btn-abrir-modal");
// const btnCerrarModalElement = document.getElementById("#btn-cerrar-modal");

// btnAbrirModal.addEventListener("click", () => modal.showModal());
// btnCerrarModal.addEventListener("click", () => modal.close());

const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

const abrirModal = document.querySelector("#abrir-modal");
// const window = document.querySelector("#window")


btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})
// abrirModal.addEventListener("click",()=>{
//     window.showWindow();
// })
btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})

// Función para redirigir a WhatsApp con el mensaje del carrito
function redirectToWhatsApp() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // Crear el mensaje
    let message = "Tu Carrito:\n\n";
    cart.forEach(item => {
        message += `-${item.name} (x${item.quantity}): $${item.totalPrice.toFixed(2)}\n`;
    });

    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    message += `\n*Subtotal: $${subtotal.toFixed(2)}*\n`;
    message += "Envío: $0\n";
    message += `*Total: $${subtotal.toFixed(2)}*\n`;

    // Número de WhatsApp (reemplázalo con el tuyo)
    const phoneNumber = "5491127716150";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}

// Botón de Checkout
const btnCheckout = document.getElementById("checkout");
btnCheckout.addEventListener("click", redirectToWhatsApp);