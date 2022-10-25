
let button = document.querySelector('button');
button.addEventListener("click", replace);
let pl = document.querySelector('p')
let text = 'You Clicked It!'
function replace(){
  pl.innerHTML = text;
}
let number = 3.284;
let rounded = number.toFixed();
document.getElementById ("rounded").innerHTML = rounded;