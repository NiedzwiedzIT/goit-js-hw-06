const fontSizeCntRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');
 
 
fontSizeCntRef.addEventListener('input', () => {
    spanTextRef.style.fontSize = `${fontSizeCntRef.value}px`
});

 

 
