// * String Methods

//! toLowerCase - changes the words in the string to lower case only when the string has any capital letter in it

let cases = "Change TO LOWER case";
let res = cases.toLowerCase();
console.log(res);

let word = "THEIR LOSS";
let wordResult = word.toLowerCase();
console.log(wordResult);

let cita = "LEAVE";
let citaResult = cita.toLowerCase();
console.log(citaResult);

//! toUpperCase - changes the words in the string to upper case

let cas = "change to upper case";
let change = cas.toUpperCase();
console.log(change);

let wrd = "delete";
let wrdResult = wrd.toUpperCase();
console.log(wrdResult);

let ly = "step";
let lyResult = ly.toUpperCase();
console.log(lyResult);

//! indexOf - returns the position of the first occurrence of a specified value in a string

let par = "let me try building a time machine";
let parIndex = par.indexOf("i");
console.log(parIndex);

let para = "on my journey";
let paraIndex = para.indexOf("ney");
console.log(paraIndex);

let paragraph = "on my journey to being a professional";
let graphIndex = paragraph.indexOf("ro");
console.log(graphIndex);

//! lastIndexOf - returns the position of the last occurrence of a specified value in a string

let text = "this is a text, this is a text, this is a text";
let textLast = text.lastIndexOf("a");
console.log(textLast);

let text1 = "on that time of the year, this was what happened last year";
let text1Res = text1.lastIndexOf("year");
console.log(text1Res);

//! subString - extracts a string from start to end using the given index

let sub = "this is a text";
let subResult = sub.substring(2, 14);
console.log(subResult);

let tract = "its that time of the year for me";
let tracRes = tract.substring(4, 25);
console.log(tracRes);

let text2 = "it was rumoured";
let text2Res = text2.substring(4, 15);
console.log(text2Res);

//! toString - changes a string in to a string

let stri = 12;
let striRes = stri.toString();
console.log(typeof striRes);

let rin = 1522322;
let rinResult = rin.toString();
console.log(rinResult);
// console.log(typeof rinResult);

//! includes - checks if a specified value is in the string and returns as true or false

let check = "its that time of the year for me";
let checkRes = check.includes("time");
console.log(checkRes);

let word1 = "ill go visit on of my close friends today";
let word1Res = word1.includes("any");
console.log(word1Res);

//! slice - returns the extracted part of the string in a new string

let sliced = "ill go shopping in a couple hours";
let sliceRes = sliced.slice(4, 16);
console.log(sliceRes);

//! substr - works the same as the substring method

let subs = "Hallo people";
let subst = subs.substr(1, 7);
console.log(subst);

//! concat - concatenates two strings and returns a new string

let str = "Hallo";
let str2 = "Ma people!";

console.log(str.concat(" " + str2));

//! endsWith - checks whether a string ends with the specified characters of the string and returns a boolean value

let str1 = "Hallo tenar";
let st1Check = str1.endsWith("nar");
console.log(st1Check);

let str3 = "rompasso";
let strCheck = str3.endsWith("passo");
console.log(strCheck);

let str4 = "on my own";
let str4Check = str4.endsWith("w");
console.log(str4Check);

//! startsWith - checks whether a string starts with the specified characters of the string and returns a boolean value

let str5 = "on my own";
let strResult = str5.startsWith("on");
console.log(strResult);

let str6 = "the first of the month";
let str6Res = str6.startsWith("he");
console.log(str6Res);

//! padStart - pads a string from the start

let numb = 5;
let text3 = numb.toString();
let padded = text3.padStart(5, "0");
console.log(padded);

let number = "";

//! padEnd - pads a string from the end

let num = 10;
let text4 = num.toString();
let padd = text4.padEnd(5, "0");
console.log(padd);

//! replace - replaces a text within the string

let txt = "i want to replace this text with something else";
let txtReplace = txt.replace("replace", "change");
console.log(txtReplace);

let txt1 = "ride for me";
let txt1Rep = txt1.replace("ride for me", "Ride For Me");
console.log(txt1Rep);

//! replaceAll - returns a new string with all values replaced

let txt2 = "hallo, my name is mohamed";
let txt2Rep = txt2.replaceAll(
  "hallo, my name is mohamed",
  "Hallo, My name is Mohamed"
);
console.log(txt2Rep);

let txt3 = "ima do sum interesting today";
let txt3Rep = txt3.replaceAll(
  "ima do sum interesting today",
  "ima do sum interesting"
);
console.log(txt3Rep);

//! charAt - works the same as the indexOf method but instead of returning the index number, it returns the value of the index number

let char = "im from Japan";
let charA = char.charAt(4);
console.log(charA);

let text5 = "Hallo, my name is steven. And " + char;
let txtResult = text5.charAt(38);
console.log(txtResult);
