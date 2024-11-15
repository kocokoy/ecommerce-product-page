import {displayImage} from './image.js';

export function createImageCarousel(){
  const imageElement = document.querySelector('.image-carousel-image');
  const buttonArr = createButton();
  createImage();
}

function createButton(){
  const backBtnElement = document.querySelector('.image-carousel-back-btn');
  const forwardBtnElement = document.querySelector('.image-carousel-forward-btn');
  const backImage = displayImage('/images/icon-previous.svg');
  const forwardImage = displayImage('/images/icon-next.svg');
  backBtnElement.appendChild(backImage);
  forwardBtnElement.appendChild(forwardImage);
  return [backBtnElement.appendChild(backImage), forwardBtnElement.appendChild(forwardImage)];
}

function createImage(){
  const imageDivElement = document.querySelector('.image-carousel-image');
  let productImage = displayImage('/images/image-product-1.jpg');
  imageDivElement.appendChild(productImage);
}
