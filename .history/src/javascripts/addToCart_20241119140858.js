import { displayImage } from "./image.js";


export function createAddToCartButton(){
  const content = document.querySelector('.content');
  const img = displayImage("/images/icon-cart.svg");
  const button = document.createElement('button');
  button.appendChild(img);
  button.textContent = 'Add to Cart';

  content.insertAdjacentElement('beforeend',button);
}