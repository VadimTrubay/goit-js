let counterValue = document.getElementById("value")

let decrementBtn = document.querySelector('[data-action="decrement"]')
let incrementBtn = document.querySelector('[data-action="increment"]')

decrementBtn.addEventListener("click", () => {
  Number(counterValue.textContent--)
})

incrementBtn.addEventListener('click', () => {
  Number(counterValue.textContent++)
})