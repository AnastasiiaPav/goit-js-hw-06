function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
 const colorBck = document.querySelector('body');
const nameColor =  document.querySelector('.color')


btn.addEventListener('click', () => {
 const background = getRandomHexColor();
  colorBck.style.backgroundColor = background;
  nameColor.textContent = background;
  
})
