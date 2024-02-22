import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

form.elements.email.value = (JSON.parse(localStorage.getItem(localStorageKey)) || {}).email || "";
form.elements.message.value = (JSON.parse(localStorage.getItem(localStorageKey)) || {}).message || "";

form.addEventListener("input", (evt) => {
  const inputValue = {
    ...JSON.parse(localStorage.getItem(localStorageKey)) || {},
    email: form.elements.email.value,
    message: form.elements.message.value
  };

  throttle(localStorage.setItem(localStorageKey, JSON.stringify(inputValue)), 500);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  form.reset();
});

