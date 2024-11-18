import {displayImage} from './image.js';

export function createHeader(){
  const picts  = ['/images/iconmenu.svg','/images/icon-cart.svg','/images/image-avatar.png'];
  const titleDiv = document.querySelector('.header-title');
  const imgDiv = document.querySelectorAll('.header-img');
  titleDiv.textContent = 'sneakers';
    imgDiv.forEach((div,i) => {
      div.setAttribute('data-header-id',i);
      div.appendChild(displayImage(picts[i]));
      const headerId = div.getAttribute("data-header-id");
      div.addEventListener('click', () => {
        toggleCartContain(headerId);
      })
    })
  }

function toggleCartContain(headerId){
  if(headerId === '1'){
    const cartElement = document.querySelector('.cart');
    const cart = cartElement.classList;
    cart.toggle('cart-show');
  }
}

  