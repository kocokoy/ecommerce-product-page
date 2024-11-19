export let quantity = 5;

export function buttonPlusMinusClicked(){
  const minus = document.querySelector('.minus');
  const plus = document.querySelector('.plus');
  const test = document.querySelector('.product-count');

  minus.addEventListener('click', () => {
    if(quantity < 1){
      quantity = 0;
      return;
    };
      quantity--;
  })
  
  test.quantity;

}