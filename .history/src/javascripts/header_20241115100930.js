import {displayImage} from './image.js';

export function createHeader(){
    const header = document.getElementsByTagName('header')[0];
    const titleDiv = document.querySelector('.header-title');
    const imgDiv = document.querySelectorAll('.header-img');

    titleDiv.textContent = 'sneakers'
    console.log(imgDiv);
    
  }

  