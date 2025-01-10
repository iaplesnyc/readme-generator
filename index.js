import inquirer from 'inquirer'; // Import inquirer for user prompts
import fs from 'fs'; // Import fs to write files
import generateMarkdown from './generateMarkdown.js'; // Import the function to generate markdown

// Define an array of questions for the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log('README file has been generated!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions) // Ask the user the questions
    .then((answers) => {
      const markdown = generateMarkdown(answers); // Generate the markdown based on user input
      writeToFile('README.md', markdown); // Write the generated markdown to README.md
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

// Function call to initialize app
init();
