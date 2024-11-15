import {displayImage} from './image.js';

export function createHeader(){
    const header = document.getElementsByTagName('header')[0];
    const menuImg = displayImage("/images/iconmenu.svg");
    const cartImg = displayImage("/images/icon-cart.svg");
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('header-title');
    titleDiv.textContent = 'sneakers';
    header.appendChild(menuImg);
    header.appendChild(titleDiv);
    header.appendChild(cartImg);
  }