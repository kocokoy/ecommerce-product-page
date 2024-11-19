export let quantity = 5;

export function buttonPlusMinusClicked(){
  const minus = document.querySelector('.minus');
  const plus = document.querySelector('.plus');
  const productCount = document.querySelector('.product-count');

  minus.addEventListener('click', () => {
    if(quantity < 1){
      quantity = 0;
      return;
    };
      quantity--;
      productCount.innerHTML = quantity;
  })


}