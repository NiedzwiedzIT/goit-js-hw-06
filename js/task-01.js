const categoriesRef = document.querySelector("#categories");

const categoriesResRef = `Number of categories: ${categoriesRef.children.length}`;

console.log(categoriesResRef);
 
const listRef = categoriesRef.getElementsByClassName('item');

for (let element of listRef) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
}
