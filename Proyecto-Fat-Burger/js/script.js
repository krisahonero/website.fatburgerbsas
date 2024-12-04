/*--------------------------------------------
                  NAVBAR
---------------------------------------------*/ 

const mobileMenu = document.getElementById('mobileMenu');
const menuToggle = document.querySelector('.menu-toggle');

// Mostrar/ocultar el menú cuando se hace clic en el botón
menuToggle.addEventListener('click', function(event) {
    mobileMenu.classList.toggle('active'); // Alterna la clase 'active'
    event.stopPropagation(); // Evita que el clic en el botón cierre el menú
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
  });
});




