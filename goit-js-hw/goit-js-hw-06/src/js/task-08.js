const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  const resultInput = {
    email: email,
    password: password
  }
  console.log(resultInput);
  console.log(`Login: ${email}, Password: ${password}`);
  form.reset();
}