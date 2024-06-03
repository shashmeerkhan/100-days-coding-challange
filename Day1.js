"use strict";
//assign a variable 
let personName = "shahmeerKhan";
//print a message
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);
//assign veriable
let personName1 = "Shahmeer Khan";
//to uppercase
console.log(personName1.toUpperCase());
//to lower case
console.log(personName1.toLowerCase());
//to title case
let sentence = "I am trying to learn typescript but i can not do it";
let words = sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log(words);
