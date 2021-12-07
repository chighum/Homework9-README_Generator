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
    name: "usage",
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
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

inquirer.prompt(questions).then((response) => {
  fs.writeFile("README.md", writeToFile(response), (err) =>
    err ? console.error(err) : console.log("README.md Generated Successfully!")
  );
});
// TODO: Create a function to write README file
function writeToFile(response) {
  return `# ${response.title}
  ## Description
    ${response.description}
  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Testing](#tests)
      * [Questions](#questions)
  ## Installation
    ${response.install}
  ## Usage
    ${response.usage}
  ## License
    ${response.license}
  ## How to Contribute
    ${response.contribute}
  ## Tests
    ${response.test}
  ## Questions
    Github Profile: https:github.com/${response.github}
    Email: ${response.email}
`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
