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
  const cart = document.querySelector('.item-quantity');
  if(quantity === 0){
    console.log(quantity);
    cart.classList.remove('item-quantity');
    cart.textContent = '';
    return;
  }
  
  cart.textContent = quantity;

}

{/* <div class="inside-cart-item">
<img class="inside-cart-item-image" src="/images/image-product-1-thumbnail.jpg" alt="">
<div class="inside-cart-item-info">
  <div class="inside-cart-item-info-title">Fall Limited Edition Sneakers</div>
  <div class="inside-cart-item-info-price">
    <div class="inside-cart-item-info-price-with-quantity">$125.00 x 3</div>
    <div class="inside-cart-item-info-price-sum">$375.00</div>
  </div>
</div>
<div class="inside-cart-item-button"><img src="/images/icon-delete.svg" alt=""></div>
</div>
<button>Checkout</button> */}
