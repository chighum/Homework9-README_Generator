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
    type: "list",
    message: "What license or badge does the project have?",
    name: "license",
    choices: [
      "BSD Zero Clause License",
      "Academic Free License v3.0",
      "GNU Affero General Public License v3.0",
      "Apache License 2.0",
      "Artistic License 2.0",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause Clear License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "BSD 4-Clause 'Original' or 'Old' License",
      "Boost Software License 1.0",
      "Creative Commons Attribution 4.0 International",
      "Creative Commons Attribution Share Alike 4.0 International",
      "Creative Commons Zero v1.0 Universal",
      "CeCILL Free Software License Agreement v2.1",
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "Eclipse Public License 2.0",
      "European Union Public License 1.1",
      "European Union Public License 1.2",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "ISC License",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "LaTeX Project Public License v1.3c",
      "MIT No Attribution",
      "MIT License",
      "Mozilla Public License 2.0",
      "Microsoft Public License",
      "Microsoft Reciprocal License",
      "Mulan Permissive Software License, Version 2",
      "University of Illinois/NCSA Open Source License",
      "Open Data Commons Open Database License v1.0",
      "SIL Open Font License 1.1",
      "Open Software License 3.0",
      "PostgreSQL License",
      "The Unlicense",
      "Universal Permissive License v1.0",
      "Vim License",
      "zlib License",
    ],
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
    If you have any questions, please feel free to contact me via Github or Email.
    Github Profile: https:github.com/${response.github}
    Email: ${response.email}
`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
