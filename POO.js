// Classes
class Pessoa {
  constructor(Nome, Sobrenome, Idade) {
    this.Nome = Nome;
    this.Sobrenome = Sobrenome;
    this.Idade = Idade;
  }
  //Métodos
  nomeCompleto() {
    console.log(`${this.Nome} ${this.Sobrenome}`);
  }
  Falar() {
    console.log("Ola sou o Guilherme");
  }
}

//Instanciando a classe Pessoa
const pessoa = new Pessoa("Guilherme", "Leite", 18);
console.log(pessoa);
pessoa.Falar();
pessoa.nomeCompleto();

//Herança
class Animal {
  constructor(raca) {
    this.raca = raca;
  }

  barulho() {
    console.log(`${this.raca} fez barulho`);
  }
}

class Dog extends Animal {
  constructor(raca) {
    super(raca);
  }
  barulho() {
    console.log(`${this.raca} latiu`);
  }
}

const animal = new Animal("Simba");
const dog = new Dog("Meg");

animal.barulho();
dog.barulho();
