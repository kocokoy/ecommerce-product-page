
export function createHeader(){
    const contentDiv = document.querySelector('.content');
    const header = document.createElement('header');
    header.innerHTML = 'testing';
    contentDiv.appendChild(header);
  }