const refs = {
  input: document.querySelector("input"),
  btnCreat: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divBox: document.querySelector("#boxes"),
};

refs.btnCreat.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

let boxSize = 20;

function inputNumber() {
  return refs.input.value;
}

function createBoxes(amount) {
  const boxItem = [];
  const counterBox = Number((amount.currentTarget.value = refs.input.value));

  for (let i = 0; i < counterBox; i++) {
    boxSize += 10;

    const item = document.createElement("div");
    item.classList.add("new-item");
    item.style.marginTop = "10px";
    item.style.border = "1px solid black";
    item.style.borderRadius = "5px";
    item.style.width = boxSize + "px";
    item.style.height = boxSize + "px";
    item.style.backgroundColor = getRandomHexColor();

    boxItem.push(item);
  }
  refs.divBox.append(...boxItem);
}

function destroyBoxes(e) {
  refs.divBox.innerHTML = "";
  refs.input.value = "";
  boxSize = 20;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
