import { displayImage } from "./image.js";


export function createAddToCartButton(){
  const content = document.querySelector('.content');
  const button = document.createElement('button');
  const div = document.createElement('div');
  const img = displayImage("/images/icon-cart.svg");
  div.classList.add('add-to-cart-button-container');
  button.classList.add('add-to-cart-button');
  button.textContent = 'Add to Cart';
  button.appendChild(img);
  div.appendChild(button);
  content.insertAdjacentElement('beforeend',div);

  addtoCartCountUpdate();
}


function addtoCartCountUpdate(){
  const test = document.querySelector('.header-cart');
  const div = document.createElement('div');
  div.textContent = '1';
  test.appendChild(div);
}
