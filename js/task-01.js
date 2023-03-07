const liEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liEl.length}`);

liEl.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);

  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
