import {contentDiv} from './index.js';

  export function createHeader(){
    const header = document.createElement('header');
    header.innerHTML = 'testing';
    contentDiv.appendChild(header);
  }