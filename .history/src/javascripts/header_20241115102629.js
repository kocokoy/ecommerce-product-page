import {displayImage} from './image.js';

export function createHeader(){
  const picts  = ['/images/iconmenu.svg','/images/icon-cart.svg','/images/image-avatar.png'];
  const titleDiv = document.querySelector('.header-title');
  const imgDiv = document.querySelectorAll('.header-img');
  titleDiv.textContent = 'sneakers';

    for(let [index,div] of imgDiv){
      console.log(div);
      console.log(index);
    }
      // console.log(imgDiv);
    
  }

  