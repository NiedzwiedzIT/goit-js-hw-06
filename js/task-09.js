function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
 
const ref = {
  backgroundSpanValue: document.querySelector('.color'),
  changeBtnColor: document.querySelector('.change-color'),
};
  
ref.changeBtnColor.addEventListener('click', () => {
  document.body.style.background = ref.backgroundSpanValue.textContent = getRandomHexColor();
});

 