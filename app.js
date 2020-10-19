//Data and variables
let count = 0;
const element = '#app'; 
//Caching or retrievoing references to the DOM
const rootElement = document.querySelector('#app');
const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');
const display = document.querySelector('#display');
console.log(rootElement, increaseButton, decreaseButton, display)
//Setup
decreaseButton.addEventListener('click', dec);
increaseButton.addEventListener('click', inc);
render(); //to have counter start position displayed ie 0
//Function

function dec(){
count -=1;
render();
}

function inc(){
count +=1;
render();
}

function render(){ //updating the data with clicks
    display.textContent = count;

}
