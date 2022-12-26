const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

 nameInputRef.addEventListener("input", (event) => {
  nameOutputRef.textContent =
    event.currentTarget.value === "" ? 'Anonymous' : event.currentTarget.value;
     
});
 
remowBtnRef = document.querySelector('.js-class');
targetBtnRef = document.querySelector('button[data-action = add]');


mowBtnRef.addEventListener('click', event => {
    targetBtnRef.addEventListener('click',onTargetBtnClick)
});


reremowBtnRef.addEventListener('click', event => {
    targetBtnRef.removeEventListener('click', onTargetBtnClick)
    
});

function onTargetBtnClick (event) {
    console.log('Klikacie');
}

FormData.forEach((value, name) => {

})