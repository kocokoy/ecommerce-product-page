import {displayImage} from './image.js';

export function createHeader(){
    const header = document.getElementsByTagName('header')[0];
    const titleDiv = document.createElement('div');
    const menuImg = displayImage("/images/iconmenu.svg");
    const cartImg = displayImage("/images/icon-cart.svg");
    const avatarImg = displayImage("/images/image-avatar.png");
    titleDiv.classList.add('header-title');
    titleDiv.textContent = 'test';
    header.appendChild(menuImg);
    header.appendChild(titleDiv);
    header.appendChild(cartImg);
    header.appendChild(avatarImg);
  }