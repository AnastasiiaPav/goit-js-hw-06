const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener( 'input', nameOutputChenche )

function nameOutputChenche(event) {
    if ( event.target.value === '' ){
        return span.textContent = 'Anonymous'
    } else{
       return span.textContent = event.target.value
    }
}

