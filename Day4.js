"use strict";
// Shahmeer Khan 3,June,2024
//9:30 PM
//this is a comment for adding two numbers
//Define a frist veriable
let num1 = 25;
//Define the Second veriable
let num2 = 43;
//add both veriables
let Add = num1 + num2;
//print Add
console.log(Add);
//other Question
let my_friend_name = ["Ali", "Ahmed", "Asad", "Arsalan"];
for (let index = 0; index < my_friend_name.length; index++) {
    console.log(`${index + 1}. ${my_friend_name[index]}`);
}
//other Question
for (let index = 0; index < my_friend_name.length; index++) {
    console.log(`\n \t ${my_friend_name[index].toUpperCase()}, You are my best friend`);
}
//other Question
for (let name of my_friend_name) {
    console.log(`Hello ${name}, \n \tMay Allah bless you in every movement of life Ameen!`);
}
