import {displayImage} from './image.js';

export function createImageCarousel(){
  const imageElement = document.querySelector('.image-carousel-image');
  const buttonArr = createButton();
  const num = 4;
  createImage(num);
  buttonArr[1].addEventListener('click', () => {
    
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
  const imageDivElement = document.querySelector('.image-carousel-image');
  let productImage = displayImage(`/images/image-product-${num}.jpg`);
  imageDivElement.appendChild(productImage);
}
