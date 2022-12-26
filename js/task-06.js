const inputRef = document.querySelector("#validation-input");
 
 

inputRef.addEventListener('blur', onInputClassReplace);
 
function onInputClassReplace(event) {
     
  event.currentTarget.classList.add('invalid');
  if (event.currentTarget.value.length === +event.currentTarget.dataset.length)
    event.currentTarget.classList.replace('invalid', 'valid');
};

 
 
 