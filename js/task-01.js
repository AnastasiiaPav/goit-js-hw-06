

const listWithClass = document.querySelector('#categories').children;
console.log( 'Number of categories:' , listWithClass.length);

// const titles = document.querySelectorAll('h2');
// titles.forEach(element => {
//     const title = document.querySelector('h2');
//     console.log( 'Category:', element.textContent)
// });

const items = document.querySelectorAll('.item');
//console.log(items);

items.forEach(element => {
   const ul = element.querySelector('ul');
   const li = ul.querySelectorAll('li');
   const title = element.querySelector('h2');

   console.log( 'Category:', title.textContent)

    console.log('Elements:',  li.length);



})
