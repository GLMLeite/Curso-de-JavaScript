// Aula 04 map, filter e reduce.

//Map
const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function (number) {
  return number * 2;
});
console.log(numbersMultipliedByTwo);

//filter

const ages = [8, 13, 27, 30, 22, 40];
const evenAges = ages.filter(function (age) {
  return age % 2 === 0;
});
console.log(evenAges);

//Reduce

const sumOfAges = ages.reduce(function (age, somador) {
  return somador + age;
}, 0);
console.log(sumOfAges);
