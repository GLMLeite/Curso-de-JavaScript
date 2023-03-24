const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitbutton = document.querySelector("#submit-button");
const errormessage = document.querySelector(".msg");
const itens = document.querySelector(".items");

submitbutton.addEventListener("click", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errormessage.textContent = "Por favor preencha todos os campos";
    errormessage.classList = "error";
    setTimeout(() => {
      errormessage.textContent = "";
      errormessage.classList = "";
    }, 3000);
    return;
  }
  const li = document.querySelector("li");
  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue} <br/> Email: ${emailValue}`;
  itens.appendChild(li);

  nameInput.value = "";
  emailInput.value = "";
});
