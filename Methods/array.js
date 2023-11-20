//* Arrays

//! toString - changes the array to a string

let arr = ["Apple", "Grape", "Berry", "Peach"];
let arrResult = arr.toString();
console.log(arrResult);
// console.log(typeof arrResult);

let arr1 = [252, 555, 123, 16, 356];
let arr1Result = arr1.toString();
console.log(arr1Result);

//! pop - removes the last element from the array

let arr2 = [1, 2, 3, 4, 5];
let arr2Result = arr2.pop();
console.log(arr2Result);
console.log(arr2);

let arr3 = ["Apple", "Orange", "Papaya", "Strawberry"];
let arr3Result = arr3.pop();
console.log(arr3Result);
console.log(arr3);

//! push - adds a new element to the end of the array

let arr4 = ["Mango", "Blackberry", "Cherry"];
let arr4Result = arr4.push("Plum");
console.log(arr4);

let arr5 = [28, 38, 21, 18];
let arr5Result = arr5.push(16);
console.log(arr5);

//! shift - removes the first element from the array

let arr6 = ["concat", "slice", "unshift", "splice"];
let arr6Result = arr6.shift();
console.log(arr6);

//! unshift - adds a new element to the beginning of the array

let arr7 = ["concat", "slice", "unshift"];
let arr7Result = arr7.unshift("push");
console.log(arr7);

//! join - joins all elements arrays into a string

let arr8 = arr7.join(" ");
console.log(arr8);

//! concat - adds the arrays and returns the arrays into a new string

let arr9 = arr6.concat(arr7);
console.log(arr9);

//! splice - can be used to add and remove items from the array

let arr10 = ["dont", "ever", "do", "that", "again"];
let arr0Result = arr10.splice(3, 1, "it");
console.log(arr10);

let arr11 = [23, 20, 28, 25];
let arr11Res = arr11.splice(4, 0, 30);
console.log(arr11);

//! slice - slices a specific item from the array and returns the item in a new array

let arr12 = [23, 20, 28, 25];
let arr12Res = arr12.slice(2);
console.log(arr12Res);

//! indexOf - returns the position of the first occurrence of a specified value in a array

let arr13 = [23, 20, 28, 25, 33, 38];
let arr13Res = arr13.indexOf(33);
console.log(arr13Res);

//! lastIndexOf - returns the position of the last occurrence of a specified value in the array

let arr14 = [23, 20, 28, 25, 33, 38, 40];
let arr14Res = arr14.lastIndexOf(28);
console.log(arr14Res);

//! includes - checks if the array contains a specified item and returns a boolean value

let arr15 = [23, 20, 28, 25, 33, 38, 40, 60, 26];
let arr15Res = arr15.includes(24);
console.log(arr15Res);

let arr16 = ["Apple", "Mango", "Orange"];
let arr16Res = arr16.includes("Mango");
console.log(arr16Res);

//! sort - arranges the array alphabetically

let arr17 = ["Mango", "Peach", "Papaya", "Lemon", "Grape"];
let arr17Res = arr17.sort();
console.log(arr17);

//! find - returns the first element that matches the function

let num = [14, 25, 32, 47, 50];
let result = num.find((element) => element > 2);
console.log(result);

let word = ["Lion", "Practice", "Prototype", "Operators"];
let wordRes = word.find((element) => element.length > 8);
console.log(wordRes);

let wrd = ["one", "numb", "enemy", "friend", "hold on", "friends"];
let wrdRes = wrd.find((item) => item.length > 6);
console.log(wrdRes);

//! findIndex

let places = [
  "Japan",
  "Indonesia",
  "Philippines",
  "Brazil",
  "Argentina",
  "Netherlands",
];
let placesRes = places.findIndex((item) => item.length > 10);
console.log(placesRes);

//! filter - creates a new array of all values which match the condition

let names = [
  "Luke Skywalker",
  "Darth Vader",
  "Leia Organa",
  "Anakin Skywalter",
];
let charaRes = names.filter((element) => element.length > 12);
console.log(charaRes);

let arry = [
  "Observations",
  "Transparency",
  "Complex",
  "Integrity",
  "Definition",
];
let arryRes = arry.filter((element) => element.length > 10);
console.log(arryRes);

let number = [42, 47, 38, 23, 20, 36];
let numberRes = number.filter((element) => element > 40);
console.log(numberRes);

let numb = [60, 102, 16, 27, 32, 50];
let numbRes = numb.filter((element) => element < 102);
console.log(numbRes);

//! flat - takes out a nested array

let array1 = [60, 102, 16, 27, 32, 50, [17, 25, 31, [56, 77, [53, 79, 99]]]];
console.log(array1.flat(3));

let array2 = [
  255,
  555,
  223,
  [584, 147, 751, [544, 958, 666, 754, [149, 258, 349, [843, 952, 671]]]],
];
console.log(array2.flat(3));

//! forEach - executues a provided function for each element in the array

let array3 = [52, 22, 25, 66, 76];
array3.forEach((element) => console.log(element));

let array4 = [
  "Complex",
  "Integrity",
  "Definition",
  24,
  55,
  "Complexity",
  "Level",
  "Feline",
  52,
];
let arrayRes = array4.forEach((element) => console.log(element));

// let array5 = ["", "", "", "", "", "", "", ""];
// let array6 = array5.forEach((element) => element);

//! findLast - returns the last element in the array that satisfies the tested function

const array7 = [5, 12, 50, 130, 44];
const found = array7.find((element) => element > 100);
console.log(found);

let array8 = [16, 17, 60, 45, 50, 120];
let array8Res = array8.findLast((element) => element > 16);
console.log(array8Res);

let array9 = [45, 33, 99, 23, 55, 65, 102];
let array9Res = array9.findIndex((element) => element > 45);
console.log(array9Res);
// console.log(array9);

//! findLastIndex - returns the index of the last element in the array

let array5 = [55, 33, 22, 45, 17, 65];
let array5Res = array5.findLastIndex((element) => element > 55);
console.log(array5Res);

let array6 = [63, 33, 28, 38, 37, 40, 31, 16];
let array6Res = array6.findLastIndex((element) => element > 16);
console.log(array6Res);

let array10 = [130, 223, 663, 445, 364];
let array10Res = array10.findLastIndex((element) => element > 420);
console.log(array10Res);

let array14 = [5533, 2233, 1256, 1450, 1865, 2763, 8679];
let array14Res = array14.findLastIndex((y) => y > 2200);
console.log(array14Res);

//! map - loops through the array and runs the function on each element in the array and wont run if theres empty slots in the array

let array11 = [5, 3, 6, 10];
let map1 = array11.map((x) => x * 2);
console.log(map1);

let array12 = ["a", "b", "c", "d"];
let map2 = array12.map((x) => x + "1");
console.log(map2);

let array13 = ["map", "code", "book", "state", "country"];
let map3 = array13.map((z) => z + "s");
console.log(map3);

let ar = Array(4);
let arResult = ar.map((x) => x + "2");
console.log(ar);

// let ar = [7, 9, 10, 11, "state", "code"];
// let arResult = ar.map((s) => s + "s");
// console.log(arResult);
