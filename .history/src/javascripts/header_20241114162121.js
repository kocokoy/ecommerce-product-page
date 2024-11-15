import {displayImage} from './image.js';

export function createHeader(){
    const header = document.getElementsByTagName('header');
    header.appendchild(displayImage("/images/iconmenu.svg"));
  }