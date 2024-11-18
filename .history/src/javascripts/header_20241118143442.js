import {displayImage} from './image.js';

export function createHeader(){
  const picts  = ['/images/iconmenu.svg','/images/icon-cart.svg','/images/image-avatar.png'];
  const titleDiv = document.querySelector('.header-title');
  const imgDiv = document.querySelectorAll('.header-img');
  titleDiv.textContent = 'sneakers';
    imgDiv.forEach((div,i) => {
      div.appendChild(displayImage(picts[i]));
      addIdtoHeaderImage(div,i);
    })


  }

function addIdtoHeaderImage(div,i){
  div.setAttribute('data-header-id',i);
  const headerId = div.getAttribute("data-header-id");
  div.addEventListener('click', () => {
    headerImagesInteract(headerId);
  })
}

function headerImagesInteract(headerId){
  if(headerId === '1'){
    const cartElement = document.querySelector('.cart');
    const cart = cartElement.classList;
    cart.toggle('cart-show');
  }
  if(headerId === '0'){
    const menuBarElement = document.querySelector('.menu-bar');
    const menu = menuBarElement.classList;
    menu.add('menu-bar-show');
    closeMenuBar();
    
  }
}

function closeMenuBar(menuBarElement){
  const img = menuBarElement.querySelector('img');
  img.addEventListener('click' , () => {
    menu.remove('menu-bar-show');
  })
}



  