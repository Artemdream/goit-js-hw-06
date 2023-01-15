const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

input.addEventListener("input", onInputChange);

function onInputChange (event) {
   return spanText.style.fontSize = `${event.currentTarget.value}px`;
}