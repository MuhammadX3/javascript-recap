//! Arrow Functions

let map = () => {
  console.log(new Date());
};
map();

let mate = (a, b) => {
  console.log(a + b);
};

mate(13, 15);

let array = "Were just 2 ";
let array2 = "lost souls";

let con = () => {
  console.log(array.concat(array2));
};
con();

let arr = () => {};
arr();

let hallo = () => "HALLO!";
console.log(hallo());

let hallo2 = () => "we're nearly there boys!";
console.log(hallo2());

let create = () => {
  return ["im a real alien from a real alien planet"];
};
console.log(create());

let make = () => {
  let obj = { name: "Marlon", age: 17 };

  return obj.name;
};
console.log(make());

//! Date and time

let date = new Date();
console.log(date.toString());

console.log(date.toISOString());

console.log(date.toUTCString());

let time = new Date(2019, 5, 28, 14, 39, 7);
console.log(time.toDateString());

let newTime = time.setHours("2018");
console.log(time.toDateString());

//! Template literals

let text = `theres this guy named "marlon" who stopped me by`;
console.log(text);

let text1 = `and said "the last person who leaves the bus stop wins one million dollars!"`;
console.log(text1);

let text2 = `i beat 
the best 
player inna 
1v1 bro
XDD`;
console.log(text2);

let text3 = `So ${text} ${text1}`;
console.log(text3);

let text4 = `Hallo!`;
console.log(text4);
