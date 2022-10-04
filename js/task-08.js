
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

const login = event.target.elements.email.value;
const password = event.target.elements.password.value;

  if (login === "" || password === "") {
    alert("Please fill in all the fields!");
  } else{
const newForm = { login , password }
console.log(newForm)
  };

  event.currentTarget.reset();
}