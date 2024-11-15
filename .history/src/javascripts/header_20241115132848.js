import {displayImage} from './image.js';

export function createHeader(){
  const picts  = ['/images/iconmenu.svg','/images/icon-cart.svg','/images/image-avatar.png'];
  const titleDiv = document.querySelector('.header-title');
  const imgDiv = document.querySelectorAll('.header-img');
  const pTag = document.createElement('p');
  pTag.textContent = 'sneakers';
  titleDiv.appendChild(pTag);
    imgDiv.forEach((div,i) => {
      div.appendChild(displayImage(picts[i]));
    })
    
  }

  