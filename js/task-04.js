const refs = {
    btnIncrement : document.querySelector('#counter button[data-action="increment"]'),
    btnDecrement : document.querySelector('#counter button[data-action="decrement"]'),
    spanValue : document.querySelector("#value")
};

let counterValue = 0;

function onBtnDecrementClick() {
    refs.spanValue.textContent = counterValue -= 1;
 };

function onBtnIncrementClick() {
    refs.spanValue.textContent = counterValue += 1;
 };

refs.btnDecrement.addEventListener('click', onBtnDecrementClick); 
refs.btnIncrement.addEventListener('click', onBtnIncrementClick);

