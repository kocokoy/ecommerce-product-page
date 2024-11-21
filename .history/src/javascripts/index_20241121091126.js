import '../styles/style.css';
import '../styles/header.css';
import '../styles/carousel.css';
import '../styles/cart.css';
import '../styles/menu-bar.css';
import '../styles/item-info.css';
import '../styles/add-to-cart.css';
import {createHeader} from './header.js';
import {createImageCarousel} from './carousel.js';
import {createdProductInfo} from './info.js';
import {createAddToCartButton} from './addToCart.js';

createHeader();
createImageCarousel();
createdProductInfo();
createAddToCartButton();
