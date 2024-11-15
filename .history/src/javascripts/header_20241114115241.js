import {contentDiv} from './index.js';

  export function createHeader(){
    const header = document.createElement('header');
    const div = document.createElement('div');
    div.innerHTML = 'testing';
    contentDiv.appendChild(header.appendChild(div));
  }