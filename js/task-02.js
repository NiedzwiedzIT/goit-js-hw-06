const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients'); 

ingredientsRef.append(
  ...ingredients.map((element) => {
    const listItemRef = document.createElement("li");
    listItemRef.classList.add('item');
    listItemRef.textContent = element;
    return listItemRef;    
  })
);


 
//  ingredientsRef.append(
//   ...ingredients.map((element) => {
//     const listItemRef = document.createElement("li");
//     listItemRef.classList.add('item');
//     listItemRef.textContent = element;
//     return listItemRef;
//   })
// );