export let quantity = 2;

export function buttonPlusMinusClicked(){
  const minus = document.querySelector('.minus');
  const plus = document.querySelector('.plus');

  minus.addEventListener('click', () => {
    if(quantity < 0){
      quantity = 0;
      return;
    };
      quantity--;
      console.log(quantity);
  })

}