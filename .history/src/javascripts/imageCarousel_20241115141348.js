import {displayImage} from './image.js';

export function createImageCarousel(){
  const imageElement = document.querySelector('.image-carousel-image');
  const button = createButton();
  console.log(button[1])
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
