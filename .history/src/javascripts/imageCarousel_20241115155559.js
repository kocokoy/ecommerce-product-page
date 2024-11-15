import {displayImage} from './image.js';

export function createImageCarousel(){
  const imageElement = document.querySelector('.image-carousel-image');
  const buttonArr = createButton();
  let num = 1;
  createImage(num);
  buttonArr[1].addEventListener('click', () => {
    console.log(num);
    num++;
    createImage(num);
  })
  buttonArr[0].addEventListener('click', () => {
    console.log(num);
    if(num <= 1){
      num = 1;
    }
    num--;
    createImage(num);
  })
  
}

function createButton(){
  const backBtnElement = document.querySelector('.image-carousel-back-btn');
  const forwardBtnElement = document.querySelector('.image-carousel-forward-btn');
  const backImage = displayImage('/images/icon-previous.svg');
  const forwardImage = displayImage('/images/icon-next.svg');
  backBtnElement.appendChild(backImage);
  forwardBtnElement.appendChild(forwardImage);
  return [backBtnElement, forwardBtnElement];
}

function createImage(num){
  if(num > 4 || num < 1){
    return;
  }
  const imageDivElement = document.querySelector('.image-carousel-image');
  imageDivElement.innerHTML = '';
  let productImage = displayImage(`/images/image-product-${num}.jpg`);
  imageDivElement.appendChild(productImage);
}
