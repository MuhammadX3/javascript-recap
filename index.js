//* Variables

//? Automatically assigning variables
a = 2;
b = 2;

console.log(a + b);

//? Using Var

var c = 4;
var d = 4;

console.log((c *= d));

var e = "4";
var f = 6;

console.log(typeof f);
console.log((e -= f));

//? Using Let

let g = 10;
let h = 10;

console.log((g += h));

//? Using Const
const i = 12;
const j = 12;

console.log(i + j);
//! cant use Operators using constant variable

//* Data types

//? Numbers

let k = 25525255358;
console.log(typeof k);

//? Strings

let w = "2525252525252";
console.log(typeof w);

//? Boolean

let z = 23;
let o = 23;

console.log(z == o);

//? Object

const abttheperson = { name: "Malcolm", age: 16, height: 180 };
console.log(abttheperson.height);
console.log(typeof abttheperson);

const carFeatures = {
  name: "BMW",
  model: "7 Series",
  releaseDate: "April 2022",
  price: "6,020,000",
};

console.log(carFeatures.name);
console.log(carFeatures.model);
console.log(carFeatures.releaseDate);
console.log(carFeatures.price);

// console.log(typeof "");

let n;
// console.log(typeof n);

//? Functions

function add(a, b) {
  return a + "" + b;
}

let result = "my name is" + " " + "Malcolm";
document.getElementById("stewp").innerHTML = result;

//? Strings

let text = "sada";
let length = text.length;

console.log(length);

let txt = "We are the so-called \\ from the north.";
console.log(txt);

let y = "Malcolm " + "Jr";
console.log(y);

//? String methods

//* Char
let char = "my name is malcolm";
let index = 11;

console.log(`The character at index ${index} is ${char.charAt(index)}`);

//? Arrays

//? Array methods

let said = 'He said that "he only needs 20 more to finish his project"';
console.log(said);
