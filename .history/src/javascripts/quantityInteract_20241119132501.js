export let quantity = 5;

export function buttonPlusMinusClicked(){
  const minus = document.querySelector('.minus');
  const plus = document.querySelector('.plus');

  minus.addEventListener('click', () => {
    if(quantity < 1){
      quantity = 0;
      return;
    };
      quantity--;
      console.log(quantity);
  })

}