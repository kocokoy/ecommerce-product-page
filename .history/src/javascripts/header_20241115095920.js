import {displayImage} from './image.js';

export function createHeader(){
    const header = document.getElementsByTagName('header')[0];
    const titleDiv = document.createElement('div');
    let imgDiv = document.createElement('div');
    const menuImg = displayImage("/images/iconmenu.svg");
    const cartImg = displayImage("/images/icon-cart.svg");
    const avatarImg = displayImage("/images/image-avatar.png");
    titleDiv.classList.add('header-title');
    imgDiv.classList.add('header-img');
    // menuImg.classList.add('header-img');
    // cartImg.classList.add('header-img');
    // avatarImg.classList.add('header-img');
    imgDiv = imgDiv.appendChild(menuImg)
    titleDiv.textContent = 'sneakers';
    header.appendChild(imgDiv);
    header.appendChild(titleDiv);
    header.appendChild(cartImg);
    header.appendChild(avatarImg);
  }