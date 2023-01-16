function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector('input'),
  btnCreat: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divBox: document.querySelector('#boxes')
};

refs.input.addEventListener('blur', inputNumber )
refs.btnCreat.addEventListener('click', createBoxes) 
refs.btnDestroy.addEventListener('click', rdestroyBoxes)

function inputNumber () {
  return refs.input.value;
// console.log(refs.input.value); 
}

function createBoxes(amount) {
    const createDiv = [];
    amount = refs.input.value;
    for (let index = 1; index <= amount; index += 1) {
      const item = document.createElement('div');
      createDiv.push(item);
    }
    refs.divBox.insertAdjacentHTML("beforeend", createDiv);
};

function rdestroyBoxes() {
refs.divBox.reset()
}

console.log(refs.input.value);