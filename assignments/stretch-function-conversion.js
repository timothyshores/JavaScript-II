// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};

// let anotherFunction = function (param) {
//   return param;
// };

let myArrowFunction = param => param;
console.log(myArrowFunction('Argument'));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let addArrow = (param1, param2) => param1 + param2;
console.log(addArrow(1, 2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtractArrow = (param1, param2) => param1 - param2;
console.log(subtractArrow(1, 2));

// exampleArray = [1, 2, 3, 4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

exampleArray = [1, 2, 3, 4];
let tripleArrow = array => array.map(element => element * 3);
console.log(tripleArrow(exampleArray));