import {displayImage} from './image.js';

export function createHeader(){
  const picts  = ['/images/iconmenu.svg','/images/icon-cart.svg','/images/image-avatar.png'];
  const titleDiv = document.querySelector('.header-title');
  const imgDiv = document.querySelectorAll('.header-img');
  titleDiv.textContent = 'sneakers';

    imgDiv.forEach((div,i) => {
      div.appendChild(displayImage(picts[i]));
    })
      // console.log(imgDiv);
    
  }

  