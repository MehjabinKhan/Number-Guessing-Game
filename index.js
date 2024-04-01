#! /usr/bin/env node
import inquirer from "inquirer";
// // 1- Computer will generated random number
// // 2- User input for guessing number
// // 3- Compare user input with computer generated number and show result
console.log("Welcome To CLI Number Guessing Game!");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Please guess a number between 1 - 10 : ",
    }
]);
console.log(answer);
// If Else Statement
if (answer.userguessednumber == randomNumber) {
    console.log("Congratulations! You Guess a Correct Number.");
}
else {
    console.log("Oops! You Losed.");
}
