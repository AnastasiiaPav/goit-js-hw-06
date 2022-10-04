const input = document.querySelector('#validation-input');

console.log(input)

input.addEventListener('blur', focusOut) 

function focusOut(event) {
    if ( input.value.length < input.dataset.length ) {
       input.classList.add('invalid')
    }else{
        input.classList.remove('invalid')
         input.classList.add('valid')
    }
}
