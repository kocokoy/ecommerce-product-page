import {displayImage} from './image.js';

export function createHeader(){
    const header = document.getElementsByTagName('header');
    const img = displayImage("/images/iconmenu.svg");
    header.appendChild(img);
  }