// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please give a short description of the project:",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install the project?",
    name: "install",
  },
  {
    type: "input",
    message: "How do you use the project?",
    name: "use",
  },
  {
    type: "input",
    message: "What license or badge does the project have?",
    name: "license",
  },
  {
    type: "input",
    message: "How should others contribute to the project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How do you test the project?",
    name: "test",
  },
];

inquirer.prompt(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
