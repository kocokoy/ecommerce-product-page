// <!-- <div class="price">$125.00</div>
// <div class="percent">50%</div>
// <div class="retail-price">$250.00</div> -->

export function createdProductInfo(){
  createProductInfoText();
  createProductInfoPrice();
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
  const itemPriceDivElement = document.querySelector('.item-info-price');
  let divs = [];
  let classNames = ['price','percent','retail-price'];

  const div = document.createElement('div');
  div.className = classNames[1];
  console.log(div);
  // for(let i = 0; i < 3; i++){
  //   const div = document.createElement('div');
  //   div.classlist.add(classNames[i]);
  //   divs.push(div);
  // }

  // console.log(divs);
  console.log('aasdasds');
}