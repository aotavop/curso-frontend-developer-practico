const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {
  if (!menuCarrito.classList.contains('inactive')) {
    toggleCarritoMenu();
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  if (!menuCarrito.classList.contains('inactive')) {
    toggleCarritoMenu();
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu() {
  if (!mobileMenu.classList.contains('inactive')) {
    toggleMobileMenu();
  }
  if (!desktopMenu.classList.contains('inactive')) {
    toggleDesktopMenu();
  }
  menuCarrito.classList.toggle('inactive');
}

const productList = [];

productList.push({
  name: 'Bike',
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  price: 120,
});
productList.push({
  name: 'Moto',
  image:
    'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=800',
  price: 1000,
});

function renderProducts(arr) {
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement('figure');
    const addIcon = document.createElement('img');
    addIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(addIcon);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
    console.log(product);
  }
}

renderProducts(productList);
