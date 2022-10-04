function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');


btn.addEventListener('click', () => {
  const background = getRandomHexColor();
  document.querySelector.body.style.backgroundColor = colorBck;
  document.querySelector.textContent = nameColor;
})