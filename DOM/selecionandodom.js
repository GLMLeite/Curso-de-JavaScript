//Selecionar apenas um elemento
//const addUserText = document.getElementById("add-user");
//console.log(addUserText);
const UserText = document.querySelector("#add-user");
console.log(UserText);

//addUserText.innerText = "Bom dia";

//Selecionar multiplos elementos
const AllItens = document.querySelectorAll(".item");
console.log(AllItens);

//Manipular itens ou elementos HTML com JS
const itens = document.querySelector(".items");
console.log(itens);
//itens.remove();

//itens.firstElementChild.remove();
//itens.lastElementChild.remove();

//console.log((itens.children[0].textContent = "Item um"));

//itens.lastElementChild.innerHTML = "<h1>Hello World!</h1>";
const button = document.querySelector(".btn");
button.style.background = "Red";
button.style.color = "white";
