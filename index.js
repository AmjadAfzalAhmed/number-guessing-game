#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number: 1 - 10",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number.");
}
else {
    console.log("You guessede number is wrong.");
}
