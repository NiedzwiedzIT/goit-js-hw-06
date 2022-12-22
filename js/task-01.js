const categoriesRef = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesRef.children.length}`);

// static collect:
// const list = categories.querySelectorAll(".item");
// live collect:
const listRef = categoriesRef.getElementsByClassName('item');

for (let element of listRef) {
  
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
}
