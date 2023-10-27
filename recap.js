// * Functions
// ! This function keyword creates a new function object.

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
// ! Can be created with figure brackets.

const feature = {
  name: "Ali",
  age: 20,
};

console.log(feature.name);

// ! two ways you can create objects.
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
// !Two ways you can create arrays.
// !but most of the time the second one is used the most.

let Arr = new Array();
let arr = ["Vase", "Tv", "Comfortable Couch", "Table"];
console.log(arr);

// ! Arrays are numbers starting from 0.
// ! so 0 would be the first element in the array and 1 would be the second element and so on.

let items = ["Knife", "Axe", "Gun"];
console.log(items[1]); // it will show the second element in the array

// ! you can also replace an element in the array
items[2] = "Crowbar";
console.log(items);

// ! you can also add an element to the array
items[3] = "Bat";
console.log(items);

// ! you can also check how long your array is using the length property
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
// ! Pop - Removes the last element from the array
let arr1 = ["apple", "mango", "grapes", "berries"];
let remove = arr1.pop();

console.log(arr1.length);
console.log(remove);

// ! Push - Append the element to the end of the array

let arr2 = ["orange", "mango", "grapes"];
let addToEnd = arr2.push("pineapple");

console.log(arr2);
console.log(addToEnd);

// ! Shift - Takes out the first element and returns it

let arr3 = ["orange", "mango", "grapes"];
let shift = arr3.shift();

console.log(arr3);
console.log(shift);

// ! Unshift - Append an element at the beginning of the array
let arr4 = ["orange", "mango", "grapes"];
let unshift = arr4.unshift("peach");

console.log(arr4);

for (let Array of arr2) {
  // alert(Array);
  console.log(Array);
}

for (let arrays in arr4) {
  console.log(arrays);
}

// ! Splice - It can set, remove or replace elements.

console.log(arr3.splice(0, 2));

// ! Slice  -

// ! Concant - its basically adds a new items to the array or connects two arrays together