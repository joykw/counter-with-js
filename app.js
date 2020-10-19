const Counter = {
    //this--> referring to Counter. 
    count: 0,
    element: "#app",
    init: function(){
        this.cacheDOM();
        this.addListeners();
        this.render();
    },
    cacheDOM: function(){
        this.rootElement = document.querySelector(this.element);
        this.increaseButton = this.rootElement.querySelector('.increase');
        this.decreaseButton = this.rootElement.querySelector('.decrease');
        this.display = this.rootElement.querySelector('.display');
    },
    addListeners: function(){
        this.increaseButton.addEventListener('click', this.inc.bind(this));
        this.decreaseButton.addEventListener('click', this.dec.bind(this));

    },
    render: function(){
        this.display.textContent = this.count;
    },
    inc: function(){
        console.log(this)
        this.count += 1;
         this.render();
    },
    dec: function(){
        this.count -= 1;
        this.render();
    }, 
};

const secondCounter = Object.create(Counter);
Counter.init();
secondCounter.element = '#second';
secondCounter.init();






// //Data and variables
// let count = 0;
// const element = '#app'; 
// //Caching or retrievoing references to the DOM
// const rootElement = document.querySelector('#app');
// const increaseButton = document.querySelector('#increase');
// const decreaseButton = document.querySelector('#decrease');
// const display = document.querySelector('#display');
// console.log(rootElement, increaseButton, decreaseButton, display)
// //Setup
// decreaseButton.addEventListener('click', dec);
// increaseButton.addEventListener('click', inc);
// render(); //to have counter start position displayed ie 0
// //Function

// function dec(){
// count -=1;
// render();
// }

// function inc(){
// count +=1;
// render();
// }

// function render(){ //updating the data with clicks
//     display.textContent = count;

// }
