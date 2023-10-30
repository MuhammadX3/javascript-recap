// * Functions
//! This function keyword creates a new function object.

// function showMessage(text, message) {
//   console.log(text, message);
// }

// showMessage("Hey how are you?");
// showMessage("im fine thank you");

// function ageCheck(playersage) {
//   if (playersage >= 16) {
//     return true;
//   } else {
//     return confirm("Are your parents okay with this?");
//   }
// }

// let playersage = prompt("How old are you");

// if (ageCheck(playersage)) {
//   alert("Access granted, welcome to the game!");
// } else {
//   alert("Sorry but you must be at least 16 to get access to the game");
// }

// * Objects
//! Can be created with figure brackets.

const feature = {
  name: "Ali",
  age: 20,
};

console.log(feature.name);

//!  two ways you can create objects.
// const user = new Object(); //? "object constructor" syntax
// user.name = "Hi im jakie";
// console.log(user.name);

const user = {
  name: "Hi im jakie",
  age: 16,
  animal: "cats",
}; //? "object literal" syntax

function showUser(name, favColor, favFood) {
  // console.log(
  //   user.name + ", im " + user.age + " years old," + " i love " + user["animal"]
  // );
  // // alert(user["cat lover"]);
  // console.log(user["animal"]);

  return {
    name: name,
    favColor: favColor,
    favFood: favFood,
  };
}

let info = showUser("Alex", "Blue", "Pizza");
console.log(info);
// alert(
//   "Hi my name is " + info.name + ", my favourite color is " + info.favColor
// );

console.log(
  "Hi my name is " + info.name + ", my favourite color is " + info.favColor
);

// delete user.age;
// showUser();

// * Arrays
//! Two ways you can create arrays.
//! but most of the time the second one is used the most.

let Arr = new Array();
let arr = ["Vase", "Tv", "Comfortable Couch", "Table"];
console.log(arr);

//! Arrays are numbers starting from 0.
//! so 0 would be the first element in the array and 1 would be the second element and so on.

let items = ["Knife", "Axe", "Gun"];
console.log(items[1]); // it will show the second element in the array

//! you can also replace an element in the array
items[2] = "Crowbar";
console.log(items);

//! you can also add an element to the array
items[3] = "Bat";
console.log(items);

//! you can also check how long your array is using the length property
let length = items.length;
console.log(length);

let array = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];

console.log(array[2]);

// ? Array Methonds

// * Pop/Push runs faster than shift/unshift
//! Pop - Removes the last element from the array
let arr1 = ["apple", "mango", "grapes", "berries"];
let remove = arr1.pop();

console.log(arr1.length);
console.log(remove);

//! Push - Append the element to the end of the array

let arr2 = ["banana", "cherries", "strawberry"];
let addToEnd = arr2.push("pineapple");

console.log(arr2);
console.log(addToEnd);

//! Shift - Takes out the first element and returns it

let arr3 = ["orange", "mango", "grapes"];
let shift = arr3.shift();

console.log(arr3);
console.log(shift);

//! Unshift - Append an element at the beginning of the array
let arr4 = ["blueberry", "papaya", "grapes"];
let unshift = arr4.unshift("peach");

console.log(arr4);

for (let Array of arr2) {
  // alert(Array);
  console.log(Array);
}

for (let arrays in arr4) {
  console.log(arrays);
}

//! Splice - It can set, remove or replace elements.

console.log(arr3.splice(0, 2));

//! Slice - selects arrays by its index number

//! Concant - it basically adds a new items to the array or connects two arrays together

let arr5 = arr1.concat(arr2);
console.log(arr5);

let arr6 = arr4.concat(["Lemon"]);
console.log(arr6);

//!  forEach - allows you to run a function for every element in the array

arr6.forEach(function (array) {
  console.log(array);
});

// arr4.forEach(alert);

//! indexOf - allows you to find the index of an item in the array

let arr7 = [2, 5, "name", "cat"];
console.log(arr7.indexOf("cat"));

//! Includes - checks to see if the item exists in the array or not

let arr8 = ["cat", "dog", "camel", 7];
console.log(arr8.includes("dogie"));

//! lastIndexOf - same as indexOf but checks from right to left

let arr9 = ["Kiwi", "Avocado", "Drupe", "Watermelon", "grape"];
console.log(arr9.lastIndexOf("Drupe"));

let arr10 = [15, 26, 28, 30, 40];
console.log(arr10.lastIndexOf(26));

//! Find - used to find an object with specific conditions

let users = {
  id: 1,
  name: "Mike",
  id: 2,
  name: "Pete",
  id: 3,
  name: "Maya",
};

//! findIndex

const numbers = [16, 24, 53, 70, 22];

const final = (element) => element > 60;

//! findLastIndex

const malls = ["GoogleC", "Functions", "Robbery", "Console"];

const result = malls.findLast((element) => element.length > 6);

// console.log(result);

// * Strings

//! length

let text = "hello, how are you? im under the water";
let strLength = text.length;

console.log(strLength);

//! slice

let ice = "Apple, Pineapple, peach";
let iceSlice = ice.slice(2, 16);
console.log(iceSlice);

let strs = "hello, how are you";
let strsSlice = strs.slice(0, 15);
console.log(strsSlice);

//! substr

let sub = "hello, how are you doing today?";
let subStr = sub.substr(7);

console.log(subStr);

//! replace

let yt = "Drew and Alex";
let replace = yt.replace("Drew", "Fern");
console.log(replace);

let yt2 = "touchdown";
let place = yt2.replace("touchdown", "insane");
console.log(place);

//! toUpperCase

let upper = yt.toUpperCase();
console.log(upper);

//! toLowerCase

let boom = "SUPERHAVEN";
let lower = boom.toLowerCase();
console.log(lower);

//! concat - concats two strings together/ connect them together

let concat = yt.concat(" are ", place);
console.log(concat);

let tac = arr1.concat(arr2);
console.log(tac);

let db = arr3.concat(arr4);
console.log(db);

//! trim - takes out the spacings in the string

let text1 = "   Hallo";
let trimm = text1.trim();
console.log(trimm);

//! trimStart - removes the spacing from the start of the string
let text2 = "     Halloo       .";
let part = text2.trimStart();

console.log(part);

//! trimEnd - removes the spacing from the end of the string
let text3 = "useless     ";
let parts = text3.trimEnd();

console.log(parts);

//! padStart - pads a string with another until it reaches a given length

let pad = "";
let padded = pad.padStart(5, "x");

console.log(padded);

//! includes - check if the string has a certain word and it will return true or false if there word is there on not
let text4 = "superhaven";
let check = text4.includes("super");

console.log(check);
