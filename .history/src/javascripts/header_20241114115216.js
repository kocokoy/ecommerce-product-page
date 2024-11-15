import {contentDiv} from './index.js';

  export function createHeader(){
    const header = document.createElement('header');
    const div = document.createElement('div');
    contentDiv.appendChild(header.appendChild(div));
  }