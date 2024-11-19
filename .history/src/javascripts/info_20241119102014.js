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
  let contents = ['$125.00','50%','$250.00'];

  for(let i = 0; i < 3; i++){
    const div = document.createElement('div');
    div.className = classNames[i];
    div.textContent = contents[i];
    divs.push(div);
  }

  divs.forEach(div => {
    itemPriceDivElement.appendChild(div);
  })
}
