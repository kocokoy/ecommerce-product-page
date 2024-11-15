import {displayImage} from './image.js';

export function createHeader(){
    const header = document.getElementsByTagName('header')[0];
    const img = displayImage("/images/iconmenu.svg");
    const titleDiv = document.createElement('div');
    header.appendChild(img);
  }