

// потрібно отримати рефереси на ДОМ елементи (інкремент, декремент, на велює,)
// написати дві откремі функції, інремент та декремент
// навішати ці функції на кнопки

// const counter = function({initialValue = refs.value.textContent,  step = 1 }
// = {} 
// ){
//     this.value = initialValue;
//     this.step = step;

//     this.bindEvents();
// };
// const incButton = counter.prototype.increment = function( ) {
//     this.value += this.step;
//  } 
// console.log(incButton)
//console.log(decButton)

// const refs = {};
// refs.container = document.querySelector('#counter');
// refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
// refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
// //refs.value = refs.container.querySelector('#value');
// const result = refs.container.querySelector('#value');
// console.log(refs.value);


const counter = { value: 0, step: 1,
     incButton  ( )  {
        this.value += this.step;
     } ,

    decButton ( )  {
        this.value -= this.step;
       // console.log('-1')
    },
}
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
const result = document.querySelector('#value');


incBtn.addEventListener('click', function() {
    counter.incButton()
    result.textContent = counter.value
} );

decBtn.addEventListener('click', function() {
    counter.decButton()
    result.textContent = counter.value
    console.log(result.textContent)
} );












// const CounterPlugin = function({ 
//     rootSelector,
//      initialValue = 0, 
//      step = 1 }

// = {} ){
//     this.value = initialValue;
//     this.step = step;
//     this.refs =  this.getRefs(rootSelector)

//     this.bindEvents();
// };

// CounterPlugin.prototype.getRefs = function( rootSelector){
// console.log(rootSelector);

// const refs = {};
// refs.container = document.querySelector('#counter');
// console.log(refs.container);
// refs.incrementBtn = refs.container.querySelector('[ data-action=increment]');
// refs.decrementBtn = refs.container.querySelector('[ data-action=decrement]');
// refs.value = refs.container.querySelector('#value')

// console.log(refs.value);

// return refs;
// }

// CounterPlugin.prototype.bindEvents = function( ){
//     console.log(this.refs)
//     this.refs.incrementBtn.addEventListener( 'click', () =>{ 
//     console.log("CounterPlugin.prototype.bindEvents -> this", this)
//     this.increment( )
//      }); 

//     this.refs.decrementBtn.addEventListener( 'click', () => { 
//         console.log("CounterPlugin.prototype.bindEvents -> this", this)
//     this.decrement( )
//      });
// }


// CounterPlugin.prototype.increment = function( ) {
//     this.value += this.step;
// }

// CounterPlugin.prototype.decrement = function( ) {
//     this.value -= this.step;
// }





// const counter = new CounterPlugin ({rootSelector: '#counter-1', step: 1 })

