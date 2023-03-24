for (let index = 0; index < 10; index++) {
  console.log(index);
}

// For com  listas

const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOR OF
for (let car of cars) {
  console.log(car);
}

// FOREACH
cars.forEach(function (car, index) {
  console.log(index);
  console.log(car);
});

// WHILE
let index = 0;
while (index < 10) {
  console.log("index menor que 10!");
  index++;
}

//For in mais usado em objetos

const Person = {
  name: "James",
  age: 24,
};

for (property in Person) {
  console.log(Person[property]);
}
