function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", changeColorBody);

function changeColorBody() {
  span.textContent = getRandomHexColor();
  document.body.style.background = span.textContent;
}
