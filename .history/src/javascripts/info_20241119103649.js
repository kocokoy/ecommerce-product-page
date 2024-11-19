
import {displayImage} from './image.js';
export function createdProductInfo(){
  createProductInfoText();
  createProductInfoPrice();
  createProductInfoButton();
}

function createProductInfoText(){
  const itemTextDivElement = document.querySelector('.item-info-text');
  const p = document.createElement('p');
  const h1 = document.createElement('h1');
  const div = document.createElement('div');

  p.textContent = 'SNEAKER COMPANY';
  h1.textContent = 'Fall Limited Edition Sneakers';
  div.textContent = 'These low-profie sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.';

  const elements = [p,h1,div];

  elements.forEach(element => {
    itemTextDivElement.appendChild(element);
  });

}

function createProductInfoPrice(){
  const itemInfoPriceDivElement = document.querySelector('.item-info-price');
  let divs = [];
  let classNames = ['price','percent','retail-price'];
  let contents = ['$125.00','50%','$250.00'];

  for(let i = 0; i < 3; i++){
    const div = document.createElement('div');
    div.className = classNames[i];
    div.textContent = contents[i];
    divs.push(div);
  }

  divs.forEach(div => {
    itemInfoPriceDivElement.appendChild(div);
  })
}

function createProductInfoButton(){
  const itemInfoButtonDivElement = document.querySelector('.item-info-button');
  const images = ['/images/icon-minus.svg','/images/icon-plus.svg'];
  const div = document.createElement('div');

  for(let i = 0; i < 2; i++){
    const button = document.createElement('button');
    button.appendChild(displayImage(images[i]));
    itemInfoButtonDivElement.appendChild(button);
  }

}
