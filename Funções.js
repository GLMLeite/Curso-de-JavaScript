function somar(n1, n2) {
  return n1 + n2;
}

const retornosoma = somar(2, 5);
console.log(retornosoma);

//Tranformando a função em ArrowFunction
const somarArrow = (n1, n2) => {
  return n1 + n2;
};
//simplificando a ArrowFunction de cima, são a mesma coisa
const somarArrow2 = (n1, n2) => n1 + n2;

const retornoArrow = somarArrow(1, 2);
console.log(retornoArrow);
