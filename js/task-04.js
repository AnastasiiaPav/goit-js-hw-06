const CounterPlugin = function({ rootSelector, initialValue = 0, step = 1 }

= {} ){
    this.value = initialValue;
    this.step = step;
    

    this.getRefs(rootSelector)
};

CounterPlugin.prototype.getRefs = function( rootSelector){
console.log(rootSelector);

const refs = {};
refs.container = document.querySelector( counter);
console.log(refs.container)
}

CounterPlugin.prototype.increment = function( ) {
    this.value += this.step;
}

CounterPlugin.prototype.decrement = function( ) {
    this.value -= this.step;
}





const counter = new CounterPlugin ({rootSelector: '#counter-1', step: 1 })

