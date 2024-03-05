const DELAY = 1000;

const body = document.querySelector('body');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const btnClear = document.querySelector('button[data-clear]');
stop.disabled = true;
btnClear.disabled = true;

let interval;

function startInterval() {
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    start.disabled = true;
    stop.disabled = false;
    btnClear.disabled = true;
  }, DELAY);
}

function stopInterval() {
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;
  btnClear.disabled = false;
}

function clearWind() {
  body.style.backgroundColor = '';
}

start.addEventListener('click', startInterval);
stop.addEventListener('click', stopInterval);
btnClear.addEventListener('click', clearWind);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}