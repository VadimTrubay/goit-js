let outputValue = document.querySelector('#text');
let getInputValue = document.querySelector('#font-size-control')

outputValue.style.fontSize = getInputValue.value + 'px';
getInputValue.addEventListener('input', checkValue);


function checkValue(event) {
  outputValue.style.fontSize = event.currentTarget.value + 'px';
}
