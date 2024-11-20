import { displayImage } from "./image.js";
import { quantity } from "./infoQuantityInteract.js";


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

  addtoCartButtonClicked();
}


function addtoCartButtonClicked(){
  const button = document.querySelector('.add-to-cart-button');
  button.addEventListener('click', () => {
    addtoCartCountUpdate(quantity);
  })
}

function addtoCartCountUpdate(quantity){
  const cart = document.querySelector('.header-cart');
  const div = document.createElement('div');
  div.classList.add('item-quantity');
  if(quantity === 0){
    console.log(quantity);
    
    return;
  }
    div.textContent = quantity;
    cart.appendChild(div);
}
