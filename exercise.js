const input = require('readline-sync');
let name = input.question("Welcome contestant! What is your name? ");
console.log("Welcome " + name +"! Let's play.")

const answerOne = require('readline-sync');
let questionOne = answerOne.question("What data type would you use to print out a sentance? ");
    if (questionOne === "string") {console.log("Correct!")}
    else {console.log("Sorry, that's not correct.")};

const answerTwo = require('readline-sync');
let questionTwo = answerTwo.question("What data type would 42 be? ");
    if (questionTwo === "number") {console.log("Correct!")}
    else {console.log("Sorry, that's not correct.")};

const answerThree = require('readline-sync');
let questionThree = answerThree.question("Yes or no, if a user does not declare a value for a variable and calls for that variable later, the value will be undefined. ");
    if (questionThree === "yes") {console.log("Correct!")}
    else {console.log("Sorry, that's not correct.")};

const answerFour = require('readline-sync');
let questionFour = answerFour.question("Yes or no, an undefined datatype is the same as a null datatype. ");
    if (questionFour === "no") {console.log("Correct!")}
    else {console.log("Sorry, that's not correct.")};

const answerFive = require('readline-sync');
let questionFive = answerFive.question("Final question. How many different values can a boolean have? ");
    if (Number(questionFive) === 2) {console.log("Correct!")}
    else {console.log("Sorry, that's not correct.")};