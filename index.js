// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

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
      "Academic_Free_v3.0",
      "Apache_v2.0",
      "Artistic_v2.0",
      "BSD_Zero_Clause",
      "BSD_2_Clause",
      "BSD_3_Clause_Clear",
      "BSD_3_Clause",
      "BSD_4_Clause",
      "Boost_Software_v1.0",
      "CeCILL_Free_Software_v2.1",
      "Educational_Community_v2.0",
      "Eclipse_Public_v2.0",
      "European_Union_v1.2",
      "GNU_AGPL_v3.0",
      "GNU_GPL_v3.0",
      "GNU_LGPL_v3.0",
      "MIT",
      "Mozilla_Public_v2.0",
      "Microsoft_Public",
      "Open_Software_v3.0",
      "PostgreSQL",
      "The_Unlicense",
      "Universal",
      "Vim",
      "zlib",
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
  fs.writeFile("Example_README.md", writeToFile(response), (err) =>
    err ? console.error(err) : console.log("README.md Generated Successfully!")
  );
});
// TODO: Create a function to write README file
function writeToFile(response) {
  return `# ${response.title}

![${response.license}](https://img.shields.io/badge/license-${response.license}-blue)
  
## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
  
## Installation

${response.install}

## Usage

${response.usage}

## License
  
This application is covered under the ${response.license} license.

## Contributing

${response.contribute}

## Testing

${response.test}

## Questions

If you have any questions, please feel free to contact me via:

- Github: [${response.github}](https://github.com/${response.github})
- Email: [${response.email}](mailto:${response.email})
`;
}
