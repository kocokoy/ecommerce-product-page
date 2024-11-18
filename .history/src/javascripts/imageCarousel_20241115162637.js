import { displayImage } from './image.js';

export function createImageCarousel() {
  const imageContainer = document.querySelector('.image-carousel-image');
  const buttonArr = createButton();
  let currentIndex = 0;

  // Create slider and add images to it
  const slider = document.createElement('div');
  slider.classList.add('slider');
  imageContainer.appendChild(slider);

  // Array of images
  const images = [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg'
  ];

  // Populate slider with images
  images.forEach(src => {
    const img = displayImage(src);
    slider.appendChild(img);
  });

  // Set up button event listeners
  buttonArr[1].addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = images.length - 1;
    }
    slideToImage(currentIndex);
  });

  buttonArr[0].addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    slideToImage(currentIndex);
  });

  function slideToImage(index) {
    const offset = -index * 400; // Move slider by the width of one image
    slider.style.transform = `translateX(${offset}px)`;
  }
}

function createButton() {
  const backBtnElement = document.querySelector('.image-carousel-back-btn');
  const forwardBtnElement = document.querySelector('.image-carousel-forward-btn');
  const backImage = displayImage('/images/icon-previous.svg');
  const forwardImage = displayImage('/images/icon-next.svg');
  backBtnElement.appendChild(backImage);
  forwardBtnElement.appendChild(forwardImage);
  return [backBtnElement, forwardBtnElement];
}
