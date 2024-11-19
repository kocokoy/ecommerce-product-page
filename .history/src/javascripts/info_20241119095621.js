        // <p>SNEAKER COMPANY</p>
        // <H1>Fall Limited Edition Sneakers</H1>
        // <div>
        //   These low-profie sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        // </div>

export function createdProductInfo(){
  createProductInfoText();
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