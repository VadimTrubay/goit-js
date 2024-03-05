let getInputText = document.querySelector('#name-input');
let outputText = document.querySelector('#name-output');

getInputText.addEventListener('input', () => {
  outputText.textContent = getInputText.value;
  if (!outputText.textContent) {
    outputText.textContent = "Anonymous";
  }
});