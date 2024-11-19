export const quantity = 2;

export function buttonPlusMinusClicked(){
  let minus = document.querySelector('.minus');
  const plus = document.querySelector('.plus');

  minus.addEventListener('click', () => {
    if(quantity < 0){
      quantity = 0;
      return;
    };
      quantity--;
  })

}