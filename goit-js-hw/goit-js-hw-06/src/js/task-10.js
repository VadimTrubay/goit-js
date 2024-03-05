const controlsRef = document.querySelector('#controls').firstElementChild;
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesId = document.querySelector('#boxes');

createBtnRef.addEventListener('click', getRender);
destroyBtnRef.addEventListener('click', getDestroy);

function getRender() {
  const amount = controlsRef.value;
  amount ? createBoxes(amount) : alert("Нема числа");
  controlsRef.value = '';
}
function getDestroy() {
  boxesId.innerHTML = '';
  controlsRef.value = '';
}

function createBoxes(amount) {
  let size = 30;
  const array = [];
  for (let i = 1; i <= amount; i += 1) {
    const color = getRandomHexColor();
    array.push(
      `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
    );
    size += 10;
  }
  boxesId.insertAdjacentHTML('beforeend', array.join(''));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
