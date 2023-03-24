const Person = {
  firstName: "Guilherme",
  lastName: "Leite",
  age: "18",
  hobbies: ["Jogar", "Academia", "Música"],
  Dog: {
    name: "Meg",
    age: "3",
  },
};

//const firstName = Person.firstName;
//const lastName = Person.lastName;
//const age = Person.age;
//const hobbies = Person.hobbies;

//Mesma coisa que acima
const {
  firstName,
  lastName,
  age,
  hobbies,
  Dog: { name: dogname },
} = Person;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);

console.log(Person);
console.log(dogname);

//parte 02

const todos = [
  {
    id: 1,
    description: "estudar JavaScript",
    iscompleted: true,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: false,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];
const lastDescription = todos[2].description;
console.log(lastDescription);
