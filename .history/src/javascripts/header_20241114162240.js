import {displayImage} from './image.js';

export function createHeader(){
    const header = document.getElementsByTagName('header');
    header.appendChild(displayImage("/images/iconmenu.svg"));
  }