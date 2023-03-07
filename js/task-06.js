const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

input.addEventListener("blur", changeColorBorder);

function changeColorBorder(event) {
  input.classList = "";
  if (event.currentTarget.value.length === inputLength) {
    return input.classList.add("valid");
  } else {
    return input.classList.add("invalid");
  }
}
