let counterValue = 0;

const decrementRef = document.querySelector('button[data-action = decrement]');
const valueRef = document.querySelector('#value');
const incrementRef = document.querySelector('button[data-action = increment]');

decrementRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});

incrementRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});


 










// const decrementRef = document.querySelector('button[data-action = decrement]');
// const valueRef = document.querySelector("#value");
// const incrementRef = document.querySelector('button[data-action = increment]');

// decrementRef.addEventListener("click", () => {
//   counterValue -= 1;
//   valueRef.textContent = counterValue;
// });

// incrementRef.addEventListener("click", () => {
//   counterValue += 1;
//   valueRef.textContent = counterValue;
// });
