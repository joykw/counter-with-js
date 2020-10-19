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
//Function

function dec(){
console.log('decreasing')
}

function inc(){
console.log('increasing')
}
