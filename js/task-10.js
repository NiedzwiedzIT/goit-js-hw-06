function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 
const ref = {  
  btnCreateBoxes: document.querySelector('[data-create]'),
  btnDestroyBoxes: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),

};
 
ref.btnCreateBoxes.addEventListener('click', createBoxes);
ref.btnDestroyBoxes.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = +document.querySelector('input').value;

  let size = 30;
  let boxesRef = "";

  for (let i = 0; i < amount; i += 1) {
    boxesRef += `<div style='width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};'></div>`;
    size += 10;
  }
  console.dir(boxes);
  boxes.innerHTML = boxesRef;

};

function destroyBoxes() {
  document.querySelector("input").value = 0;
  boxes.innerHTML = "";

};
