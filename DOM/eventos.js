const submitbutton = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name");

const emailInput = document.querySelector("#email");
const myForm = document.querySelector("#my-form");

const itens = document.querySelector(".items");

const body = document.querySelector("body");

submitbutton.addEventListener("click", function (event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  if (nameValue === "" || emailValue === "") {
    return alert("Campos não Preenchidos");
  }
  myForm.style.background = "GREEN";
  itens.firstElementChild.textContent = nameValue;
  itens.children[1].textContent = emailValue;

  body.style.background = "white";
});
