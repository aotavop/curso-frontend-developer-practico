const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuCarrito = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoMenu);

function toggleDesktopMenu() {
  if (!menuCarrito.classList.contains("inactive")) {
    toggleCarritoMenu();
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  if (!menuCarrito.classList.contains("inactive")) {
    toggleCarritoMenu();
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoMenu() {
  if (!mobileMenu.classList.contains("inactive")) {
    toggleMobileMenu();
  }
  if (!desktopMenu.classList.contains("inactive")) {
    toggleDesktopMenu();
  }
  menuCarrito.classList.toggle("inactive");
}
