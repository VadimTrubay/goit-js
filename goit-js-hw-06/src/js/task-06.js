let getInput = document.querySelector('#validation-input');
let getDataLength = getInput.getAttribute('data-length')

function validationInput(event) {
  const inputValue = event.target.value.trim();
  if (inputValue.length === Number(getDataLength)) {
    getInput.setAttribute("class", "valid")
    // getInput.className = "valid"
  } else {
    getInput.setAttribute("class", "invalid")
    // getInput.className = "invalid"
  }
}

getInput.addEventListener('input', validationInput);

