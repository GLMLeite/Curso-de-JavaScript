const soma = 1 + 3;
if (soma == 2) {
  console.log("Soma é igual a 2");
} else if (soma === 3) {
  console.log("soma é 3");
} else {
  console.log("soma não é dois nem 3");
}

// and e or && e ||

const soma1 = 2 + 3;
const soma2 = 3 + 3;

if (soma1 === 5 && soma2 === 6) {
  console.log("Soma1 é 5 e soma2 é 6");
}

if (soma1 === 5 || soma2 === 6) {
  console.log("Soma1 é 5 ou soma2 é 6");
}
const soma3 = 3;
let number = soma3 == 2 ? 2 : 4;

//Mesma coisa que acima
//if (soma == 2) {
number = 2;
//} else {
// number = 4;
//}
console.log(number);

//switch case

const car = "Ferrari";
switch (car) {
  case "Mercedes":
    console.log("Mercedes é bonita");
    break;
  case "Ferrari":
    console.log("Ferrari é muito red");
    break;
  case "Tesla":
    console.log("Tesla é muito pequeno");
    break;
}

//True e False

const x = "";
//isto acima é false

const y = 0;
console.log(!!y);
console.log(!!x);

const vnulo = null;
const vnaodef = undefined;

console.log(!!vnulo);

const list = [];
//isto acima é true
console.log(!!list);

const object = {};
//true tbm
console.log(!!object);

if (list.length > 0) {
  console.log("...");
}
console.log(!false);
//isto acima inverte os fatores se !false então é true
