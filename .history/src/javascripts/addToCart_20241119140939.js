import { displayImage } from "./image.js";


export function createAddToCartButton(){
  const content = document.querySelector('.content');
  const img = displayImage("/images/icon-cart.svg");
  const button = document.createElement('button');
  button.textContent = 'Add to Cart';
  button.appendChild(img);
  content.insertAdjacentElement('beforeend',button);
}